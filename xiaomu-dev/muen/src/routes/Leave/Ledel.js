import React, { Component } from 'react';
import styles from './Ledel.css';
import style from "../IndexPage.css"
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Bscroll from 'better-scroll'
import fetch from "dva/fetch"; //导入fetch的模块
import axios from "axios"

import moment from 'moment';
import 'moment/locale/zh-cn'
moment.locale('zh-cn');

export default class Detail extends Component {
  state = {
    list: [],
    ind: 0,
    tab: [
      {
        index: 0,
        tit: "评论"
      },
      {
        index: 1,
        tit: "点赞"
      }],
    pinglun: [],
    limit:4,
    offset:0,
    day:'',
    hh:'',
    mm:''
  }
  render() {
    let { ind, tab, list, pinglun ,day,hh,mm} = this.state
    return (
      <div className={style.wrap}>
        <Header title="留言板" isBack={true} />
        <main>

          <div className={styles.top}>
            <dl>
              <dd>
                <img src={list.img} alt="" />
              </dd>
              <dt>
                <div className={styles.div}><span className={styles.name}>{list.name}</span> </div>
                <div className={styles.con}>{list.con}</div>
                <div className={styles.time}>
                  <span>{list.time}</span>
                </div>
              </dt>
            </dl>
          </div>

          <div className={styles.tab}>
            {
              tab && tab.map((item, index) => {
                return <button className={ind === index ? styles.left : styles.active}
                  onClick={() => { this.setState({ ind: index }) }}
                  key={index}
                >
                  {item.tit}</button>
              })
            }
          </div>

          <div className={ind === 0 ? styles.box : styles.boxactive} ref="big">
              <div className={styles.pingqu}>
                {
                  pinglun && pinglun.map((item, index) => {
                    return <dl key={index}>
                      <dd>
                          <img src={item.img} alt="" />
                      </dd>
                      <dt>
                        <div className={styles.name}>{item.name}:</div>
                        <div className={styles.haiyou}>
                          <span className={styles.con}>{item.con}</span>{" "}
                          <span className={styles.time}>{item.time}</span>
                        </div>
                      </dt>
                    </dl>
                  })
                }
                <div className={styles.up} ref="up">加载更多</div>
              </div>
          </div>

          <div className={ind === 1 ? styles.dianzan : styles.boxactive}>
              <div className={styles.who}>
                <dl>
                  <dd>
                      <img
                          src="http://b-ssl.duitang.com/uploads/item/201503/23/20150323135531_F2mYT.jpeg"
                          alt=""
                        />
                  </dd>
                  <dt>
                    <div className={styles.div}><span className={styles.name}>么么哒</span> </div>
                    <div className={styles.con}>谢君欣赏</div>
                    <div className={styles.time}>
                      <span>{day}号&nbsp;&nbsp;{hh}&nbsp;:&nbsp;{mm}</span>
                    </div>
                  </dt>
                </dl>
              </div>
              <div className={styles.loading}>加载更多</div>
         </div>
        </main>
        <Footer />
      </div>
    )
  }
  componentDidMount() {
    let {limit,offset}=this.state
    let item = this.props.location.state.item;
    let day = new Date().getDate()
    let hh = new Date().getHours() 
    let mm = new Date().getMinutes() 
    this.setState({
      list: item,
      day:day,
      hh:hh,
      mm:mm
    })

    fetch(`/api/pinglun?limit=${limit}&offset=${offset}`)
      .then(res => {
        return res.json();
      })
      .then(myJson => {
        // 拿到所有的时间
        let time = myJson.map(item => {
          return item.time;
        });
        let date = time.map(item => {
          return moment(item).format("YY-MM-DD hh:mm");
        });
        date.map((item, index2) => {});
        myJson.forEach((item, index1) => {
          item.time = date[index1];
        });
        this.setState({
          pinglun: myJson
        });
      });

     
    let box = this.refs.big
    let up=this.refs.up
    let scroll=new Bscroll(box, {
      click: true,
      probeType: 2
    })
    scroll.on('scroll', function (position) {
      if(position.y < (this.maxScrollY - 30)) {
        up.innerText = '加载中...';
        setTimeout(function () {
          // 恢复文本值 
          up.innerText = '查看更多';
          scroll.refresh();
        }, 2000);
      }
    });

    scroll.on("touchEnd",(pos)=>{
      if(pos.y<(scroll.maxScrollY-30)){
        limit+=4
        if(limit>this.state.count+3){
          this.refs.loader.innerText="我是有底线的.."
        }else{
          fetch(`/api/pinglun?limit=${limit}&offset=${offset}`)
          .then(res => {
            // console.log(res)
            return res.json();
          })
          .then(myJson => {
            // 拿到所有的时间
            let time = myJson.map(item => {
              return item.time;
            });
            let date = time.map(item => {
              return moment(item).format("YY-MM-DD hh:mm");
            });
            date.map((item, index2) => {});
            myJson.forEach((item, index1) => {
              item.time = date[index1];
            });
            this.setState({
              pinglun: myJson
            });
          });
        }
      }
      
    })
  }


}


