import React, { Component } from 'react';
import styles from './GiftList.css';
import { Icon } from 'antd';

class GiftList extends Component {
  render() {
    let item = this.props.location.state;
    return (
      <div className={styles.giftl}>
        <div className={styles.head}>
          <p className={styles.tops} onClick={() => {this.props.history.go(-1)}}>&lt;</p>
          <img src={item.titleimg} />
        </div>
        <div className={styles.midle}>
          <h4>￥{item.pictop}</h4>
          <p>{item.middle}</p>
          <p>
            <Icon type="gift" /> <span>想要</span> |
            <Icon type="check" /> <span>31</span>
          </p>
        </div>
        <div className={styles.fonts}>
          <p><span>发货</span><span>河南淮阳</span>|<span>快递：免运费</span></p>
        </div>
        <button className={styles.buttons} onClick={() => {
          var arr = [];
          var list = JSON.parse(window.sessionStorage.getItem("testKey"));
          if (list) {
            arr = list;
          }
          arr.push(item);
          window.sessionStorage.setItem("testKey", JSON.stringify(arr));
          this.props.history.push('/goshop');
        }}>加入购物车</button>
      </div>
    );
  }
}

export default GiftList;
