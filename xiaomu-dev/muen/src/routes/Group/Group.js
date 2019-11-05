import React, { Component } from 'react';
import styles from './Group.css'
import fetch from "../../utils/request";
import {NavLink} from 'react-router-dom'
import axios from 'axios';

class Group extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groupList:[],//小组数据
      val: '', //模糊搜索
    };
  }
  render() {
    let {groupList,val} = this.state;
    return (
      <div>
        <div className={styles.groupbox}>
          <div className="inpbox">
            <input type="text" value={val} onChange={this.InpChange.bind(this)} onKeyDown={this.search} className={styles.inp} placeholder="搜索小组"></input>
          </div>
          <div className={styles.manygroup}>
            <div className={styles.gtitle}>
              <div className={styles.manyt}><NavLink to="/Mygroup"> 所有小组</NavLink></div>
              <div className={styles.lookt}><NavLink to="/look"> 查看全部</NavLink></div>
            </div>
            <div className={styles.gcontent}>
            {
              groupList && groupList.map((item)=> {
                return <div className={styles.pbox} key={item.groupId}>
                  <div className={styles.gbox}>
                    <div className={styles.gtop}>
                      <img src={item.groupUrl} alt='图片'/>
                    </div>
                    <div className={styles.gname}>{item.groupName}</div>
                  </div>
                 </div>})
            }
            </div>
          </div>
        </div>
      </div>
    );
  }

//获取小组数据
componentDidMount() {
  fetch.get("/api/getgroup").then(res =>{
    this.setState({ groupList:res.data.results })
  });
}

//获取输入框的值
InpChange(e){
  this.setState({
      val: e.target.value
  })
}

//模糊搜索
search = (e) => {
   if(e.keyCode === 13){
     axios.post("/api/search",{
          groupName:this.state.val,
    }).then(res=>{
        if (res.data.code === 1) {
       alert(res.data.message);
         this.setState({ groupList: res.data.result })
     } else {
        alert(res.data.message);
      }
    })
   }

}
}

export default Group;
