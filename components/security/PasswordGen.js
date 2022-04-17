import {v4 as uuidv4} from 'uuid';
import React from 'react';
import 'antd/dist/antd.css';
import axios from 'axios'
import { Checkbox, Row, Col, Input, Button, InputNumber, Divider,Typography, message } from 'antd';
const { TextArea } = Input;
const {Text } = Typography;


export class PasswordGen extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        hasUpperCaseLetters: true,
        hasLowerCaseLetters: true,
        hasDigits: true,
        hasSpecialChars: true,
        len: 8,
        showRes: false
      };
  
      this.handleHasUpperCaseLetters = this.handleHasUpperCaseLetters.bind(this);
      this.handleHasLowerCaseLetters = this.handleHasLowerCaseLetters.bind(this);
      this.handleHasDigits = this.handleHasDigits.bind(this);
      this.handleHasSpecialChars = this.handleHasSpecialChars.bind(this);
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleHasUpperCaseLetters(event) {
      this.setState({hasUpperCaseLetters: event.target.checked});
    }

    handleHasLowerCaseLetters(event) {
        this.setState({hasLowerCaseLetters: event.target.checked});
    }

    handleHasDigits(event) {
        this.setState({hasDigit: event.target.checked});
    }

    handleHasSpecialChars(event) {
        this.setState({hasSpecialChars: event.target.checked});
    }

    handleInputChange(value) {
        console.log(Number(value));
        this.setState({len: Number(value)});
    }
  
    handleSubmit(){
      const sessionId = uuidv4();
      const reqId = "gen-psw-"+sessionId;
      const data = {
        sessionID: sessionId, 
        requestID: reqId,
        userID: 'default_user',
        str: this.state.originalValue,
        len: this.state.len,
        hasUpperCaseLetters: this.state.hasUpperCaseLetters,
        hasLowerCaseLetters: this.state.hasLowerCaseLetters,
        hasDigits: this.state.hasDigits,
        hasSpecialChars: this.state.hasSpecialChars
      };

      axios.post('https://nifty-gasket-338410.wl.r.appspot.com/generate_password', data, {
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
            <h2 style={{ textAlign:'center', fontSize:'3vh' }}>Password Generation</h2>
          </div>
          <div style={{ marginTop: '2%'}}>
            <Text style={{textAlign: "left", fontSize: "medium"}}>
              Note: The generated password will not be saved anywhere in StringLand. Please remember to save it by yourself.
            </Text>
          </div>
          <Divider />
          <div style={{ marginTop: '2%' }}>
            <Row style={{ width: '100%' }}>
                <Col span={8}>
                    <Checkbox defaultChecked={true} onChange={this.handleHasUpperCaseLetters}>Including Uppercase Letters</Checkbox>
                </Col>
                <Col span={8}>
                    <Checkbox defaultChecked={true} onChange={this.handleHasLowerCaseLetters}>Including Lower Letters</Checkbox>
                </Col>
            </Row>
            <Divider />
            <Row style={{ width: '100%' }}>
                <Col span={8}>
                    <Checkbox defaultChecked={true} onChange={this.handleHasDigits}>Including Digits</Checkbox>
                </Col>
                <Col span={8}>
                    <Checkbox defaultChecked={true} onChange={this.handleHasSpecialChars}>Including Special Characters </Checkbox>
                </Col>
            </Row>
            <Divider />
          </div>
          <div style={{ marginTop: '2%' }}>
              Password Length: <InputNumber min={7} max={99} defaultValue={8} onChange={this.handleInputChange} />
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

export default PasswordGen;