import {v4 as uuidv4} from 'uuid';
import React from 'react';
import 'antd/dist/antd.css';
import axios from 'axios'
import { Typography, Input, Button, Form, message  } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import Highlighter from "react-highlight-words";
const { TextArea } = Input;
const { Title, Paragraph } = Typography;

export class WordCount extends React.Component {  
    constructor(props) {
      super(props);
      this.state = {
        originalText: 'this article has many words. let us do the word count.',
        result: 'convert string case',
        words: ['word', 'count'],
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
 
      this.handleOnFinish = this.handleOnFinish.bind(this);
    }

    handleOnFinish(values) {
        console.log('Received values of form:', values);

        const sessionId = uuidv4();
        const reqId = "txt-srh-"+sessionId;
        const data = {
            sessionID: sessionId, 
            requestID: reqId,
            userID: 'default_user',
            text: values.article,
            patterns: values.words,
            opType: this.state.opType,
            patternType: this.state.patternType
        };

        axios.post('https://nifty-gasket-338410.wl.r.appspot.com/text_search', data, {
            'Content-Type': 'application/json'
        }).then(
            response => {
                this.setState({ result: response.data.errMsg, showRes: true })

                var wdCnt = ""
                Object.keys(response.data.patternCount).forEach(function(key) {
                    wdCnt = wdCnt + key + ": " + response.data.patternCount[key] + "\n" 
                });

                this.setState({
                    originalText: data.text,
                    words: data.patterns,
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
            <Title style={{textAlign: "center", fontSize:'3vh'}} >Words Count</Title>
            <Paragraph style={{textAlign: "center", fontSize: "large"}}>
              Show multiple words' count of given text. 
            </Paragraph>
          </div>
          <div style={{ marginTop: '2%'}}>
            <Form name="dynamic_form_item" {...this.formItemLayoutWithOutLabel} onFinish={this.handleOnFinish}> 
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
                        <Form.Item
                            {...this.formItemLayout}
                            required={false} key={field.key}
                        >
                            <Form.Item
                                {...field}
                                validateTrigger={['onChange', 'onBlur']}
                                rules={[{
                                        required: true,
                                        whitespace: true,
                                        message: "Please input the word/phrase or delete this field.",
                                    },
                                ]}
                                noStyle
                                >
                                <Input placeholder="apple" style={{ width: '30%' }} />
                            </Form.Item>
                            {fields.length > 1 ? (
                                <MinusCircleOutlined className="dynamic-delete-button" onClick={() => remove(field.name)}/>
                            ) : null}
                        </Form.Item>
                        ))}
                        <Form.Item {...this.formItemLayout}>
                            <Button type="dashed" onClick={() => add()} style={{ width: '20%' }} icon={<PlusOutlined />}>
                                Add New Word(s)
                            </Button>
                            <Form.ErrorList errors={errors} />
                        </Form.Item>
                    </>
                    )}
                </Form.List>
                <Form.Item name='article' {...this.formItemLayout}>
                    <TextArea showCount maxLength={3000000} rows={10} />
                </Form.Item>
                <Form.Item {...this.formItemLayout}>
                    <Button style={{ float:'right' }} type="primary" htmlType="submit">Submit</Button>
                </Form.Item>
            </Form>
          </div>
          <div style={{ marginTop: "2%", display: this.state.showRes ? "block" : "none" }}>
            <Highlighter highlightClassName="YourHighlightClass" searchWords={this.state.words} autoEscape={true}
            textToHighlight={this.state.originalText}/>
          </div>
          <div style={{ marginTop: '5%', display: this.state.showRes ? "block" : "none" }}>
            <TextArea showCount value={this.state.result} rows={10} readOnly />
          </div>
        </div>
      );
    }
}

export default WordCount;