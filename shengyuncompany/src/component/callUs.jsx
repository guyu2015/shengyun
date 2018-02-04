import React, { Component } from 'react';
import { Timeline, Icon ,Row,Col} from 'antd';
import "../componentCss/time.css"
import { Map } from 'react-amap';
class CallUs extends Component {
    constructor(props){
    super(props);
    this.state = {
        amapkey:"guyu",
        version :"1.2.0"
    }
    }
  render() {
    return (
      <div>
        <Row>
          <Col span={2}></Col>
          <Col span={8}>

          </Col>
          <Col span={12}>
              <Map amapkey={this.state.amapkey} version={this.state.version} />
          </Col>
          <Col span={2}></Col>
        </Row>
      </div>
    );
  }
}

export default CallUs;
