<template>
  <div>
    <station-chart id="stationChart" :charts="charts"></station-chart>
    <type-chart id="entityStatistic" :countByType="countByType"></type-chart>
    <recruitment-board id="recruitmentBoard" :infos="infos"></recruitment-board>
    <topic-board id="platformStatistic" :countByTopic="countByTopic"></topic-board>
  </div>
</template>

<script>
import axios from 'axios'
import StationChart from '../components/stationChart.vue';
import TypeChart from '../components/typeChart.vue';
import RecruitmentBoard from "../components/recruitmentBoard.vue";
import TopicBoard from "../components/topicBoard.vue";

export default {
  name: "index",
  components: {
    StationChart,
    TypeChart,
    RecruitmentBoard,
    TopicBoard,
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
    this.infos = res.data.data.infos
    this.charts = res.data.data.charts
    // console.log(this.charts)
  },
  mounted() {
  },
};
</script>

<style scoped>
@import "../styles/index.css";
</style>
