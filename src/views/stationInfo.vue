<template>
  <Container ititle="博士后出入站统计" iwidth=52 iheight=40>
    <table id="stationInfo-table-title">
      <tr>
        <th width="40%" align="center">
          单位名称
        </th>
        <th width="20%" align="center">
          站点类型
        </th>
        <th width="10%" align="center">
          总数
        </th>
        <th width="10%" align="center">
          已出站
        </th>
        <th width="10%" align="center">
          在站
        </th>
        <th width="10%" align="center">
          退站
        </th>
      </tr>
    </table>

    <div id="stationInfo-content">
      <table id="stationInfo-table">
        <tr>
          <td width="40%" align="center">
            <a href="#">{item.name}</a>
          </td>
          <td width="20%" align="center">
            {item.role === 1 ? "国家级工作站" : item.role === 2 ? "省级工作站" :
            "流动站"}
          </td>
          <td width="10%" align="center">
            {item.total}
          </td>
          <td width="10%" align="center">
            {item.total_exit}
          </td>
          <td width="10%" align="center">
            {item.total_in}
          </td>
          <td width="10%" align="center">
            {item.total_out}
          </td>
        </tr>
      </table>
    </div>
  </Container>
</template>

<script>
import Container from "@/components/container.vue";

export default {
  name: "stationInfo",
  components: {
    Container,
  },
  created() {},
  mounted() {},
};
</script>

<style scoped>
    @import "./stationInfo.css";
</style>
