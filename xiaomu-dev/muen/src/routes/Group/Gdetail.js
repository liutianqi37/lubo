import React, { Component } from 'react';
import styles from './Gdetail.css';
import Header from '../../components/Header';
import fetch from "../../utils/request";

import Chat from 'chat-react';

class Gdetail extends Component  {
  state={
    messages: [],
    timestamp: new Date().getTime(),
    list:[],
    inputValue:''

  }

  constructor() {
    super();
  }
  render() {
    const {inputValue, messages, timestamp} = this.state;
    const userInfo = {
      avatar: "http://img.binlive.cn/6.png",
      userId: "fengyan",
      name: 'fengyan'
    }
  return (
    <div className={styles.wrap}>
      <Header title="我的小组" isBack={true} />
      <main>
      <div className={styles.mybox}>
        <div className={styles.mytitle}>我的小组</div>
        <div className={styles.mygroup}>
          <div className={styles.myimg}>
            <img src="../../../../img/2.jpg"></img>
          </div>
          <div className={styles.myname}>吃货小组</div>
          <div className={styles.mycon}>欢迎加入我们</div>
        </div>
      </div>

        <div className={styles.chatbox}>
            <div>
                {this.state.list.map((item,index)=>{
                    return <span key={index} onClick={this.handleDele}>{item}</span>
                })}
            </div>
        </div>

      <div className={styles.box}>
      <div className={styles.message}>
        <input type="text" value={this.state.inputVal} onChange={this.handleinput} ></input>
      </div>
      <Chat/>

      </div>

    </main>

    </div>

  );

  }
  setInputfoucs = () => {
    this.chat.refs.input.inputFocus();  //set input foucus
  }
  setScrollTop = () => {
    this.chat.refs.message.setScrollTop(1200);  //set scrollTop position
  }
  sendMessage = (v) => {
    const {value} = v;
    if (!value) return;
    const {messages = []} = this.state;
    messages.push(v);
    this.setState({messages, timestamp: new Date().getTime(), inputValue: ''});
  }
// 发布消息
handleBut=()=>{
    this.setState({
        list:[...this.state.list,this.state.inputVal],
        inputVal:''
    })
}

handleinput=(e)=>{
    this.setState({
        inputVal:e.target.value
    })
}


}

export default Gdetail;
