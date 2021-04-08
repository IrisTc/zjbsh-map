<template>
  <Container ititle='浙江省"三大高地"平台' iwidth=20 iheight=18>
    <div id="platform-content">
      <table id="platform-table">
        <thead>
          <tr id="platform-title">
            <th width="40%" align="center">高地类别</th>
            <th width="30%" align="center">在站博士后</th>
            <th width="30%" align="center">相关平台</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td width="30%" align="center">
              {upland.name}
            </td>
            <td width="70%" align="center">
              在站博士后{upland.member}人 相关平台 {upland.platformNumber}家
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </Container>
</template>

<script>
import Container from "@/components/container.vue";

export default {
  name: "platformStatistic",
  components: {
    Container,
  },
};
</script>

<style scoped>
@import "./platformStatistic.css";
</style>
