import React, { Component } from 'react';
import Header from "../../components/Header";
import styles from "./Members.css"
import fetch from "../../utils/request"

class Members extends Component {
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
        <Header title="所有沐恩成员" isBack={true} {...this.props} />
        <main>
          <div>
            {
              datas && datas.map((item, index) => {
                return <dl key={index} className={styles.headImg}>
                  <dt><img src={item.img2}/></dt>
                  <dd>
                    <div className={styles.heads}>
                      <p>{item.pin}</p>
                      <p>{item.pic}</p>
                    </div>
                  </dd>
                </dl>
              })
            }
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

export default Members;
