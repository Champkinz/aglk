import React, { Component } from 'react'
import { Typography, Layout, Row, Col, Divider, Icon, Card, Switch } from 'antd';
import Typist from 'react-typist';
import { ScreenWidth } from '../helpers/window-dimensions'
import { async } from 'q';
import UIConfigurations from '../helpers/config';

class landing extends Component {

    constructor(props) {
        super(props);
        this.state = {
            typist: true
        }

        this.typistTimeout = this.typistTimeout.bind(this);
    }

    typistTimeout() {
        setTimeout(async () => {
            await this.setState({ typist: false })
            this.setState({ typist: true })
        }, 1000);

    }

    render() {

        const { Title, Paragraph, Text } = Typography;
        const { Meta } = Card;
        const just_black = UIConfigurations.global.colors.darker 

        return (
            <Layout style={{ padding: 25, backgroundColor: just_black }}>
                <Row type={'flex'} justify={'center'}>
                    <Title level={1} style={{ color: 'white' }}>About</Title>
                </Row>
                <Row type={'flex'} justify={'center'}>
                    <Text style={{ color: "white", fontSize: 17, fontWeight: 400, textAlign: 'center', width: ScreenWidth - (ScreenWidth * 0.4) }}>Assignment Guide provides their service to students around the world both local and International. It has been a successful and a marvellous journey of 6 years being in the Academic Writing Field. Most of our students currently has reached to the highest position with our academic support. Our key aspect is to provide a quality service by providing a best piece of writing right on time. We are highly recommended by our previous customers providing plagiarism free assignments and on time delivery.  Our hardworking writers are the key reason for our long-lasting good name and happy customers. </Text>
                </Row>

                <Layout style={{ paddingBottom: 100, backgroundColor: just_black }}>
                    <Row span={24} style={{ paddingTop: 50, paddingBottom: 50 }} >
                        <Divider orientation={'left'}>
                            <Title level={3} style={{ color: 'white' }}>Guarantees</Title>
                        </Divider>
                    </Row>

                    <Row type={'flex'} justify={'center'}>
                        <Row style={{ width: ScreenWidth - (ScreenWidth * 0.2) }}>
                            <Col xs={24} lg={6} style={{ backgroundColor: '#2ecc71', height: 250, borderTopLeftRadius: 60, borderBottomRightRadius: 60 }}>
                                <Row type={'flex'} justify={'center'}>
                                    <Col span={24}>
                                        <Row type={'flex'} justify={'center'} style={{ padding: 10 }}>
                                            <Icon type="environment" theme="filled" style={{ color: 'white', fontSize: 30 }} />
                                        </Row>
                                    </Col>
                                    <Title level={4} style={{ fontSize: 20, color: 'white' }}>ON TIME DELIVERY</Title>
                                    <Text style={{ padding: 10, textAlign: 'center', color: 'white', fontSize: 16 }}>
                                        We deliver your assignment works on time & it’s 100% guaranteed.
                                    </Text>
                                </Row>
                            </Col>
                            <Col xs={24} lg={6} style={{ backgroundColor: '#e74c3c', height: 250, borderTopLeftRadius: 60, borderBottomRightRadius: 60 }}>
                                <Row type={'flex'} justify={'center'}>
                                    <Col span={24}>
                                        <Row type={'flex'} justify={'center'} style={{ padding: 10 }}>
                                            <Icon type="bank" theme="filled" style={{ color: 'white', fontSize: 30 }} />
                                        </Row>
                                    </Col>
                                    <Title level={4} style={{ fontSize: 20, color: 'white' }}>CONFIDENTIAL</Title>
                                    <Text style={{ padding: 10, textAlign: 'center', color: 'white', fontSize: 16 }}>
                                        Assignmentguide.lk will not reveal the details of our valued customers to any third parties and it’s 100% guaranteed.
                                    </Text>
                                </Row>
                            </Col>
                            <Col xs={24} lg={6} style={{ backgroundColor: '#3498db', height: 250, borderTopLeftRadius: 60, borderBottomRightRadius: 60 }}>
                                <Row type={'flex'} justify={'center'}>
                                    <Col span={24}>
                                        <Row type={'flex'} justify={'center'} style={{ padding: 10 }}>
                                            <Icon type="eye-invisible" theme="filled" style={{ color: 'white', fontSize: 30 }} />
                                        </Row>
                                    </Col>
                                    <Title level={4} style={{ fontSize: 20, color: 'white', letterSpacing: 2 }}>PLAGIARISM FREE</Title>
                                    <Text style={{ padding: 10, textAlign: 'center', color: 'white', fontSize: 16 }}>
                                        All our MBA, & HND assignment works guaranteed 100% plagiarism free                                    </Text>
                                </Row>
                            </Col>
                            <Col xs={24} lg={6} style={{ backgroundColor: '#f1c40f', height: 250, borderTopLeftRadius: 60, borderBottomRightRadius: 60 }}>
                                <Row type={'flex'} justify={'center'}>
                                    <Col span={24}>
                                        <Row type={'flex'} justify={'center'} style={{ padding: 10 }}>
                                            <Icon type="carry-out" theme="filled" style={{ color: 'white', fontSize: 30 }} />
                                        </Row>
                                    </Col>
                                    <Title level={4} style={{ fontSize: 20, color: 'white' }}>SATISFACTION</Title>
                                    <Text style={{ padding: 10, textAlign: 'center', color: 'white', fontSize: 16 }}>
                                        Our top priority has given to our customer’s satisfaction & each assignment comes with professional proofreading & unlimited revisions.
                                                         </Text>
                                </Row>
                            </Col>
                        </Row>
                    </Row>

                    {
                        ScreenWidth > 576 ?
                            (<Row span={24} style={{ paddingTop: 50, paddingBottom: 50 }} >
                                <Divider orientation={'left'} style={{ paddingLeft: 20 }}>
                                    <Title level={3} style={{ color: "white" }}>What Do We Expect To Deliver For Students?</Title>
                                </Divider>
                            </Row>) : (<Row span={24} style={{ paddingTop: 50, paddingBottom: 50 }} >
                                <Divider orientation={'left'} style={{ paddingLeft: 20 }}>
                                    <Title level={3} style={{ color: "white" }}>What Do We Expect<br /> To Deliver For Students?</Title>
                                </Divider>
                            </Row>)
                    }


                    <Row type={'flex'} justify={'center'} style={{ marginBottom: 100 }}>
                        <Row style={{ width: ScreenWidth - (ScreenWidth * 0.2) }}>
                            <Col xs={24} lg={6} style={{ height: 250 }}>
                                <Card
                                    hoverable
                                    cover={<img alt="example" src="https://i.imgur.com/M8pm8l6.jpg" />}
                                >
                                    <Col>
                                        <Title level={4} style={{ color: "#2980b9" }}>OUR PRODUCTS</Title>
                                    </Col>
                                    <Col style={{ paddingBottom: 10 }}>
                                        <Text style={{ color: '#2c3e50' }}>MBA / MSC Assignments</Text>
                                    </Col>
                                    <Col style={{ paddingBottom: 10 }}>
                                        <Text style={{ color: '#2c3e50' }}>HND / HNC Assignments</Text>
                                    </Col>
                                    <Col style={{ paddingBottom: 10 }}>
                                        <Text style={{ color: '#2c3e50' }}>CourseWork / Term Paper</Text>
                                    </Col>
                                </Card>
                            </Col>

                            <Col xs={24} lg={6} style={{ height: 250 }}>
                                <Card
                                    hoverable
                                    cover={<img alt="example" src="https://i.imgur.com/RsWqNQN.jpg" />}
                                >
                                    <Col>
                                        <Title level={4} style={{ color: "#2980b9" }}>OUR UNIQUE FEATURES</Title>
                                    </Col>
                                    <Col style={{ paddingBottom: 10 }}>
                                        <Text style={{ color: '#2c3e50' }}>100% Privacy Guarantee</Text>
                                    </Col>
                                    <Col style={{ paddingBottom: 10 }}>
                                        <Text style={{ color: '#2c3e50' }}>Discounts & Special offers</Text>
                                    </Col>
                                    <Col style={{ paddingBottom: 10 }}>
                                        <Text style={{ color: '#2c3e50' }}>All papers are custom-made</Text>
                                    </Col>
                                    <Col style={{ paddingBottom: 10 }}>
                                        <Text style={{ color: '#2c3e50' }}>24x7 Service</Text>
                                    </Col>
                                    <Col style={{ paddingBottom: 10 }}>
                                        <Text style={{ color: '#2c3e50' }}>Minimum Plagarism</Text>
                                    </Col>
                                </Card>
                            </Col>

                            <Col xs={24} lg={6} style={{ height: 250 }}>
                                <Card
                                    hoverable
                                    cover={<img alt="example" src="https://i.imgur.com/lMIKnEI.jpg" />}
                                >
                                    <Col>
                                        <Title level={4} style={{ color: "#2980b9" }}>LEVELS</Title>
                                    </Col>
                                    <Col style={{ paddingBottom: 10 }}>
                                        <Text style={{ color: '#2c3e50' }}>MBA / MSC</Text>
                                    </Col>
                                    <Col style={{ paddingBottom: 10 }}>
                                        <Text style={{ color: '#2c3e50' }}>BSc /BA</Text>
                                    </Col>
                                    <Col style={{ paddingBottom: 10 }}>
                                        <Text style={{ color: '#2c3e50' }}>Diploma</Text>
                                    </Col>
                                    <Col style={{ paddingBottom: 10 }}>
                                        <Text style={{ color: '#2c3e50' }}>HND / HNC</Text>
                                    </Col>
                                    <Col style={{ paddingBottom: 10 }}>
                                        <Text style={{ color: '#2c3e50' }}>Professional Level</Text>
                                    </Col>
                                </Card>
                            </Col>

                            <Col xs={24} lg={6} style={{ height: 250 }}>
                                <Card
                                    hoverable
                                    cover={<img alt="example" src="https://i.imgur.com/lnn3rUL.jpg" />}
                                >
                                    <Col>
                                        <Title level={4} style={{ color: "#2980b9" }}>OUR STRENGTH</Title>
                                    </Col>
                                    <Col style={{ paddingBottom: 10 }}>
                                        <Text style={{ color: '#2c3e50' }}>Most Trusted</Text>
                                    </Col>
                                    <Col style={{ paddingBottom: 10 }}>
                                        <Text style={{ color: '#2c3e50' }}>Qualified Writer</Text>
                                    </Col>
                                    <Col style={{ paddingBottom: 10 }}>
                                        <Text style={{ color: '#2c3e50' }}>Customers</Text>
                                    </Col>
                                </Card>
                            </Col>
                        </Row>
                    </Row>

                    <Row style={{ marginTop: 150 }}>

                    </Row>
                    <Row span={24} style={{ paddingTop: 50, paddingBottom: 50 }} >
                        <Divider orientation={'left'} style={{ paddingLeft: 20 }}>
                            <Title level={3} style={{ color: 'white' }}>Our Customers Base</Title>
                        </Divider>
                    </Row>



                    <Row style={{ minHeight: 200 }}>
                        {
                            this.state.typist &&
                            <Typist cursor={{ show: false, blink: false }} onTypingDone={() => this.typistTimeout()}>
                                <Row type={'flex'} justify={'center'}>
                                    <Col>
                                        <Title level={1} style={{ color: '#2ecc71' }}>Sri Lanka,</Title>
                                    </Col>
                                    <Col>
                                        <Title level={1} style={{ color: '#3498db' }}>United Kingdom,</Title>
                                    </Col>
                                    <Col>
                                        <Title level={1} style={{ color: '#f1c40f' }}>Maldives,</Title>
                                    </Col>
                                    <Col>
                                        <Title level={1} style={{ color: '#e67e22' }}>New Zealand,</Title>
                                    </Col>
                                    <Col>
                                        <Title level={1} style={{ color: '#e74c3c' }}>Australia,</Title>
                                    </Col>
                                    <Col>
                                        <Title level={1} style={{ color: '#34495e', textAlign: 'center' }}>United Arab Emirates</Title>
                                    </Col>
                                </Row>
                            </Typist>
                        }
                    </Row>



                </Layout>
            </Layout>
        )
    }
}

export default landing;