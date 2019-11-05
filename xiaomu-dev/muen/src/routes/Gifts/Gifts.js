import React, { Component } from "react";
import styles from "./Gifts.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import fetch from "../../utils/request";
import GiftList from "../../components/giftList";
import { Icon } from "antd";

class Gifts extends Component {
  state = {
    dycList: [],
    isShow: false,
    count: 1,
    txt: "点击加载更多……",
    isDialog: true,
    img: ""
  };

  constructor() {
    super();
    this.btnAdd = this.btnAdd.bind(this);
  }

  render() {
    let { iconList, dycList, txt, isShow } = this.state;
    let { history } = this.props;
    return (
      <div className={styles.wrap}>
        <Header title="沐恩礼品" isBack={true} {...this.props} />
        <main className={styles.main}>
          {dycList.length > 0 &&
            dycList.map((item, index) => <GiftList item={item} key={index} />)}

          <div className={styles.btnAdd} onClick={this.btnAdd}>
            {txt}
          </div>
          {isShow ? (
            <div className={styles.dialog}>
              <Icon type="loading" />
              <span>数据加载中</span>
            </div>
          ) : (
            ""
          )}
          <div className={styles.wuto}></div>
        </main>
        <Footer></Footer>
      </div>
    );
  }

  async componentDidMount() {
    let { count, dycList } = this.state;
    let result = await this.getInit(count);
    dycList = dycList.concat(result);
    this.setState({ dycList });
  }
  //点击加载更多
  async btnAdd() {
    let { count, dycList } = this.state;
    count++;
    let result = await this.getInit(count);
    dycList = dycList.concat(result);
    this.setState({ isShow: true, count });
    setTimeout(() => {
      if (result.length < 2) {
        this.setState({ dycList, isShow: false, txt: "没有更多数据了" });
        this.btnAdd = null;
      }
      this.setState({ dycList, isShow: false });
    }, 2000);
  }

  getInit = count => {
    return fetch.get("/api/list", [ { count }]).then(res => {
      return res.data;
    });
  };
}

export default Gifts;
