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
    <map></map>
    <router-view />
  </div>
</template>

<script>
import map from "@/views/Map.vue";

export default {
  name: "App",
  components: {
    "map": map
  },
};
</script>

<style scoped>
  @import "./App.css";
</style>
