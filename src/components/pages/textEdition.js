import {v4 as uuidv4} from 'uuid';
import React from 'react';
import 'antd/dist/antd.css';
import axios from 'axios'
import { Select, Input, Button, message } from 'antd';
const { Option } = Select;
const { TextArea } = Input;

export class TextEdition extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        originalValue: 'convert string case',
        result: 'convert string case',
        opType: 1,
        showRes: false
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleDropDown = this.handleDropDown.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({originalValue: event.target.value});
    }

    handleDropDown(event) {
      this.setState({type: Number(event.value)});
    }
  
    handleSubmit(){
      const sessionId = uuidv4();
      const reqId = "edit-txt-"+sessionId;
      const data = {
        sessionID: sessionId, 
        requestID: reqId,
        userID: 'default_user',
        str: this.state.originalValue,
        opType: this.state.opType
      };

      axios.post('https://nifty-gasket-338410.wl.r.appspot.com/edit_text', data, {
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
          <div style={{ border: '1px solid rgb(235, 237, 240)' }}>
            <h2 style={{ textAlign:'center', fontSize:'3vh' }}>Simple Text Editor</h2>
          </div>
          <div style={{ marginTop: '2%'}}>
            <Select labelInValue defaultValue={{ value: '1' }} style={{ width: '25%' }} onChange={this.handleDropDown}>
                <Option value="1">Upper Case</Option>
                <Option value="2">Lower Case</Option>
                <Option value="3">From Tabs to Space</Option>
                <Option value="4">From Spaces to tab</Option>
                <Option value="5">Reverse Characters</Option>
                <Option value="6">Reverse Lines</Option>
                <Option value="7">Reverse Characters by Lines</Option>
            </Select>
          </div>
          <div style={{ marginTop: '2%' }}>
            <TextArea showCount maxLength={3000000} rows={10} value={this.state.originalValue} onChange={this.handleChange} />
          </div>
          <div style={{ marginTop: '2%' }}>
            <Button style={{ float:'right' }} type="primary" value="Submit" onClick={this.handleSubmit}>Submit</Button>
          </div>
          <div style={{ marginTop: '5%', display: this.state.showRes ? "block" : "none" }}>
            <TextArea showCount value={this.state.result} rows={10} readOnly />
          </div>
        </div>
      );
    }
}

export default TextEdition;