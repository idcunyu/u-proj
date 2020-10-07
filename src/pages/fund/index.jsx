import React, { Component } from 'react'
import { Button } from 'antd';
import './index.less';

class PageFund extends Component {
  componentDidMount() {
    document.title = 'Fund Page'
  }

  render() {
    return (
      <div className="page-fund">
        <Button type="primary">Fund</Button>
      </div>
    )
  }
};

export default PageFund;
