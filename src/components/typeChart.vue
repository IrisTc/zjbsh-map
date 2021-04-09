<template>
  <Container ititle="浙江省博士后载体" iwidth="20" iheight="19">
    <div id="entity" :style="{ height: '80%', width: '100%' }"></div>
  </Container>
</template>

<script>
import Container from "@/components/container.vue";

export default {
  name: "platformStatistic",
  components: {
    Container,
  },
  props: ["countByType"],
  data() {
    return {
      type: {},
      option: {
        tooltip: {
          trigger: "item",
        },
        legend: {
          orient: "vertical",
          right: "10%",
          top: "15%",
          textStyle: {
            color: "#fff",
          },
        },
        series: [
          {
            name: "载体统计",
            type: "pie",
            radius: "90%",
            top: "10%",
            right: "40%",
            data: [
              { value: 0, name: "国家级工作站" },
              { value: 0, name: "浙江省级工作站" },
              { value: 0, name: "流动站" }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  position: "inner",
                  formatter: "{c} ",
                },
              },
            },
          },
        ],
      },
    };
  },
  watch: {
    countByType: function (newVal) {
      this.type = newVal; //newVal即是chartData
      this.drawChart();
    },
  },
  methods: {
    drawChart() {
      let myChart = this.$echarts.init(document.getElementById("entity"));
      let type = this.option.series[0].data;
      type[0].value = this.type['1']
      type[1].value = this.type['2']
      type[2].value = this.type['3']
      myChart.setOption(this.option);
    },
  },
};
</script>

<style scoped>
@import "../styles/map.css";
</style>