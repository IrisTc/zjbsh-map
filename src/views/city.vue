<template>
  <div>
    <station-info id="stationInfo"></station-info>
  </div>
</template>

<script>
import StationInfo from "./stationInfo.vue";

export default {
  name: "city",
  components: {
    StationInfo,
  },

}
</script>

<style>
@import "./city.css";
</style>