import './css/op.css';
import 'antd/dist/antd.css';

import React from 'react';
import { Route, NavLink, HashRouter } from "react-router-dom";
import { Layout, Menu } from 'antd';
import { LockOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import PasswordGenerator from './pages/generatePassword';
import HashGenerator from './pages/hashGeneration';

const { Header,Content, Sider } = Layout;

export class Security extends React.Component {
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
                  <Menu mode="inline" defaultSelectedKeys={['101']} style={{ height: '100%' }}>
                      <Menu.Item key="101" icon={<LockOutlined />}><NavLink to="/security/generate_checksum">Generate Checksum</NavLink></Menu.Item>
                      <Menu.Item key="102" icon={<LockOutlined />}><NavLink to="/security/generate_password">Generate Password</NavLink></Menu.Item>
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
                      <Route path="/security/generate_checksum" component={HashGenerator}/>
                      <Route path="/security/generate_password" component={PasswordGenerator}/>
                  </Content>
                </Layout>
            </Layout>
        </HashRouter>
      );
    }
}

export default Security;