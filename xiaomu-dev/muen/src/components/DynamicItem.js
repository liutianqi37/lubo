import React, { Component } from 'react';
import styles from "../routes/IndexPage.css"

class DynamicItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        let { item } = this.props;
        return <div className={styles.dynamicItem}>
            <li><span><img src={item.img2} className={styles.nameimg} /></span>
                <div><i>沐恩</i><i>18分钟前</i></div>
            </li>
            <li> {item.title}</li>
            <li><img src={item.img1} /></li>
            <li>
                <span className="iconfont">&#xe63d; <b>15</b> </span>
                <span className="iconfont">&#xe601; <b>0</b></span>
                <span className="iconfont">&#xe63d; <b>0</b></span>
            </li>
        </div>
    }
}

export default DynamicItem;
