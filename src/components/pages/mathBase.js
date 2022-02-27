import {v4 as uuidv4} from 'uuid';
import React from 'react';
import 'antd/dist/antd.css';
import axios from 'axios'
import { Input, Button, InputNumber, Divider, message } from 'antd';
const { TextArea } = Input;

export class MathBase extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        originalValue: '1010101',
        result: '1010101',
        type: 0,
        srcBase: 10,
        dstBase: 10,
        showRes: false
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSrcBase = this.handleSrcBase.bind(this);
      this.handleDstBase = this.handleDstBase.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      this.setState({originalValue: event.target.value});
    }
  
    handleSrcBase(value) {
      this.setState({srcBase: value});
    }

    handleDstBase(value) {
      this.setState({dstBase: value});
    }
  
    handleSubmit(){
      const sessionId = uuidv4();
      const reqId = "math-base-"+sessionId;
      const data = {
        sessionID: sessionId, 
        requestID: reqId,
        userID: 'default_user',
        srcBase: this.state.srcBase,
        dstBase: this.state.dstBase,
        str: this.state.originalValue,
        type: this.state.type
      };

      axios.post('https://nifty-gasket-338410.wl.r.appspot.com/math_base', data, {
        'Content-Type': 'application/json'
      }).then(
        response => this.setState({ result: response.data.str, showRes: true })
      ).catch(err => {
        //console.log(err.response);
        if(err.response.status === 400){
          message.error(err.response.data.errMsg);
        } else {
          message.error('sth goes wrong. please give one more try after a while.');
        }
      });
    }
  
    render() {
      return (
        <div>
          <div>
            Source Base:
            <InputNumber
              defaultValue={10}
              min={2}
              max={62}
              onChange={this.handleSrcBase}
            />
          </div>
          <Divider />
          <div>
            Destination Base:
            <InputNumber
              defaultValue={10}
              min={2}
              max={62}
              onChange={this.handleDstBase}
            />
          </div>
          <div style={{ marginTop: '2%' }}>
            <TextArea showCount maxLength={3000} rows={10} value={this.state.originalValue} onChange={this.handleChange} />
          </div>
          <div style={{ marginTop: '2%' }}>
            <Button style={{ float:'right' }} type="primary" value="Submit" onClick={this.handleSubmit}>Submit</Button>
          </div>
          <div style={{ marginTop: '2%', display: this.state.showRes ? "block" : "none" }}>
            <TextArea showCount value={this.state.result} rows={10} readOnly />
          </div>
        </div>
      );
    }
}

export default MathBase;