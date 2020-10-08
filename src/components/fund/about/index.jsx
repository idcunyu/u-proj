import React, { Component } from 'react'
import './index.less';
import { Button } from 'antd';

class FundAbout extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  componentDidMount() {
    
  }

  onGotoPage = () => {
    console.log("click btn");
  }

  render() {
    return (
      <div className="fund-about">
        <div className="fund-about-all">
          <div className="fund-about-content">
            <img src="/assets/images/fund/logo-s.png" alt="logo" className="about-pic"/>
            <div className="title">ABOUT</div>
            <div className="d1 pc">
              What do we do?
            </div>
            <div className="d2 pc">
              Unimine is the best platform to get started mining cryptocurrency. It is the easiest platform for beginners to easily get into Blockchain.Unimine is the best platform to get started mining cryptocurrency. It is the easiest platform for beginners to easily get into Blockchain.
            </div>
            <div className="d2 wap">
              Unimine is the best platform to get started mining cryptocurrency. It is the easiest platform for beginners to easily get into Blockchain.Unimine is the best platform to get started mining cryptocurrency. It is the easiest platform for beginners to easily get into Blockchain.
            </div>

            <div className="smart-contract">
              <div className="title">
                Smart contract
              </div>
              <div className="token">
                0x1234567890123456789012345678901234567890
              </div>
            </div>
            
            <Button type="primary" className="about-btn" onClick={this.onGotoPage}>
              ABOUT UMI-TOKEN <img src="/assets/images/index/ic_btn_arrowright.png" alt="token"></img>
            </Button>
          </div>
        </div>
      </div>
    )
  }
};

export default FundAbout;
