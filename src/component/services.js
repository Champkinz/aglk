import React, { Component } from 'react'
import { Typography, Layout, Row, Col, Card, Divider } from 'antd';
import { ScreenWidth } from '../helpers/window-dimensions'

class services extends Component {

    render() {
        const { Title, Paragraph, Text } = Typography;
        const { Meta } = Card;
        return (
            <Layout style={{ padding: 25, backgroundColor: '#FFF' }}>
                <Row type={'flex'} justify={'center'}>
                    <Title level={1}>Services</Title>
                </Row>

                <Layout style={{ backgroundColor: '#FFF', marginTop: 20 }}>
                    <Divider orientation={'left'}>
                        <Title level={4}>MBA/MSC ASSIGNMENTS</Title>
                    </Divider>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                    </Text>
                </Layout>
                <Layout style={{ backgroundColor: '#FFF', marginTop: 20 }}>
                    <Divider orientation={'left'}>
                        <Title level={4}>BSC Assignments</Title>
                    </Divider>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                    </Text>
                </Layout>
                <Layout style={{ backgroundColor: '#FFF', marginTop: 20 }}>
                    <Divider orientation={'left'}>
                        <Title level={4}>Diploma Assignments</Title>
                    </Divider>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                    </Text>
                </Layout>
                <Layout style={{ backgroundColor: '#FFF', marginTop: 20 }}>
                    <Divider orientation={'left'}>
                        <Title level={4}>HND ASSIGNMENTS</Title>
                    </Divider>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                    </Text>
                </Layout>
                <Layout style={{ backgroundColor: '#FFF', marginTop: 20 }}>
                    <Divider orientation={'left'}>
                        <Title level={4}>SLIM ASSIGNMENTS</Title>
                    </Divider>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                    </Text>
                </Layout>
                <Layout style={{ backgroundColor: '#FFF', marginTop: 20 }}>
                    <Divider orientation={'left'}>
                        <Title level={4}>PPT PRESENTATIONS</Title>
                    </Divider>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                    </Text>
                </Layout>

            </Layout>
        )
    }
}

export default services;