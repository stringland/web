import {v4 as uuidv4} from 'uuid';
import React from 'react';
import 'antd/dist/antd.css';
import axios from 'axios'
import { Select, Row, Col, Input, Button, Divider, message } from 'antd';
const { Option } = Select;

export class TimeConversion extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        originalValue: '0',
        result: '0',
        srcType: 4,
        dstType: 4,
        opType: 2,
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
         <div>
            <Row style={{ width: '100%' }}>
              <Col span={1}>
              From:
              </Col>
              <Col span={10}>
                <Input maxLength={305} value={this.state.originalValue} onChange={this.handleChange} />
              </Col>
              <Col span={4}>
                <Select labelInValue defaultValue={{ value: '4' }} style={{ width: '90%' }} onChange={this.handleSrcType}>
                    <Option value="4">Millionseconds</Option>
                    <Option value="5">Seconds</Option>
                    <Option value="6">Minutes</Option>
                    <Option value="7">Hours</Option>
                    <Option value="8">Days</Option>
                    <Option value="9">Weeks</Option>
                    <Option value="14">Months (Common)</Option>
                    <Option value="15">Months (Synodic)</Option>
                    <Option value="17">Years (365 days)</Option>
                    <Option value="18">Years (Lunar)</Option>
                    <Option value="22">Centuries</Option>
                    <Option value="23">Millenia</Option>
                    <Option value="0">Femtoseconds</Option>
                    <Option value="1">Picoseconds</Option>
                    <Option value="2">Nanoseconds</Option>
                    <Option value="3">Microseconds</Option>
                    <Option value="10">Months (28 days)</Option>
                    <Option value="11">Months (29 days)</Option>
                    <Option value="12">Months (30 days)</Option>
                    <Option value="13">Months (31 days)</Option>
                    <Option value="16">Months (Tropical)</Option>
                    <Option value="19">Years (Julian)</Option>
                    <Option value="20">Years (Tropical)</Option>
                    <Option value="21">Years (Avg Gregorian)</Option>
                </Select>
              </Col>
              <Col span={6}>
                <Button type="primary" value="Submit" style={{ width: '30%' }} onClick={this.handleSubmit}>Submit</Button>
              </Col>
            </Row>
            <Divider />
            <Row style={{ width: '100%' }}>
              <Col span={1}>
                To:
              </Col>
              <Col span={10}>
                <Input maxLength={305} value={this.state.result} readOnly />
              </Col>
              <Col span={6}>
                <Select labelInValue defaultValue={{ value: '4' }} style={{ width: '60%' }} onChange={this.handleDstType}>
                <Option value="4">Millionseconds</Option>
                    <Option value="5">Seconds</Option>
                    <Option value="6">Minutes</Option>
                    <Option value="7">Hours</Option>
                    <Option value="8">Days</Option>
                    <Option value="9">Weeks</Option>
                    <Option value="14">Months (Common)</Option>
                    <Option value="15">Months (Synodic)</Option>
                    <Option value="17">Years (365 days)</Option>
                    <Option value="18">Years (Lunar)</Option>
                    <Option value="22">Centuries</Option>
                    <Option value="23">Millenia</Option>
                    <Option value="0">Femtoseconds</Option>
                    <Option value="1">Picoseconds</Option>
                    <Option value="2">Nanoseconds</Option>
                    <Option value="3">Microseconds</Option>
                    <Option value="10">Months (28 days)</Option>
                    <Option value="11">Months (29 days)</Option>
                    <Option value="12">Months (30 days)</Option>
                    <Option value="13">Months (31 days)</Option>
                    <Option value="16">Months (Tropical)</Option>
                    <Option value="19">Years (Julian)</Option>
                    <Option value="20">Years (Tropical)</Option>
                    <Option value="21">Years (Avg Gregorian)</Option>
                </Select>
              </Col>
            </Row>
          </div>
        </div>
      );
    }
}

export default TimeConversion;