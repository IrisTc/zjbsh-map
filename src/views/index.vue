<template>
  <div>
    <div id="myChart" :style="{ height: '540px' }"></div>
  </div>
</template>

<script>
// import axios from "axios";

export default {
  name: "index",

  async created() {
    // let res = await axios.get("/maps/api.json");
    // console.log(res);
  },
  mounted() {
    let myChart = this.$echarts.init(document.getElementById("myChart"));
    console.log(myChart);
    // var color = ["#19D672", "#FD517D"];
    // 绘制图表
    myChart.setOption({
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [150, 230, 224, 218, 135, 147, 260],
          type: "line",
        },
      ],
    });
  },
};
</script>

<style></style>
