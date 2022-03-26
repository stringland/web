import {v4 as uuidv4} from 'uuid';
import React from 'react';
import 'antd/dist/antd.css';
import axios from 'axios'
import { Typography, Select, Input, Button, Form, Divider,Row, Col, message  } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import Highlighter from "react-highlight-words";
const { Option } = Select;
const { TextArea } = Input;
const { Title, Paragraph } = Typography;

export class WordCount extends React.Component {  
    constructor(props) {
      super(props);
      this.state = {
        originalText: 'i love stringland tech and apple.',
        originalRegExp: '[a-t]',
        srcPattern: '',
        replacePattern: '',
        resText: 'i love stringland tech and apple.',
        result: '',
        words: ['stringland'],
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
        opType: Number(event.value),
        srcPattern: '',
        replacePattern: '',
        words: ['']
      })
    }

    handlePatternTypeDropDown(event) {
      var patternType = Number(event.value)
      if(patternType === 1){
        this.setState({
          patternType: patternType,
          srcPattern: '',
          replacePattern: '',
          words: ['']
        });
      } else {
        this.setState({
          patternType: patternType,
          srcPattern: '',
          replacePattern: '',
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
        this.setState({words:wds})
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
        const sessionId = uuidv4();
        const reqId = "txt-srh-"+sessionId;
        const data = {
            sessionID: sessionId, 
            requestID: reqId,
            userID: 'default_user',
            text: this.state.originalText,
            patterns: this.state.words,
            opType: this.state.opType,
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
                if(this.state.opType === 2){
                  txt = response.data.str
                  wdCnt = "deleted words count: "
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
                this.setState({
                    resText: txt,
                    words: words,
                    result: wdCnt
                })
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
        <div>
          <div style={{ border: '1px solid rgb(235, 237, 240)' }}>
            <Title style={{textAlign: "center", fontSize:'3vh'}} >Text Search and Replacement</Title>
            <Paragraph style={{textAlign: "center", fontSize: "large"}}>
              Show multiple words' count of given text. Or replace word(s) with regular expression or other word.
            </Paragraph>
          </div>
          <div style={{ marginTop: '2%'}}>
            <Select labelInValue defaultValue={{ value: '1' }} style={{ width: '25%' }} onChange={this.handleOpTypeDropDown}>
                <Option value="1">Search</Option>
                <Option value="2">Replace</Option>
            </Select>
          </div>
          <Divider />
          <div style={{ marginTop: '2%'}}>
            <Select labelInValue defaultValue={{ value: '1' }} style={{ width: '25%' }} onChange={this.handlePatternTypeDropDown}>
                <Option value="1">Words</Option>
                <Option value="2">Regular Expression</Option>
            </Select>
          </div>
          <Divider />
          <div style={{ marginTop: '2%', display: this.state.opType === 1 && this.state.patternType === 1 ? "block" : "none"}}>
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
          <div style={{ marginTop: '2%', display: this.state.opType === 1 && this.state.patternType === 2 ? "block" : "none"}}>
            <Input maxLength={110} value={this.state.originalRegExp} onChange={this.handleRegExpChange} />
          </div>
          <div style={{ marginTop: '2%', display: this.state.opType === 2 ? "block" : "none"}}>
            <Row gutter={10}>
              <Col xs={16} xl={8} xxl={4}>
                <Input maxLength={110} value={this.state.srcPattern} onChange={this.handleSrcPatternChange} />
              </Col>
              <Col xs={16} xl={8} xxl={4}>
                <Input maxLength={110} value={this.state.replacePattern} onChange={this.handleReplacePatternChange} />
              </Col>
            </Row>
          </div>
          <Divider />
          <div style={{ marginTop: '2%'}}>
            <TextArea showCount maxLength={3000000} rows={10} value={this.state.originalText} onChange={this.handleTextChange} />
          </div>
          <div style={{ marginTop: '2%'}}>
            <Button style={{ float:'right' }} type="primary" value="Submit" onClick={this.handleSubmit}>Submit</Button>
          </div>
          <div style={{ marginTop: "2%", display: this.state.showRes ? "block" : "none" }}>
            <Highlighter highlightClassName="YourHighlightClass" searchWords={this.state.words} autoEscape={true}
            textToHighlight={this.state.resText}/>
          </div>
          <div style={{ marginTop: '5%', display: this.state.showRes ? "block" : "none" }}>
            <TextArea showCount value={this.state.result} rows={10} readOnly />
          </div>
        </div>
      );
    }
}

export default WordCount;