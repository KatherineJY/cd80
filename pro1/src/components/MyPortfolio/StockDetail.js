import React, { Component } from "react";

import { Tabs, Badge, Card, Row, Col } from "antd";

import "../../assets/css/stockDetail.css";

const TabPane = Tabs.TabPane;

function callback(key) {
  console.log(key);
}

class StockDetail extends Component {
  render() {
    return (
      <div className="tabsHolder">
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane
            tab={
              <Badge
                count={4}
                style={{
                  right: "-15px",
                  backgroundColor: "#fff",
                  color: "#999",
                  boxShadow: "0 0 0 1px #d9d9d9 inset"
                }}
              >
                Tab 1
              </Badge>
            }
            key="1"
          >
            <Row gutter={16}>
              <Col className="gutter-row" span={6}>
                <Card className="cardStyle">
                  <p>
                    <b>Alibaba</b>
                  </p>
                  <p>000001</p>
                </Card>
              </Col>
              <Col className="gutter-row" span={6}>
                <Card className="cardStyle">
                  <p>
                    <b>Alibaba</b>
                  </p>
                  <p>000001</p>
                </Card>
              </Col>
              <Col className="gutter-row" span={6}>
                <Card className="cardStyle">
                  <p>
                    <b>Alibaba</b>
                  </p>
                  <p>000001</p>
                </Card>
              </Col>
              <Col className="gutter-row" span={6}>
                <Card className="cardStyle">
                  <p>
                    <b>Alibaba</b>
                  </p>
                  <p>000001</p>
                </Card>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col className="gutter-row" span={6}>
                <Card className="cardStyle">
                  <p>
                    <b>Alibaba</b>
                  </p>
                  <p>000001</p>
                </Card>
              </Col>
              <Col className="gutter-row" span={6}>
                <Card className="cardStyle">
                  <p>
                    <b>Alibaba</b>
                  </p>
                  <p>000001</p>
                </Card>
              </Col>
              <Col className="gutter-row" span={6}>
                <Card className="cardStyle">
                  <p>
                    <b>Alibaba</b>
                  </p>
                  <p>000001</p>
                </Card>
              </Col>
              <Col className="gutter-row" span={6}>
                <Card className="cardStyle">
                  <p>
                    <b>Alibaba</b>
                  </p>
                  <p>000001</p>
                </Card>
              </Col>
            </Row>
          </TabPane>
          <TabPane tab="Tab 2" key="2">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="Tab 3" key="3">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default StockDetail;
