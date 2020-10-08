import React, { Component } from 'react'
import './index.less';

class IndexFeature extends Component {
  constructor(props) {
    super(props);
    this.state = {
      featureList: [
        {
          pic: '/assets/images/index/feature1.png',
          title: 'Pure-Decentralization',
          desc: 'All the modules of Unimine are runing on<br/> the ethereum network without any<br/> centralized services. All the programming<br/> are built the smart contract code.'
        }, {
          pic: '/assets/images/index/feature2.png',
          title: 'Non-KYC',
          desc: 'All users are anonymous without KYC.it<br/> can protect the privacy of all the<br/> participants.'
        }, {
          pic: '/assets/images/index/feature3.png',
          title: 'Open',
          desc: 'Unimine will open the mining protocol api<br/> which are the smart constract code of<br/> etherum.'
        }, {
          pic: '/assets/images/index/feature4.png',
          title: 'Instant',
          desc: 'Transcations and settlements are finished<br/> in every new block. It’s fast and instant.'
        }, {
          pic: '/assets/images/index/feature5.png',
          title: 'Transparency',
          desc: 'The smart contract code is open source.<br/> Anyone can see the code and the entire<br/> transaction history'
        }, {
          pic: '/assets/images/index/feature6.png',
          title: 'Governance',
          desc: 'UMI is the governance token of unimie,<br/> and all the governance functionality are<br/> decentralization.'
        }
      ]
    }
  }
  componentDidMount() {
    
  }

  render() {
    const { featureList = [] } = this.state;

    return (
      <div className="index-feature">
        <div className="index-feature-all">
          <div className="title">FEATURES</div>
          <div className="d1">
            Unimine is the best platform to get started mining<br/>
            cryptocurrency.
          </div>
          <div className="d2">
            Unimine is the best platform to get started mining cryptocurrency. It is the easiest platform for<br/>
            beginners to easily get into Blockchain.
          </div>
          <div className="feature-list">
            {featureList && featureList.length ? featureList.map((item, index) => {
              return (
                <div className="feature-item" key={'feature' + index}>
                  <img src={item.pic || ''} alt="feature" className="feature-pic"/>
                  <div className="feature-title">{item.title || ''}</div>
                  <div className="feature-desc" dangerouslySetInnerHTML={{__html: item.desc || ''}}></div>
                </div>
              )
            }) : ''}
          </div>
        </div>
      </div>
    )
  }
};

export default IndexFeature;
