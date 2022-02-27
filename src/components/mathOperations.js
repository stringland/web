import './css/op.css';
import 'antd/dist/antd.css';

import React from 'react';
import { Route, NavLink, HashRouter } from "react-router-dom";
import { Layout, Menu } from 'antd';
import { FieldBinaryOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import MathBase from './pages/mathBase';
import ByteConversion from './pages/byteConversion';
import TemperatureConversion from './pages/temperatureConversion';
import SpeedConversion from './pages/speedConversion'
import FrequencyConversion from './pages/frequencyConversion'
import LengthConversion from './pages/lengthConversion'
import MassConversion from './pages/massConversion'
import AreaConversion from './pages/areaConversion'
import VolumeConversion from './pages/volumeConversion'
import Calculator from './pages/calculator'

const { Header,Content, Sider } = Layout;

export class MathOperations extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        collapsed: true,
      };

      this.handleToggle = this.handleToggle.bind(this);
    }

    handleToggle() {
      this.setState({
        collapsed: !this.state.collapsed,
      });
    }
  
    render() {
      return (
        <HashRouter>
            <Layout className="site-layout-background" style={{ padding: '2%', minHeight: '100vh' }}>
                <Sider className="site-layout-background" style={{ minWidth:'10vh' }} trigger={null} collapsible collapsed={this.state.collapsed}>
                  <Menu mode="inline" defaultSelectedKeys={['100']} style={{ height: '100%' }}>
                      <Menu.Item key="100" icon={<FieldBinaryOutlined/>}><NavLink to="/math_operations/math_base">Convert Math Base</NavLink></Menu.Item>
                      <Menu.Item key="101" icon={<FieldBinaryOutlined/>}><NavLink to="/math_operations/convert_byte">Convert Byte/Bit</NavLink></Menu.Item>
                      <Menu.Item key="102" icon={<FieldBinaryOutlined/>}><NavLink to="/math_operations/convert_temperature">Convert Temperature</NavLink></Menu.Item>
                      <Menu.Item key="103" icon={<FieldBinaryOutlined/>}><NavLink to="/math_operations/convert_speed">Convert Speed</NavLink></Menu.Item>
                      <Menu.Item key="104" icon={<FieldBinaryOutlined/>}><NavLink to="/math_operations/convert_frequency">Convert Frequency</NavLink></Menu.Item>
                      <Menu.Item key="105" icon={<FieldBinaryOutlined/>}><NavLink to="/math_operations/convert_length">Convert Length</NavLink></Menu.Item>
                      <Menu.Item key="106" icon={<FieldBinaryOutlined/>}><NavLink to="/math_operations/convert_mass">Convert Mass</NavLink></Menu.Item>
                      <Menu.Item key="107" icon={<FieldBinaryOutlined/>}><NavLink to="/math_operations/convert_area">Convert Area</NavLink></Menu.Item>
                      <Menu.Item key="108" icon={<FieldBinaryOutlined/>}><NavLink to="/math_operations/convert_volume">Convert Volume</NavLink></Menu.Item>
                      <Menu.Item key="109" icon={<FieldBinaryOutlined/>}><NavLink to="/math_operations/calculator">Calculator</NavLink></Menu.Item>
                  </Menu>
                </Sider>
                <Layout className="site-layout">
                  <Header className="site-layout-background" style={{ padding: 0 }}>
                    {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                      className: 'trigger',
                      onClick: this.handleToggle,
                    })}
                  </Header>
                  <Content style={{ padding: '0 2%', marginTop:'1%', minHeight: '70%' }}>
                      <Route path="/math_operations/math_base" component={MathBase}/>
                      <Route path="/math_operations/convert_byte" component={ByteConversion}/>
                      <Route path="/math_operations/convert_temperature" component={TemperatureConversion}/>
                      <Route path="/math_operations/convert_speed" component={SpeedConversion}/>
                      <Route path="/math_operations/convert_frequency" component={FrequencyConversion}/>
                      <Route path="/math_operations/convert_length" component={LengthConversion}/>
                      <Route path="/math_operations/convert_mass" component={MassConversion}/>
                      <Route path="/math_operations/convert_area" component={AreaConversion}/>
                      <Route path="/math_operations/convert_volume" component={VolumeConversion}/>
                      <Route path="/math_operations/calculator" component={Calculator}/>
                  </Content>
                </Layout>
            </Layout>
        </HashRouter>
      );
    }
}

export default MathOperations;