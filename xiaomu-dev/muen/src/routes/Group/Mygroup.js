import React, { Component } from 'react'
import styles from './Mygroup.css';
import Header from '../../components/Header';
import fetch from "../../utils/request";
import {NavLink} from 'react-router-dom'

class MyGroup extends Component  {
  state={
    MyList:[],//小组数据

  }
  constructor() {
    super();
  }
  render() {
  let {MyList} = this.state;
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
          <div className={styles.myname}><NavLink to="/Gdetail">吃货小组 </NavLink></div>
          <div className={styles.mycon}>我的小组介绍</div>

        </div>

      </div>
      <div className={styles.lookbox}>

      <div className={styles.qita}>其他</div>
      {
        MyList && MyList.map((item,index)=> {
          return <div className={styles.lookbox} key={index}>
            <div className={styles.lbox}>
              <div className={styles.lpic}>
                <img src={item.groupUrl} alt='图片'/>
              </div>
              <div className={styles.gcenter}>
                <div className={styles.gtitle}>{item.groupName}</div>
                <div className={styles.gcon}>{item.groupCon}</div>
              </div>
            </div>
           </div>})
      }
      </div>
      </main>
    </div>
  );
  }
  //获取初始页面
  componentDidMount() {
    fetch.get("/api/getgroup").then(res =>{
      this.setState({ MyList:res.data.results })
    });
  }
  }

export default MyGroup;
