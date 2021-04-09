<template>
  <div>
    <div id="map"></div>
    <button id="back" v-if="backBtn" @click="handleBack">
      返回上级
    </button>
  </div>
</template>

<script>
import axios from "axios";
import mapJson from "@/assets/map.json";
import pinJson from "@/assets/pin.json";
import { converMapData } from "@/utils/convertMapData";

export default {
  name: "index",
  data() {
    return {
      map: {},
      backBtn: false,
    };
  },
  async mounted() {
    this.$echarts.registerMap("HZ", mapJson);
    let res = await axios.get("/maps/api.json");
    this.map = res.data.data.maps;

    let myChart = this.$echarts.init(document.getElementById("map"));
    myChart.setOption({
      color: ["#0a2dae", "#4cabce", "#006699"],
      tooltip: {
        trigger: "item",
        formatter: function(params) {
          return params.name + " : " + params.data.value[2];
        },
      },
      geo: {
        map: "HZ",
        show: true,
        roam: false,
        left: "center",
        select: {
          label: {
            show: true,
            color: "#fff",
          },
        },
        label: {
          normal: {
            show: true,
            textStyle: {
              color: "#fff",
            },
          },
          emphasis: {
            show: true,
            textStyle: {
              color: "#fff",
            },
          },
        },
        itemStyle: {
          normal: {
            areaColor: "#3a7fd5",
            borderColor: "#0a53e9",
            shadowColor: "#092f8f",
            shadowBlur: 20,
          },
          emphasis: {
            areaColor: "#0a2dae",
          },
        },
      },
      series: [
        {
          type: "map",
          map: "HZ",
          geoIndex: 0,
          data: converMapData(pinJson, this.map),
        },
        {
          name: "pin",
          type: "scatter",
          coordinateSystem: "geo",
          symbol: "pin",
          symbolSize: [50, 50],
          label: {
            normal: {
              show: true,
              textStyle: {
                color: "#fff",
                fontSize: 9,
              },
              formatter(value) {
                return value.data.value[2];
              },
            },
          },
          itemStyle: {
            normal: {
              color: "#ffcc00",
            },
          },
          data: converMapData(pinJson, this.map),
          showEffectOn: "render",
          rippleEffect: {
            brushType: "stroke",
          },
          hoverAnimation: true,
          zlevel: 1,
        },
      ],
    });

    window.addEventListener("resize", function() {
      myChart.resize();
    });

    myChart.off("click");
    myChart.on("click", (res) => {
      this.backBtn = true;
      this.$router.push({ path: "/city", query: { city: res.name } });
    });
  },
  methods: {
    handleBack() {
      this.backBtn = false;
      this.$router.push({ path: "/" });
    },
  },
};
</script>

<style scoped>
@import "../styles/map.css";
</style>
