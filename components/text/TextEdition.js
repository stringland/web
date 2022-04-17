import {v4 as uuidv4} from 'uuid';
import React from 'react';
import 'antd/dist/antd.css';
import axios from 'axios'
import { Typography, Select, Input, Button, Form, Divider,Row, Col, message, Tabs , Menu, Dropdown } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import Highlighter from "react-highlight-words";
const { Option } = Select;
const { TextArea } = Input;
const { TabPane } = Tabs;
const { Title, Paragraph } = Typography;

export class TextEdition extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      originalText: 'i love stringland tech and apple.',
      originalRegExp: '[a-t]',
      originalSearchWrods: [],
      srcPattern: '',
      replacePattern: '',
      resText: 'i love stringland tech and apple.',
      result: '',
      words: ['stringland'],
      wdText: '',
      opType: 1,
      patternType: 1,
      showRes: false,
      disableSubmit: true
    };

    this.formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 4 },
          },
          wrapperCol: {
          xs: { span: 24 },
          sm: { span: 20 },
        },
    };
    this.formItemLayoutWithOutLabel = {
        wrapperCol: {
          xs: { span: 24, offset: 0 },
          sm: { span: 20, offset: 4 },
        },
    };

    this.handleOpTypeDropDown = this.handleOpTypeDropDown.bind(this);
    this.handlePatternTypeDropDown = this.handlePatternTypeDropDown.bind(this);
    this.handleWordsChange = this.handleWordsChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleRegExpChange = this.handleRegExpChange.bind(this);
    this.handleSrcPatternChange = this.handleSrcPatternChange.bind(this);
    this.handleReplacePatternChange = this.handleReplacePatternChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleOpTypeDropDown(event) {
    this.setState({
      opType: Number(event.key),
      srcPattern: '',
      replacePattern: '',
      wdText: '',
      words: ['']
    })
  }

  handlePatternTypeDropDown(event) {
    var patternType = Number(event.key)
    if(patternType === 1){
      this.setState({
        patternType: patternType,
        srcPattern: '',
        replacePattern: '',
        wdText: '',
        words: this.state.originalSearchWrods
      });
    } else {
      this.setState({
        patternType: patternType,
        srcPattern: '',
        replacePattern: '',
        wdText: '',
        words:[this.state.originalRegExp]
      });
    }
  }

  handleWordsChange(_, allFields) {
    var wds = []
    var words = allFields.words
    for(var i = 0; i < words.length;i++){
      if(words[i] === "" || words[i] === undefined) {
        continue
      }
      wds = [...wds, words[i]]
    }
    if(wds.length > 0) {
      this.setState({words:wds, originalSearchWrods:wds})
    }
  }

  handleTextChange(event) {
    this.setState({originalText: event.target.value});
  }

  handleRegExpChange(event) {
    this.setState({
      originalRegExp: event.target.value,
      words: [event.target.value]
    });
  }

  handleSrcPatternChange(event) {
    var wds = [event.target.value, this.state.replacePattern]
    this.setState({
      srcPattern: event.target.value,
      words: wds
    })
  }

  handleReplacePatternChange(event) {
    var wds = [this.state.srcPattern, event.target.value]
    this.setState({
      replacePattern: event.target.value,
      words: wds
    })
  }

  handleSubmit() {
    if(this.state.opType < 100) {
      this.handleTextEdit()
    } else {
      this.handleTextSearch()
    }
  }

  handleTextEdit() {
      const sessionId = uuidv4();
      const reqId = "edit-txt-"+sessionId;
      const data = {
        sessionID: sessionId, 
        requestID: reqId,
        userID: 'default_user',
        str: this.state.originalText,
        opType: this.state.opType
      };

      axios.post('https://nifty-gasket-338410.wl.r.appspot.com/edit_text', data, {
        'Content-Type': 'application/json'
      }).then(
        response => this.setState({ result: response.data.str, showRes: true })
      ).catch(err => {
        //console.log(err.response);
        if(err.response.status === 400){
          message.error(err.response.data.errMsg);
        } else {
          message.error('sth goes wrong. please give one more try after a while.');
        }
      });
  };

  handleTextSearch() {
      const sessionId = uuidv4();
      const reqId = "txt-srh-"+sessionId;
      const opType = this.state.opType - 100
      const data = {
          sessionID: sessionId, 
          requestID: reqId,
          userID: 'default_user',
          text: this.state.originalText,
          patterns: this.state.words,
          opType: opType,
          patternType: this.state.patternType
      };

      axios.post('https://nifty-gasket-338410.wl.r.appspot.com/text_search', data, {
          'Content-Type': 'application/json'
      }).then(
          response => {
              this.setState({ result: response.data.errMsg, showRes: true })
              var words = []
              var wdCnt = ""
              var txt = data.text
              if(this.state.opType === 102){
                txt = response.data.str
                wdCnt = "deleted words count: \n"
              }

              if(response.data.hasOwnProperty('patternCount')) {
                Object.keys(response.data.patternCount).forEach(function(key) {
                    wdCnt = wdCnt + key + ": " + response.data.patternCount[key] + "\n" 
                    words = [...words, key]
                });
              }
              if(wdCnt === "") {
                wdCnt = "no match is found ..."
              }

              if(this.state.opType === 101){
                this.setState({
                    resText: txt,
                    words: words,
                    result: wdCnt
                })
              } else {
                this.setState({
                    result: txt,
                    wdText: wdCnt
                })
              }
          }
      ).catch(err => {
          //console.log(err.response);
          if(err.response.status === 400){
            message.error(err.response.data.errMsg);
          } else {
            message.error('sth goes wrong. please give one more try after a while.');
          }
        });
  };

  render() {
    return (
      <div style={{ minHeight: '110vh' }}>
        <div style={{ border: '1px solid rgb(235, 237, 240)', marginTop: '2%' }}>
          <Title style={{textAlign: "center", fontSize:'3vh'}} >Simple Text Editor</Title>
          <Paragraph style={{textAlign: "left", fontSize: "large"}}>
            This editor provides following functionalities:
          </Paragraph>
          <Paragraph style={{textAlign: "left", fontSize: "large"}}>
            1.Convert cases and reverse content of given text.
          </Paragraph>
          <Paragraph style={{textAlign: "left", fontSize: "large"}}>
            2.Show multiple words' count of given text by providing multiple target words or one regular expression. Or replace word(s) with other word through regular expression or words match.
          </Paragraph>
        </div>
        <div style={{ marginTop: '2%'}}>
          <Row gutter={2}>
            <Col xs={16} xl={6} xxl={3}>
              <Dropdown style={{ width: '25%' }} overlay={
                <Menu onClick={this.handleOpTypeDropDown}>
                  <Menu.Item key="1">
                    Case  Conversion
                  </Menu.Item>
                  <Menu.Item key="3">
                    Reverse Text
                  </Menu.Item>
                </Menu>
              }>
                <Button>Conversion and Reverse</Button>
              </Dropdown>
            </Col>
            <Col xs={16} xl={6} xxl={3}>
              <Dropdown style={{ width: '25%' }} overlay={
                <Menu onClick={this.handleOpTypeDropDown}>
                  <Menu.Item key="101">
                    Search by words or regexp
                  </Menu.Item>
                  <Menu.Item key="102">
                    Replace by words or regexp
                  </Menu.Item>
                </Menu>
              }>
                <Button>Search and Replacement</Button>
              </Dropdown>
            </Col>
          </Row>
        </div>
        <Divider />
        <div style={{ display: this.state.opType < 100 ? "block" : "none", marginTop: '2%'}}>
          <Select labelInValue defaultValue={{value: '1'}} 
            style={{ display: this.state.opType < 3 ? "block" : "none", width: '25%' }} onChange={this.handleOpTypeDropDown}>
              <Option value="1">Upper Case</Option>
              <Option value="2">Lower Case</Option>
          </Select>
          <Select labelInValue defaultValue={{value: '3'}} 
            style={{ display: this.state.opType >= 3 ? "block" : "none", width: '25%' }} onChange={this.handleOpTypeDropDown}>
              <Option value="3">Reverse Characters</Option>
              <Option value="4">Reverse Lines</Option>
              <Option value="5">Reverse Characters by Lines</Option>
          </Select>
        </div>
        <div style={{ display: this.state.opType > 100 ? "block" : "none", marginTop: '2%'}}>
          <Select labelInValue defaultValue={{ value: '1' }} style={{ width: '25%' }} onChange={this.handlePatternTypeDropDown}>
              <Option value="1">Words</Option>
              <Option value="2">Regular Expression</Option>
          </Select>
        </div>
        <Divider style={{display: this.state.opType > 100 ? "block" : "none"}}/>
        <div style={{ marginTop: '2%', display: this.state.opType === 101 && this.state.patternType === 1 ? "block" : "none"}}>
          <Form name="dynamic_form_item" {...this.formItemLayoutWithOutLabel} onValuesChange={this.handleWordsChange} > 
              <Form.List name="words"
                  rules={[{
                      validator: async (_, words) => {
                          if (!words || words.length < 1) {
                              return Promise.reject(new Error('At least 1 word/phrase'));
                          }
                      },
                  },
                  ]}
              >
                  {(fields, { add, remove }, { errors }) => (
                  <>
                      {fields.map((field, index) => (
                      <Form.Item {...this.formItemLayout} required={false} key={field.key}>
                          <Form.Item
                              {...field}
                              validateTrigger={['onChange', 'onBlur']}
                              rules={[
                                  {
                                      required: true,
                                      whitespace: true,
                                      message: "Please input words or delete this field.",
                                  },
                              ]}
                              noStyle
                              >
                              <Input placeholder="stringland tech" style={{ width: '30%' }} />
                          </Form.Item>
                          {fields.length > 1 ? (
                              <MinusCircleOutlined className="dynamic-delete-button" onClick={() => remove(field.name)}/>
                          ) : null}
                      </Form.Item>
                      ))}
                      <Form.Item {...this.formItemLayout}>
                          <Button type="dashed" onClick={() => add()} style={{ width: '20%' }} icon={<PlusOutlined />}>
                              Add Word(s)
                          </Button>
                          <Form.ErrorList errors={errors} />
                      </Form.Item>
                  </>
                  )}
              </Form.List>
          </Form>
        </div>
        <div style={{ marginTop: '2%', display: this.state.opType === 101 && this.state.patternType === 2 ? "block" : "none"}}>
          <Input maxLength={110} value={this.state.originalRegExp} onChange={this.handleRegExpChange} />
        </div>
        <div style={{ marginTop: '2%', display: this.state.opType === 102 ? "block" : "none"}}>
          <Row gutter={10}>
            <Col xs={16} xl={8} xxl={4}>
              source word/regular expression<Input maxLength={110} value={this.state.srcPattern} onChange={this.handleSrcPatternChange} />
            </Col>
            <Col xs={16} xl={8} xxl={4}>
              replace word<Input maxLength={110} value={this.state.replacePattern} onChange={this.handleReplacePatternChange} />
            </Col>
          </Row>
        </div>
        <Divider style={{display: this.state.opType > 100 ? "block" : "none"}} />
        <div style={{ marginTop: '2%'}}>
          <Tabs defaultActiveKey="1">
            <TabPane tab="Input Text" key="1">
              <TextArea showCount maxLength={3000000} rows={20} value={this.state.originalText} onChange={this.handleTextChange} />
            </TabPane>
            <TabPane tab="Result Text" disabled={this.state.showRes === false} key="2">
              <div style={{ display: this.state.showRes ? "block" : "none" }}>
                <TextArea showCount value={this.state.result} rows={20} readOnly />
              </div>
              <div style={{ display: this.state.showRes && this.state.opType === 102 ? "block" : "none" }}>
                <TextArea showCount value={this.state.wdText} rows={10} readOnly />
              </div>
              <div style={{ marginTop: "2%", display: this.state.showRes && this.state.opType === 101 ? "block" : "none" }}>
                <Highlighter highlightClassName="YourHighlightClass" searchWords={this.state.words} autoEscape={true}
                textToHighlight={this.state.resText}/>
              </div>
            </TabPane>
          </Tabs>
        </div>
        <div style={{ marginTop: '2%'}}>
          <Button style={{ float:'right' }} type="primary" value="Submit" onClick={this.handleSubmit}>Submit</Button>
        </div>
      </div>
    );
  }
}

export default TextEdition;