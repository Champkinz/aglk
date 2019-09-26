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
import UIConfigurations from '../helpers/config';


const residences = [
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
    s

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

        const just_black = UIConfigurations.global.colors.darker
        const just_white = UIConfigurations.global.colors.white

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
            <Layout style={{ backgroundColor: just_black }}>
                <Row type={'flex'} justify={'center'} style={{ padding: 25 }}>
                    <Title style={{ color: just_white }} level={1}>Order</Title>
                </Row>

                <Row type={'flex'} justify={'center'}>
                    <Row style={{ paddingLeft: 50, paddingBottom: 80, backgroundColor: just_black, width: ScreenWidth / 3 }} >
                        <form method="POST" action="https://formspree.io/assignmentguide2015@gmail.com">
                            <Row type={'flex'} justify={'space-between'} style={{ paddingBottom: 20 }}>

                                <Text style={{ color: just_white }}>Student Name : </Text>
                                <input type="text" name="Name" />

                            </Row>
                            <Row type={'flex'} justify={'space-between'} style={{ paddingBottom: 20 }}>
                                <Text style={{ color: just_white }}>Email : </Text>
                                <input type="email" name="email" />
                            </Row>
                            <Row type={'flex'} justify={'space-between'} style={{ paddingBottom: 20 }}>
                                <Text style={{ color: just_white }}>Phone Number : </Text>
                                <input type="tel" name="Phone  Number" />
                            </Row>
                            <Row type={'flex'} justify={'space-between'} style={{ paddingBottom: 20 }}>
                                <Text style={{ color: just_white }}>Level of Studying: </Text>
                                <select name="Level of Studying:">
                                    <option value="volvo">MBA</option>
                                    <option value="saab">MSc</option>
                                    <option value="fiat">BSc</option>
                                    <option value="audi">Diploma</option>
                                    <option value="audi">HND</option>
                                    <option value="audi">SLIM</option>
                                    <option value="audi">PPT</option>
                                </select>
                            </Row>
                            <Row type={'flex'} justify={'space-between'} style={{ paddingBottom: 20 }}>
                                <Text style={{ color: just_white }}>Number of Words Required: </Text>
                                <input type="number" name="Phone  Number" />
                            </Row>

                            <Row type={'flex'} justify={'space-between'} style={{ paddingBottom: 20 }}>
                                <Text style={{ color: just_white }}>Course work Deadline :</Text>
                                <input type="date" name="Phone  Number" />
                            </Row>
                            <Row type={'flex'} justify={'space-between'} style={{ paddingBottom: 20 }}>
                                <Text style={{ color: just_white }}>Assignment Brief :</Text>

                                <textarea rows="4" name="Assignment Brief" ></textarea>

                            </Row>
                            <Row type={'flex'} justify={'space-between'} style={{ paddingBottom: 40 }}>
                                <Text style={{ color: just_white }}>How did you hear about us: </Text>
                                <select name="How did you hear about us:">
                                    <option value="volvo">Google</option>
                                    <option value="saab">Facebook</option>
                                    <option value="fiat">Twitter</option>
                                    <option value="audi">Instagram</option>
                                    <option value="audi">Other</option>
                                </select>
                            </Row>
                            <Row type="flex" justify="center">
                                <button type="submit">Submit</button>
                            </Row>
                        </form>
                    </Row>
                </Row>





                {/* <Form style={{color:just_white}} {...formItemLayout} onSubmit={this.handleSubmit} className="login-form">
                    <Form.Item label="Student Name" hasFeedback>
                        {getFieldDecorator('username', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                            <Input
                                prefix={<Icon type="user" style={{ color: just_black }} />}
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
                            initialValue: ['MBA'],
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
                </Form> */}

            </Layout>
        )
    }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(order);
export default WrappedNormalLoginForm;