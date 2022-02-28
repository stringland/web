import {v4 as uuidv4} from 'uuid';
import React from 'react';
import 'antd/dist/antd.css';
import axios from 'axios'
import { Select, Input, Button, message } from 'antd';
const { Option } = Select;
const { TextArea } = Input;

export class IPConversion extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        originalValue: '127.0.0.1',
        result: '1111111.0.0.1',
        type: 0,
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
      const reqId = "ip-convert-"+sessionId;
      const data = {
        sessionID: sessionId, 
        requestID: reqId,
        userID: 'default_user',
        str: this.state.originalValue,
        type: this.state.type
      };

      axios.post('https://nifty-gasket-338410.wl.r.appspot.com/convert_ip', data, {
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
            <h2 style={{ textAlign:'center', fontSize:'3vh' }}>IP Conversion</h2>
          </div>
          <div style={{ marginTop: '2%'}}>
            <Select labelInValue defaultValue={{ value: '0' }} style={{ width: '45%' }} onChange={this.handleDropDown}>
                <Option value="0">From IP to Binary</Option>
                <Option value="1">From IP to Octal</Option>
                <Option value="2">From IP to Decimal</Option>
                <Option value="3">From IP to Hex</Option>
                <Option value="4">From Binary to IP</Option>
                <Option value="5">From Octal to IP</Option>
                <Option value="6">From Decimal to IP</Option>
                <Option value="7">From Hex to IP</Option>
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

export default IPConversion;