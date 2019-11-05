import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./IndexPage.css";
import fetch from "../utils/request.js";
import { Spin, Alert, Carousel, Icon } from "antd";
import DycItem from "../components/dycItem";

export default class Home extends Component {
  state = {
    iconList: [
      { id: 0, txt: "沐恩动态" },
      { id: 1, txt: "个人动态" },
      { id: 2, txt: "代祷列表" },
      { id: 3, txt: "小礼品" },
      { id: 4, txt: "留言" },
      { id: 5, txt: "奉献" },
      { id: 6, txt: "投票" },
      { id: 7, txt: "小组" }
    ],
    dycList: [],
    isShow: false,
    count: 1,
    txt: "点击加载更多……",
    img: "",
    isDialog: true
  };
  constructor() {
    super();
    this.btnAdd = this.btnAdd.bind(this);
  }
  render() {
    let { iconList, dycList, txt, isShow, isDialog, img } = this.state;
    const { history } = this.props;
    return (
      <div className={styles.wrap}>
        <Header {...this.props} />
        <main className={styles.main}>
          <div>
            {/* swiper*/}
            <div className={styles.banner}>
              <Carousel autoplay>
                <div className={styles.images}>
                  <img src="http://img1.imgtn.bdimg.com/it/u=1493838697,2389354602&fm=26&gp=0.jpg" />
                </div>
                <div className={styles.images}>
                  <img src="http://img5.imgtn.bdimg.com/it/u=4185493893,728225430&fm=26&gp=0.jpg" />
                </div>
                <div className={styles.images}>
                  <img src="https://p0.meituan.net/wedding/50c02fe58023bbbc65338baa0e7846ab130686.jpg%40800w_600h_0e_1l%7Cwatermark%3D1%26%26r%3D1%26p%3D9%26x%3D2%26y%3D2%26relative%3D1%26o%3D20" />
                </div>
                <div className={styles.images}>
                  <img src="https://p0.meituan.net/wedding/b580a74bf84c86604f9cd796e0d7649d151290.jpg%40800w_600h_0e_1l%7Cwatermark%3D1%26%26r%3D1%26p%3D9%26x%3D2%26y%3D2%26relative%3D1%26o%3D20" />
                </div>
              </Carousel>
            </div>
            {/* iconList*/}
            <div className={styles.icon}>
              {iconList.map(item => (
                <span
                  key={item.id}
                  onClick={() => {
                    this.ToOtherPage(item.id);
                  }}
                >
                  <Icon type="bank" />
                  <label className={styles.lables}>{item.txt}</label>
                </span>
              ))}
            </div>
            {/* 动态*/}
            <div className={styles.dynamicTitle}>
              <div>
                <i>
                  <Icon type="right-square" />
                </i>
                沐恩动态
              </div>
              <div
                onClick={() => {
                  history.push("/dynamic");
                }}
              >
                <label className={styles.quanbu}>查看全部</label>
                <Icon type="right" />
              </div>
            </div>
            {/*动态列表*/}
            <div className={styles.dongtai}>
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
            </div>
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
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  ToOtherPage = id => {
    switch (id) {
      case 0:
        this.props.history.push("/dynamic");
        break;
      case 1:
        this.props.history.push({
          pathname: "/dynamic",
          state: {
            userId: window.sessionStorage.getItem("userId")
          }
        });
        break;
      case 2:
        this.props.history.push("/prayer");
        break;
      case 3:
        this.props.history.push("/gifts");
        break;
      case 4:
        this.props.history.push("/leave");
        break;
      case 5:
        this.props.history.push("/dedication");
        break;
      case 6:
        this.props.history.push("/vote");
        break;
      case 7:
        this.props.history.push("/group");
        break;
      default:
        break;
    }
  };

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
    let { defaultTitle } = this.state;
    let token = this.props.location.state
      ? this.props.location.state.userId
      : "undefined";
    defaultTitle = token === "undefined" ? "沐恩动态" : "个人动态";
    this.setState({ defaultTitle });
    return fetch.get("/api/getDycList", [{ token }, { count }]).then(res => {
      return res.data;
    });
  };

  //点赞
  clickFabulous = async id => {
    let { count, dycList } = this.state;
    let result = await fetch.get("/api/clickFab", [{ dycId: id }]);
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

  // async getMuen() {
  //     const { ctx } = this
  //     let resault = await this.service.list.getMuen();
  //     console.log(resault);

  //     let maxDate = resault[0].unum;
  //     for (var i = 0; i < resault.length; i++) {
  //         if (resault[i].unum > maxDate) {
  //             maxDate = resault[i]
  //         }
  //     }

  //     let obj = resault.filter((item) => {
  //         return item.unum == maxDate
  //     })

  //     ctx.body = {
  //         obj
  //     }
  // }
}
