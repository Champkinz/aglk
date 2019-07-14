import React, { Component } from 'react'
import { Row, Typography, Layout, Menu, Dropdown, Icon } from 'antd'
import aglk_logo from './img/aglk_logo.jpg'
import { Link, NavLink } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import landing from './component/landing'
import services from './component/services'
import payments from './component/payments'
import order from './component/order'
import contact from './component/contact'
import { ScreenWidth } from './helpers/window-dimensions';

class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
        this.actions.menuitem = this.actions.menuitem.bind(this)
    }

    actions = {
        menuitem: (e) => {
            console.log('key', e.key)
        }
    }

    render() {
        const { Title, Paragraph, Text } = Typography;
        const { Header, Footer, Sider, Content } = Layout;
        const menu = (
            <Menu>
                <Menu.Item key="3"><Title level={4}>Home</Title></Menu.Item>
                <Menu.Item key="3"><Title level={4}>Services</Title></Menu.Item>
                <Menu.Item key="3"><Title level={4}>Order</Title></Menu.Item>
                <Menu.Item key="3"><Title level={4}>Payments</Title></Menu.Item>
            </Menu>
        );
        return (
            <Layout>
                <Header>

                    {
                        ScreenWidth > 576 ?
                            (
                                <Row type='flex' justify='center'>
                                    <Menu
                                        theme="dark"
                                        mode="horizontal"
                                        defaultSelectedKeys={['1']}
                                        onClick={this.actions.menuitem}
                                        style={{ lineHeight: '64px' }}
                                    // overflowedIndicator={<Text>lol</Text>}
                                    >
                                        <Menu.Item key="4">
                                            <img src={aglk_logo} width={50} height={50} />
                                        </Menu.Item>
                                        <Menu.Item key="1"><NavLink to="/">Home</NavLink></Menu.Item>
                                        <Menu.Item key="2"><NavLink to="/services">Services</NavLink></Menu.Item>
                                        <Menu.Item key="5"><NavLink to="/order">Order</NavLink></Menu.Item>
                                        <Menu.Item key="3"><NavLink to="/payments">Payments</NavLink></Menu.Item>
                                        <Menu.Item key="6"><NavLink to="/contact">Contact</NavLink></Menu.Item>
                                    </Menu>
                                </Row>)
                            :
                            (<Row type='flex' justify='space-between'>
                                <img src={aglk_logo} width={50} height={50} />
                                <Dropdown placement="bottomCenter" overlay={menu} trigger={['click']}>
                                    <Icon style={{color:'#FFF',fontSize:20,paddingTop:20}} type="menu" />
                                </Dropdown>
                            </Row>
                            )
                    }
                </Header>
                <Content>
                    <Route
                        exact
                        path='/'
                        component={landing}
                    />
                    <Route
                        exact
                        path='/services'
                        component={services}
                    />
                    <Route
                        exact
                        path='/payments'
                        component={payments}
                    />
                    <Route
                        exact
                        path='/order'
                        component={order}
                    />
                    <Route
                        exact
                        path='/contact'
                        component={contact}
                    />
                </Content>
                <Footer>Footer</Footer>
            </Layout>
        )
    }
}

export default Home;