import React, { Component } from 'react';
import { Row, Col,Menu } from 'antd';
import Logo from "../image/logo.png";
import {browserHistory} from 'react-router';
import Carousel from "./carousel"
import "../componentCss/header.css"
const MenuItem = Menu.Item;
class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      key:"top"
  };
  }
    chooseHandle =({key,item,keyPath})=>{
    console.log(keyPath);
    this.setState({
        key:key
    });
    let keypath = keyPath[0]
        browserHistory.push('/#/'+keypath);

        window.location = 'http://localhost:3000/#/'+keypath
}
  render() {
    return (
      <div className="container">
        <Row>
          <Col span={2}></Col>
          <Col span={2}>
            <div className="pic">
              <img src={Logo} alt="logo" />
            </div>
          </Col>
          <Col span={2}>
            <p className="titleText">京鼎盛云</p>
          </Col>
          <Col span={7}></Col>
          <Col span={10} >
            <Menu mode="horizontal" onClick={this.chooseHandle}  selectedKeys={[this.state.key]}>
              <MenuItem key="home" >
                首页
              </MenuItem>
              <MenuItem key="introduce">
                公司简介
              </MenuItem>
              <MenuItem key="successExample">
                成功案例
              </MenuItem>
              <MenuItem key="ourService">
                我们的服务
              </MenuItem>
              <MenuItem key="callUs">
                联系我们
              </MenuItem>
            </Menu>

          </Col>
          <Col span={1}></Col>
        </Row>
        <Carousel/>
      </div>
    );
  }
}

export default Header;
