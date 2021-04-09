<template>
  <div>
    <div class="index-title">
      <i class="index-title-left">
        <img src="./assets/title-left.png" alt="tag-left" />
      </i>
      <div id="title" :style="{ height: '100%', width: '100%' }"></div>
      <i class="index-title-right">
        <img src="./assets/title-right.png" alt="tag-right" />
      </i>
    </div>
    <Map></Map>
    <router-view />
  </div>
</template>

<script>
import Map from "@/views/map.vue";

export default {
  name: "App",
  components: {
    Map,
  },
  data() {
    return {
      titleOption: {
        title: {
          text: "浙江省博士后实时数据运行平台",
          subtext: "",
          left: "center",
          textStyle: {
            color: "#FFAC50",
            fontSize: 40,
          },
        },
      },
    };
  },
  mounted() {
    let myChart = this.$echarts.init(document.getElementById("title"));
    myChart.setOption(this.titleOption);
  },
};
</script>

<style>
@import "./styles/App.css";
</style>
