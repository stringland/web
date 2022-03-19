import './css/op.css';
import 'antd/dist/antd.css';

import React from 'react';
import { Route, NavLink, HashRouter } from "react-router-dom";
import { Layout, Menu } from 'antd';
import { ClockCircleOutlined,FileTextOutlined,BgColorsOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import BaseString from './pages/baseString';
import HTMLString from './pages/htmlString';
import URLString from './pages/urlString';
import IPConversion from './pages/ipConversion';
import StringEndecode from './pages/stringEnDecode';
import TimezoneConversion from './pages/timezoneConversion';
import ColorConversion from './pages/colorConversion';
import TimeConversion from './pages/timeConversion';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

export class MisOperations extends React.Component {
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
                <Sider className="site-layout-background" style={{ minWidth:'10vh', border: '1px solid rgb(235, 237, 240)' }} trigger={null} collapsible collapsed={this.state.collapsed}>
                  <Menu mode="inline" style={{height: '100%' }}>
                      <SubMenu key="sub1" icon={<ClockCircleOutlined />} title="Time Operation">
                      <Menu.Item key="100"><NavLink to="/mis_operations/convert_timezone">Convert Timezone</NavLink></Menu.Item>
                      <Menu.Item key="101"><NavLink to="/mis_operations/convert_time">Convert Time</NavLink></Menu.Item>
                      </SubMenu>
                      <SubMenu key="sub2" icon={<FileTextOutlined />} title="String Operation">
                      <Menu.Item key="200"><NavLink to="/mis_operations/base_string">Convert String Base</NavLink></Menu.Item>
                      <Menu.Item key="201"><NavLink to="/mis_operations/html_string">HTML (Un)Escape</NavLink></Menu.Item>
                      <Menu.Item key="202"><NavLink to="/mis_operations/url_string">URL Query/Path (Un)Escape</NavLink></Menu.Item>
                      <Menu.Item key="203"><NavLink to="/mis_operations/convert_ip">Convert IP to Base</NavLink></Menu.Item>
                      <Menu.Item key="204"><NavLink to="/mis_operations/generate_password">Generate Password</NavLink></Menu.Item>
                      <Menu.Item key="205"><NavLink to="/mis_operations/string_encodedecode">En/Decode String</NavLink></Menu.Item>
                      </SubMenu>
                      <SubMenu key="sub3" icon={<BgColorsOutlined />} title="Color Operation">
                      <Menu.Item key="300"><NavLink to="/mis_operations/convert_color">Convert Color Code</NavLink></Menu.Item>
                      </SubMenu>
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
                      <Route path="/mis_operations/base_string" component={BaseString}/>
                      <Route path="/mis_operations/html_string" component={HTMLString}/>
                      <Route path="/mis_operations/url_string" component={URLString}/>
                      <Route path="/mis_operations/convert_ip" component={IPConversion}/>
                      <Route path="/mis_operations/string_encodedecode" component={StringEndecode}/>
                      <Route path="/mis_operations/convert_timezone" component={TimezoneConversion}/>
                      <Route path="/mis_operations/convert_time" component={TimeConversion}/>
                      <Route path="/mis_operations/convert_color" component={ColorConversion}/>
                  </Content>
                </Layout>
            </Layout>
        </HashRouter>
      );
    }
}

export default MisOperations;