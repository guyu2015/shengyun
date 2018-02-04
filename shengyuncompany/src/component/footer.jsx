import React, { Component } from 'react';
import "../componentCss/footerWrapper.css"
import { Row,Col, Card, Avatar } from 'antd';

class Footer extends Component {
  render() {
    return (
      <div>
          <div className="footerWrapper">
            <Row>
              <Col span={3}></Col>
              <Col span={6}>
                <Card bordered = {false} style={{ width: 300,marginTop:80,background:333 }}>
                  <p>Card content</p>
                  <p>Card content</p>
                  <p>Card content</p>
                </Card>
              </Col>
              <Col span={6}>
                <Card bordered = {false} style={{ width: 300,marginTop:80,background:333 }}>
                  <p>Card content</p>
                  <p>Card content</p>
                  <p>Card content</p>
                </Card>
              </Col>
              <Col span={6}>
                <Card bordered = {false} style={{ width: 300,marginTop:80,background:333 }}>
                  <p>Card content</p>
                  <p>Card content</p>
                  <p>Card content</p>
                </Card>
              </Col>

              <Col span={3}></Col>
            </Row>

          </div>
      </div>
    );
  }
}

export default Footer;
