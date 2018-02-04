import React, { Component } from 'react';
import { Timeline, Icon ,Row,Col} from 'antd';
import "../componentCss/time.css"
class Introduce extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col span={2}></Col>
                    <Col span={8}>
                        <Timeline className="time">
                            <Timeline.Item>公司正式创建 2017-07-14</Timeline.Item>
                            <Timeline.Item>公司与客户签署合同 2017-08-14</Timeline.Item>
                            <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />} color="red">在技术上取得显著成果 2017-010-14</Timeline.Item>
                            <Timeline.Item>公司的明天将会更好 2018</Timeline.Item>
                        </Timeline>
                    </Col>
                    <Col span={12} className="callText">
                        <p>企业愿景：让客户满意，让员工快乐</p>
                        <p>企业精神：坚韧、奋进、谦逊、友爱</p>
                        <p>企业管理原则：信息透明化、工作全员化、流程标准化、结构扁平化、5S标准化</p>
                        <p>企业组织原则：下级服从上级、个人服从集体、少数服从多数</p>
                        <p>企业用人原则：态度>能力>学历</p>
                        <p>企业世界观：是非观、价值观</p>
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </div>
        );
    }
}
export default Introduce;
