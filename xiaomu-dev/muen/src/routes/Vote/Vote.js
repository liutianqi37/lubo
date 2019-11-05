import React, { Component } from "react";
import fetch from "../../utils/request";
import styles from "./Vote.css";
import Header from "../../components/Header";
import moment from "moment";
import { message } from "antd";
class Vote extends Component {
  state = {
    allList: [], //全部数据
    renderList: [], //要渲染的数据
    doneList: [], //已完成
    titList: [
      { id: 0, txt: "全部" },
      { id: 1, txt: "未完成" },
      { id: 2, txt: "已完成" }
    ],
    currIndex: 0
  };
  render() {
    let { titList, currIndex, renderList, doneList } = this.state;
    return (
      <div className={styles.wrap}>
        <Header isBack={true} title="投票" pushVote="发起投票" />
        <ul style={{ marginTop: 10 }}>
          {titList.map(item => (
            <li
              className={currIndex === item.id ? styles.active : ""}
              key={item.id}
              onClick={() => {
                this.tab(item.id);
              }}
            >
              {item.txt}
            </li>
          ))}
        </ul>
        <main className={styles.main}>
          <div className={styles.content}>
            {renderList &&
              renderList.map((item, index) => (
                <div
                  className={styles.voteItem}
                  key={index}
                  onClick={() => {
                    this.ToVoteDetail(item.voteId);
                  }}
                >
                  <div className={styles.left}>
                    <div className={styles.logo}>
                      <img src={item.logo} alt="" />
                    </div>
                  </div>
                  <div className={styles.right}>
                    <p>
                      <span style={{ color: "#000" }}>{item.title}</span>
                      <span>
                        {" "}
                        截止到{" "}
                        {moment(parseInt(item.endTime)).format(
                          "YYYY-MM-DD HH:mm:ss"
                        )}{" "}
                      </span>
                    </p>
                    <p>
                      <span style={{ fontSize: 14 }}>{item.desc}</span>
                      <span>{item.isMultiple === 0 ? "单选" : "多选"}</span>
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </main>
      </div>
    );
  }
  tab = id => {
    let { allList, renderList } = this.state;
    let currDate = new Date() * 1;
    switch (id) {
      case 0: {
        renderList = allList;
        break;
      }
      case 1: {
        renderList = allList.filter(item => item.endTime > currDate);
        break;
      }
      case 2: {
        renderList = allList.filter(item => item.endTime < currDate);
        break;
      }
      default:
        break;
    }
    this.setState({ currIndex: id, allList, renderList: renderList });
  };
  componentDidMount() {
    let currDate = new Date() * 1;
    let { doneList } = this.state;
    fetch.get("/api/getVote").then(res => {
      doneList = res.data.filter(item => item.endTime < currDate);
      this.setState({ allList: res.data, renderList: res.data, doneList });
    });
  }
  //投票详情
  ToVoteDetail = voteId => {
    let { doneList } = this.state;
    let target = doneList.findIndex(item => item.voteId === voteId);
    if (target >= 0) {
      message.error("Sorry,该投票已结束");
    } else {
      this.props.history.push({
        pathname: "/toVoteDetail",
        state: {
          voteId
        }
      });
    }
  };
}

export default Vote;
