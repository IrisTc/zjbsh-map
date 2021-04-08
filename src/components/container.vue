<template>
  <div>
    <i class="topL"></i>
    <i class="topR"></i>
    <i class="bottomL"></i>
    <i class="bottomR"></i>
    <div class="data-title1">
      <b class="data-title-left">[</b>
      <span>浙江省博士后工作站数据</span>
      <b class="data-title-right">]</b>
    </div>
  </div></template
>

<script>
export default {};
</script>

<style scoped>
    .topL {
    width: 20px;
    height: 20px;
    border-top-width: 2px;
    border-top-color: #26c6f0;
    border-top-style: solid;
    border-left-width: 2px;
    border-left-color: #26c6f0;
    border-left-style: solid;
    position: absolute;
    top: -2px;
    left: -2px;
    }
    .topR {
    width: 20px;
    height: 20px;
    border-top-width: 2px;
    border-top-color: #26c6f0;
    border-top-style: solid;
    border-right-width: 2px;
    border-right-color: #26c6f0;
    border-right-style: solid;
    position: absolute;
    top: -2px;
    right: -2px;
    }
    .bottomL {
    width: 20px;
    height: 20px;
    border-bottom-width: 2px;
    border-bottom-color: #26c6f0;
    border-bottom-style: solid;
    border-left-width: 2px;
    border-left-color: #26c6f0;
    border-left-style: solid;
    position: absolute;
    bottom: -2px;
    left: -2px;
    }
    .bottomR {
    width: 20px;
    height: 20px;
    border-bottom-width: 2px;
    border-bottom-color: #26c6f0;
    border-bottom-style: solid;
    border-right-width: 2px;
    border-right-color: #26c6f0;
    border-right-style: solid;
    position: absolute;
    bottom: -2px;
    right: -2px;
    }

    .data-title-left,
    .data-title-right {
    color: #105eda;
    font-family: "微软雅黑";
    font-size: 20px;
    }
</style>
