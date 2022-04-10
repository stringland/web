import React from 'react';
import 'antd/dist/antd.css';
import { Typography, Divider, Tag, Card, Row, Col } from 'antd';
const { Title, Paragraph } = Typography;
const { Meta } = Card;

export class Home extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      };  
    }
    
    render() {
      return (
        <div style={{ marginTop:"2%"}}>
          <section>
            <Title style={{textAlign: "center"}} >Welcome to StringLand Tech</Title>
            <Paragraph style={{textAlign: "center", fontSize: "x-large"}}>
              StringLand Tech has various kinds of useful office/study tools, and fun games.
            </Paragraph>
            <Paragraph style={{textAlign: "center", fontSize: "x-large"}}>
              Learn more about StringLand Tech from <a href="https://stringlandtech.blogspot.com" target="_blank" rel="noreferrer">Blog</a>
            </Paragraph>
            <Paragraph style={{textAlign: "center", fontSize: "x-large"}}>
              Let us click the key features cards below and start the jouney!
            </Paragraph>
          </section>
          <br />
          <Divider orientation="left"></Divider>
          <section>
            <Tag color="black">key features</Tag>
            <div className="site-card-wrapper" style={{ marginTop:"1%"}}>
              <Row gutter={10}>
                <Col xs={16} xl={8} xxl={4}>
                  <a href="https://stringland.github.io/web/#/text_operations/edit_txt" >
                  <Card hoverable
                      cover={<img alt="stringland tech simple text editor" src="https://www.linkpicture.com/q/stringland-textop.svg"/>}
                    >
                      <Meta title="Text Opertion" description="Basic text operations like word counts" />
                  </Card>
                  </a>
                </Col>
                <Col xs={16} xl={8} xxl={4}>
                  <a href="https://stringland.github.io/web/#/math_operations/math_base" >
                  <Card hoverable
                      cover={<img alt="stringland tech calculator" src="https://www.linkpicture.com/q/stringland-math.svg" />}
                    >
                      <Meta title="Math Opertion" description="Math base/unit conversion and logic calculator" />
                  </Card>
                  </a>
                </Col>
                <Col xs={16} xl={8} xxl={4}>
                  <a href="https://stringland.github.io/web/#/mis_operations/convert_timezone" >
                  <Card hoverable 
                      cover={<img alt="stringland tech time conversion" src="https://www.linkpicture.com/q/stringland-clock.svg" />}
                    >
                      <Meta title="Time Operation" description="time stamp/date/unit conversion" />
                  </Card>
                  </a>
                </Col>
                <Col xs={16} xl={8} xxl={4}>
                  <a href="https://stringland.github.io/web/#/mis_operations/base_string" >
                  <Card hoverable 
                      cover={<img alt="stringland tech string conversion/coding" src="https://www.linkpicture.com/q/stringland-strop_1.svg" />}
                    >
                      <Meta title="String Operation" description="string encode/decode, pasword generation and etc" />
                  </Card>
                  </a>
                </Col>
                <Col xs={16} xl={8} xxl={4}>
                  <a href="https://stringland.github.io/web/#/security/generate_checksum" >
                  <Card hoverable 
                      cover={<img alt="stringland tech security operation" src="https://www.linkpicture.com/q/stringland-security-v2.svg" />}
                    >
                      <Meta title="Security Operation" description="checksum and password generation" />
                  </Card>
                  </a>
                </Col>
                <Col xs={16} xl={8} xxl={4}>
                  <a href="https://stringland.github.io/web/#/mis_operations/convert_color" >
                  <Card hoverable 
                      cover={<img alt="stringland tech color code conversion" src="https://www.linkpicture.com/q/stringland-color.svg" />}
                    >
                      <Meta title="Color Operation" description="Conversion between different color codes, like RGB, HSV, CMYK and etc" />
                  </Card>
                  </a>
                </Col>
              </Row>
            </div>
          </section>
          <br />
          <Divider orientation="left"></Divider>
          <section>
            <Tag color="black">games</Tag>
            <div className="site-card-wrapper" style={{ marginTop:"1%"}}>
              <Row gutter={10}>
                <Col xs={16} xl={8} xxl={4}>
                  <a href="https://stringland.github.io/web/#/guess_number_game" >
                  <Card hoverable 
                      cover={<img alt="stringland tech guess number game" src="https://www.linkpicture.com/q/stringland-guessnum_2.svg" />}
                    >
                      <Meta title="Guess Number Game" description="Classic Bulls and Cows Game" />
                  </Card>
                  </a>
                </Col>
              </Row>
            </div>
          </section>
          <br />
          <Divider orientation="left"></Divider>
          <section>
            <Tag color="black">upcoming features</Tag>
            <div className="site-card-wrapper" style={{ marginTop:"1%"}}>
              <Row gutter={10}>
              <Col xs={16} xl={8} xxl={4}>
                  <Card hoverable
                      cover={<img alt="example" src="https://www.linkpicture.com/q/stringland-sdk_1.svg" />}
                    >
                      <Meta title="SDK" description="SDK for multiple programming languages" />
                  </Card>
                </Col>
                <Col xs={16} xl={8} xxl={4}>
                  <Card hoverable
                      cover={<img alt="example" src="https://www.linkpicture.com/q/stringland-game_1.svg" />}
                    >
                      <Meta title="Game Center" description="More simple casual games" />
                  </Card>
                </Col>
              </Row>
            </div>
          </section>
          <br />
        </div>
      );
    }
}

export default Home;