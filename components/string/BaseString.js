import {v4 as uuidv4} from 'uuid';
import React from 'react';
import 'antd/dist/antd.css';
import axios from 'axios'
import { Typography, Select, Input, Button, message } from 'antd';
const { Option } = Select;
const { TextArea } = Input;
const { Title, Paragraph } = Typography;

export class BaseString extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        originalValue: 'encode/decode string/base',
        result: 'convert string case',
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
      const reqId = "base-str-"+sessionId;
      const data = {
        sessionID: sessionId, 
        requestID: reqId,
        userID: 'default_user',
        str: this.state.originalValue,
        type: this.state.type
      };

      axios.post('https://nifty-gasket-338410.wl.r.appspot.com/base_string', data, {
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
            <Title style={{textAlign: "center", fontSize:'3vh'}} >String Base Conversion</Title>
            <Paragraph style={{textAlign: "center", fontSize: "large"}}>
              Encode/decode given string among base64, hex, binary and etc.
            </Paragraph>
          </div>
          <div style={{ marginTop: '2%'}}>
            <Select labelInValue defaultValue={{ value: '0' }} style={{ width: '25%' }} onChange={this.handleDropDown}>
                <Option value="0">Encode String as Base64</Option>
                <Option value="1">Decode Base64 to String</Option>
                <Option value="2">Encode String as Hex</Option>
                <Option value="3">Decode Hex to String</Option>
                <Option value="4">Encode String as Binary</Option>
                <Option value="5">Decode Binary to String</Option>
            </Select>
          </div>
          <div style={{ marginTop: '2%' }}>
            <TextArea showCount maxLength={3000000} rows={10} value={this.state.originalValue} onChange={this.handleChange} />
          </div>
          <div style={{ marginTop: '2%' }}>
            <Button style={{ float:'right' }} type="primary" value="Submit" onClick={this.handleSubmit}>Submit</Button>
          </div>
          <div style={{ marginTop: '6%', display: this.state.showRes ? "block" : "none" }}>
            <TextArea showCount value={this.state.result} rows={10} readOnly />
          </div>
        </div>
      );
    }
}

export default BaseString;