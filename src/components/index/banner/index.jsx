import React, { Component } from 'react'
import './index.less';

class IndexBanner extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  componentDidMount() {
    
  }

  render() {
    return (
      <div className="index-banner">
        <div className="index-banner-all">
          <img src="/assets/images/index/slogan.png" alt="slogan" className="slogan"/>
          <div className="desc">
            Unprecedented mining experience, easily to get <br/>
            benefits from the blockchain.
          </div>
          <div className="btns">
            <a href="/fund" className="btn left-btn">FUND</a>
            <a href="/whitepaper" className="btn right-btn">WHITEPAPER</a>
          </div>
          <div className="more">
            <img src="/assets/images/index/promo.png" alt="promo" className="promo"/>
            <span className="content">S.E.E.D network has started,Get UMI Token now!</span>
            <a href="/detail" className="detail">Details</a>
          </div>
        </div>
      </div>
    )
  }
};

export default IndexBanner;
