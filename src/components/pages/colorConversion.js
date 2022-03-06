import {v4 as uuidv4} from 'uuid';
import React from 'react';
import 'antd/dist/antd.css';
import axios from 'axios'
import { Typography, InputNumber, Row, Col, Space, message } from 'antd';
import { SketchPicker } from 'react-color';
const { Title, Paragraph } = Typography;

export class ColorConversion extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        rgb: [50, 120, 220],
        cmyk: [0.7727272727272728, 0.4545454545454546, 0, 0.13725490196078427],
        hsv: [215.29411764705884, 0.7727272727272728, 0.8627450980392157],
        hsl: [215.29411764705884, 0.7083333333333334, 0.5294117647058824],
        hsi: [215.29411764705884, 0.6153846153846154, 0.5098039215686274],
        hwb: [215.29411764705884, 0.19607843137254902, 0.13725490196078427],
        hex: "3278DC",
        srcCode: 0,
        resStr: "",
        showRes: false
      };

      this.handleDropDown = this.handleDropDown.bind(this);
      this.handleChangeComplete = this.handleChangeComplete.bind(this);
    }

    handleDropDown(event) {
        this.setState({srcCode: Number(event.value)});
    }

    handleChangeComplete(color) {
        this.convertColor(color)
    }
  
    convertColor(color){
      const sessionId = uuidv4();
      const reqId = "cvt-color-"+sessionId;

      var hexCode = color.hex.substring(1)
      if (hexCode.length < 6) {
          for(var i = 0; i + hexCode.length < 6; i ++ ) {
            hexCode = "0" + hexCode
          }
      }
      const data = {
        sessionID: sessionId, 
        requestID: reqId,
        userID: 'default_user',
        rgb: [color.rgb.r, color.rgb.g, color.rgb.b], 
        hex: hexCode,
        cmyk: this.state.cmyk,
        hsv: this.state.hsv,
        hsl: this.state.hsl,
        hsi: this.state.hsi,
        hwb: this.state.hsv,
        srcCode: this.state.srcCode
      };

      axios.post('https://nifty-gasket-338410.wl.r.appspot.com/convert_color', data, {
        'Content-Type': 'application/json'
      }).then(
        response => {
            var hexStr = this.state.hex
            if(response.data.hex.length === 6) {
                hexStr = response.data.hex.toUpperCase()
            }
            this.setState({ 
                rgb: response.data.rgb, 
                hex: hexStr,
                cmyk: response.data.cmyk,
                hsv: response.data.hsv,
                hsl: response.data.hsl,
                hsi: response.data.hsi,
                hwb: response.data.hsv
            })
        }
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
            <Title style={{textAlign: "center", fontSize:'3vh'}} >Color Code Conversion</Title>
            <Paragraph style={{textAlign: "center", fontSize: "large"}}>
              Convert color code among RGB, CMYK, HSV and etc.
            </Paragraph>
          </div>
          <div style={{ marginTop: '2%'}}>
              <Row>
                <Col xs={24} xl={12} xxl={12}>
                    <SketchPicker
                        width={'80%'}
                        color={ this.state.hex }
                        disableAlpha={true}
                        onChangeComplete={ this.handleChangeComplete }
                    />
                </Col>
                <Col xs={24} xl={12} xxl={12}>
                    <div>
                        <Space>
                            CMYK: 
                            <InputNumber defaultValue={this.state.cmyk[0]} value={this.state.cmyk[0]} readOnly={true}/>
                            <InputNumber defaultValue={this.state.cmyk[1]} value={this.state.cmyk[1]} readOnly={true}/>
                            <InputNumber defaultValue={this.state.cmyk[2]} value={this.state.cmyk[2]} readOnly={true}/>
                            <InputNumber defaultValue={this.state.cmyk[3]} value={this.state.cmyk[3]} readOnly={true}/>
                        </Space>
                    </div>
                    <div style={{ marginTop: '2%' }}>
                        <Space>
                            HSV: 
                            <InputNumber defaultValue={this.state.hsv[0]} value={this.state.hsv[0]} readOnly={true}/>
                            <InputNumber defaultValue={this.state.hsv[1]} value={this.state.hsv[1]} readOnly={true}/>
                            <InputNumber defaultValue={this.state.hsv[2]} value={this.state.hsv[2]} readOnly={true}/>
                        </Space>
                    </div>
                    <div style={{ marginTop: '2%' }}>
                        <Space>
                            HSL: 
                            <InputNumber defaultValue={this.state.hsl[0]} value={this.state.hsl[0]} readOnly={true}/>
                            <InputNumber defaultValue={this.state.hsl[1]} value={this.state.hsl[1]} readOnly={true}/>
                            <InputNumber defaultValue={this.state.hsl[2]} value={this.state.hsl[2]} readOnly={true}/>
                        </Space>
                    </div>
                    <div style={{ marginTop: '2%' }}>
                        <Space>
                            HSI: 
                            <InputNumber defaultValue={this.state.hsi[0]} value={this.state.hsi[0]} readOnly={true}/>
                            <InputNumber defaultValue={this.state.hsi[1]} value={this.state.hsi[1]} readOnly={true}/>
                            <InputNumber defaultValue={this.state.hsi[2]} value={this.state.hsi[2]} readOnly={true}/>
                        </Space>
                    </div>
                    <div style={{ marginTop: '2%' }}>
                        <Space>
                            HWB: 
                            <InputNumber defaultValue={this.state.hwb[0]} value={this.state.hwb[0]} readOnly={true}/>
                            <InputNumber defaultValue={this.state.hwb[1]} value={this.state.hwb[1]} readOnly={true}/>
                            <InputNumber defaultValue={this.state.hwb[2]} value={this.state.hwb[2]} readOnly={true}/>
                        </Space>
                    </div>
                </Col>
              </Row>
          </div>
        </div>
      );
    }
}

export default ColorConversion;