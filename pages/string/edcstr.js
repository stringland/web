import React, {useState} from 'react';
import 'antd/dist/antd.css';
import Link from 'next/link';
import { Layout, Menu } from 'antd';
import { FontColorsOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import StringEnDecode from '../../components/string/StringEnDecode'
const { Header,Sider } = Layout;

export default function MathBasePg() {
    const [collapsed, setCollapsed] = useState(true)

    const handleToggle = () => {
        setCollapsed(!collapsed)
    }
  
    return (
        <Layout className="pg-site-layout-background" style={{ padding: '2%', minHeight: '100vh' }}>
            <Sider className="pg-site-layout-background" style={{ minWidth:'10vh', border: '1px solid rgb(235, 237, 240)' }} trigger={null} collapsible collapsed={collapsed}>
                <Menu mode="inline" defaultSelectedKeys={['304']} style={{ height: '100%' }}>
                    <Menu.Item key="300" icon={<FontColorsOutlined/>}><Link href="/string/basestr">Convert String Base</Link></Menu.Item>
                    <Menu.Item key="301" icon={<FontColorsOutlined/>}><Link href="/string/htmlstr">HTML (Un)Escape</Link></Menu.Item>
                    <Menu.Item key="302" icon={<FontColorsOutlined/>}><Link href="/string/urlstr">URL Query/Path (Un)Escape</Link></Menu.Item>
                    <Menu.Item key="303" icon={<FontColorsOutlined/>}><Link href="/string/ipconv">Convert IP to Base</Link></Menu.Item>
                    <Menu.Item key="304" icon={<FontColorsOutlined/>}><Link href="/string/edcstr">En/Decode String</Link></Menu.Item>
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
                    <StringEnDecode />
                </div>
            </Layout>
        </Layout>
    );
}
