import React, { Component } from "react";
import { NavLink } from "dva/router";
import styles from "../routes/IndexPage.css";
import { Icon } from "antd";

export default class Footer extends Component {
  render() {
    return (
      <footer className={styles.footer}>
        <NavLink to="/indexPage">
          <Icon type="pic-right" />
          <span>首页</span>
        </NavLink>
        <NavLink to="/dynamic">
          <Icon type="plus-square" />
          <span>沐恩动态</span>
        </NavLink>
        <a>
          <Icon type="exception" />
          <span>主内资料</span>
        </a>
        <NavLink to="/leave">
          <Icon type="table" />
          <span>留言板</span>
        </NavLink>
        <NavLink to="/my">
          <Icon type="user" />
          <span>我的</span>
        </NavLink>
      </footer>
    );
  }
}
