import React, { Component } from "react";
import styles from "./Dynamic.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import fetch from "../../utils/request";
import { Icon } from "antd-mobile";
import "antd-mobile/dist/antd-mobile.css";
import DycItem from "../../components/dycItem";
import { message } from "antd";
class Dynamic extends Component {
  state = {
    dycList: [],
    isShow: false,
    count: 1,
    txt: "加载更多",
    isDialog: true,
    img: "",
    defaultTitle: "沐恩动态",
    push: "",
    defaultTitle: "沐恩动态"
  };
  constructor() {
    super();
    this.btnAdd = this.btnAdd.bind(this);
  }
  render() {
    let {
      dycList,
      isDialog,
      txt,
      isShow,
      img,
      defaultTitle,
      push
    } = this.state;
    return (
      <div className={styles.app}>
        <div className={styles.wrap}>
          <Header title={defaultTitle} isBack={true} push={push} />
          <main className={styles.main}>
            <div className={styles.dycContent}>
              {dycList &&
                dycList.map(item => (
                  <DycItem
                    {...item}
                    key={item.dycId}
                    clickFabulous={this.clickFabulous}
                    dialog={this.dialog}
                    ToDetails={this.ToDetails}
                  />
                ))}
              <div className={styles.btnAdd} onClick={this.btnAdd}>
                {txt}
              </div>
            </div>
            {isShow ? (
              <div className={styles.dialog}>
                <Icon type="loading" />
                <span>数据加载中</span>
              </div>
            ) : (
              ""
            )}
          </main>
          <Footer />
        </div>

        <div id={styles.ImgDialog} className={isDialog ? styles.on : ""}>
          <header style={{ background: "#4c4c4c" }}>
            <b
              style={{ color: "#fff" }}
              onClick={() => {
                this.setState({ isDialog: true, img: "" });}} >
              &lt;
            </b>
          </header>
          <div
            className="img"
            style={{ width: "100%", height: 220, marginTop: "40%" }}
          >
            <img src={img} style={{ width: "100%", height: "100%" }} />
          </div>
        </div>
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
  //初始获取页面
  getInit = count => {
    let { defaultTitle, push } = this.state;
    let token = this.props.location.state
      ? this.props.location.state.userId
      : "undefined";
    defaultTitle = token === "undefined" ? "沐恩动态" : "个人动态";
    push = token === "undefined" ? "" : "发布";
    this.setState({ defaultTitle, push });
    return fetch.get("/api/getDycList", [{ token }, { count }]).then(res => {
      return res.data;
    });
  };
  //点赞
  clickFabulous = async id => {
    let { count, dycList } = this.state;
    let result = await fetch.get("/api/clickFab", [
      { dycId: id },
    ]);
      let res = await this.getInit(count);
      dycList = res;
      this.setState({ dycList });
  };
  //遮罩,蒙層
  dialog = src => {
    this.setState({
      isDialog: false,
      img: src
    });
  };
  //跳详情
  ToDetails = dycId => {
    this.props.history.push({
      pathname: "/details",
      state: {
        dycId
      }
    });
  };
}
export default Dynamic;
