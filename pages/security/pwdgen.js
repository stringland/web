import React, {useState} from 'react';
import 'antd/dist/antd.css';
import Link from 'next/link';
import { Layout, Menu } from 'antd';
import { LockOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import PasswordGen from '../../components/security/PasswordGen'
const { Header,Sider } = Layout;

export default function MathBasePg() {
    const [collapsed, setCollapsed] = useState(true)

    const handleToggle = () => {
        setCollapsed(!collapsed)
    }
  
    return (
        <Layout className="pg-site-layout-background" style={{ padding: '2%', minHeight: '100vh' }}>
            <Sider className="pg-site-layout-background" style={{ minWidth:'10vh', border: '1px solid rgb(235, 237, 240)' }} trigger={null} collapsible collapsed={collapsed}>
                <Menu mode="inline" defaultSelectedKeys={['401']} style={{ height: '100%' }}>
                    <Menu.Item key="400" icon={<LockOutlined/>}><Link href="/security/hashgen">Hash Generation</Link></Menu.Item>
                    <Menu.Item key="401" icon={<LockOutlined/>}><Link href="/security/pwdgen">Password Generation</Link></Menu.Item>
                </Menu>
            </Sider>
            <Layout className="pg-site-layout">
                <Header className="pg-site-layout-background" style={{ padding: 0 }}>
                {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                    className: 'pg-trigger',
                    onClick: handleToggle,
                })}
                </Header>

                <div style={{ padding: '0 2%', marginTop:'1%', minHeight: '70%' }}>
                    <PasswordGen />
                </div>
            </Layout>
        </Layout>
    );
}
