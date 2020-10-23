<template>
  <div class="default">
    <div class="default-left">
      <left-side />
    </div>
      <div class="default-right" >
        <transition :name="SkipSwitchName">
            <router-view />
        </transition>
      </div>
  </div>
</template>

<script>
import leftSide from '@/components/left/leftSide'
export default {
  components: {
    leftSide
  },
  data () {
    return {
      SkipSwitchName: ''
    }
  },
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
html,
body {
  width: 100%;
  height: 100%;
  background: #fff;
  cursor: default;
  overflow-x: hidden;
  //   overflow-y: hidden;
}

body::-webkit-scrollbar {
  display: none;
}

.default::-webkit-scrollbar {
  display: none;
}
.default {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  .default-left {
    // flex: 1;
    width: 2rem;
  }
  .default-right {
    flex: 1;
    background:url( "../assets/right-side/index/bg.png") no-repeat;
    background-size: 100% 100%;
    // flex: 8.6;
  }
}
//

.Skright-enter-active,
.Skright-leave-active,
.Skleft-enter-active,
.Sklef-leave-active {
  transition: opacity 600ms;
}
.Skright-enter {
  // transform: translate3d(-100%, 0, 0);
  opacity: 1;
}
.Skright-leave-to {
  opacity: 0;
  // transform: translate3d(100%, 0, 0);
}
.Skleft-enter {
  opacity: 1;
  // transform: translate3d(100%, 0, 0);
}
.Skleft-leave-to {
  opacity: 0;
  // transform: translate3d(-100%, 0, 0);
}
</style>
