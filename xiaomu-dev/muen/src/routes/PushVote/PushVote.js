import React, { Component } from "react";
import styles from "./PushVote.css";
import Header from "../../components/Header";
import { DatePicker, Input, message } from "antd";
import moment from "moment";
import fetch from "../../utils/request";
class PushVote extends Component {
  state = {
    title: "",
    desc: "",
    id: 0,
    option: "",
    optionList: [],
    isMultiple: -1, //是否单选或多选
    anonymous: -1, //是否匿名
    endTime: null, //截止时间=>为时间戳
    endOpen: false,

  };
  constructor() {
    super();
    this.addOption = this.addOption.bind(this);
  }
  render() {
    let {
      title,
      desc,
      option,
      optionList,
      id,
      isMultiple,
      anonymous,
      endOpen,
      endTime,

    } = this.state;
    return (
      <div className={styles.wrap}>
        <Header title="发起投票" isBack={true} />
        <main className={styles.main}>
          <div className={styles.PushVoteTilte}>
            标题{" "}
            <Input
              placeholder="请输入标题"
              style={{ width: "70%", marginLeft: 10 }}
              value={title}
              onChange={e => {
                this.setState({ title: e.target.value });
              }}
            />
          </div>
          <div className={styles.desc}>
            描述
            <textarea
              value={desc}
              style={{ width: "70%", marginLeft: 10 }}
              onChange={e => {
                this.setState({ desc: e.target.value });
              }}
            ></textarea>
          </div>
          {/* 选项 */}
          {optionList &&
            optionList.map(item => (
              <div className={styles.optionItem} key={item.optionId}>
                <p>选项 {item.optionId}:</p>
                <p>{item.option}</p>
                <span
                  onClick={() => {
                    this.delOption(item.optionId);
                  }}
                >
                  {" "}
                  -
                </span>
              </div>
            ))}
          <div className={styles.addOption}>
            <div style={{ width: "85%", height: "100%" }}>
              <Input
                placeholder="请输入选项内容"
                style={{ width: "100%", marginRight: 10, marginLeft: 10 }}
                value={option}
                onChange={e => {
                  this.setState({ option: e.target.value });
                }}
              ></Input>
            </div>
            <span onClick={this.addOption}>+</span>
          </div>
          {/* 单选 */}
          <div className={styles.isMultiple}>
            <select
              name=""
              id="select"
              value={isMultiple}
              onChange={e => {
                this.setState({ isMultiple: e.target.value });
              }}
            >
              <option> 请选择单选或多选</option>
              <option value="0">单选</option>
              <option value="1">多选</option>
            </select>
          </div>
          {/* 是否匿名 */}
          <div className={styles.isMultiple}>
            <select
              name=""
              id="select"
              value={anonymous}
              onChange={e => {
                this.setState({ anonymous: e.target.value });
              }}
            >
              <option> 是否匿名</option>
              <option value="0">匿名</option>
              <option value="1">不匿名</option>
            </select>
          </div>
          {/* 截止日期 */}
          <div className={styles.endTime}>
            <div className="left">截止日期</div>
            <div className="right" style={{ marginLeft: 20 }}>
              <DatePicker
                onChange={this.onChange}
                placeholder="截止日期"
                format="YYYY-MM-DD HH:mm:ss"
              />
              <br />
            </div>
          </div>
          <div className={styles.PushVote} onClick={this.PushVote}>
            发布
          </div>
        </main>
      </div>
    );
  }
  //添加选项
  addOption() {
    let { optionList, id, option } = this.state;
    id++;
    let obj = {
      optionId: id,
      option,
      voteNum: 0
    };
    if (option) {
      optionList.push(obj);
      option = "";
      this.setState({
        optionList,
        id,
        option
      });
    }
  }
  //删除选项
  delOption = optionId => {
    let { id, optionList } = this.state;
    let delIndex = optionList.findIndex(item => item.optionId === optionId);
    optionList.splice(delIndex, 1);
    if (optionList.length === 0) {
      id = 0;
    }
    this.setState({ optionList, id });
  };
  //结束时间
  onChange = (value, dateString) => {
    this.setState({
      endTime: moment(dateString, "YYYY-MM-DD HH:mm:ss").valueOf()
    });
  };
  //点击发布
  PushVote = () => {
    let {
      title,
      desc,
      optionList,
      endTime,
      isMultiple,
      anonymous
    } = this.state;
    fetch
      .post("/api/pushVote", {
        title,
        desc,
        optionList,
        endTime,
        isMultiple,
        anonymous,
        userId: window.sessionStorage.getItem("userId")
      })
      .then(res => {
        if (res.data.code == 1) {
          message.info(res.data.message);
          this.props.history.push("/vote");
        } else {
          message.info(res.data.message);
        }
      });
  };
}

export default PushVote;
