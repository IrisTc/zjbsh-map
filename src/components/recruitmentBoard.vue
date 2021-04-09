<template>
  <Container ititle="招聘要求" iwidth="52" iheight="40">
    <table id="scroll-title">
      <tr>
        <th width="40%" align="center">招收单位</th>
        <th width="60%" align="center">招收博士后项目</th>
      </tr>
    </table>

    <div id="scroll-content">
      <div id="scroll-table">
        <table>
          <tr v-for="(item, index) in tableData" :key="index">
            <td width="40%" align="center">
              <a href="#" onClick="">
                {{ item.name }}
                <aside class="contact">
                  {{ item.contact }}
                  <br />
                  {{ item.phone }}
                  <br />
                  {{ item.email }}
                </aside>
              </a>
            </td>

            <td width="60%" align="center">
              {{ item.project_name }}
            </td>
          </tr>
        </table>

        <table></table>
      </div>
    </div>
  </Container>
</template>

<script>
import Container from "@/components/container.vue";

export default {
  name: "recruitmentBoard",
  components: {
    Container,
  },
  props: {
    infos: Array
  },
  data() {
    return {
      tableData: this.infos,
    };
  },
  async mounted() {
    this.tableData = this.tableData.concat(this.tableData);

    let c1 = document.getElementById("scroll-table");
    let ca = document.getElementById("scroll-content");
    setInterval(function st() {
      if (ca.scrollTop >= c1.offsetHeight/2) {
        ca.scrollTop = 0;
      } else {
        ca.scrollTop ++;
      }
      // ca.onmouseover = function() {
      //   clearInterval(cas);
      // };
      // ca.onmouseout = function() {
      //   cas = setInterval("st()", 50);
      // };
    }, 100);
  },
};
</script>

<style scoped>
@import "../styles/recruitmentBoard.css";
</style>
