import React, { Component } from "react";
import { connect } from "dva";
import styles from "./Registration.css";
import axios from "axios";
import Header from "../../components/Header";
class Registration extends Component {
  constructor() {
    super();
    this.changUserName = this.changUserName.bind(this);
    this.changPassWord = this.changPassWord.bind(this);
  }
  state = {
    UserName: "",
    PassWord: "",
    againPwd: ""
  };
  render() {
    let { UserName, PassWord, againPwd } = this.state;
    return (
      <div className={styles.wrap}>
        <Header title="注册" />
        <main>
          <div className={styles.rtop}>
            <div className="rimage">
              <img className="ricon" src="../../../img/logo.png"></img>
            </div>
            <div className={styles.rtitle}>沐恩之家欢迎你~</div>
          </div>
          <input
            value={UserName}
            onChange={this.changUserName}
            className={styles.ruser}
            type="text"
            placeholder="请输入你的用户名"
          ></input>
          <br />
          <input
            className={styles.rname}
            type="text"
            placeholder="请输入你的名字"
          ></input>
          <br />
          <input
            value={PassWord}
            onChange={this.changPassWord}
            className={styles.rpassword}
            type="text"
            placeholder="请输入密码"
          ></input>
          <br />
          <input
            value={againPwd}
            onChange={e => this.setState({ againPwd: e.target.value })}
            className={styles.ragain}
            type="text"
            placeholder="请再次输入密码"
          ></input>

          <br />
          <button onClick={this.handClick.bind(this)} className={styles.rbtn}>
            注册
          </button>
        </main>
      </div>
    );
  }

  changUserName(e) {
    this.setState({
      UserName: e.target.value
    });
  }
  changPassWord(e) {
    this.setState({
      PassWord: e.target.value
    });
  }

  handClick() {
    let { UserName, PassWord, againPwd } = this.state;
    if (UserName !== "" && PassWord !== "" && PassWord === againPwd) {
      axios
        .post("/api/getregister", {
          UserName,
          PassWord
        })
        .then(res => {
          if (res.data.code === 1) {
            alert(res.data.message);
            this.props.history.go(-1);
          } else {
            alert(res.data.message);
            this.setState({
              UserName: "",
              PassWord: ""
            });
          }
        });
    } else {
      alert("输入框不能为空");
    }
  }
}
export default Registration;
