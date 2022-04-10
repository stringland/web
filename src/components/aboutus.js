import React from 'react';
import 'antd/dist/antd.css';
import { Typography } from 'antd';
const {Text } = Typography;

export class AboutUs extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};  
    }
    
    render() {
      return (
        <div style={{ marginTop:"2%", marginBottom: "50%", minHeight: '85vh'}}>
            <Text style={{textAlign: "left", fontSize: "large"}}>
              In my daily work, sometimes I have to find some tools to process data. Most of time, I have to find different tools here and there through Google, which is not very convenient. Some of them even have bugs. So I start to build StringLand, a website that collects various kinds of tools, and share it with you. It is like a toolkit where we can find the tool easily just in one place.
            </Text>
            <br />
            <br />
            <Text style={{textAlign: "left", fontSize: "large"}}>
              Meanwhile, I will/have implemented some simple games for fun.
            </Text>
            <br />
            <br />
            <Text style={{textAlign: "left", fontSize: "large"}}>
              To learn more about StringLand Tech, you can visit this <a href="https://stringlandtech.blogspot.com" target="_blank" rel="noreferrer">blog</a> .
            </Text>
            <br />
            <br />
            <Text style={{textAlign: "left", fontSize: "large"}}>
              If you find any issues, or have any requirements, feel free to email stringlangstr@gmail.com . Thanks.
            </Text>
            <br />
        </div>
      );
    }
}

export default AboutUs;