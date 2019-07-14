import React, { Component } from 'react'
import { ScreenWidth } from '../helpers/window-dimensions'
import {
    Row,
    Layout,
    Typography,
    Col,
    Input,
    Form, Icon, Button, Checkbox, Select, Cascader, InputNumber, DatePicker, Upload
} from 'antd';


const residences = [
    {
        value: 'Ph.D',
        label: 'Ph.D',
    },
    {
        value: 'MBA',
        label: 'MBA',
    },
    {
        value: 'MSc',
        label: 'MSc',
    },
    {
        value: 'BSc',
        label: 'BSc',
    },
    {
        value: 'BA',
        label: 'BA',
    },
    {
        value: 'Diploma',
        label: 'Diploma',
    },
    {
        value: 'HND/HNC',
        label: 'HND/HNC',
    },
    {
        value: 'A-Level',
        label: 'A-Level',
    },
    {
        value: 'GCSE',
        label: 'GCSE',
    },
];



class order extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }

        this.normFile = this.normFile.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };


    normFile = e => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };

    render() {
        const { Option } = Select;

        const { Title, Text } = Typography
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 5 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 5 },
            },
        };
        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '94',
        })(
            <Select style={{ width: 70 }}>
                <Option value="94">+94</Option>
            </Select>,
        );
        const config = {
            rules: [{ type: 'object', required: true, message: 'Please select time!' }],
        };


        return (
            <Layout style={{ backgroundColor: 'white' }}>
                <Row type={'flex'} justify={'center'} style={{ padding: 25 }}>
                    <Title level={1}>Order</Title>
                </Row>

                <Form {...formItemLayout} onSubmit={this.handleSubmit} className="login-form">
                    <Form.Item label="Student Name" hasFeedback>
                        {getFieldDecorator('username', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Username"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item label="E-mail">
                        {getFieldDecorator('email', {
                            rules: [
                                {
                                    type: 'email',
                                    message: 'The input is not valid E-mail!',
                                },
                                {
                                    required: true,
                                    message: 'Please input your E-mail!',
                                },
                            ],
                        })(<Input />)}
                    </Form.Item>
                    <Form.Item label="Phone Number">
                        {getFieldDecorator('phone', {
                            rules: [{ required: true, message: 'Please input your phone number!' }],
                        })(<Input addonBefore={prefixSelector} style={{ width: '100%' }} />)}
                    </Form.Item>
                    <Form.Item label="Level you are studying">
                        {getFieldDecorator('residence', {
                            initialValue: ['Ph.D'],
                            rules: [
                                { type: 'array', required: true, message: 'Please select your Level you are studying!' },
                            ],
                        })(<Cascader options={residences} />)}
                    </Form.Item>
                    <Form.Item label="Number of words required">
                        {getFieldDecorator('numberofwords', {
                            rules: [{ required: true, message: 'Please input number of words required!' }],
                        })(<InputNumber style={{ width: '100%' }} />)}
                    </Form.Item>
                    <Form.Item label="Course Workd Deadline">
                        {getFieldDecorator('deadline', config)(<DatePicker />)}
                    </Form.Item>
                    <Form.Item label="Dragger">
                        <div className="dropbox">
                            {getFieldDecorator('Assignment Breif', {
                                valuePropName: 'assignmentbrief',
                                getValueFromEvent: this.normFile,
                            })(
                                <Upload.Dragger name="files" action="/upload.do">
                                    <p className="ant-upload-drag-icon">
                                        <Icon type="inbox" />
                                    </p>
                                    <p className="ant-upload-text">Click or drag file to this area to upload</p>
                                    <p className="ant-upload-hint">Support for a single or bulk upload.</p>
                                </Upload.Dragger>,
                            )}
                        </div>
                    </Form.Item>
                    <Form.Item label="How did you hear about us" hasFeedback>
                        {getFieldDecorator('username', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                            <Input />,
                        )}
                    </Form.Item>
                    <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                        <Button type="primary" htmlType="submit">
                            Submit </Button>
                    </Form.Item>
                </Form>

            </Layout>
        )
    }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(order);
export default WrappedNormalLoginForm;