import React, { useEffect, useState } from "react";
import fetch from "../../utils/request";
import styles from "./ToVoteDetail.css";
import Header from "../../components/Header";
import { Checkbox, Radio, Progress, message } from "antd";
import moment from "moment";
function ToVoteDetail(props) {
  let [list, setList] = useState([]);
  let [brr, setBrr] = useState([]);
  let [target, setTarget] = useState({});
  let [value, setValue] = useState(-1);
  let [checkBoxList, setCheckBoxList] = useState([]);
  //初始请求数据
  useEffect(() => {
    getInit();
  }, []);
  let getInit = () => {
    fetch
      .get("/api/getVoteDetail", [{ voteId: props.location.state.voteId }])
      .then(res => {
        setBrr(res.data.brr);
        setList(res.data.arr);
        setTarget(res.data.result);
      });
  };
  //投票
  let add = () => {
    //单选
    if (value >= 0) {
      fetch
        .get("/api/addVoteNum", [{ optionId: list[value - 1].optionId }])
        .then(res => {
          if (res.data.code == 1) {
            message.info(res.data.message);
            getInit();
            props.history.go(-1);
          } else {
            message.info(res.data.message);
          }
        });
    } else if (checkBoxList.length > 0) {
      //多选
      fetch.post("/api/addCheckBox", { checkBoxList }).then(res => {
        if (res.data.code == 1) {
          message.info(res.data.message);
          getInit();
          props.history.push("/vote");
        } else {
          message.info(res.data.message);
        }
      });
    } else {
      message.info("请投票后点击提交");
    }
  };

  return (
    <div className="wrap">
      <Header title="投票详情" isBack={true} Statistics="统计" />
      <main>
        <div className={styles.voteDetailTop}>
          <div className={styles.left}>
            <div className={styles.leftTop}>
              <div className={styles.leftImg}>
                <img src={target.logo} alt="" />
              </div>
              <div className={styles.div}>{target.title}</div>
            </div>
            <div className={styles.leftCon}>{target.desc}</div>
          </div>

          <div className={styles.right}>
            截止到{" "}
            {moment(parseInt(target.endTime)).format("YYYY-MM-DD HH:mm:ss")}
          </div>
        </div>
        <div className={styles.voteChoose}>
          {target && target.isMultiple == 0
            ? list &&
              list.map((item, index) => (
                <div className={styles.chooseItem} key={index}>
                  <Radio.Group
                    onChange={e => {
                      setValue(e.target.value);
                    }}
                    value={value}
                  >
                    <Radio value={index + 1}>{item.option}</Radio>
                  </Radio.Group>
                  <div style={{ width: "100%", display: "flex" }}>
                    <Progress
                      percent={brr[index]}
                      showInfo={false}
                      style={{ width: "90%" }}
                    />{" "}
                    {list[index].voteNum}票
                  </div>
                </div>
              ))
            : list &&
              list.map((item, index) => (
                <div className={styles.chooseItem} key={index}>
                  <Checkbox
                    onChange={e => {
                      if (e.target.checked) {
                        checkBoxList.push(item.optionId);
                        setCheckBoxList([...checkBoxList]);
                      } else {
                        if (checkBoxList.length === 1) {
                          checkBoxList = [];
                          setCheckBoxList([...checkBoxList]);
                        } else {
                          checkBoxList.splice(index, 1);
                          setCheckBoxList([...checkBoxList]);
                        }
                      }
                    }}
                  >
                    {item.option}
                  </Checkbox>
                  <div style={{ width: "100%", display: "flex" }}>
                    <Progress
                      percent={brr[index]}
                      showInfo={false}
                      style={{ width: "90%" }}
                    />{" "}
                    {list[index].voteNum}票
                  </div>
                </div>
              ))}
          <div
            className={styles.pushChooseVote}
            onClick={() => {
              add();
            }}
          >
            提交
          </div>
        </div>
      </main>
    </div>
  );
}
export default ToVoteDetail;
