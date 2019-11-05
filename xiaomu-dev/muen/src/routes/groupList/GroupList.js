import React, { Component } from 'react';
import Header from "../../components/Header";
import styles from "./GroupList.css"
import { Icon } from 'antd';
import fetch from "../../utils/request.js"

class GroupList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datas: []
        };
    }

    render() {
        let { datas } = this.state;
        return (
            <div className={styles.wrap}>
                <Header title="我的小组" isBack={true} {...this.props} />
                <main className={styles.main}>
                <div>
                    <h4 className={styles.hst}>我的小组</h4>
                    <div>
                        <dl className={styles.titleImg}>
                            <dt><img src="http://e.hiphotos.baidu.com/image/pic/item/4610b912c8fcc3cef70d70409845d688d53f20f7.jpg" /></dt>
                            <dd>
                                <div className={styles.heads}>
                                    <p>祷告小组</p>
                                    <p>我的小组介绍</p>
                                </div>
                            </dd>
                        </dl>
                    </div>
                    <hr></hr>
                    <p className={styles.qita}>其他</p>
                    <div className={styles.content}>
                        {
                            datas && datas.map((item, index) => {
                                return <dl key={index} className={styles.headImg}>
                                    <dt><img src={item.img1} /></dt>
                                    <dd>
                                        <div className={styles.heads}>
                                            <p>{item.pin}</p>
                                            <p>{item.title}</p>
                                        </div>
                                    </dd>
                                </dl>
                            })
                        }
                    </div>
                    </div>
                </main>

            </div>
        );
    }

    componentDidMount() {
        fetch.get('/api/list').then((res) => {
            this.setState({
                datas: res.data
            })
        })
    }
}

export default GroupList;
