import {v4 as uuidv4} from 'uuid';
import React from 'react';
import 'antd/dist/antd.css';
import axios from 'axios'
import { Select, Row, Col, Input, Button, Divider, message } from 'antd';
const { Option } = Select;

export class TemperatureConversion extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        originalValue: '0',
        result: '0',
        srcType: 0,
        dstType: 0,
        opType: 7,
        showRes: false
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleOpType = this.handleOpType.bind(this);
      this.handleSrcType = this.handleSrcType.bind(this);
      this.handleDstType = this.handleDstType.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({originalValue: event.target.value});
    }

    handleOpType(event) {
        this.setState({opType: Number(event.value)});
    }

    handleSrcType(event) {
        this.setState({srcType: Number(event.value)});
    }

    handleDstType(event) {
        this.setState({dstType: Number(event.value)});
    }
  
    handleSubmit(){
      const sessionId = uuidv4();
      const reqId = "cvt-unit-"+sessionId;
      const data = {
        sessionID: sessionId, 
        requestID: reqId,
        userID: 'default_user',
        srcVal: this.state.originalValue,
        srcType: this.state.srcType,
        dstType: this.state.dstType,
        opType: this.state.opType
      };

      axios.post('https://nifty-gasket-338410.wl.r.appspot.com/convert_unit', data, {
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
            <h2 style={{ textAlign:'center', fontSize:'3vh' }}>Temperature Conversion</h2>
          </div>
          <div style={{ marginTop: '2%'}}>
            <Row>
              <Col xs={16} xl={1} xxl={1}>
              From:
              </Col>
              <Col xs={24} xl={10} xxl={10}>
                <Input maxLength={305} value={this.state.originalValue} onChange={this.handleChange} />
              </Col>
              <Col xs={24} xl={16} xxl={4}>
                <Select labelInValue defaultValue={{ value: '0' }} style={{ width: '40%' }} onChange={this.handleSrcType}>
                    <Option value="0">Celsius</Option>
                    <Option value="1">Fahrenheit</Option>
                    <Option value="2">Kelvin</Option>
                    <Option value="3">Rankine</Option>
                    <Option value="4">Delisle</Option>
                    <Option value="5">Newton</Option>
                    <Option value="6">Réaumur</Option>
                    <Option value="7">Rømer</Option>
                </Select>
              </Col>
              <Col xs={16} xl={8} xxl={1}>
                <Button type="primary" value="Submit" onClick={this.handleSubmit}>Submit</Button>
              </Col>
            </Row>
            <Divider />
            <Row>
              <Col xs={16} xl={1} xxl={1}>
                To:
              </Col>
              <Col xs={24} xl={10} xxl={10}>
                <Input maxLength={305} value={this.state.result} readOnly />
              </Col>
              <Col xs={24} xl={16} xxl={4}>
                <Select labelInValue defaultValue={{ value: '0' }} style={{ width: '40%' }} onChange={this.handleDstType}>
                    <Option value="0">Celsius</Option>
                    <Option value="1">Fahrenheit</Option>
                    <Option value="2">Kelvin</Option>
                    <Option value="3">Rankine</Option>
                    <Option value="4">Delisle</Option>
                    <Option value="5">Newton</Option>
                    <Option value="6">Réaumur</Option>
                    <Option value="7">Rømer</Option>
                </Select>
              </Col>
            </Row>
          </div>
        </div>
      );
    }
}

export default TemperatureConversion;