import React, { Component } from "react";
import Header from "../../components/Header";
import styles from "./Seetings.css";
import { Icon } from "antd";

class Seetings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataslit: [
        {
          title: "姓名（需实名）",
          must: "沐恩白牙"
        },
        {
          title: "电话",
          must: "123456789101"
        },
        {
          title: "修改密码",
          must: "*******"
        },
        {
          title: "个性签名",
          must: "美丽的相遇"
        },
        {
          title: "性别",
          must: "女"
        },
        {
          title: "生日",
          must: "1995-11-27"
        },
        {
          title: "地区",
          must: "北京朝阳"
        }
      ]
    };
  }

  render() {
    let { dataslit } = this.state;
    return (
      <div className={styles.wrap}>
        <Header title="个人信息" isBack={true} {...this.props} />
        <main>
          <div className={styles.headtop}>
            <p>头像</p>
            <p>
              <img src="http://e.hiphotos.baidu.com/image/pic/item/4610b912c8fcc3cef70d70409845d688d53f20f7.jpg" />
            </p>
            <p>
              <Icon type="right" />
            </p>
          </div>
          <hr></hr>
          <div>
            {dataslit &&
              dataslit.map((item, index) => {
                return (
                  <div key={index}>
                    <div className={styles.booten}>
                      <p>{item.title}</p>
                      <p>{item.must}</p>
                      <p>
                        <Icon type="right" />
                      </p>
                    </div>
                  </div>
                );
              })}
          </div>
        </main>
      </div>
    );
  }
}

export default Seetings;
