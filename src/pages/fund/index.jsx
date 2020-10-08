import React, { Component } from 'react'
import './index.less';
import Page from '@/layout/default';

class PageFund extends Component {
  componentDidMount() {
    document.title = 'Unimine Fund'
  }

  render() {
    return (
      <Page className="page-fund">
        
      </Page>
    )
  }
};

export default PageFund;
