<template>
  <Container :ititle="city+'博士后工作站数据'" iwidth="52" iheight="40">
    <div id="cityStationChart" :style="{ height: '100%', width: '100%' }"></div>
  </Container>
</template>

<script>
import Container from "@/components/container.vue";

export default {
  components: {
    Container,
  },
  props: ["city", "charts"],
  data() {
    return {
      option: {}
    };
  },
  watch: {
    charts: function (newVal) {
      let source = [];
      for (let key in newVal) {
        let arr = JSON.parse(key);
        let obj = {};
        obj.name = arr[1];
        let value = newVal[key];
        if (arr[0] == 1) {
          obj["国家级博士后科研工作站"] = value;
        } else {
          obj["浙江省级博士后工作站"] = value;
        }
        source.push(obj);
      }
      this.option = {
        tooltip: {},
        grid: {
          right: "10%",
          top: "15%",
          height: "75%",
          width: "80%",
        },
        color: ["#0a2dae", "#4cabce", "#006699"],
        legend: {
          data: ["国家级博士后科研工作站", "浙江省级博士后工作站"],
          right: "10%",
          top: "5%",
          textStyle: {
            color: "#fff",
          },
        },
        dataset: {
          dimensions: [
            "name",
            "国家级博士后科研工作站",
            "浙江省级博士后工作站",
          ],
          source: source,
        },
        yAxis: {
          axisLine: {
            lineStyle: {
              type: "solid",
              color: "#fff",
              width: 0.5,
            },
          },
        },
        xAxis: {
          type: "category",
          axisLabel: {
            color: "#fff",
            interval: 0,
            fontSize: 8,
          },
          axisLine: {
            lineStyle: {
              type: "solid",
              color: "#fff",
              width: 0.5,
            },
          },
        },
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series: [{ type: "bar" }, { type: "bar" }],
      };
      this.drawChart();
    },
  },
  methods: {
    drawChart() {
      let myChart = this.$echarts.init(
        document.getElementById("cityStationChart")
      );
      myChart.setOption(this.option);
    },
  },
};
</script>

<style scoped>
@import "../styles/map.css";
</style>