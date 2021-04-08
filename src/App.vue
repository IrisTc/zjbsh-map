<template>
  <div>
    <div class="index-title">
      <i class="index-title-left">
        <img src="./assets/title-left.png" alt="tag-left" />
      </i>
      <i class="index-title-right">
        <img src="./assets/title-right.png" alt="tag-right" />
      </i>
    </div>
    <!-- <Map></Map> -->
    <router-view />
  </div>
</template>

<script>
// import Map from "@/views/map.vue"
// import Container from "@/components/container.vue";

export default {
  name: "App",
  components: {
    // Map,
    // Container,
  },
};
</script>

<style>
@import "./App.css";
</style>
