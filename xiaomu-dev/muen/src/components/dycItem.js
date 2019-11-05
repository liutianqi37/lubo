import React, { Component } from "react";
import styles from "../routes/Dynamic/Dynamic.css";
class DycItem extends Component {
  render() {
    let { con, title, img1, img2, fabulous, lookNum, message,clickFabulous ,dycId,dialog,ToDetails,logo,aaa} = this.props;
    return (
      <div className={styles.dycItem} >
        <div className={styles.dycItem_top} onClick={()=>{ToDetails(dycId)}}>
          <div className={styles.dycItem_topLeft}>
            <img src={logo}/>
          </div>
          <div className={styles.dycItem_topRight}>
            <span>{title}</span> <span>28分钟之前</span>{" "}
          </div>
        </div>
        <div className={styles.dycItem_con}>{con}</div>
        <div className={styles.dycBanner}>
          <div> <img src={img1}   onClick={()=>{dialog(img1)}}/></div>
          <div><img src={img2}  onClick={()=>{dialog(img2)}} /></div>
        </div>
        <div className={styles.dycBottom}>
              <span> <i className='iconfont icon-liulan'></i>{lookNum}</span>
              <span> <i className='iconfont icon-icon-test'></i>{message}</span>
             {aaa==1? <span onClick={()=>{clickFabulous(dycId)}}> <i className='iconfont icon-zan'></i>{fabulous}</span>:
             <span> <i className='iconfont icon-zan' style={{color:"red"}}></i>{fabulous}</span>}
        </div>
      </div>
    );
  }
}

export default DycItem;

