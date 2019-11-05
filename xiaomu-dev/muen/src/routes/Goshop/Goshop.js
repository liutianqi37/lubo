import React, { Component } from 'react';
import styles from './Goshop.css';
import Header from '../../components/Header'
import { Icon, Modal, Button } from 'antd';

class Goshop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            sum: 0,
            price: 0,
            dataLs: [],
            selected: 0
        };
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = e => {
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        this.setState({
            visible: false,
        });
    };
    render() {
        let { selected, dataLs, sum, price } = this.state;
        return (
            <div className={styles.wrap}>
                <Header title="购物车" isBack={true} {...this.props} />
                <main>
                    {
                        dataLs.length > 0 && dataLs.map((item, index) => {
                            return <dl className={styles.heasd} key={index}>
                                <dt><img src={item.titleimg} /></dt>
                                <dd>
                                    <div className={styles.middles}>
                                        <p>{item.middle}</p>
                                        <p>￥{item.pictop}</p>
                                    </div>
                                    <div className={styles.bottoms}>
                                        <Icon type="down" onClick={this.plus.bind(this, { add: 'del', id: item.dycid, item, pice: item.pice * 1 - 1 })} />
                                        <label>{item.pice}</label>
                                        <Icon type="up" onClick={this.plus.bind(this, { add: 'add', id: item.dycid, item, pice: item.pice * 1 + 1 })} />
                                    </div>
                                </dd>
                            </dl>
                        })
                    }
                    <div>
                        <Modal
                            title="确认购买吗？"
                            visible={this.state.visible}
                            onOk={this.handleOk}
                            onCancel={this.handleCancel}>
                            <p>一经购买本店概不负责！</p>
                        </Modal>
                    </div>
                </main>
                <footer className={styles.footer}>
                    <span></span>
                    <span>已选<label>{sum}</label>件</span>
                    <span>合计：￥<label>{price}</label></span>
                    <span> <Button type="primary" onClick={this.showModal} className={styles.buttons}>购买</Button></span>
                </footer>
            </div>
        );
    }
    componentDidMount() {
        let dataLs = JSON.parse(sessionStorage.getItem("testKey"));
        let selected = dataLs.length;
        this.setState({ dataLs, selected })
    }
    //加
    plus = (count) => {
        let { dataLs } = this.state;
        let { id, pice } = count;
        let index = dataLs.findIndex((item) => item.dycid == id);
        if (pice > 0) {
            dataLs[index].pice = pice;
        }
        this.setState({
            dataLs
        })
        this.sumprice(dataLs)
        window.sessionStorage.setItem("testKey", JSON.stringify(dataLs))
    }
    sumprice = (data) => {
        let sum = data.reduce((pre, car) => {
            return pre + (car.pice * 1)
        }, 0)
        let price = data.reduce((pre, car) => {
            return pre + (car.pice * 1) * (car.pictop * 1)
        }, 0)
        this.setState({ sum, price  })
    }

}

export default Goshop;
