import React, { Component } from "react";
import styles from "./Leave.css";
import style from "../IndexPage.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Icon } from "antd";
import fetch from "../../utils/request";
import moment from "moment";
import "moment/locale/zh-cn";
moment.locale("zh-cn");

export default class Leave extends Component {
  state = {
    list: [],
    isShow: false, //显示弹出加载框
    count: 1, //显示数据数量
    txt: "数据加载中"
  };
  constructor() {
    super();
    this.btnload = this.btnload.bind(this);
  }
  render() {
    let { list, isShow, txt } = this.state;
    return (
      <div className={style.wrap}>
        <Header title="留言板" isBack={true} />
        <main className={styles.main}>
          {/* 置顶部分 */}
          <div>
            <div className={styles.top}>
              <div className={styles.title}>
                <span>置顶</span>
              </div>
              <dl>
                <div className={styles.text}>N</div>
                <dd>
                  <img
                    src="http://pic31.nipic.com/20130803/11960919_221307676104_2.jpg"
                    alt=""
                  />
                </dd>
                <dt>
                  <div className={styles.div}>
                    <span className={styles.name}>沐恩云云</span>{" "}
                    <span className={styles.bianji}>编辑</span>
                  </div>
                  <div className={styles.con}>
                    为东欧祈祷，停止战乱，让人民不再受苦，不再流离失所。。。
                  </div>
                  <div className={styles.time}>
                    <span>19-07-22 22:22</span>
                  </div>
                </dt>
              </dl>
            </div>
            {/* 全部留言 */}
            <div className={styles.box}>
              <div className={styles.tit}>
                <span>全部留言</span>
              </div>
              {list &&
                list.map((item, index) => {
                  return (
                    <dl key={index} onClick={this.ToDetails.bind(this, item)}>
                      <dd>
                        <img src={item.img} alt="" />
                      </dd>
                      <dt>
                        <div className={styles.name}>{item.name}</div>
                        <div className={styles.con}>{item.con}</div>
                        <div className={styles.time}>
                          <span>{item.time}</span>
                        </div>
                      </dt>
                    </dl>
                  );
                })}
              <div className={styles.botto}>
                <div className={styles.loading} onClick={this.btnload}>
                  加载更多
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
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  ToDetails(item) {
    this.props.history.push({
      pathname: "/Ledel",
      state: {
        item
      }
    });
  }

  async componentDidMount() {
    let { count, list } = this.state;
    let result = await this.getInit(count);
    list = list.concat(result);
    this.setState({ list });
  }
  //页面渲染
  getInit = count => {
    let token = window.localStorage.getItem("userId");
    return fetch.get("/api/message", [{ token }, { count }]).then(res => {
      //  拿到所有的时间
      let time = res.data.map(item => {
        return item.time;
      });
      // 转换时间格式
      let date = time.map(item => {
        return moment(item).format("YY-MM-DD hh:mm");
      });
      // 循环小数组
      date.map((item, index2) => {});
      // 循环大数组
      res.data.forEach((item, index1) => {
        item.time = date[index1];
      });
      return res.data;
    });
  };

  //点击加载更多
  async btnload() {
    let { count, list } = this.state;
    count++;
    let result = await this.getInit(count);
    list = list.concat(result);

    this.setState({ isShow: true, count });
    setTimeout(() => {
      if (result.length < 2) {
        this.setState({ list, isShow: false, txt: "没有更多数据了" });
        this.btnAdd = null;
      }
      this.setState({ list, isShow: false });
    }, 1500);
  }
}
