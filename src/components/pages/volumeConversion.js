import {v4 as uuidv4} from 'uuid';
import React from 'react';
import 'antd/dist/antd.css';
import axios from 'axios'
import { Select, Row, Col, Input, Button, Divider, message } from 'antd';
const { Option } = Select;

export class VolumeConversion extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        originalValue: '0',
        result: '0',
        srcType: 0,
        dstType: 0,
        opType: 5,
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
            <Row>
              <Col xs={16} xl={1} xxl={1}>
              From:
              </Col>
              <Col xs={24} xl={10} xxl={10}>
                <Input maxLength={305} value={this.state.originalValue} onChange={this.handleChange} />
              </Col>
              <Col xs={24} xl={16} xxl={6}>
                <Select labelInValue defaultValue={{ value: '0' }} style={{ width: '75%' }} onChange={this.handleSrcType}>
                    <Option value="0">Cubic meter</Option>
                    <Option value="1">Cubic decimeter</Option>
                    <Option value="2">Cubic centimeter</Option>
                    <Option value="3">Cubic inch</Option>
                    <Option value="4">Cubic foot</Option>
                    <Option value="5">Cubic yard</Option>
                    <Option value="6">Litre</Option>
                    <Option value="7">Gallon</Option>
                    <Option value="8">Pint</Option>
                    <Option value="9">Barrel</Option>
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
                    <Option value="0">Cubic meter</Option>
                    <Option value="1">Cubic decimeter</Option>
                    <Option value="2">Cubic centimeter</Option>
                    <Option value="3">Cubic inch</Option>
                    <Option value="4">Cubic foot</Option>
                    <Option value="5">Cubic yard</Option>
                    <Option value="6">Litre</Option>
                    <Option value="7">Gallon</Option>
                    <Option value="8">Pint</Option>
                    <Option value="9">Barrel</Option>
                </Select>
              </Col>
            </Row>
          </div>
        </div>
      );
    }
}

export default VolumeConversion;