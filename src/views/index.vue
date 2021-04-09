<template>
  <div>
    <recruitment-board id="recruitmentBoard"></recruitment-board>
    <platform-statistic id="platformStatistic"></platform-statistic>
  </div>
</template>

<script>
import RecruitmentBoard from "./recruitmentBoard.vue";
import PlatformStatistic from "./platformStatistic.vue";

export default {
  name: "index",
  components: {
    RecruitmentBoard,
    PlatformStatistic,
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
};
</script>

<style scoped>
@import "../styles/index.css";
</style>
