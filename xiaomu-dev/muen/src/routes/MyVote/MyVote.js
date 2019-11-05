import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import styles from "./MyVote.css";
import fetch from "../../utils/request";
import VoteItem from "../../components/voteItem";

function MyVote() {
  let [list, setList] = useState([]);
  useEffect(() => {
    fetch
      .get("/api/getAllVote", [
        { userName: window.sessionStorage.getItem("userId") }
      ])
      .then(res => {
        if (res.data.code === 1) {
          setList(res.data.arr);
        }
      });
  }, []);
  return (
    <div className={styles.wrap}>
      <Header title="我的投票" isBack={true} />
      <main className={styles.main}>
        <div>
          {list &&
            list.map((item, index) => <VoteItem {...item} key={index} />)}
        </div>
      </main>
    </div>
  );
}
export default MyVote;
