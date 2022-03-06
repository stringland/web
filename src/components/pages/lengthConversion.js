import {v4 as uuidv4} from 'uuid';
import React from 'react';
import 'antd/dist/antd.css';
import axios from 'axios'
import { Typography, Select, Row, Col, Input, Button, Divider, message } from 'antd';
const { Option } = Select;
const { Title, Paragraph } = Typography;


export class LengthConversion extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        originalValue: '0',
        result: '0',
        srcType: 0,
        dstType: 0,
        opType: 3,
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
        opType: 3
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
            <Title style={{textAlign: "center", fontSize:'3vh'}} >Length Conversion</Title>
            <Paragraph style={{textAlign: "center", fontSize: "large"}}>
              Convert length unit among km, mile, inch and etc.
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
                <Select labelInValue defaultValue={{ value: '0' }} style={{ width: '55%' }} onChange={this.handleSrcType}>
                    <Option value="0">Meter</Option>
                    <Option value="3">Kilometer</Option>
                    <Option value="4">Megameter</Option>
                    <Option value="5">Gigameter</Option>
                    <Option value="6">Terameter</Option>
                    <Option value="7">Petameter</Option>
                    <Option value="8">Exameter</Option>
                    <Option value="9">Zettameter</Option>
                    <Option value="10">Yottameter</Option>
                    <Option value="1">Decameter</Option>
                    <Option value="2">Hectometer</Option>
                    <Option value="11">Decimeter</Option>
                    <Option value="12">Centimeter</Option>
                    <Option value="13">Millimeter</Option>
                    <Option value="14">Micrometer</Option>
                    <Option value="15">Nanometer</Option>
                    <Option value="16">Picometer</Option>
                    <Option value="17">Femtometer</Option>
                    <Option value="18">Attometer</Option>
                    <Option value="19">Zeptometer</Option>
                    <Option value="20">Yoctometer</Option>
                    <Option value="21">Thou</Option>
                    <Option value="22">Inch</Option>
                    <Option value="23">Foot</Option>
                    <Option value="24">Yard</Option>
                    <Option value="25">Mile</Option>
                    <Option value="26">League</Option>
                    <Option value="27">Fathom</Option>
                    <Option value="28">NauticalMile</Option>
                    <Option value="29">Chain</Option>
                    <Option value="30">Rod</Option>
                    <Option value="31">EarthRadius</Option>
                    <Option value="32">LunarDistance</Option>
                    <Option value="33">AstronomicalUnit</Option>
                    <Option value="34">LightYear</Option>
                    <Option value="35">Parsec</Option>
                    <Option value="36">HubbleLength</Option>
                    <Option value="37">Furlong</Option>
                    <Option value="38">Li</Option>
                    <Option value="39">Verst</Option>
                    <Option value="40">Pace</Option>
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
                <Select labelInValue defaultValue={{ value: '0' }} style={{ width: '55%' }} onChange={this.handleDstType}>
                    <Option value="0">Meter</Option>
                    <Option value="3">Kilometer</Option>
                    <Option value="4">Megameter</Option>
                    <Option value="5">Gigameter</Option>
                    <Option value="6">Terameter</Option>
                    <Option value="7">Petameter</Option>
                    <Option value="8">Exameter</Option>
                    <Option value="9">Zettameter</Option>
                    <Option value="10">Yottameter</Option>
                    <Option value="1">Decameter</Option>
                    <Option value="2">Hectometer</Option>
                    <Option value="11">Decimeter</Option>
                    <Option value="12">Centimeter</Option>
                    <Option value="13">Millimeter</Option>
                    <Option value="14">Micrometer</Option>
                    <Option value="15">Nanometer</Option>
                    <Option value="16">Picometer</Option>
                    <Option value="17">Femtometer</Option>
                    <Option value="18">Attometer</Option>
                    <Option value="19">Zeptometer</Option>
                    <Option value="20">Yoctometer</Option>
                    <Option value="21">Thou</Option>
                    <Option value="22">Inch</Option>
                    <Option value="23">Foot</Option>
                    <Option value="24">Yard</Option>
                    <Option value="25">Mile</Option>
                    <Option value="26">League</Option>
                    <Option value="27">Fathom</Option>
                    <Option value="28">NauticalMile</Option>
                    <Option value="29">Chain</Option>
                    <Option value="30">Rod</Option>
                    <Option value="31">EarthRadius</Option>
                    <Option value="32">LunarDistance</Option>
                    <Option value="33">AstronomicalUnit</Option>
                    <Option value="34">LightYear</Option>
                    <Option value="35">Parsec</Option>
                    <Option value="36">HubbleLength</Option>
                    <Option value="37">Furlong</Option>
                    <Option value="38">Li</Option>
                    <Option value="39">Verst</Option>
                    <Option value="40">Pace</Option>
                </Select>
              </Col>
            </Row>
          </div>
        </div>
      );
    }
}

export default LengthConversion;