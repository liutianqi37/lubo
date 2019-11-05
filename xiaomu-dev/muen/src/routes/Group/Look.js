import React, { Component } from 'react'
import styles from './Look.css';
import Header from '../../components/Header';
import fetch from "../../utils/request";

class Look extends Component  {
  state={
    LookList:[],//小组数据

  }
  constructor() {
    super();
  }
  render() {
  let {LookList} = this.state;
  return (
    <div className={styles.wrap}>
      <Header title="全部小组" isBack={true} />
      <main>
      <div className={styles.lookbox}>
      {
        LookList && LookList.map((item,index)=> {
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
      this.setState({ LookList:res.data.results })
    });
  }
  }

export default Look;




