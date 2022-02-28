import {v4 as uuidv4} from 'uuid';
import React from 'react';
import moment from 'moment';
import momenttz from 'moment-timezone';
import 'antd/dist/antd.css';
import axios from 'axios'
import { Select, Input, Button, DatePicker, Space, InputNumber, message } from 'antd';
const { Option } = Select;
const { TextArea } = Input;

export class TimezoneConversion extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        currentTimeStamp: Math.floor(Date.now()/1000),
        timestamp: Math.floor(Date.now()/1000),
        resultTimestamp: Math.floor(Date.now()/1000),
        selectedTimezone: 'UTC',
        time: [2021, 3, 19, 9, 30,20],
        resultTime: [2021, 3, 19, 9, 30,20],
        type: 0,
        resStr: "",
        showRes: false
      };
      this.timezoneList = momenttz.tz.names()
      this.timezoneOptions = []

      for (let i = 0; i < this.timezoneList.length; i++) {
        this.timezoneOptions.push(<Option key={this.timezoneList[i]}>{this.timezoneList[i]}</Option>);
      }

      this.handleChange = this.handleChange.bind(this);
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleDropDown = this.handleDropDown.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleTimezone = this.handleTimezone.bind(this);
      this.handleTimeChange = this.handleTimeChange.bind(this);
    }

    componentDidMount() {
        this.interval = setInterval(() => this.updateCurTimeStamp(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }
  
    handleChange(event) {
      this.setState({originalValue: event.target.value});
    }

    handleDropDown(event) {
        var date = moment.utc();
        this.setState({type: Number(event.value)});
        this.setState({time: [date.year(), date.month(), date.date(), date.hour(), date.minute(), date.second()]});
        this.setState({showRes: false})
    }

    updateCurTimeStamp() {
        this.setState({currentTimeStamp: Math.floor(Date.now()/1000)})
    }

    handleTimezone(value) {
        this.setState({selectedTimezone: value})
    }

    handleTimeChange(value) {
        // need to do month + 1
        this.setState({time: [value.year(), value.month(), value.date(), value.hour(), value.minute(), value.second()]});
    }

    handleInputChange(value) {
        this.setState({timestamp: value})
    }
  
    handleSubmit(){
      const sessionId = uuidv4();
      const reqId = "cvt-time-"+sessionId;

      console.log(this.state.selectedTimezone)
      var timeArr = [this.state.time[0], this.state.time[1], this.state.time[2], this.state.time[3], this.state.time[4], this.state.time[5]]
      // console.log(timeArr)
      var convertTime = momenttz.utc(timeArr).tz(this.state.selectedTimezone).format("YYYY-MM-DD HH:mm:ss")
      // console.log(convertTime)

      var i = 0
      var t = ""
      var timeVal = []
      for(i = 0; i <= convertTime.length; i ++ ){
          if(convertTime[i] < '0' || convertTime[i] > '9' || i === convertTime.length) {
              // console.log(t)
              timeVal = [...timeVal, Number(t)]
              t = ""
              continue
          }
          t += convertTime[i]
      }
      // console.log(timeVal)
      // console.log(this.state.timestamp)

      const data = {
        sessionID: sessionId, 
        requestID: reqId,
        userID: 'default_user',
        timestamp: this.state.timestamp,
        time: timeVal,
        type: this.state.type
      };

      axios.post('https://nifty-gasket-338410.wl.r.appspot.com/convert_time', data, {
        'Content-Type': 'application/json'
      }).then(
        response => {
            this.setState({ 
                resultTimestamp: response.data.timestamp, 
                resultTime: response.data.time,
                showRes: true 
            })

            // console.log(this.state.resultTime)
            // console.log(this.state.resultTimestamp)
            // FIXME: do not update this.state.resultTime directly
            var resultTime = []
            resultTime = this.state.resultTime
            if(this.state.resultTime !== undefined && this.state.resultTime.length > 2) {
              resultTime[1]--
            }

            switch(this.state.type) {
                case 0:
                    var utcTime = "UTC Time: " + momenttz.utc(resultTime).format("YYYY-MM-DD HH:mm:ss")
                    var localTime = "Local Time: "+ momenttz.utc(resultTime).local().format("YYYY-MM-DD HH:mm:ss")
                    this.setState({resStr: utcTime + '\n' + localTime + '\n'})
                    break;
                case 1:
                    this.setState({resStr:  "time stamp is: " + String(this.state.resultTimestamp)})
                    break;
                default:
                    throw new Error("undefined type");
            }
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
            <h2 style={{ textAlign:'center', fontSize:'3vh' }}>Timezone Conversion</h2>
          </div>
          <div style={{ marginTop: '2%'}}>
            Current Timestamp: {this.state.currentTimeStamp}
          </div>
          <div style={{ marginTop: "2%" }}>
            <Select labelInValue defaultValue={{ value: '0' }} style={{ width: '25%' }} onChange={this.handleDropDown}>
                <Option value="0">From Timestamp To Date</Option>
                <Option value="1">From Date To Timestamp</Option>
            </Select>
          </div>
          <div style={{ marginTop: "2%", width: '50%', display: this.state.type === 0 ? "block" : "none" }}>
              Timestamp: <InputNumber style={{ width: '40%' }} min={0} max={9223372036854775807} defaultValue={this.state.currentTimeStamp} onChange={this.handleInputChange} />
          </div>
          <div style={{ marginTop: "2%", width: '100%', display: this.state.type === 1 ? "block" : "none" }}>
            <Space>
                <DatePicker
                    format="YYYY-MM-DD HH:mm:ss"
                    showTime={{ defaultValue: moment('', 'YYYY-MM-DD HH:mm:ss') }}
                    onChange={this.handleTimeChange}
                />
                <Select style={{ width: '300%' }} placeholder="UTC" onChange={this.handleTimezone}>
                    {this.timezoneOptions}
                </Select>
            </Space>
          </div>
          <div style={{ marginTop: "2%" }}>
            <Button style={{ float:'right' }} type="primary" value="Submit" onClick={this.handleSubmit}>Submit</Button>
          </div>
          <div style={{ marginTop: "2%", display: this.state.showRes ? "block" : "none" }}>
            <TextArea showCount value={this.state.resStr} rows={10} readOnly />
          </div>
        </div>
      );
    }
}

export default TimezoneConversion;