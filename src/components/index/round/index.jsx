import React, { Component } from 'react'
import './index.less';

class IndexRound extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roundList: [
        {
          pic: '/assets/images/index/state1.png',
          title: 'Classic',
          desc: 'Different classic decentralized mining<br/> pools will built and opening in this period.<br/> Integrating users and building high-yield<br/> mining pools are the main missions of this<br/> period.Each users can give the<br/> suggestions in the community.'
        }, {
          pic: '/assets/images/index/state2.png',
          title: 'Open Platform',
          desc: 'Opening the protocol and api are finished<br/> in this period. Developers and project founders can join deeply and build theirselve’s pool. They can create new mining algorithms and new inercations, and also can fork them from the pools online with the ERC20 Token.'
        }, {
          pic: '/assets/images/index/state3.png',
          title: 'Innovation',
          desc: 'With the technology and developing of market. More new and creative mining pools will be built in this period. Unimine will provide the most popular and high-yield mining pools in a longtime in the future.'
        }
      ]
    }
  }
  componentDidMount() {
    
  }

  render() {
    const { roundList = [] } = this.state;

    return (
      <div className="index-round">
        <div className="index-round-all">
          <div className="title">Rounds</div>
          <div className="d1">
            The Unimine Period
          </div>
          <div className="d2">
            This is the development goals for Unimine.More functions and services will be<br/> opened at different times.
          </div>
          <div className="round-list">
            {roundList && roundList.length ? roundList.map((item, index) => {
              return (
                <div className="round-item" key={'round' + index}>
                  <img src={item.pic || ''} alt="round" className="round-pic"/>
                  <div className="round-stage">STAGE {index + 1}</div>
                  <div className="round-title">{item.title || ''}</div>
                  <div className="round-desc" dangerouslySetInnerHTML={{__html: item.desc || ''}}></div>
                </div>
              )
            }) : ''}
          </div>
        </div>
      </div>
    )
  }
};

export default IndexRound;
