<template>
  <Container ititle='浙江省"三大高地"平台' iwidth=20 iheight=18>
    <div id="platform-content">
      <table id="platform-table">
        <tbody>
          <tr v-for="(value, key, index) in countByTopic" :key="index">
              <td width="30%" align="center">{{ key }}</td>
              <td width="70%" align="center">
                在站博士后{{ value['在线博士后'] }}人 相关平台
                {{ value['相关平台'] }}家
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
  props: ['countByTopic']
};
</script>

<style scoped>
@import "../styles/platformStatistic.css";
</style>