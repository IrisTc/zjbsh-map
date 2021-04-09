<template>
  <div>
    <city-station-chart id="stationChart" :city="city" :charts="cityCharts"></city-station-chart>
    <station-info id="stationInfo"></station-info>
  </div>
</template>

<script>
import axios from 'axios';
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
      cityCharts: []
    }
  },
  async created() {
    this.city = '杭州'
    let res = await axios.get('/maps/api.json?city='+this.city)
    this.cityCharts = res.data.data.charts
  }
}
</script>

<style scoped>
@import "../styles/city.css";
</style>