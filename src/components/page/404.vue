 <template>
  <div class="err404">
    <h4>404</h4>
    <h4 class="no-page">您访问的页面不见啦~</h4>
    <h5>
      <router-link to="/" class="go-home">去首页</router-link>
    </h5>
  </div>
</template>

<script>
import jpg from '@/assets/404.jpg'
export default {
  data () {
    return {}
  },
  mounted () {
    setTimeout(() => {
      const toIndex = document.querySelector('.no-page')
      toIndex.innerHTML = '即将跳转首页···'
      setTimeout(() => {
        this.$router.push({ path: '/' })
      }, 4000)
    }, 2000)
  }
}
</script>

 <style lang="less" >
html,
body {
  background: #191919;
}
.err404 {
  width: 8.8rem;
  height: 2.55rem;
  margin: 1rem auto;
  background: url("../../assets/404.jpg") no-repeat 100% 100%;
}
.err404 h4 {
  font-size: 24px;
  color: #fff;
  padding-bottom: 16px;
  margin-right: 2rem;
}

.err404 .go-home {
  margin-right: 2rem;
  width: 130px;
  height: 38px;
  background: #c9141d;
  line-height: 38px;
  font-size: 16px;
  color: #fff;
  text-align: center;
  display: inline-block;
  border-radius: 2px;
}
</style>
