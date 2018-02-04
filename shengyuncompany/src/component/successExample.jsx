import React, { Component } from 'react';
import Banner from "../image/banner.jpg"
import { List, Card,Col,Row } from 'antd';
const data = [
    {
        title: '海丽宾雅用户之家',
        content:"专为酒店定制的解决方案，通过用户之家让用户和酒店联系起来，酒店可以通过定位及数据分析为用户推荐合适的活动来刺激消费。"
    },
    {
        title: '游激队',
        content:"游激队制定了几个纬度，如公信力，有责任心，工作认真等，通过员工之间的互评，让公司对每个员工的能力全方位了解，进而做出合理安排。"
    },
    {
        title: '南京职激人信',
        content:"南京职激人信位于南京的一家科技公司，我们为客户制定了一套专职解决方案，随时随地发布商品信息，提高店铺管理效率。"
    },

];
class SuccessExample extends Component {
  render() {
    return (
      <div>
        <div>
          <Row>
            <Col span={1}></Col>
            <Col span={22}>
              <List
                  grid={{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 1, xxl: 3 }}
                  dataSource={data}
                  renderItem={item => (
                      <List.Item>
                        <Card title={item.title} bordered={false}>
                          <Row>
                            <Col span={6}>
                              <img src={Banner} alt="picture"/>
                            </Col>
                            <Col span={18}>{item.content}</Col>

                          </Row>

                        </Card>
                      </List.Item>
                  )}
              />
            </Col>
            <Col span={1}></Col>
          </Row>

        </div>
      </div>
    );
  }
}

export default SuccessExample;
