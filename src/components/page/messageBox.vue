<template>
  <div class="container-message">
    <div class="">
      {{ setMessage }}
    </div>
  </div>
</template>

<script>

import { mapMutations } from 'vuex'
export default {
  data () {
    return {
      message: {
        msg: '暂无待审批消息',
        err: '无故障'
      }
    }
  },
  computed: {
    setMessage () {
      // console.log(this.$store.state.indexModules.msg)
      if (this.$store.state.indexModules.msg == 'a') {
        return this.message.msg
      } else if (this.$store.state.indexModules.msg == 'b') {
        return this.message.err
      }
    }
  },
  methods: {
    ...mapMutations(['setMsg'])
  }
}
</script>

<style>
</style>
