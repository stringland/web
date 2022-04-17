import {v4 as uuidv4} from 'uuid';
import React from 'react';
import 'antd/dist/antd.css';
import 'react-chat-elements/dist/main.css';
import axios from 'axios'
import { message } from 'antd';
import { Input,Button,MessageList } from 'react-chat-elements'

export class GuessNumGame extends React.Component {
    chatContainer = React.createRef();

    constructor(props) {
      super(props);
      this.state = {
        originalValue: '',
        result: '',
        msgList: [{
            position: 'left',
            type: 'text',
            text: "Welcome my friend! Would you like to play guessing number (bulls and cows) game with me? To start the game, please choose a digit X between 1 and 9, I will generate a number with X digits for you to guess. To learn more about the rules, type \"help\".",
            date: new Date(),
        }],
        str: '',
        status: 1,
        msgChan: ['init'],
        chanFront: 0,
        chanEnd: 0
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.appendPlayerMsg = this.appendPlayerMsg.bind(this);
      this.appendLilyanMsg = this.appendLilyanMsg.bind(this); 
      this.guessNumberReply = this.guessNumberReply.bind(this);
    }

    handleChange(event) {
      this.setState({msg: event.target.value});
    }

    appendPlayerMsg(event) {
      this.refs.playerInput.clear()
      if(this.state.msg===undefined) {
        return
      }

      var msg = this.state.msg.trim();
      if(msg.length===0) {
        return 
      }

      var list = this.state.msgList;
      var msgC = this.state.msgChan;
      var cEnd = this.state.chanEnd;
      msgC[0] = msg
      cEnd = (cEnd + 1)%2

      list.push({
          position: 'right',
          type: 'text',
          text: msg,
          date: new Date(),
      });
      this.setState({
        msgList: list,
        msgChan: msgC,
        chanEnd: cEnd
      },() => this.scrollToMyRef());
      event.preventDefault();
    }

    componentDidMount() {
      this.interval = setInterval(() => this.guessNumberReply(), 1000);
    }

    componentWillUnmount() {
      clearInterval(this.interval);
    }
  
    guessNumberReply(){
      // empty channel
      if(this.state.chanFront === this.state.chanEnd){
        return
      }

      var sessionID = this.state.sessionID
      if(this.state.status === 1) {
        sessionID = uuidv4();
      }

      var reqId = "guess-num-"+sessionID;
      const data = {
        sessionID: sessionID, 
        requestID: reqId,
        userID: 'default_user',
        str: this.state.str,
        msg: this.state.msgChan[0],
        status: this.state.status
      };

      axios.post('https://nifty-gasket-338410.wl.r.appspot.com/guess_number', data, {
        'Content-Type': 'application/json'
      }).then(
        response => {
          // console.log(response)
          this.appendLilyanMsg(response.data.resMsg)

          this.setState({
            sessionID: response.data.sessionID,
            str: response.data.str,
            status: response.data.status,
            chanFront: this.state.chanEnd
          })
        }
      ).catch(err => {
        //console.log(err.response);
        if(err.response.status === 400){
          message.error(err.response.data.errMsg);
          this.setState({
            chanFront: this.state.chanEnd
          })
        } else {
          message.error('sth goes wrong. please give one more try after a while.');
        }
      });
    }

    appendLilyanMsg(msg) {
      var list = this.state.msgList;
      list.push({
          position: 'left',
          type: 'text',
          text: msg,
          date: new Date(),
      });
      this.setState({msgList: list},() => this.scrollToMyRef());
    }

    scrollToMyRef = () => {
      const scroll =
        this.chatContainer.current.scrollHeight -
        this.chatContainer.current.clientHeight;
      this.chatContainer.current.scrollTo(0, scroll);
    };
  
    render() {
      return (
        <div style={{minHeight: '85vh'}}>
          <div style={{ marginTop: '2%', border: '1px solid rgb(235, 237, 240)' }}>
            <h1 style={{ textAlign:'center', fontSize:'3vh' }}>Guess Number</h1>
          </div>
          <div ref={this.chatContainer} style={{ marginTop: '2%', minHeight: '60vh', maxHeight:'65vh', overflow: 'scroll',  border: '1px solid rgb(235, 237, 240)' }}>
            <MessageList className='message-list' style={{ padding: '0 3%' }} lockable={false} toBottomHeight={'100%'} 
              dataSource={this.state.msgList}/>
          </div>
          <div style={{ marginTop: '2%', marginBottom:'1%', border: '1px solid rgb(235, 237, 240)' }}>
            <Input placeholder="Type here..." multiline={false} ref="playerInput" maxlength={100} onChange={this.handleChange} 
              onKeyPress={e => {
                if (e.shiftKey && e.charCode === 13) {
                  return true;
                }
                if (e.charCode === 13) {
                  this.appendPlayerMsg(e);
                  return false;
                }
              }}
              rightButtons={
                <Button text='Send' onClick={this.appendPlayerMsg}/>
            }/>
          </div>
        </div>
      );
    }
}

export default GuessNumGame;