import React, { Component } from "react";
import { Row, Typography, Layout, Menu, Dropdown, Icon, Col } from "antd";
import aglk_logo from "./img/aglk_logo.jpg";
import { Link, NavLink } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import landing from "./component/landing";
import Services from "./component/services";
import payments from "./component/payments";
import order from "./component/order";
import contact from "./component/contact";
import { ScreenWidth } from "./helpers/window-dimensions";
import UIConfigurations from "./helpers/config";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "charana",
    };
    this.actions.menuitem = this.actions.menuitem.bind(this);
  }

  actions = {
    menuitem: (e) => {
      console.log("key", e.key);
    },
  };

  render() {
    const { Title, Paragraph, Text } = Typography;
    const { Header, Footer, Sider, Content } = Layout;
    const menu = (
      <Menu>
        <Menu.Item key="3">
          <Title level={4}>
            <NavLink to={process.env.PUBLIC_URL + "/"}>Home</NavLink>
          </Title>
        </Menu.Item>
        <Menu.Item key="3">
          <Title level={4}>
            <NavLink to={process.env.PUBLIC_URL + "/services"}>
              Services
            </NavLink>
          </Title>
        </Menu.Item>
        <Menu.Item key="3">
          <Title level={4}>
            <NavLink to={process.env.PUBLIC_URL + "/order"}>Order</NavLink>
          </Title>
        </Menu.Item>
        <Menu.Item key="3">
          <Title level={4}>
            <NavLink to={process.env.PUBLIC_URL + "/payments"}>
              Payments
            </NavLink>
          </Title>
        </Menu.Item>
        <Menu.Item key="6">
          <Title level={4}>
            <NavLink to={process.env.PUBLIC_URL + "/contact"}>Contact</NavLink>
          </Title>
        </Menu.Item>
      </Menu>
    );
    return (
      <Layout>
        <Header>
          {ScreenWidth > 576 ? (
            <Row type="flex" justify="center">
              <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={["1"]}
                onClick={this.actions.menuitem}
                style={{ lineHeight: "64px" }}
                // overflowedIndicator={<Text>lol</Text>}
              >
                <Menu.Item key="4">
                  <img src={aglk_logo} width={50} height={50} />
                </Menu.Item>
                <Menu.Item key="1">
                  <NavLink to={process.env.PUBLIC_URL + "/"}>Home</NavLink>
                </Menu.Item>
                <Menu.Item key="2">
                  <NavLink to={process.env.PUBLIC_URL + "/services"}>
                    Services
                  </NavLink>
                </Menu.Item>
                <Menu.Item key="5">
                  <NavLink to={process.env.PUBLIC_URL + "/order"}>
                    Order
                  </NavLink>
                </Menu.Item>
                <Menu.Item key="3">
                  <NavLink to={process.env.PUBLIC_URL + "/payments"}>
                    Payments
                  </NavLink>
                </Menu.Item>
                <Menu.Item key="6">
                  <NavLink to={process.env.PUBLIC_URL + "/contact"}>
                    Contact
                  </NavLink>
                </Menu.Item>
              </Menu>
            </Row>
          ) : (
            <Row type="flex" justify="space-between">
              <img src={aglk_logo} width={50} height={50} />
              <Dropdown
                placement="bottomCenter"
                overlay={menu}
                trigger={["click"]}
              >
                <Icon
                  style={{ color: "#FFF", fontSize: 20, paddingTop: 20 }}
                  type="menu"
                />
              </Dropdown>
            </Row>
          )}
        </Header>
        <Content>
          <Switch>
            <Route
              exact
              path={process.env.PUBLIC_URL + "/"}
              component={landing}
            />
            <Route
              exact
              path={process.env.PUBLIC_URL + "/services"}
              //experimental code for passing props to other components on route
              render={() => <Services name={this.state.name} />}
            />
            <Route
              exact
              path={process.env.PUBLIC_URL + "/payments"}
              component={payments}
            />
            <Route
              exact
              path={process.env.PUBLIC_URL + "/order"}
              component={order}
            />
            <Route
              exact
              path={process.env.PUBLIC_URL + "/contact"}
              component={contact}
            />
          </Switch>
        </Content>
        <Footer
          style={{
            backgroundColor: "#2c3e50",
          }}
        >
          <Row type={"flex"} justify={"space-between"}>
            <Col>
              <Text style={{ color: UIConfigurations.global.colors.white }}>
                Copyright © 2019 - All Rights Reserved -
                <a href="https://www.assignmentguide.lk/" target="_blank">
                  www.assignmentguide.lk
                </a>
              </Text>
            </Col>
            <Col>
              <Text style={{ color: UIConfigurations.global.colors.white }}>
                Contact Us:<a href="tel:+94777334967">+94 (777) 334967</a>
              </Text>
            </Col>
            <Col>
              <Text style={{ color: UIConfigurations.global.colors.white }}>
                Email Us:{" "}
                <a href="assignmentguide2015@gmail.com">
                  assignmentguide2015@gmail.com
                </a>
              </Text>
            </Col>
          </Row>
        </Footer>
      </Layout>
    );
  }
}

export default Home;
