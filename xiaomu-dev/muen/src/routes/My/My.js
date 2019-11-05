import React, { Component } from 'react';
import Footer from "../../components/Footer";
import styles from "./My.css"
import { Icon, message } from 'antd';
import Header from "../../components/Header";
export default class Home extends Component {
    state = {
    }
    render() {
        return (
            <div className={styles.wrap}>
             <Header title="我的页面" isBack={true}/>
                <main className={styles.main}>
                    <div>
                        <dl className={styles.headImg}>
                            <dt><img src="http://img0.imgtn.bdimg.com/it/u=2915349409,1807295889&fm=26&gp=0.jpg" /></dt>
                            <dd>
                                <div className={styles.heads}>
                                    <p>沐恩沐恩呐</p>
                                    <p>沐恩沐恩呐沐恩沐恩呐</p>
                                </div>
                                <div className={styles.topss}>
                                    <Icon type="file-done" />
                                </div>
                            </dd>
                        </dl>
                    </div>
                    <div className={styles.middlers}>
                        <div className={styles.sppes} onClick={() => {
                            this.props.history.push('/members')
                        }}><span>所有沐恩成员</span><Icon type="right" /></div>
                        <div className={styles.headesf} onClick={() => {
                            this.props.history.push('/groupList')
                        }}><span>我的小组</span><Icon type="right" /></div>
                        <div className={styles.headesf} onClick={() => {
                          if(!sessionStorage.getItem("testKey")){
                           message.info('您还没有添加商品')
                        }else{
                            this.props.history.push('/goshop')
                        }
                        }}><span>我的订单</span><Icon type="right" /></div>
                        <div className={styles.headesf}><span>管理地址</span><Icon type="right" /></div>
                        <div className={styles.headesf} onClick={() => {
                            this.props.history.push('/myVote')
                        }}><span>我的投票</span><Icon type="right" /></div>
                        <div className={styles.headesf} onClick={() => {
                            this.props.history.push('/dynamic')
                        }}><span>我的动态</span><Icon type="right" /></div>
                        <div className={styles.headesf} onClick={()=>{
                            this.props.history.push('/settings')
                        }}><span>设置</span><Icon type="right" /></div>
                        <div className={styles.headesf}></div>
                    </div>
                </main>
                <Footer />
            </div>
        )
    }

}
