import './App.css';
import 'antd/dist/antd.css';

import { Route, NavLink, HashRouter } from "react-router-dom";
import { Layout, Menu } from 'antd';
import Home from './components/home';
import TextOperations from './components/textOperations';
import MathOperations from './components/mathOperations';
import MisOperations from './components/misOperations';
import GuessNumGames from './components/guess_num_games';
import AboutUs from './components/aboutus'
import {FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon} from "react-share";


const { Header, Content, Footer } = Layout;

function App() {
  return (
    <HashRouter>
      <Layout>
        <Header className="header">  
          <div className="logo">
            <img style={{width: '80%', marginLeft: '10%', marginTop: '-28%', marginBottom: '500%'}} src="https://www.linkpicture.com/q/log.svg" alt="StringLand Logo"/>
          </div>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1"><NavLink to="/">Home</NavLink></Menu.Item>
            <Menu.Item key="2"><NavLink to="/aboutus">About</NavLink></Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 3%', backgroundColor: 'white' }}>
          <Route exact path="/" component={Home}/>
          <Route path="/text_operations" component={TextOperations}/>
          <Route path="/math_operations" component={MathOperations}/>
          <Route path="/mis_operations" component={MisOperations}/>
          <Route path="/guess_number_game" component={GuessNumGames}/>
          <Route path="/aboutus" component={AboutUs}/>
        </Content>
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
    </HashRouter>
  );
}

export default App;
