import Head from 'next/head';
import Script from 'next/script';
import { Layout, Menu } from 'antd';
import Link from 'next/link';
import {FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon} from "react-share";

import 'antd/dist/antd.css'
import '../styles/vars.css'
import '../styles/global.css'
import '../styles/app.css'
import './css/pg.css'

const { Header, Footer } = Layout;


export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}></Script>
      <Script strategy="lazyOnload">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
        
              gtag('config', 'G-X5807STRC4');
          `}
      </Script>

      <Head>
        <meta charset="utf-8" />
        <link rel="shortcut icon" href="/web/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="StringLand App"/>
        <link rel="apple-touch-icon" href="/web/logo192.png" />
        <link rel="manifest" href="/web/manifest.json" />
        <title>StringLand Tech</title>
      </Head>

      <Layout style={{background: '#fff'}}>
        <Header className="Appheader">  
          <div className="logo">
            <img style={{width: '320%', height: '220%', marginLeft: '1%', marginTop: '5%', marginBottom: '10%'}} src="https://www.linkpicture.com/q/log.svg" alt="StringLand Logo"/>
          </div>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1"><Link href="/web">Home</Link></Menu.Item>
            <Menu.Item key="2"><Link href="/web/about">About</Link></Menu.Item>
          </Menu>
        </Header>

        <div style={{marginLeft: '2%', marginRight: '2%', background: '#fff'}}>
          <Component {...pageProps} />
        </div>

        <Footer style={{ width: '100%', textAlign: 'center', backgroundColor: '#645F5F' }}>
          <div>
            <b>Copyright © StringLand 2022</b>
          </div>
          <div style={{ marginTop: '2%' }}>
            <FacebookShareButton style={{width:'5%'}} url='https://stringland.github.io/web' title='Share Stringland to others' quote='Welcome to StringLand' hashtag='#stringland'>
              <FacebookIcon size={'60%'} round='true'></FacebookIcon>
            </FacebookShareButton>
            <TwitterShareButton style={{width:'5%'}} url='https://stringland.github.io/web' title='Share Stringland to others' quote='Welcome to StringLand' hashtag='#stringland'>
              <TwitterIcon size={'60%'} round='true'></TwitterIcon>
            </TwitterShareButton>
          </div>
        </Footer>
      </Layout>
    </>
  )
}
