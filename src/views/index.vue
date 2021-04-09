<template>
  <div>
    <station-chart id="stationChart" :charts="charts"></station-chart>
    <type-chart id="entityStatistic" :countByType="countByType"></type-chart>
    <recruitment-board id="recruitmentBoard"></recruitment-board>
    <topic-board id="platformStatistic" :countByTopic="countByTopic"></topic-board>
  </div>
</template>

<script>
import RecruitmentBoard from "./recruitmentBoard.vue";
import topicBoard from "../components/topicBoard.vue";
import typeChart from '../components/typeChart.vue';
import stationChart from '../components/stationChart.vue';
import axios from 'axios'

export default {
  name: "index",
  components: {
    RecruitmentBoard,
    topicBoard,
    typeChart,
    stationChart
  },
  data() {
    return {
      countByTopic: [],
      countByType: [],
      charts: []
    }
  },
  async created() {
    let res = await axios.get("/maps/api.json");
    this.countByTopic = res.data.data.countByTopic
    this.countByType = res.data.data.countByType
    this.charts = res.data.data.charts
    // console.log(this.charts)
  },
  mounted() {
  },
};
</script>

<style>
  @import "./index.css";
</style>
