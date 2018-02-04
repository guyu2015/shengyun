import React, { Component } from 'react';
import Banner from "../image/banner.jpg"
import { Row, Col ,Card ,List, Avatar,Icon} from 'antd';
import "../componentCss/home.css";
const { Meta } = Card;
class Home extends Component {
  constructor(props){
    super(props)
      this.state = {
          title:["背景","技术","渠道"],
          content:[
              "京鼎盛云(北京)科技有限公司 由成功创业经验的成员于2017年共同组建创立，专注于移动互联网领域。在公司的发展的过程之中，逐步拥有了自身的产品研发能力与行业众多顶尖的公司形成紧密的合作伙伴关系。","坚持以自主技术为核心，注重技术积累和平台开发，已开发出一套内容完善，数据精准的移动互联网广告平台，为目标客户提供通知栏资讯，全屏广告，桌面插播，来电展示等全方位的广告互动服务。","基于分享平台的基础上为众多的内置，预装，刷机，等渠道提供完整的移动互联网广告解决方案，已经与深圳，北京等多家手机厂商，方案商以及代理商等形成紧密的合作关系。"

          ]
      }
  }
  render() {
      const listData = [];
      for (let i = 0; i < 3; i++) {
          listData.push({
              href: 'http://ant.design',
              title: this.state.title[i],
              avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
              description: '京鼎盛云(北京)科技有限公司',
              content: this.state.content[i],
          });
      }
      return (
      <div>
        <div>
          <Row>
            <Col span={2}></Col>
            <Col span={12}><List className="list"
                  itemLayout="vertical"
                  // size="middle"
                  // pagination={pagination}
                  dataSource={listData}
                  renderItem={item => (
                      <List.Item
                          key={item.title}
                          // actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}
                          extra={<img width={272} alt="Banner" src={Banner} />}
                      >
                        <List.Item.Meta
                            avatar={<Avatar src={item.avatar} />}
                            title={<a href={item.href}>{item.title}</a>}
                            description={item.description}
                        />
                          {item.content}
                      </List.Item>
                  )}
              /></Col>
            <Col span={8}><div style={{ padding: '30px 100px' }}>

                    <Card  title="背景" bordered={false}
                           hoverable
                           cover={<img alt="Banner" src={Banner} />}>
                      <Meta
                          title="京鼎盛云(北京)科技有限公司"
                          description="京鼎盛云(北京)科技有限公司 由成功创业经验的成员于2017年共同组建创立，专注于移动互联网领域。在公司的发展的过程之中，逐步拥有了自身的产品研发能力与行业众多顶尖的公司形成紧密的合作伙伴关系。" />
                    </Card>

                    <Card title="技术" bordered={false}
                          hoverable
                          cover={<img alt="Banner" src={Banner} />}>
                      <Meta
                          title="京鼎盛云(北京)科技有限公司"
                          description=" 坚持以自主技术为核心，注重技术积累和平台开发，已开发出一套内容完善，数据精准的移动互联网广告平台，为目标客户提供通知栏资讯，全屏广告，桌面插播，来电展示等全方位的广告互动服务。"
                      />
                    </Card>
              </div></Col>
            <Col span={2}></Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Home;
