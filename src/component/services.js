import React, { Component } from 'react'
import { Typography, Layout, Row, Col, Card, Divider } from 'antd';
import { ScreenWidth } from '../helpers/window-dimensions'
import UIConfigurations from '../helpers/config';

class services extends Component {

    render() {
        const { name } = this.props

        const { Title, Paragraph, Text } = Typography;
        const { Meta } = Card;
        const just_black = UIConfigurations.global.colors.darker
        const just_white = UIConfigurations.global.colors.white
        return (
            <Layout style={{ padding: 25, backgroundColor: just_black }}>
                <Row type={'flex'} justify={'center'}>
                    <Title style={{ color: just_white }} level={1}>Services</Title>
                </Row>

                <Layout style={{ backgroundColor: just_black, marginTop: 20 }}>
                    <Divider orientation={'left'}>
                        <Title style={{ color: just_white }} level={4}>MBA/MSC ASSIGNMENTS</Title>
                    </Divider>
                    <Text style={{ color: just_white }}>
                        Assignmentguide.lk takes pride in offering only the finest standard of job with high quality adapted to your true needs. As one of our primary facilities, MBA / MSC assignments, which aim to give you a greater ease of mind within your various MBA / MSC assignments.                    </Text>
                </Layout>
                <Layout style={{ backgroundColor: just_black, marginTop: 20 }}>
                    <Divider orientation={'left'}>
                        <Title style={{ color: just_white }} level={4}>BSC Assignments</Title>
                    </Divider>
                    <Text style={{ color: just_white }}>
                        Assignmentguide.lk relies on BSC tasks and supports learners to complete all their educational work without worrying about the time and performance of their work. Our unrivaled, skilled reading assistance will help you effectively in all other academic writing processes.                    </Text>
                </Layout>
                <Layout style={{ backgroundColor: just_black, marginTop: 20 }}>
                    <Divider orientation={'left'}>
                        <Title style={{ color: just_white }} level={4}>Diploma Assignments</Title>
                    </Divider>
                    <Text style={{ color: just_white }}>
                        The main focus of assignmentguide.lk is to de-stress the minds of the learners through timely and credible task assistance. Diploma Assignment Writing as one of our key facilities should help you achieve a stronger ease of mind in your various kinds of diploma research.                    </Text>
                </Layout>
                <Layout style={{ backgroundColor: just_black, marginTop: 20 }}>
                    <Divider orientation={'left'}>
                        <Title style={{ color: just_white }} level={4}>HND ASSIGNMENTS</Title>
                    </Divider>
                    <Text style={{ color: just_white }}>
                        The aim of assignmentguide.lk is to offer you a high-quality assignment writing service particularly linked to your HND tasks that could achieve excellent qualifications. In addition, our assistance in all kinds of contract drafting is focused primarily on trustworthiness and shared comprehension. Therefore, here we try to meet all the requirements of HND tasks.                    </Text>
                </Layout>
                <Layout style={{ backgroundColor: just_black, marginTop: 20 }}>
                    <Divider orientation={'left'}>
                        <Title style={{ color: just_white }} level={4}>SLIM ASSIGNMENTS</Title>
                    </Divider>
                    <Text style={{ color: just_white }}>
                        For years now, Assignmentguide.lk provides specialist editing and revision facilities for SLIM tasks. We would like to offer you accessible and competent support in your SLIM tasks & initiatives, while mainly addressing our key principles.                    </Text>
                </Layout>
                <Layout style={{ backgroundColor: just_black, marginTop: 20 }}>
                    <Divider orientation={'left'}>
                        <Title style={{ color: just_white }} level={4}>PPT PRESENTATIONS</Title>
                    </Divider>
                    <Text style={{ color: just_white }}>
                        assignmentguide.lk can advise you on how to make your PowerPoint Presentations while guiding you through all assignments completing process at a reasonable cost.                    </Text>
                </Layout>

            </Layout>
        )
    }
}

export default services;