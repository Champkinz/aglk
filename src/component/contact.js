import React, { Component } from "react";
import { Typography, Layout, Row, Col, Form, Button, Icon } from "antd";
import { ScreenWidth } from "../helpers/window-dimensions";
import UIConfigurations from "../helpers/config";

class contact extends Component {
  render() {
    const { Title, Paragraph, Text } = Typography;
    const just_black = UIConfigurations.global.colors.darker;
    const just_white = UIConfigurations.global.colors.white;
    return (
      <Layout style={{ backgroundColor: just_black }}>
        <Row type="flex" justify="center">
          <Title style={{ color: just_white, padding: 25 }} level={1}>
            Contact Us
          </Title>
        </Row>

        <Row type="flex" justify="center">
          <Text style={{ color: just_white, fontSize: 16 }}>Hotline :</Text>
          <Text style={{ color: just_white, fontSize: 16 }}>
            +94 (777) 334967
          </Text>
        </Row>
        <Row type="flex" justify="center">
          <Text style={{ color: just_white, fontSize: 16 }}>Web :</Text>
          <Text style={{ color: just_white, fontSize: 16 }}>
            www.assignmentguide.lk
          </Text>
        </Row>
        <Row type="flex" justify="center">
          <Text style={{ color: just_white, fontSize: 16 }}>Email :</Text>
          <Text style={{ color: just_white, fontSize: 16 }}>
            assignmentguide2015@gmail.com
          </Text>
        </Row>

        <Row
          type="flex"
          justify="center"
          style={{ backgroundColor: just_black, paddingBottom: "25vh" }}
        >
          <Row
            style={{
              paddingLeft: 50,
              paddingTop: 30,
              paddingBottom: 80,
              width: ScreenWidth,
              backgroundColor: just_black,
            }}
            type={"flex"}
            justify={"center"}
          >
            <form
              method="POST"
              action="https://formspree.io/assignmentguide2015@gmail.com"
            >
              <Row
                type={"flex"}
                justify={"space-between"}
                style={{ paddingBottom: 20, width: ScreenWidth / 2.8 }}
              >
                <Col>
                  <Text style={{ color: just_white }}>Name : </Text>
                </Col>
                <Col>
                  <input type="text" name="Name" />
                </Col>
                <Col>
                  <Text style={{ color: just_white }}>Email : </Text>
                </Col>
                <Col>
                  <input type="email" name="email" />
                </Col>
              </Row>
              <Row
                type={"flex"}
                justify={"space-between"}
                style={{ paddingBottom: 20, width: ScreenWidth / 2.8 }}
              >
                <Text style={{ color: just_white }}>Subject : </Text>
                <input type="text" name="Subject" />
                <Text style={{ color: just_white }}>Phone Number : </Text>
                <input type="tel" name="Phone  Number" />
              </Row>
              <Row
                type={"flex"}
                justify={"start"}
                style={{ paddingBottom: 20, width: ScreenWidth / 2.8 }}
              >
                <Text style={{ color: just_white }}>Message :</Text>
                <textarea rows="4" cols="50" name="Message"></textarea>
              </Row>
              <Row type={"flex"} justify={"center"}>
                <button type="submit">Submit</button>
              </Row>
            </form>
          </Row>
        </Row>
      </Layout>
    );
  }
}

export default contact;
