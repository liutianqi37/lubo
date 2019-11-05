import React, { Component } from "react";
import styles from "./Prayer.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Icon } from "antd-mobile";
import fetch from "../../utils/request";

class Prayer extends Component {
  state = {
    prayList: [], //页面数据
    isShow: false, //显示弹出加载框
    isDialog: true,
    txt: "加载更多",
    count: 1 //显示数据数量
  };
  constructor() {
    super();
    this.btnload = this.btnload.bind(this);
  }
  render() {
    let { prayList, txt, isShow } = this.state;

    return (
      <div className={styles.wrap}>
        <Header title="祷告箱" isBack={true} />
        <div className={styles.prayerHot}>
          <div className={styles.toptitle}>置顶</div>
          <div className={styles.topbox}>
            <div className={styles.timg}>
              <img src="../../../../img/1.jpg"></img>
            </div>
            <div className={styles.tname}>沐恩狮王</div>
            <div className={styles.tcon}>
              国度、权柄、荣耀全是祢的，直到永远。 阿门
            </div>
            <div className={styles.tnow}>2019-10-30 15:54:41</div>
            <div className={styles.teditor}>编辑</div>
          </div>
        </div>
        <main className={styles.main}>
          <div className={styles.prayerContent}>
            <div className={styles.allmes}>全部留言</div>

              {prayList &&
                prayList.map((item, index) => {
                  return (
                    <div className={styles.pbox} key={index}>
                      <div className={styles.praybox}>
                        <div className={styles.pleft}>
                          <img src={item.imgs} alt="图片" />
                        </div>
                        <div className={styles.pcenter}>
                          <div className={styles.ptitle}>{item.title}</div>
                          <div className={styles.pcon}>{item.content}</div>
                          <div className={styles.ptime}>
                            2019-10-30 15:54:41
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              <div className={styles.pload} onClick={this.btnload}>
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
    );
  }
  async componentDidMount() {
    let { count, prayList } = this.state;
    let result = await this.getInit(count);
    prayList = prayList.concat(result);
    this.setState({ prayList });
  }
  //页面渲染
  getInit = count => {
    let token = window.localStorage.getItem("userId");
    return fetch.get("/api/getprayList", [{ token }, { count }]).then(res => {
      return res.data;
    });
  };

  //点击加载更多
  async btnload() {
    let { count, prayList } = this.state;
    count++;
    let result = await this.getInit(count);
    prayList = prayList.concat(result);
    this.setState({ isShow: true, count });
    setTimeout(() => {
      if (result.length < 2) {
        this.setState({ prayList, isShow: false, txt: "没有更多数据了" });
        this.btnAdd = null;
      }
      this.setState({ prayList, isShow: false });
    }, 1000);
  }
}

export default Prayer;
