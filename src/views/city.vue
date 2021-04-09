<template>
  <div>
    <city-station-chart
      id="stationChart"
      :city="city"
      :charts="cityCharts"
    ></city-station-chart>
    <station-info id="stationInfo" :units="units"></station-info>
  </div>
</template>

<script>
import axios from "axios";
import CityStationChart from "../components/cityStationChart.vue";
import StationInfo from "../components/stationInfo.vue";

export default {
  name: "city",
  components: {
    StationInfo,
    CityStationChart,
  },
  data() {
    return {
      city: "",
      cityCharts: [],
      units: [],
    };
  },
  watch: {
    async $route() {
      this.city = this.$route.query.city;
      this.city = this.city === "省直部属" ? this.city : this.city.slice(0, -1);
      let res = await axios.get("/maps/api.json?city=" + this.city);
      this.cityCharts = res.data.data.charts;
      this.units = res.data.data.units;
    },
  },
  async created() {
    this.city = this.$route.query.city;
    this.city = this.city === "省直部属" ? this.city : this.city.slice(0, -1);
    let res = await axios.get("/maps/api.json?city=" + this.city);
    this.cityCharts = res.data.data.charts;
    this.units = res.data.data.units;
  },
};
</script>

<style scoped>
@import "../styles/city.css";
</style>
