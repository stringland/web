import {v4 as uuidv4} from 'uuid';
import React from 'react';
import 'antd/dist/antd.css';
import axios from 'axios'
import { Typography, Select, Input, Button, message } from 'antd';
const { Option } = Select;
const { TextArea } = Input;
const { Title, Paragraph } = Typography;

export class HashGen extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        originalValue: 'click the sumbit button to get the checksum',
        result: '42379d95bb6ff526761142bbadc9213b7e7262078ed9b52fe76bb8a280057ea2',
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
      const reqId = "hash-gen-"+sessionId;
      const data = {
        sessionID: sessionId, 
        requestID: reqId,
        userID: 'default_user',
        str: this.state.originalValue,
        opType: this.state.opType
      };

      axios.post('https://nifty-gasket-338410.wl.r.appspot.com/gen_hash', data, {
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
            <Title style={{textAlign: "center", fontSize:'3vh'}} >Checksum Generation</Title>
            <Paragraph style={{textAlign: "center", fontSize: "large"}}>
              Generate checksum of given text using MD4, MD5, SHA1, SHA256 and etc.
            </Paragraph>
          </div>
          <div style={{ marginTop: '2%'}}>
            <Select labelInValue defaultValue={{ value: '1' }} style={{ width: '25%' }} onChange={this.handleDropDown}>
                <Option value="1">MD4</Option>
                <Option value="2">MD5</Option>
                <Option value="3">SHA1</Option>
                <Option value="4">SHA224</Option>
                <Option value="5">SHA256</Option>
                <Option value="6">SHA384</Option>
                <Option value="7">SHA512</Option>
                <Option value="8">RIPEMD160</Option>
                <Option value="9">SHA3 224</Option>
                <Option value="10">SHA3 256</Option>
                <Option value="11">SHA3 384</Option>
                <Option value="12">SHA3 512</Option>
                <Option value="13">SHA512 224</Option>
                <Option value="14">SHA512 256</Option>
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

export default HashGen;