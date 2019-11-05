import React, { Component } from 'react';
import styles from '../routes/Gifts/Gifts.css';
import { Link } from 'dva/router'

class GiftList extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        let { item } = this.props;
        return (
            <Link to={{ pathname: '/giftList', state: item }}>
                <dl className={styles.gifts}>
                    <dt><img src={item.titleimg} /></dt>
                    <dd>
                        <p>{item.pin}</p>
                        <p>{item.middle}</p>
                        <p>￥{item.pictop}</p>
                    </dd>
                </dl>
            </Link>
        );
    }
}

export default GiftList;
