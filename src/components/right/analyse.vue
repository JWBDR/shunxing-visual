<template>
  <div class="container-analyse">
    <!-- 3.分析 -->
    <div class="box-wrapper">
      <!--控制背景颜色 :style="{background:backgroundColorChange.err}" -->
      <div
        class="box"
        @click="routerJump(index)"
        v-for="(item, index) in 16"
        :key="index"
      >
        <div class="wrapper-up">
          <dl class="star-title">
            <dt>立轴破</dt>
            <dd>
              <span class="title">综合评分</span>
              <a-rate
                class="axle-rate"
                :count="10"
                :default-value="4"
                disabled
              />
              <span class="num">7.7</span>
              <span class="tit">&nbsp;分</span>
            </dd>
          </dl>
          <div class="status-err">
            <h3>开机</h3>
          </div>
        </div>
        <div class="wrapper-down">
          <dl>
            <dt class="large">245</dt>
            <span>&nbsp;&nbsp;A</span>
            <dd>总工作时间</dd>
          </dl>
          <dl>
            <dt class="large">97.98</dt>
            <span>&nbsp;&nbsp;%</span>
            <dd>平均负荷</dd>
          </dl>
          <dl>
            <dt class="large">24.58</dt>
            <span>&nbsp;&nbsp;h</span>
            <dd>无故障时间</dd>
          </dl>
          <dl>
            <dt class="large">10</dt>
            <span>&nbsp;&nbsp;次</span>
            <dd>开停次数</dd>
          </dl>
          <dl>
            <dt class="large">100</dt>
            <span>&nbsp;&nbsp;%</span>
            <dd>设备利用率</dd>
          </dl>
          <dl>
            <dt class="large">100</dt>
            <span>&nbsp;&nbsp;%</span>
            <dd>开机率</dd>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Rate } from 'ant-design-vue'
import apis from './apis'
export default {
  data () {
    return {
      // 星级文字
      desc: ['差', '正常', '良好', '非常好'],
      titleDetail: [
        '总工作时间',
        '平均负荷',
        '无故障时间',
        '开停次数',
        '设备利用率',
        '开机率'
      ],
      backgroundColorChange: {
        err: `linear-gradient(
        180deg,
        rgba(199, 0, 0, 0.3) 0%,
        rgba(255, 130, 130, 0.3) 100%
      )`,
        success: `
        linear-gradient(
        180deg,
        rgba(141, 141, 141, 0.3) 0%,
        rgba(225, 225, 225, 0.3) 100%
      )
        `,
        stop: `linear-gradient(
        180deg,
        #413125 0%,
        rgba(255, 193, 143, 0.3) 100%
      )`
      }
    }
  },
  methods: {
    routerJump (num, title) {
      this.$router.push({
        name: 'facility',
        query: {
          id: num
          // title: item,
        }
      })
    }
  }
}
</script>

<style lang="less">
html,
body {
  width: 100%;
  height: 100%;
  overflow-y: hidden;
}
.container-analyse {
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, #1e3259 0%, #1e3f82 100%);
  .box-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-content: space-around;
    flex-flow: wrap;
    .box {
      width: 24%;
      height: 24%;
      background: linear-gradient(
        180deg,
        rgba(141, 141, 141, 0.3) 0%,
        rgba(225, 225, 225, 0.3) 100%
      );
      box-shadow: 0px 30px 20px 0px rgba(0, 0, 0, 0.3);
      border-radius: 6px;
      transform: scale(0.96);
      cursor: pointer;
      .wrapper-up {
        position: relative;
        width: 100%;
        height: 0.8rem;
        padding-top: 0.1rem;
        padding-left: 0.15rem;
        background: linear-gradient(
          180deg,
          rgba(0, 0, 0, 0.3) 0%,
          rgba(0, 0, 0, 0.15) 99%
        );
        border-radius: 6px 6px 0px 0px;
        .status {
          position: absolute;
          top: 0.1rem;
          right: 0rem;
          width: 0.8rem;
          height: 0.43rem;
          background-color: green;
          border-top-left-radius: 0.4rem;
          border-bottom-left-radius: 0.4rem;
          h3 {
            color: #fff;
            padding-left: 0.26rem;
            line-height: 0.43rem;
          }
        }
        .star-title {
          display: inline-block;
          dt {
            font-family: PingFangSC-Semibold, PingFang SC;
            font-weight: 600;
            color: #ffffff;
            line-height: 20px;
          }
          dd {
            transform: translateY(0.16rem);
            .title {
              display: inline-block;
              margin-right: 0.3rem;
              font-size: 12px;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              color: #ffffff;
              line-height: 17px;
            }
            .axle-rate {
              font-size: 0.12rem;
              margin-right: 0.1rem;
            }
            .num {
              height: 0.25rem;
              font-size: 0.18rem;
              font-family: DINAlternate-Bold, DINAlternate;
              font-weight: bold;
              color: #00b4ff;
              line-height: 0.21rem;
            }
            .tit {
              width: 0.12rem;
              height: 0.17rem;
              font-size: 0.12rem;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              color: #ffffff;
              line-height: 0.17rem;
            }
          }
        }
        .status-success {
          position: absolute;
          top: 0.05rem;
          right: 0rem;
          width: 0.6rem;
          height: 0.4rem;
          background: rgba(0, 199, 106, 0.3);
          border-top-left-radius: 0.4rem;
          border-bottom-left-radius: 0.4rem;
          h3 {
            font-size: 0.12rem;
            color: #fff;
            padding-left: 0.26rem;
            line-height: 0.43rem;
            font-weight: 600;
            //字间距
            letter-spacing: 0.01rem;
          }
        }
        .status-stop {
          position: absolute;
          top: 0.05rem;
          right: 0rem;
          width: 0.6rem;
          height: 0.4rem;
          background: linear-gradient(
            180deg,
            rgba(124, 124, 124, 0.5) 0%,
            rgba(200, 200, 200, 0.5) 100%
          );
          border-top-left-radius: 0.2rem;
          border-bottom-left-radius: 0.2rem;
          h3 {
            font-size: 0.12rem;
            color: #fff;
            padding-left: 0.26rem;
            font-weight: 600;
            line-height: 0.43rem;
            //字间距
            letter-spacing: 0.01rem;
          }
        }
        .status-err {
          position: absolute;
          top: 0.05rem;
          right: 0rem;
          width: 0.6rem;
          height: 0.4rem;
          background: linear-gradient(
            180deg,
            rgba(199, 0, 0, 0.3) 0%,
            rgba(255, 130, 130, 0.3) 100%
          );
          border-top-left-radius: 0.2rem;
          border-bottom-left-radius: 0.2rem;
          h3 {
            font-size: 0.12rem;
            color: #fff;
            padding-left: 0.26rem;
            font-weight: 600;
            line-height: 0.43rem;
            //字间距
            letter-spacing: 0.01rem;
          }
        }
      }
      .wrapper-down {
        width: 100%;
        height: calc(100% - 0.8rem);
        display: flex;
        justify-content: space-around;
        align-content: space-around;
        flex-flow: wrap;
        & > dl {
          text-align: center;
          width: 33.3%;
          height: 20%;
          transition: all 0.3s;
          &:hover {
            & > dt {
              color: #00b4ff;
            }
          }
          & > dt {
            height: 0.28rem;
            font-size: 0.24rem;
            line-height: 0.17rem;
            display: inline-block;
            transition: all 0.3s;
            margin: 0 auto;
            font-family: DINAlternate-Bold, DINAlternate;
            font-weight: bold;
            color: #ffffff;
            line-height: 0.28rem; //字间距
            letter-spacing: 0.01rem;
            padding-right: 0.02rem;
          }
          & > dd {
            width: 0.8rem;
            height: 0.17rem;
            font-size: 0.12rem;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 600;
            line-height: 0.17rem;
            letter-spacing: 0.01rem;
            margin: 0 auto;
            margin-top: 0.05rem;
            color: rgba(0, 0, 0, 0.5); //字间距
            letter-spacing: 0.01rem;
          }
          & > span {
            display: inline-block;
            font-weight: 400;
            line-height: 0.17rem;
            margin-left: .05rem;
            height: 0.17rem;
            font-size: 0.12rem;
            font-family: PingFangSC-Regular, PingFang SC;
            color: #ffffff;
            line-height: 0.17rem; //字间距
            letter-spacing: 0.01rem;
          }
        }
      }
    }
  }
}
</style>
