import {v4 as uuidv4} from 'uuid';
import React from 'react';
import 'antd/dist/antd.css';
import axios from 'axios'
import { Typography, Select, Input, Button, InputNumber, Divider, message } from 'antd';
const { Option } = Select;
const { TextArea } = Input;
const { Title, Paragraph } = Typography;

export class Calculator extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        originalValue: '1010101\n11',
        result: '',
        opType: 1,
        base: 2,
        showRes: false
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSrcBase = this.handleBase.bind(this);
      this.handleDropDown = this.handleDropDown.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      this.setState({originalValue: event.target.value});
    }
  
    handleBase(value) {
      this.setState({base: value});
    }

    handleDropDown(event) {
        this.setState({opType: Number(event.value)});
    }
  
    handleSubmit(){
      const sessionId = uuidv4();
      const reqId = "calculator-"+sessionId;
      
      const originVals = this.state.originalValue.split('\n')
      var vals = []
      var i = 0
      for(i = 0; i < originVals.length; i ++ ){
            if(originVals[i].length > 0) {
                // console.log(t)
                vals = [...vals, originVals[i]]
            }
        }


      const data = {
        sessionID: sessionId, 
        requestID: reqId,
        userID: 'default_user',
        base: this.state.base,
        vals: vals,
        opType: this.state.opType
      };

      console.log(data)

      axios.post('https://nifty-gasket-338410.wl.r.appspot.com/calculator', data, {
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
            <Title style={{textAlign: "center", fontSize:'3vh'}} >Logic Calculator</Title>
            <Paragraph style={{textAlign: "center", fontSize: "large"}}>
              Calculate multiple non negative numbers' logic operation result. Operations include OR, AND, XOR, XNOR, NAND, NOT and etc.
            </Paragraph>
            <Paragraph style={{textAlign: "center", fontSize: "large"}}>
              Base is between 2 and 62. A ~ Z represents 10 ~ 35. a ~ z represents 36 ~ 61.
            </Paragraph>
          </div>
          <div style={{ marginTop: '2%'}}>
            Source Base:
            <InputNumber
              defaultValue={2}
              min={2}
              max={62}
              onChange={this.handleBase}
            />
          </div>
          <Divider />
          <div>
            <Select labelInValue defaultValue={{ value: '7' }} style={{ width: '25%' }} onChange={this.handleDropDown}>
                <Option value="1">OR</Option>
                <Option value="2">AND</Option>
                <Option value="3">XOR</Option>
                <Option value="4">NOT</Option>
                <Option value="5">NOR</Option>
                <Option value="6">NAND</Option>
                <Option value="7">XNOR</Option>
            </Select>
          </div>
          <Divider />
          Except NOT operation, multiple numbers are required and they are separated in each line.
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

export default Calculator;