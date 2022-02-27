import {v4 as uuidv4} from 'uuid';
import React from 'react';
import 'antd/dist/antd.css';
import axios from 'axios'
import { Select, Input, Button, Divider, message } from 'antd';
const { Option } = Select;
const { TextArea } = Input;

export class StringEndecode extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        originalValue: 'convert string case',
        result: 'convert string case',
        srcCode: 0,
        dstCode: 1,
        opType: 0,
        showRes: false
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleOpType = this.handleOpType.bind(this);
      this.handleSrcCode = this.handleSrcCode.bind(this);
      this.handleDstCode = this.handleDstCode.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({originalValue: event.target.value});
    }

    handleOpType(event) {
        this.setState({opType: Number(event.value)});
    }

    handleSrcCode(event) {
        this.setState({srcCode: Number(event.value)});
    }

    handleDstCode(event) {
        this.setState({dstCode: Number(event.value)});
    }
  
    handleSubmit(){
      const sessionId = uuidv4();
      const reqId = "cvt-str-"+sessionId;
      const data = {
        sessionID: sessionId, 
        requestID: reqId,
        userID: 'default_user',
        str: this.state.originalValue,
        srcCode: this.state.srcCode,
        dstCode: this.state.dstCode,
        opType: this.state.opType
      };

      axios.post('https://nifty-gasket-338410.wl.r.appspot.com/string_encodedecode', data, {
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
            <Select labelInValue defaultValue={{ value: '0' }} style={{ width: '25%' }} onChange={this.handleOpType}>
                <Option value="0">Encode Only</Option>
                <Option value="1">Decode Only</Option>
                <Option value="2">Both Encode and Decode</Option>
            </Select>
          </div>
          <Divider />
          <div style={{ marginTop: '2%' }}>
            <Select labelInValue defaultValue={{ value: '0' }} style={{ width: '25%', display: this.state.opType !== 1 ? "block" : "none" }} onChange={this.handleSrcCode}>
                <Option value="0">UTF8</Option>
                <Option value="1">GBK</Option>
                <Option value="2">BIG5</Option>
                <Option value="3">EUCJP</Option>
                <Option value="4">ISO2022JP</Option>
                <Option value="5">ShiftJIS</Option>
                <Option value="6">EUCKR</Option>
                <Option value="7">UTF16</Option>
            </Select>

            <Select labelInValue defaultValue={{ value: '0' }} style={{ marginTop: '1%', width: '25%', display: this.state.opType !== 0 ? "block" : "none" }} onChange={this.handleDstCode}>
                <Option value="0">UTF8</Option>
                <Option value="1">GBK</Option>
                <Option value="2">BIG5</Option>
                <Option value="3">EUCJP</Option>
                <Option value="4">ISO2022JP</Option>
                <Option value="5">ShiftJIS</Option>
                <Option value="6">EUCKR</Option>
                <Option value="7">UTF16</Option>
            </Select>
          </div>
          <div style={{ marginTop: '2%' }}>
            <TextArea showCount maxLength={3000000} rows={10} value={this.state.originalValue} onChange={this.handleChange} />
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

export default StringEndecode;