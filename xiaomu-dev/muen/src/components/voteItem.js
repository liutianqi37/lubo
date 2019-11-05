import React, { useEffect, Component } from "react";
import echarts from "echarts";

class voteItem extends Component {
  render() {
    return (
      <div
        style={{ width: 300, height: 200, marginTop: 10, marginLeft: 32 }}
        ref="Echarts"
      ></div>
    );
  }
  componentDidMount() {
    let myChart = echarts.init(this.refs.Echarts);
    myChart.showLoading();
    myChart.setOption(this.props);
    setTimeout(() => {myChart.hideLoading()}, 2000);
  }
}

export default voteItem;

