import React, { Component } from 'react'
import './index.less';

class FundFaq extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  componentDidMount() {
    
  }

  render() {
    return (
      <div className="fund-faq">
        <div className="fund-faq-all">
          <div className="title">
            Got questions about UMI Token and UMI-fund related questions? We have got answers. Check it out!
          </div>
          <div className="question-list">
            <a href="/" className="question">When will UMI Fund sale start?</a>
            <a href="/" className="question">what is the minimun token purchase amount?</a>
            <a href="/" className="question">How can I purchase UMI?</a>
            <a href="/" className="question">Can I purchase UMI using a credit card?</a>
            <a href="/" className="question">What is the UMI?</a>
            <a href="/" className="question">What wallet do I need  to store UMI coins?</a>
            <a href="/" className="question">When and how i will receive purchased UMI?</a>
            <a href="/" className="question">Why are only 500000 coins available?</a>
            <a href="/" className="question">what is the minimun token purchase amount?</a>
            <a href="/" className="question">What are the benefits of UMI Token?</a>
          </div>
        </div>
      </div>
    )
  }
};

export default FundFaq;
