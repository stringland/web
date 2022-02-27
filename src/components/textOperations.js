import './css/op.css';
import 'antd/dist/antd.css';

import React from 'react';
import { Route, NavLink, HashRouter } from "react-router-dom";
import { Layout, Menu } from 'antd';
import { FileTextOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import TextEdition from './pages/textEdition';
import WordCount from './pages/wordCount';

const { Header,Content, Sider } = Layout;

export class TextOperations extends React.Component {
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
                  <Menu mode="inline" defaultSelectedKeys={['1']} style={{ height: '100%' }}>
                      <Menu.Item key="1" icon={<FileTextOutlined />}><NavLink to="/text_operations/edit_txt">Simple Text Edit</NavLink></Menu.Item>
                      <Menu.Item key="2" icon={<FileTextOutlined />}><NavLink to="/text_operations/word_count">Word Count</NavLink></Menu.Item>
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
                      <Route path="/text_operations/edit_txt" component={TextEdition}/>
                      <Route path="/text_operations/word_count" component={WordCount}/>
                  </Content>
                </Layout>
            </Layout>
        </HashRouter>
      );
    }
}

export default TextOperations;