import React, { useState, useEffect } from "react";
import styles from "./Details.css";
import Header from "../../components/Header";
import fetch from "../../utils/request";
function Details(props) {
  let [target, setTarget] = useState({});
  //请求数据
  useEffect(() => {
    let id = props.location.state.dycId;
    fetch.get("/api/getDetails", [{ dycId: id }]).then(res => {
      setTarget({ target: res.data });
      //更新浏览次数
      fetch.get("/api/updateLookNum", [{ lookNum:++res.data.lookNum },{dycId:res.data.dycId}]);
    });
  }, []);
  return (
    <div className={styles.wrap}>
      <Header isBack={true} {...props} title="详情" />
      <main>
        {target.target ? (
          <div className={styles.detailsContent}>
            <div className={styles.dycItem}>
              <div className={styles.dycItem_top}>
                <div className={styles.dycItem_topLeft}>
                  <img src={target.target.logo} alt="" />
                </div>
                <div className={styles.dycItem_topRight}>
                  <span>{target.target.title}</span> <span>28分钟之前</span>{" "}
                </div>
              </div>
              <div className={styles.dycItem_con}>{target.target.con}</div>
              <div className={styles.dycBanner}>
                <div>
                  <img src={target.target.img1} />
                </div>
                <div>
                  <img src={target.target.img2} />
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </main>
    </div>
  );
}
export default Details;
