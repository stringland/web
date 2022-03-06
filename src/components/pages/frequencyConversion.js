import {v4 as uuidv4} from 'uuid';
import React from 'react';
import 'antd/dist/antd.css';
import axios from 'axios'
import { Typography,Select, Row, Col, Input, Button, Divider, message } from 'antd';
const { Option } = Select;
const { Title, Paragraph } = Typography;

export class FrequencyConversion extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        originalValue: '0',
        result: '0',
        srcType: 1,
        dstType: 1,
        opType: 9,
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
            <Title style={{textAlign: "center", fontSize:'3vh'}} >Frequency Conversion</Title>
            <Paragraph style={{textAlign: "center", fontSize: "large"}}>
              Convert speed unit among hert, revolution per hour and etc.
            </Paragraph>
          </div>
          <div style={{ marginTop: '2%'}}>
            <Row>
              <Col xs={16} xl={1} xxl={1}>
              From:
              </Col>
              <Col xs={24} xl={10} xxl={10}>
                <Input maxLength={305} value={this.state.originalValue} onChange={this.handleChange} />
              </Col>
              <Col xs={24} xl={16} xxl={6}>
                <Select labelInValue defaultValue={{ value: '1' }} style={{ width: '40%' }}  onChange={this.handleSrcType}>
                    <Option value="1">Hertz</Option>
                    <Option value="2">Kilohertz</Option>
                    <Option value="3">Megahertz</Option>
                    <Option value="4">Gigahertz</Option>
                    <Option value="5">Terrahertz</Option>
                    <Option value="0">Millihertz</Option>
                    <Option value="6">Revolution per hour</Option>
                    <Option value="7">Revolution per minute</Option>
                    <Option value="8">Revolution per second</Option>
                    <Option value="9">Radian per hour</Option>
                    <Option value="10">Radian per minute</Option>
                    <Option value="11">Radian per second</Option>
                </Select>
              </Col>
              <Col xs={16} xl={8} xxl={2}>
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
              <Col xs={24} xl={16} xxl={6}>
                <Select labelInValue defaultValue={{ value: '1' }} style={{ width: '40%' }} onChange={this.handleDstType}>
                    <Option value="1">Hertz</Option>
                    <Option value="2">Kilohertz</Option>
                    <Option value="3">Megahertz</Option>
                    <Option value="4">Gigahertz</Option>
                    <Option value="5">Terrahertz</Option>
                    <Option value="0">Millihertz</Option>
                    <Option value="6">Revolution per hour</Option>
                    <Option value="7">Revolution per minute</Option>
                    <Option value="8">Revolution per second</Option>
                    <Option value="9">Radian per hour</Option>
                    <Option value="10">Radian per minute</Option>
                    <Option value="11">Radian per second</Option>
                </Select>
              </Col>
            </Row>
          </div>
        </div>
      );
    }
}

export default FrequencyConversion;