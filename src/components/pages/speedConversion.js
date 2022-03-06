import {v4 as uuidv4} from 'uuid';
import React from 'react';
import 'antd/dist/antd.css';
import axios from 'axios'
import { Typography, Select, Row, Col, Input, Button, Divider, message } from 'antd';
const { Option } = Select;
const { Title, Paragraph } = Typography;

export class SpeedConversion extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        originalValue: '0',
        result: '0',
        srcType: 0,
        dstType: 0,
        opType: 8,
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
            <Title style={{textAlign: "center", fontSize:'3vh'}} >Speed Conversion</Title>
            <Paragraph style={{textAlign: "center", fontSize: "large"}}>
              Convert speed unit among km/h, mph, ft/h and etc.
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
                <Select labelInValue defaultValue={{ value: '0' }} style={{ width: '75%' }} onChange={this.handleSrcType}>
                    <Option value="0">Kilometers per hour (km/h)</Option>
                    <Option value="1">Kilometers per minute (km/min)</Option>
                    <Option value="2">Kilometers per second (km/s)</Option>
                    <Option value="3">Meters per hour (m/h)</Option>
                    <Option value="4">Meters per minute (m/min)</Option>
                    <Option value="5">Meters per second (m/s)</Option>
                    <Option value="6">Miles per hour (mph)</Option>
                    <Option value="7">Miles per minute (mpm)</Option>
                    <Option value="8">Miles per second (mps)</Option>
                    <Option value="9">Feets per hour (ft/h)</Option>
                    <Option value="10">Feets per minute (ft/m)</Option>
                    <Option value="11">Feets per second (ft/s)</Option>
                    <Option value="12">Yards per hour (yph)</Option>
                    <Option value="13">Yards per minute (ypm)</Option>
                    <Option value="14">Yards per second (yps)</Option>
                    <Option value="15">Inches per hour (inches/h)</Option>
                    <Option value="16">Inches per minute (inches/m)</Option>
                    <Option value="17">Inches per second (inches/s)</Option>
                    <Option value="18">Centimeters per hour (cm/h)</Option>
                    <Option value="19">Centimeters per minute (cm/m)</Option>
                    <Option value="20">Centimeters per second (cm/s)</Option>
                    <Option value="21">Decimeters per hour (dm/h)</Option>
                    <Option value="22">Decimeters per minute (dm/m)</Option>
                    <Option value="23">Decimeters per second (dm/s)</Option>
                    <Option value="24">Knots (kn)</Option>
                    <Option value="25">Speed of Sound</Option>
                    <Option value="26">Speed of Light</Option>
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
                <Select labelInValue defaultValue={{ value: '0' }} style={{ width: '75%' }} onChange={this.handleDstType}>
                <Option value="0">Kilometers per hour (km/h)</Option>
                    <Option value="1">Kilometers per minute (km/min)</Option>
                    <Option value="2">Kilometers per second (km/s)</Option>
                    <Option value="3">Meters per hour (m/h)</Option>
                    <Option value="4">Meters per minute (m/min)</Option>
                    <Option value="5">Meters per second (m/s)</Option>
                    <Option value="6">Miles per hour (mph)</Option>
                    <Option value="7">Miles per minute (mpm)</Option>
                    <Option value="8">Miles per second (mps)</Option>
                    <Option value="9">Feets per hour (ft/h)</Option>
                    <Option value="10">Feets per minute (ft/m)</Option>
                    <Option value="11">Feets per second (ft/s)</Option>
                    <Option value="12">Yards per hour (yph)</Option>
                    <Option value="13">Yards per minute (ypm)</Option>
                    <Option value="14">Yards per second (yps)</Option>
                    <Option value="15">Inches per hour (inches/h)</Option>
                    <Option value="16">Inches per minute (inches/m)</Option>
                    <Option value="17">Inches per second (inches/s)</Option>
                    <Option value="18">Centimeters per hour (cm/h)</Option>
                    <Option value="19">Centimeters per minute (cm/m)</Option>
                    <Option value="20">Centimeters per second (cm/s)</Option>
                    <Option value="21">Decimeters per hour (dm/h)</Option>
                    <Option value="22">Decimeters per minute (dm/m)</Option>
                    <Option value="23">Decimeters per second (dm/s)</Option>
                    <Option value="24">Knots (kn)</Option>
                    <Option value="25">Speed of Sound</Option>
                    <Option value="26">Speed of Light</Option>
                </Select>
              </Col>
            </Row>
          </div>
        </div>
      );
    }
}

export default SpeedConversion;