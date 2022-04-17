import React, {useState} from 'react';
import 'antd/dist/antd.css';
import Link from 'next/link';
import { Layout, Menu } from 'antd';
import { FieldBinaryOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import SpeedConversion from '../../components/math/SpeedConversion'
const { Header,Sider } = Layout;

export default function SpeedConv() {
    const [collapsed, setCollapsed] = useState(true)

    const handleToggle = () => {
        setCollapsed(!collapsed)
    }
  
    return (
        <Layout className="pg-site-layout-background" style={{ padding: '2%', minHeight: '100vh' }}>
            <Sider className="pg-site-layout-background" style={{ minWidth:'10vh', border: '1px solid rgb(235, 237, 240)' }} trigger={null} collapsible collapsed={collapsed}>
                <Menu mode="inline" defaultSelectedKeys={['103']} style={{ height: '100%' }}>
                    <Menu.Item key="100" icon={<FieldBinaryOutlined/>}><Link href="/math/mathbase">Convert Math Base</Link></Menu.Item>
                    <Menu.Item key="101" icon={<FieldBinaryOutlined/>}><Link href="/math/byteconv">Convert Byte/Bit</Link></Menu.Item>
                    <Menu.Item key="102" icon={<FieldBinaryOutlined/>}><Link href="/math/temperatureconv">Convert Temperature</Link></Menu.Item>
                    <Menu.Item key="103" icon={<FieldBinaryOutlined/>}><Link href="/math/speedconv">Convert Speed</Link></Menu.Item>
                    <Menu.Item key="104" icon={<FieldBinaryOutlined/>}><Link href="/math/freqconv">Convert Frequency</Link></Menu.Item>
                    <Menu.Item key="105" icon={<FieldBinaryOutlined/>}><Link href="/math/lengthconv">Convert Length</Link></Menu.Item>
                    <Menu.Item key="106" icon={<FieldBinaryOutlined/>}><Link href="/math/massconv">Convert Mass</Link></Menu.Item>
                    <Menu.Item key="107" icon={<FieldBinaryOutlined/>}><Link href="/math/areaconv">Convert Area</Link></Menu.Item>
                    <Menu.Item key="108" icon={<FieldBinaryOutlined/>}><Link href="/math/volumeconv">Convert Volume</Link></Menu.Item>
                    <Menu.Item key="109" icon={<FieldBinaryOutlined/>}><Link href="/math/angleconv">Convert Angle</Link></Menu.Item>
                    <Menu.Item key="110" icon={<FieldBinaryOutlined/>}><Link href="/math/calculation">Logic Calculator</Link></Menu.Item>
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
                    <SpeedConversion />
                </div>
            </Layout>
        </Layout>
    );
}
