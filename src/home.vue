<template>
  <Header></Header>
  <Content />
  <Main />
  <Aboutus />
  <Whysection />
  <Teamsection />
  <Clientsection />
  <Infosection />
</template>
<script>

import Header from "@/components/dashboard/header.vue"
import Content from "@/components/dashboard/content.vue"
import Aboutus from "@/components/dashboard/aboutus.vue"
import Whysection from "@/components/dashboard/why-section.vue"
import Teamsection from "./components/dashboard/teamsection.vue";
import Clientsection from "./components/dashboard/clientsection.vue";
import Infosection from "./components/dashboard/infosection.vue";
import Footer from "./components/dashboard/footer.vue";

export default {
  name: 'App',
  components: {
    Header,
    Content,
    Aboutus,
    Whysection,
    Teamsection,
    Clientsection,
    Infosection,
    Footer

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>