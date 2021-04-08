<template>
  <Container ititle="招聘要求" iwidth=52 iheight=40>
    <table id="scroll-title">
      <tr>
        <th width="40%" align="center">招收单位</th>
        <th width="60%" align="center">招收博士后项目</th>
      </tr>
    </table>

    <div id="scroll-content">
      <div id="scroll-table">
        <table>
          <tr>
            <td width="40%" align="center">
              <a href="#" onClick="">
                { item.name}
                <aside class="contact">
                  {item.contact}
                  <br />
                  {item.phone}
                  <br />
                  {item.email}
                </aside>
              </a>
            </td>

            <td width="60%" align="center">
              { item.project_name}
            </td>
          </tr>
        </table>

        <table>
          <tr>
            <td width="40%" align="center">
              <a href="#" onClick="">
                { item.name}
                <aside class="contact">
                  {item.contact}
                  <br />
                  {item.phone}
                  <br />
                  {item.email}
                </aside>
              </a>
            </td>

            <td width="60%" align="center">
              { item.project_name}
            </td>
          </tr>
        </table>
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
  created() {},
  mounted() {
    setInterval(() => {
      var c1 = document.getElementById("scroll-table");
      var ca = document.getElementById("scroll-content");
      if (ca.scrollTop >= c1.offsetHeight) {
        ca.scrollTop = 0;
      } else {
        ca.scrollTop++;
      }
    }, 100);
  },
};
</script>

<style scoped>
@import "./recruitmentBoard.css";
</style>
