import React, { Component } from 'react'
import { Typography, Layout, Row, Col, Divider, Icon } from 'antd';
import { ScreenWidth } from '../helpers/window-dimensions'

class landing extends Component {

    render() {
        const { Title, Paragraph, Text } = Typography;
        return (
            <Layout style={{ padding: 25 }}>
                <Row type={'flex'} justify={'center'}>
                    <Title level={1}>About</Title>
                </Row>
                <Row type={'flex'} justify={'center'}>
                    <Text style={{ fontSize: 16, fontWeight: 400, textAlign: 'center' }}>Assignment Guide Assignment Guide provides their service to students around the world both local and International. It has been a successful and a marvellous journey of 6 years being in the Academic Writing Field. Most of our students currently has reached to the highest position with our academic support. Our key aspect is to provide a quality service by providing a best piece of writing right on time. We are highly recommended by our previous customers providing plagiarism free assignments and on time delivery.  Our hardworking writers are the key reason for our long-lasting good name and happy customers. </Text>
                </Row>

                <Layout>
                    <Row span={12}>
                        <Divider orientation={'left'}>
                            <Title level={3}>Guarantees</Title>
                        </Divider>
                    </Row>
                    <Layout style={{ paddingLeft: 50 }}>
                        <Row>
                            <Icon type="check-circle" theme="filled" />
                            <Text style={{fontSize:20}}>   100% Confidentiality</Text>
                        </Row>
                        <Row>
                            <Icon type="check-circle" theme="filled" />
                            <Text style={{fontSize:20}}>    24/7 Support</Text>
                        </Row>
                        <Row>
                            <Icon type="check-circle" theme="filled" />
                            <Text style={{fontSize:20}}>    Minimum Plagiarism</Text>
                        </Row>
                        <Row>
                            <Icon type="check-circle" theme="filled" />
                            <Text style={{fontSize:20}}>    2 step Quality Assurance</Text>
                        </Row>
                        <Row>
                            <Icon type="check-circle" theme="filled" />
                            <Text style={{fontSize:20}}>    Deadline Guaranteedßß</Text>
                        </Row>
                    </Layout>
                </Layout>

            </Layout>
        )
    }
}

export default landing;