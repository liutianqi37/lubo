import React, { Component }  from 'react';
// import { connect } from 'dva';
import style from "../IndexPage.css"
import styles from './Dedication.css';
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default class Dedication extends Component {
  state={
    ind:0,
    list:[
      {
        index:0,
        tit:"微信"
      },
      {
        index:1,
        tit:"支付宝"
      }
    ]
  }
  render() {
    let {ind,list} = this.state
    return (
      <div className={style.wrap}>
        <Header title="奉献" isBack={true}/>
        <main>
          <div className={styles.big}>
              <div className={styles.title}>沐恩之家奉献二维码</div>
              <div className={styles.tab}>
                {
                  list && list.map((item,index)=>{
                    return <button className={ ind === index ? styles.left : styles.active} 
                    onClick={()=>{this.setState({ind:index })}}
                    key={index}
                    >
                    {item.tit}</button>
                  })
                } 
                </div>
              <div className={ind === 0 ? styles.box : styles.boxactive}>
                <img src="../src/assets/er.png" alt=""/>
                <p>扫一扫上面的二维码，加我微信</p>
              </div>
              <div className={ind === 1 ? styles.box : styles.boxactive}>
                <img src="../src/assets/er.png" alt=""/>
                <p>用支付宝扫二维码，加我好友</p>
              </div>
          </div>
        </main>
        <Footer/>
    </div>
    )
  }
}


