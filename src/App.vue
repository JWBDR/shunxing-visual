<template>
  <div id="app">
    <transition :name="SkipSwitchName">
      <router-view />
    </transition>
  </div>
</template>
<script>
import Rem from '@/utils/rem'
export default {
  name: 'App',
  data () {
    return {
      SkipSwitchName: ''
    }
  },
  // computed: mapGetters([
  //   "msg",
  //   // 'isEvenOrOdd'//getter.js
  // ]),
  // methods: mapActions(["increment", "decrement"]),
  watch: {
    $route (to, from) {
      if (to.meta.tx > from.meta.tx) {
        this.SkipSwitchName = 'Skright'
      } else {
        this.SkipSwitchName = 'Skleft'
      }
    }
  }
}
</script>
<style lang="less">
@import "./assets/font/font.css";
* {
  padding: 0;
  margin: 0;
  list-style: none;
}
#app {
  width: 100%;
  height: 100%;
  font-size: 0.14rem;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: #2c3e50;
  cursor: default;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
//进度条
#nprogress .bar {
  background: orange !important; //自定义颜色
}
//router
.Skright-enter-active,
.Skright-leave-active,
.Skleft-enter-active,
.Sklef-leave-active {
  transition: all 600ms;
}
.Skright-enter {
  opacity: 1;
}
.Skright-leave-to {
  opacity: 0;
}
.Skleft-enter {
  opacity: 1;
}
.Skleft-leave-to {
  opacity: 0;
}
</style>
