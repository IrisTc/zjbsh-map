<template>
  <div>
    <Container
      ititle="charts"
      iwidth=40
      iheight=60
      style="
        position: absolute;
        top: 12%;
        right: 3%;"
    >
      <div id="myChart" :style="{ height: '100%' }"></div>
    </Container>
  </div>
</template>

<script>
// import axios from "axios";
import Container from "@/components/container.vue";

export default {
  name: "index",
  components: {
    Container,
  },

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
