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
    PlatformStatistic
  },

  async created() {
    // let res = await axios.get("/maps/api.json");
    // console.log(res);
  },
  mounted() {
  },
};
</script>

<style>
  @import "./index.css";
</style>
