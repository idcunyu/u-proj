import React, { Component } from 'react'
import { Button } from 'antd';
import './index.less';

class PageIndex extends Component {
  componentDidMount() {
    document.title = 'Index Page'
  }

  render() {
    return (
      <div className="page-index">
        <Button type="primary">Index</Button>
      </div>
    )
  }
};

export default PageIndex;
