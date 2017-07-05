<template>
  <div id="app">
    <topbar></topbar>
    <router-view></router-view>
    <footer-page></footer-page>
  </div>
</template>

<script>
import config from './config'
import topbar from './components/Topbar'
import footer from './components/Footer'
export default {
  name: 'app',
  components: {
    topbar,
    'footer-page':footer,
  }
}
</script>

<style scoped lang="scss">
@import 'styles/style.scss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 64px;
}
</style>
