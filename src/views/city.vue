<template>
  <div>
    <city-station-chart id="stationChart" :city="city" :charts="cityCharts"></city-station-chart>
    <station-info id="stationInfo" :units="units"></station-info>
  </div>
</template>

<script>
import CityStationChart from '../components/cityStationChart.vue';
import StationInfo from "../components/stationInfo.vue";

export default {
  name: "city",
  components: {
    StationInfo,
    CityStationChart,
  },
  data() {
    return {
      city: '',
      cityCharts: [],
      units: []
    }
  },
  async created() {
    let querCity = this.$route.query.city + "";
    this.city = querCity
    querCity = querCity === "省直部属" ? querCity : querCity.slice(0, -1);
    let res = await this.$axios.get("/maps/api.json?city=" + querCity);
    this.cityCharts = res.data.data.charts;
    this.units = res.data.data.units;
  }
}
</script>

<style scoped>
@import "../styles/city.css";
</style>