<template>
  <div class="container-index">
    <div class="header">
      <div class="title">
        <span class="colum"></span>
        产量概览
      </div>
      <div class="header-wrapper">
        <div class="header-up">
          <ul :style="{ opacity: diskNumFlag ? '1' : '0' }">
            <li class="num-1">
              <span class="large">7500</span>
              <span>&nbsp;吨</span>
              <p>当日预计产量</p>
            </li>
            <li class="num-2">
              <span class="large">480</span>
              <span>&nbsp;吨</span>
              <p>瞬时产量</p>
            </li>
            <li class="num-3">
              <span class="large">4500</span>
              <a-progress
                class="circle-progress"
                type="circle"
                :stroke-color="{
                  '0%': '#108ee9',
                  '100%': '#87d068',
                }"
                :showInfo="null"
                :strokeWidth="10"
                trailColor="rgba(255,255,255,.2)"
                :percent="60"
              />
              <span>&nbsp;吨</span>
              <p>当日实际产量</p>
            </li>
            <li class="num-4">
              <span class="large">67</span>
              <span>&nbsp;%</span>
              <p>完成率</p>
            </li>
            <li class="num-5">
              <span class="large">100</span>
              <span>&nbsp;%</span>
              <p>产销比</p>
            </li>
          </ul>
          <ul :style="{ opacity: diskNumFlag2 ? '1' : '0' }" class="ul-icon">
            <li @click="diskFlag = 0">
              <div :class="diskFlag === 0 ? 'success-icon' : 'col-icon'"></div>
              <p :class="diskFlag === 0 ? 'title-success' : 'title-normal'">
                石5级带(中间堆)
              </p>
            </li>
            <li @click="diskFlag = 1">
              <div :class="diskFlag === 1 ? 'success-icon' : 'col-icon'"></div>
              <p :class="diskFlag === 1 ? 'title-success' : 'title-normal'">
                石2级带(5-8石)
              </p>
            </li>
            <li @click="diskFlag = 2">
              <div :class="diskFlag === 2 ? 'success-icon' : 'col-icon'"></div>
              <p :class="diskFlag === 2 ? 'title-success' : 'title-normal'">
                顺8级带(砂)
              </p>
            </li>
            <li @click="diskFlag = 3">
              <div :class="diskFlag === 3 ? 'success-icon' : 'col-icon'"></div>
              <p :class="diskFlag === 3 ? 'title-success' : 'title-normal'">
                泥6级带(泥饼)
              </p>
            </li>
            <li @click="diskFlag = 4">
              <div :class="diskFlag === 4 ? 'success-icon' : 'col-icon'"></div>
              <p :class="diskFlag === 4 ? 'title-success' : 'title-normal'">
                泥1级带(泥粉)
              </p>
            </li>
          </ul>
          <div class="num-2"></div>
          <div class="num-3"></div>
          <div class="num-4"></div>
          <div class="num-5"></div>
        </div>
      </div>
    </div>
    <div class="main">
      <div class="main-left">
        <div class="left-up">
          <div class="title">
            <span class="colum"></span>
            能耗概览
          </div>
          <ul>
            <li>
              <div class="img"></div>
              <div class="detail">
                <p>产线总能耗</p>
                <span class="large">1850</span>
                <span class="unit">&nbsp;kwh</span>
              </div>
            </li>
            <li>
              <div class="img"></div>
              <div class="detail">
                <p>单吨耗电量</p>
                <span class="large">267</span>
                <span class="unit">&nbsp;kwh</span>
              </div>
            </li>
            <li>
              <div class="img"></div>
              <div class="detail">
                <p>总电费</p>
                <span class="large">87127</span>
                <span class="unit">&nbsp;元</span>
              </div>
            </li>
          </ul>
          <div class="line"></div>
        </div>
        <div class="left-down">
          <div class="down-status">
            <div class="detail">
              <div class="detail-1">
                <p>立轴破</p>
                <span>60050</span><span>&nbsp;kwh</span>
              </div>
              <div class="detail-2">
                <p style="text-align: start">开关柜</p>
                <span>40078</span><span>&nbsp;kwh</span>
              </div>
              <div class="detail-3">
                <p>颚破</p>
                <span>60050</span><span>&nbsp;kwh</span>
              </div>
              <div class="detail-4">
                <p style="text-align: start">除尘系统</p>
                <span>60050</span><span>&nbsp;kwh</span>
              </div>
            </div>
            <div class="img-charts">
              <p class="title-up">正常</p>
              <div class="charts-rotate"></div>
              <p class="title-down">当日耗电状态</p>
            </div>
          </div>
        </div>
      </div>
      <div class="main-right">
        <div class="title">
          <span class="colum"></span>
          设备概览
        </div>
        <div class="facility-card">
          <div class="card card-1">
            <div class="wrapper-up">
              <dl class="star-title">
                <dt>颚破</dt>
                <dd>
                  <span class="title">综合评分</span>
                  <a-rate :count="10" :default-value="4" disabled />
                  <!-- <span class="ant-rate-text">{{ desc[2] }}</span> -->
                  <span class="num">7.7</span>
                  <span class="tit">&nbsp;分</span>
                </dd>
              </dl>
              <div class="status">
                <h3>开机</h3>
              </div>
            </div>
            <div class="wrapper-down">
              <dl>
                <dt>245</dt>
                <span>&nbsp;&nbsp;A</span>
                <dd>实时电流</dd>
              </dl>
              <dl>
                <dt>277</dt>
                <span>&nbsp;&nbsp;Kwh</span>
                <dd>当日电量</dd>
              </dl>
              <dl>
                <dt>56</dt>
                <span>&nbsp;&nbsp;%</span>
                <dd>瞬时负荷</dd>
              </dl>
              <dl>
                <dt>11.2</dt>
                <span>&nbsp;&nbsp;h</span>
                <dd>无故障时间</dd>
              </dl>
              <dl>
                <dt>12.4</dt>
                <span>&nbsp;&nbsp;h</span>
                <dd>开机时间</dd>
              </dl>
              <dl>
                <dt>3</dt>
                <span>&nbsp;&nbsp;次</span>
                <dd>开停次数</dd>
              </dl>
              <dl>
                <dt>98</dt>
                <span>&nbsp;&nbsp;%</span>
                <dd>设备利用率</dd>
              </dl>
              <dl>
                <dt>88</dt>
                <span>&nbsp;%</span>
                <dd>开机率</dd>
              </dl>
            </div>
          </div>
          <div class="card card-2">
            <div class="wrapper-up">
              <dl class="star-title">
                <dt>立轴破</dt>
                <!-- <span class="change change1">1</span>
                <span class="change change2">2</span> -->
                <span
                  :class="{
                    change: clickFlag,
                    'active-change': index == current1,
                  }"
                  v-for="(item, index) in spanNum"
                  :key="item.id"
                  @click="addClass1(index)"
                  style="margin-right: 0.05rem"
                >
                  {{ item.num }}
                </span>
                <dd>
                  <span class="title">综合评分</span>
                  <a-rate :count="10" :default-value="4" disabled />
                  <!-- <span class="ant-rate-text">{{ desc[2] }}</span> -->
                  <span class="num">7.7</span>
                  <span class="tit">&nbsp;分</span>
                </dd>
              </dl>
              <div class="status">
                <h3>开机</h3>
              </div>
            </div>
            <div class="wrapper-down">
              <dl>
                <dt>245</dt>
                <span>&nbsp;&nbsp;A</span>
                <dd>实时电流</dd>
              </dl>
              <dl>
                <dt>277</dt>
                <span>&nbsp;&nbsp;Kwh</span>
                <dd>当日电量</dd>
              </dl>
              <dl>
                <dt>56</dt>
                <span>&nbsp;&nbsp;%</span>
                <dd>瞬时负荷</dd>
              </dl>
              <dl>
                <dt>11.2</dt>
                <span>&nbsp;&nbsp;h</span>
                <dd>无故障时间</dd>
              </dl>
              <dl>
                <dt>12.4</dt>
                <span>&nbsp;&nbsp;h</span>
                <dd>开机时间</dd>
              </dl>
              <dl>
                <dt>3</dt>
                <span>&nbsp;&nbsp;次</span>
                <dd>开停次数</dd>
              </dl>
              <dl>
                <dt>98</dt>
                <span>&nbsp;&nbsp;%</span>
                <dd>设备利用率</dd>
              </dl>
              <dl>
                <dt>88</dt>
                <span>&nbsp;%</span>
                <dd>开机率</dd>
              </dl>
            </div>
          </div>
          <div class="card card-3">
            <div class="wrapper-up">
              <dl class="star-title">
                <dt>棒条给料机</dt>
                <span
                  :class="{
                    change: clickFlag,
                    'active-change': index == current2,
                  }"
                  v-for="(item, index) in spanNum2"
                  :key="item.id"
                  @click="addClass2(index)"
                  style="margin-right: 0.05rem"
                >
                  {{ item.num }}
                </span>
                <dd>
                  <span class="title">综合评分</span>
                  <a-rate :count="10" :default-value="4" disabled />
                  <!-- <span class="ant-rate-text">{{ desc[2] }}</span> -->
                  <span class="num">7.7</span>
                  <span class="tit">&nbsp;分</span>
                </dd>
              </dl>
              <div class="status">
                <h3>开机</h3>
              </div>
            </div>
            <div class="wrapper-down">
              <dl>
                <dt>245</dt>
                <span>&nbsp;&nbsp;A</span>
                <dd>实时电流</dd>
              </dl>
              <dl>
                <dt>277</dt>
                <span>&nbsp;&nbsp;Kwh</span>
                <dd>当日电量</dd>
              </dl>
              <dl>
                <dt>56</dt>
                <span>&nbsp;&nbsp;%</span>
                <dd>瞬时负荷</dd>
              </dl>
              <dl>
                <dt>11.2</dt>
                <span>&nbsp;&nbsp;h</span>
                <dd>无故障时间</dd>
              </dl>
              <dl>
                <dt>12.4</dt>
                <span>&nbsp;&nbsp;h</span>
                <dd>开机时间</dd>
              </dl>
              <dl>
                <dt>3</dt>
                <span>&nbsp;&nbsp;次</span>
                <dd>开停次数</dd>
              </dl>
              <dl>
                <dt>98</dt>
                <span>&nbsp;&nbsp;%</span>
                <dd>设备利用率</dd>
              </dl>
              <dl>
                <dt>88</dt>
                <span>&nbsp;%</span>
                <dd>开机率</dd>
              </dl>
            </div>
          </div>
          <div class="card card-4">
            <div class="wrapper-up">
              <dl class="star-title">
                <dt>泥粉筛</dt>
                <span
                  :class="{
                    change: clickFlag,
                    'active-change': index == current3,
                  }"
                  v-for="(item, index) in spanNum3"
                  :key="item.id"
                  @click="addClass3(index)"
                  style="margin-right: 0.05rem"
                >
                  {{ item.num }}
                </span>
                <dt style="margin-left: 0.2rem; margin-right: 0.1rem">
                  高频筛
                </dt>
                <span
                  :class="{
                    change: clickFlag,
                    'active-change': index == current4,
                  }"
                  v-for="(item, index) in spanNum4"
                  :key="item.id"
                  @click="addClass4(index)"
                  style="margin-right: 0.05rem"
                >
                  {{ item.num }}
                </span>
                <dd>
                  <span class="title">综合评分</span>
                  <a-rate :count="10" :default-value="4" disabled />
                  <!-- <span class="ant-rate-text">{{ desc[2] }}</span> -->
                  <span class="num">7.7</span>
                  <span class="tit">&nbsp;分</span>
                </dd>
              </dl>
              <div class="status">
                <h3>开机</h3>
              </div>
            </div>
            <div class="wrapper-down">
              <dl>
                <dt>245</dt>
                <span>&nbsp;&nbsp;A</span>
                <dd>实时电流</dd>
              </dl>
              <dl>
                <dt>277</dt>
                <span>&nbsp;&nbsp;Kwh</span>
                <dd>当日电量</dd>
              </dl>
              <dl>
                <dt>56</dt>
                <span>&nbsp;&nbsp;%</span>
                <dd>瞬时负荷</dd>
              </dl>
              <dl>
                <dt>11.2</dt>
                <span>&nbsp;&nbsp;h</span>
                <dd>无故障时间</dd>
              </dl>
              <dl>
                <dt>12.4</dt>
                <span>&nbsp;&nbsp;h</span>
                <dd>开机时间</dd>
              </dl>
              <dl>
                <dt>3</dt>
                <span>&nbsp;&nbsp;次</span>
                <dd>开停次数</dd>
              </dl>
              <dl>
                <dt>98</dt>
                <span>&nbsp;&nbsp;%</span>
                <dd>设备利用率</dd>
              </dl>
              <dl>
                <dt>88</dt>
                <span>&nbsp;%</span>
                <dd>开机率</dd>
              </dl>
            </div>
          </div>
        </div>
        <div class="facility-status">
          <div class="vessel">
            <!--  -->
            <div id="liquidFill1"></div>
          </div>
          <div class="vessel">
            <div id="liquidFill2"></div>
          </div>
          <div class="vessel">
            <div id="liquidFill3"></div>
          </div>
          <div class="vessel">
            <div id="liquidFill4"></div>
          </div>
          <div class="vessel">
            <div id="liquidFill5"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'
import echartsLiquidfill from 'echarts-liquidfill' // 在这里引入
import { Rate } from 'ant-design-vue'
import apis from './apis'
export default {
  data () {
    return {
      // 下方选项卡123
      clickFlag: true,
      current1: 0, // 默认哪个有类名
      current2: 0,
      current3: 0,
      current4: 0,
      // disk num flag
      diskNumFlag: false,
      diskNumFlag2: false,
      // 又要有id,又不能dom同级别渲染同一数组，不要报错只能三个数组咯
      spanNum: [
        {
          id: Math.floor(Math.random() * (1000 - 1) + 1),
          num: 1
        },
        {
          id: Math.floor(Math.random() * (1000 - 1) + 1),
          num: 2
        }
      ],
      spanNum2: [
        {
          id: Math.floor(Math.random() * (1000 - 1) + 1),
          num: 1
        },
        {
          id: Math.floor(Math.random() * (1000 - 1) + 1),
          num: 2
        },
        {
          id: Math.floor(Math.random() * (1000 - 1) + 1),
          num: 3
        }
      ],
      spanNum3: [
        {
          id: Math.floor(Math.random() * (1000 - 1) + 1),
          num: 1
        },
        {
          id: Math.floor(Math.random() * (1000 - 1) + 1),
          num: 2
        }
      ],
      spanNum4: [
        {
          id: Math.floor(Math.random() * (1000 - 1) + 1),
          num: 1
        },
        {
          id: Math.floor(Math.random() * (1000 - 1) + 1),
          num: 2
        },
        {
          id: Math.floor(Math.random() * (1000 - 1) + 1),
          num: 3
        }
      ],
      desc: ['差', '正常', '良好', '非常好'],
      routeName: '',
      // 圆盘flag
      diskFlag: 2,
      // 波浪
      counter: 1,
      fillOptions: {
        fill1: {},
        fill2: {},
        fill3: {},
        fill4: {},
        fill5: {}
      },
      // 五个水罐data
      fillDetail: [
        // 水填充图的形状
        // circle默认圆形  rect圆角矩形  triangle三角形
        // diamond菱形  pin水滴状 arrow箭头状  还可以是svg的path
        {
          name: '储水罐A',
          type: 'rect',
          value: '0.6',
          color: 'rgba(255,70,0,0.49)',
          radius: '177%'
        },
        {
          name: '储水罐B',
          type: 'rect',
          value: '0.4',
          color: 'rgba(0,199,106,0.49)',
          radius: '177%'
        },
        {
          name: '储水罐C',
          type: 'rect',
          value: '0.4',
          color: 'rgba(0,180,255,0.49)',
          radius: '177%'
        },
        {
          name: '料堆A',
          type: 'triangle',
          value: '0.9',
          color: 'rgba(74,253,67,0.49)',
          radius: '95%'
        },
        {
          name: '料堆B',
          type: 'triangle',
          value: '.3',
          color: 'rgba(67,214,253,0.49)',
          radius: '95%'
        }
      ],
      testDataList1: null
    }
  },
  watch: {},
  created () {
    // 测试数据
    this.getDataTestInfo()
  },
  mounted () {
    setTimeout(() => {
      this.liquidFill('liquidFill1', this.fillDetail[0])
      this.liquidFill('liquidFill2', this.fillDetail[1])
      this.liquidFill('liquidFill3', this.fillDetail[2])
      this.liquidFill('liquidFill4', this.fillDetail[3])
      this.liquidFill('liquidFill5', this.fillDetail[4])
      setTimeout(() => {
        this.diskNumFlag = true
        setTimeout(() => {
          this.diskNumFlag2 = true
        }, 200)
      }, 200)
    }, 200)
  },
  computed: {
    // testDataList() {
    //   return this.$store.state.testDataList;
    // },
  },
  methods: {
    ...mapActions(['indexModules/getDataTest']),
    getDataTestInfo () {
      // 拿数据
      this.$store.dispatch('indexModules/getDataTest')
      // 页面调用 {{$store.state.indexModules.testDataList}}
    },
    // active flag
    addClass1 (index) {
      // this.current是请求要害
      this.current1 = index
      console.log(index, '第1')
    },
    addClass2 (index) {
      this.current2 = index
      console.log(index, '第2')
    },
    addClass3 (index) {
      this.current3 = index
      console.log(index, '第3')
    },
    addClass4 (index) {
      this.current4 = index
      console.log(index, '第4')
    },
    // 水滴
    liquidFill (id, datas) {
      var dom = document.getElementById(id)
      var myChart = this.$echarts.init(dom)
      myChart.setOption({
        series: [
          {
            type: 'liquidFill',
            data: [
              {
                name: datas.name,
                value: datas.value
              },
              0.5,
              0.4,
              0.3
            ],
            itemStyle: {
              shadowBlur: 0
            },
            radius: datas.radius, // 水球的半径
            outline: {
              show: true, // 是否显示轮廓 布尔值
              borderDistance: 0,
              itemStyle: {
                borderWidth: 0 // 边框的宽度
                // borderWidth: 3,
                // borderColor: "#156ACF",
                // shadowBlur: 30,
              },
              borderDistance: 0 // 外部轮廓与图表的距离 数字
            },
            // 水填充图的形状 circle默认圆形  rect圆角矩形  triangle三角形
            // diamond菱形  pin水滴状 arrow箭头状  还可以是svg的path
            shape: datas.type,
            center: ['50%', '50%'],
            amplitude: 3, // 振幅
            color: [datas.color, datas.color, datas.color],
            backgroundStyle: {
              color: 'rgba(0,0,0,0.2)', // 图表的背景颜色
              // borderWidth: "1", //图表的边框宽度
              // borderColor: 'rgba(0,0,0,0.2)',//图表的边框颜色
              itemStyle: {
                shadowBlur: 100 // 设置无用
              }
            },
            emphasis: {
              itemStyle: {
                opacity: 0.8 // 鼠标经过波浪颜色的透明度
              }
            },
            label: {
              normal: {
                // formatter: `{b}\n{{${c*100}}}`, //文字
                formatter: function (param) {
                  return (
                    '\n' + param.value * 100 + ' %' + '\n' + '\n' + param.name
                  )
                },
                // insideColor :"red",//在wave上显示时的文本颜色
                fontSize: 16,
                show: true,
                textStyle: {
                  color: '#ffffff', // 水球显示文字颜色
                  fontSize: '16',
                  fontFamily: 'DINAlternate-Bold, DINAlternate',
                  fontWeight: 'bold'
                }
              }
            }
          }
        ]
      })
    }
  }
}
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}
html,
body {
  width: 100%;
  height: 100%;
  overflow-y: hidden;
  perspective: 100rem;
}
.container-index {
  width: 100%;
  height: 100%;
  background: url("../../assets/right-side/index/bg.png") no-repeat;
  background-size: 100% 100%;
  .header {
    position: relative;
    width: 100%;
    height: 30%;
    border: 1px solid transparent;
    .title {
      //文字
      width: 0.9rem;
      height: 0.3rem;
      margin-top: 0.1rem;
      margin-left: 0.1rem;
      font-size: 0.16rem;
      line-height: 0.3rem;
      text-align: center;
      font-family: DINAlternate-Bold, DINAlternate;
      font-weight: bold;
      letter-spacing: 0.02rem;
      color: #00b4ff;
      span {
        // display: inline-block;
        height: 0.26rem;
        border: 2px solid;
        text-align: center;
        margin-right: 0.1rem;
      }
      p {
        // border: 1px solid black;
        display: inline-block;
        height: 0.3rem;
        line-height: 0.3rem;
      }
    }
    .header-wrapper {
      width: 100%;
      // border: 1px solid orange;
      .header-up {
        //圆盘
        width: 13.4rem;
        height: 2.94rem;
        margin: 0 auto;
        margin-top: -0.16rem;
        background: url("../../assets/right-side/index/banner-disk.png")
          no-repeat;
        background-size: 100% 100%;
        ul {
          display: flex;
          justify-content: center;
          align-items: center;
          transform: translateY(-0.1rem) translateX(-0.2rem);
          opacity: 0;
          transition: all 1s;
          li {
            float: left;
            margin-right: 1rem;
            color: #fff;
            .large {
              text-align: center;
              font-size: 0.4rem;
              font-family: "power";
              letter-spacing: 0.02rem;
            }
            p {
              text-align: center;
            }
          }
          .num-1 {
            transform: translateX(-0.6rem);
          }
          .num-2 {
            transform: translateX(-0.14rem) translateY(0.5rem);
          }
          .num-3 {
            transform: translateX(0.25rem) translateY(0.7rem);
            .circle-progress {
              position: absolute;
              top: -0.2rem;
              left: -0.1rem;
              transform: scale(1.4);
              span {
                color: #fff;
              }
            }
          }
          .num-4 {
            transform: translateX(0.8rem) translateY(0.5rem);
          }
          .num-5 {
            transform: translateX(1.53rem);
          }
        }
        .ul-icon {
          opacity: 0;
          transform: translateX(0.3rem) translateY(-0.3rem);
          & > li:nth-of-type(2) {
            transform: translateY(0.5rem);
          }
          & > li:nth-of-type(3) {
            transform: translateY(1.1rem);
          }
          & > li:nth-of-type(4) {
            transform: translateY(0.5rem);
          }
          li {
            float: left;
            margin-right: 1rem;
            color: #fff;
            transition: all 0.3s;
            transform-style: preserve-3d;
            perspective: 100rem;
            .title-normal {
              width: 1.4rem;
              height: 0.23rem;
              font-size: 0.15rem;
              background: linear-gradient(180deg, #01305a 0%, #154fc3 100%);
              border-radius: 0.12rem;
              line-height: 0.21rem;
              border: 1px solid #00b4ff;
              letter-spacing: 0.01rem;
              text-align: center;
              transition: all 0.3s;
            }
            .title-success {
              width: 1.4rem;
              height: 0.23rem;
              font-size: 0.15rem;
              background: linear-gradient(180deg, #006938 0%, #00c76a 100%);
              border-radius: 0.12rem;
              line-height: 0.21rem;
              border: 1px solid #37f49c;
              color: #ffffff;
              letter-spacing: 0.01rem;
              text-align: center;
              transition: all 0.3s;
            }
            .col-icon {
              width: 0.82rem;
              height: 0.66rem;
              margin: 0 auto;
              margin-bottom: 0.03rem;
              background: url("../../assets/right-side/index/stand.png")
                no-repeat;
              background-size: 100% 100%;
              transition: all 0.3s;
            }
            .success-icon {
              width: 0.82rem;
              height: 0.66rem;
              margin: 0 auto;
              margin-bottom: 0.03rem;
              background: url("../../assets/right-side/index/stand-today.png")
                no-repeat;
              background-size: 100% 100%;
              transition: all 0.3s;
              animation: round 3s;
            }
            @keyframes round {
              0% {
                transform: translateY(0rem) translateZ(10rem) rotateY(0deg);
              }
              50% {
                transform: translateY(-0.1rem) translateZ(10rem) rotateY(360deg);
              }
            }
            // @keyframes offset {
            //   0% {
            //     transform: translateX(0rem) translateY(0rem);
            //   }
            //   50% {
            //     transform:translateX(3rem) translateY(.5rem);
            //   }
            // }
          }
        }
      }
    }
  }
  .main {
    width: 100%;
    height: 70%;
    margin-top: 0.2rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .main-left {
      width: 5.01rem;
      height: 6.05rem;
      background: rgba(0, 0, 0, 0.2);
      border-radius: 6px;
      .left-up {
        width: 100%;
        padding-bottom: 0.2rem;
        .title {
          //文字
          width: 0.9rem;
          height: 0.3rem;
          margin-top: 0.05rem;
          margin-left: 0.1rem;
          font-size: 0.16rem;
          line-height: 0.3rem;
          text-align: center;
          font-family: DINAlternate-Bold, DINAlternate;
          font-weight: bold;
          letter-spacing: 0.02rem;
          color: #00b4ff;
          span {
            // display: inline-block;
            height: 0.26rem;
            border: 2px solid;
            text-align: center;
            margin-right: 0.1rem;
          }
        }
        ul {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 0.2rem;
          li {
            //能耗三个icon
            transform: scale(0.9);
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
          }
          & > li:nth-of-type(1) {
            .img {
              width: 0.61rem;
              height: 0.6rem;
              background: url("../../assets/right-side/index/total-power.png")
                no-repeat;
              background-size: 100% 100%;
            }
            .detail {
              p {
                width: 100%;
                height: 0.14rem;
                font-size: 0.14rem;
                font-family: PingFangSC-Semibold, PingFang SC;
                font-weight: 600;
                color: #ffffff;
                line-height: 0.14rem;
                text-align: center;
                padding-top: 0.2rem;
                padding-bottom: 0.2rem;
              }
              .large {
                width: 77px;
                height: 47px;
                font-size: 40px;
                font-family: "power";
                letter-spacing: 0.02rem;
                color: #00b4ff;
                line-height: 47px;
              }
              .unit {
                width: 0.27rem;
                height: 0.14rem;
                font-size: 0.14rem;
                font-family: "power";
                letter-spacing: 0.02rem;
                color: #ffffff;
                line-height: 0.14rem;
              }
            }
          }
          & > li:nth-of-type(2) {
            .img {
              width: 0.61rem;
              height: 0.6rem;
              background-size: 100% 100%;
              background: url("../../assets/right-side/index/single-power.png")
                no-repeat;
            }
            .detail {
              p {
                width: 100%;
                height: 0.14rem;
                padding-top: 0.2rem;
                padding-bottom: 0.2rem;
                font-size: 0.14rem;
                font-family: PingFangSC-Semibold, PingFang SC;
                // font-weight: 600;
                color: #ffffff;
                text-align: center;
                line-height: 0.14rem;
              }
              .large {
                width: 77px;
                height: 47px;
                font-size: 40px;
                font-family: "power";
                letter-spacing: 0.02rem;
                color: #00b4ff;
                line-height: 47px;
              }
              .unit {
                width: 0.27rem;
                height: 0.14rem;
                font-size: 0.14rem;
                font-family: "power";
                letter-spacing: 0.02rem;
                color: #ffffff;
                line-height: 0.14rem;
              }
            }
          }
          & > li:nth-of-type(3) {
            .img {
              width: 0.61rem;
              height: 0.6rem;
              background: url("../../assets/right-side/index/cost.png")
                no-repeat;
              background-size: 100% 100%;
            }
            .detail {
              p {
                width: 100%;
                height: 0.14rem;
                font-size: 0.14rem;
                font-family: PingFangSC-Semibold, PingFang SC;
                // font-weight: 600;
                color: #ffffff;
                text-align: center;
                line-height: 0.14rem;
                padding-top: 0.2rem;
                padding-bottom: 0.2rem;
              }
              .large {
                width: 77px;
                height: 47px;
                font-size: 40px;
                font-family: "power";
                letter-spacing: 0.02rem;
                color: #00b4ff;
                line-height: 47px;
              }
              .unit {
                width: 0.27rem;
                height: 0.14rem;
                font-size: 0.14rem;
                font-family: "power";
                letter-spacing: 0.02rem;
                color: #ffffff;
                line-height: 0.14rem;
              }
            }
          }
        }
        .line {
          width: 3.8rem;
          height: 0.08rem;
          margin: 0 auto;
          border-bottom: 1px dashed #00b4ff;
        }
      }
      .left-down {
        width: 100%;
        height: 3.38rem;
        // border: 1px solid;
        .down-status {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          .detail {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            padding-left: 0.4rem;
            padding-top: 0.3rem;
            & > div > p {
              width: 0.87rem;
              height: 0.14rem;
              font-size: 0.13rem;
              font-family: PingFangSC-Semibold, PingFang SC;
              // font-weight: 600;
              color: #ffffff;
              line-height: 0.14rem;
              text-align: end;
              letter-spacing: 0.02rem;
            }
            & > div > span:nth-of-type(1) {
              width: 0.44rem;
              height: 0.35rem;
              font-size: 0.27rem;
              font-family: "power";
              letter-spacing: 0.02rem;
              color: #ffffff;
              line-height: 0.35rem;
              transition: all 0.3s;
              &:hover {
                color: #0089ff;
              }
            }
            & > div > span:nth-of-type(2) {
              width: 0.27rem;
              height: 0.14rem;
              font-size: 0.13rem;
              font-family: "power";
              //字间距
              letter-spacing: 0.02rem;
              color: #ffffff;
              line-height: 0.14rem;
              font-family: DINAlternate-Bold, DINAlternate;
              font-weight: 600;
              letter-spacing: 0.01rem;
            }
            .detail-1 {
              width: 50%;
              height: 50%;
            }
            .detail-2 {
              width: 50%;
              height: 50%;
              padding-left: 0.88rem;
            }
            .detail-3 {
              width: 50%;
              height: 50%;
            }
            .detail-4 {
              width: 50%;
              height: 50%;
              padding-left: 0.88rem;
            }
          }
          .img-charts {
            position: absolute;
            top: 6.2rem;
            left: 3.4rem;
            width: 2.26rem;
            height: 3.21rem;
            & > p {
              margin: 0 auto;
              text-align: center;
            }
            .title-up {
              width: 0.58rem;
              height: 0.14rem;
              font-size: 0.24rem;
              font-family: PingFangSC-Semibold, PingFang SC;
              font-weight: 600;
              letter-spacing: 0.02rem;
              color: #00b4ff;
              line-height: 0.14rem;
            }
            .charts-rotate {
              width: 1.74rem;
              height: 2.09rem;
              margin: 0 auto;
              margin-top: 0.3rem;
              background: url("../../assets/right-side/index/group.png")
                no-repeat;
              background-size: 100% 100%;
            }
            .title-down {
              width: 1rem;
              height: 0.14rem;
              font-size: 0.14rem;
              font-family: PingFangSC-Semibold, PingFang SC;
              color: #ffffff;
              line-height: 0.14rem;
              letter-spacing: 0.02rem;
            }
          }
        }
      }
    }
    .main-right {
      width: 12.05rem;
      height: 6.05rem;
      background: rgba(0, 0, 0, 0.2);
      border-radius: 6px;
      .title {
        //文字
        width: 0.9rem;
        height: 0.3rem;
        margin-top: 0.05rem;
        margin-left: 0.1rem;
        font-size: 0.16rem;
        line-height: 0.3rem;
        text-align: center;

        font-family: DINAlternate-Bold, DINAlternate;
        font-weight: bold;
        letter-spacing: 0.02rem;
        color: #00b4ff;
        span {
          // display: inline-block;
          height: 0.26rem;
          border: 2px solid;
          text-align: center;
          margin-right: 0.1rem;
        }
      }
      .facility-card {
        width: 100%;
        height: 74%;
        display: flex;
        justify-content: space-around;
        align-items: space-around;
        flex-wrap: wrap;
        .card {
          width: 4.8rem;
          height: 1.9rem;
          flex-basis: 45%;
          // border : 1px solid red;
        }
        //卡片1
        .card-1 {
          width: 4.9rem;
          height: 2.1rem;
          background: linear-gradient(
            180deg,
            rgba(141, 141, 141, 0.3) 0%,
            rgba(225, 225, 225, 0.3) 100%
          );
          border-radius: 6px;

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
              dt {
                display: inline-block;
                height: 0.2rem;
                font-size: 0.14rem;
                font-family: PingFangSC-Semibold, PingFang SC;
                font-weight: 600;
                color: #ffffff;
                line-height: 0.2rem;
              }
              dd {
                margin-left: -0.14rem;
                .title {
                  display: inline-block;

                  height: 0.17rem;
                  font-size: 0.12rem;
                  font-family: PingFangSC-Regular, PingFang SC;
                  font-weight: 400;
                  color: #ffffff;
                  line-height: 0.17rem;
                  text-align: start;
                }
                .num {
                  width: 0.44rem;
                  height: 0.42rem;
                  margin-left: 0.2rem;
                  font-size: 0.36rem;
                  font-family: DINAlternate-Bold, DINAlternate;
                  font-weight: bold;
                  color: #00b4ff;
                  line-height: 0.42rem;
                }
                .tit {
                  width: 0.16rem;
                  height: 0.22rem;
                  font-size: 0.16rem;
                  font-family: PingFangSC-Regular, PingFang SC;
                  font-weight: 400;
                  color: #ffffff;
                  line-height: 0.22rem;
                }
              }
            }
          }
          .wrapper-down {
            display: flex;
            justify-content: space-around;
            align-content: center;
            flex-flow: wrap;
            padding-top: 0.1rem;
            & > dl {
              text-align: center;
              width: 25%;
              & > dt {
                display: inline-block;
                height: 0.28rem;
                font-size: 0.24rem;
                font-family: DINAlternate-Bold, DINAlternate;
                font-weight: 600;
                color: #ffffff;
                line-height: 0.28rem;
                transition: all 0.3s;
                &:hover {
                  color: #00b4ff;
                  transform: scale(1.1);
                }
              }
              & > dd {
                height: 0.17rem;
                font-size: 0.12rem;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: bold;
                color: rgba(6, 14, 15, 0.8);
                line-height: 0.17rem;
                margin: 0 auto;
                margin-top: 0.02rem;
                text-align: center;
                letter-spacing: 0.02rem;
              }
              & > span {
                width: 0.12rem;
                height: 0.17rem;
                display: inline-block;
                font-size: 0.12rem;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #ffffff;
                line-height: 0.17rem;
              }
            }
          }
        }
        //卡片2
        .card-2 {
          width: 4.9rem;
          height: 2.1rem;
          background: linear-gradient(
            180deg,
            #413125 0%,
            rgba(255, 193, 143, 0.3) 100%
          );
          border-radius: 6px;
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
              dt {
                display: inline-block;
                height: 0.2rem;
                font-size: 0.14rem;
                font-family: PingFangSC-Semibold, PingFang SC;
                font-weight: 600;
                color: #ffffff;
                margin-right: 0.1rem;
                line-height: 0.2rem;
              }
              .change {
                display: inline-block;
                width: 0.22rem;
                height: 0.22rem;
                margin-left: 0.05rem;
                font-size: 0.14rem;
                font-family: PingFangSC-Semibold, PingFang SC;
                font-weight: 600;
                color: #ffffff;
                line-height: 0.22rem;
                text-align: center;
                transition: all 0.3s;
                &:hover {
                  background-color: #00b4ff;
                  border-radius: 50%;
                  color: #fff;
                  cursor: pointer;
                }
              }

              dd {
                width: 100%;
                height: 0.5rem;
                margin-left: -0.14rem;
                .title {
                  // width: 0.6rem;//星级间距变宽
                  height: 0.17rem;
                  font-size: 0.12rem;
                  font-family: PingFangSC-Regular, PingFang SC;
                  font-weight: 400;
                  display: inline-block;
                  color: #ffffff;
                  line-height: 0.17rem;
                  text-align: start;
                }
                .num {
                  width: 0.44rem;
                  height: 0.42rem;
                  margin-left: 0.2rem;
                  font-size: 0.36rem;
                  font-family: DINAlternate-Bold, DINAlternate;
                  font-weight: bold;
                  color: #00b4ff;
                  line-height: 0.42rem;
                }
                .tit {
                  width: 0.16rem;
                  height: 0.22rem;
                  font-size: 0.16rem;
                  font-family: PingFangSC-Regular, PingFang SC;
                  font-weight: 400;
                  color: #ffffff;
                  line-height: 0.22rem;
                }
              }
            }
          }
          .wrapper-down {
            display: flex;
            justify-content: space-around;
            align-content: center;
            flex-flow: wrap;
            padding-top: 0.1rem;

            & > dl {
              text-align: center;
              width: 25%;
              & > dt {
                display: inline-block;
                height: 0.28rem;
                font-size: 0.24rem;
                font-family: DINAlternate-Bold, DINAlternate;
                font-weight: 600;
                color: #ffffff;
                line-height: 0.28rem;
                transition: all 0.3s;
                &:hover {
                  color: #00b4ff;
                  transform: scale(1.1);
                }
              }
              & > dd {
                height: 0.17rem;
                font-size: 0.12rem;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: bold;

                color: rgba(6, 14, 15, 0.8);
                line-height: 0.17rem;
                margin: 0 auto;
                margin-top: 0.02rem;
                text-align: center;
                letter-spacing: 0.02rem;
              }
              & > span {
                width: 0.12rem;
                height: 0.17rem;
                display: inline-block;
                font-size: 0.12rem;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #ffffff;
                line-height: 0.17rem;
              }
            }
          }
        }
        //卡片3
        .card-3 {
          width: 4.9rem;
          height: 2.1rem;
          background: linear-gradient(
            180deg,
            rgba(199, 0, 0, 0.3) 0%,
            rgba(255, 130, 130, 0.3) 100%
          );
          border-radius: 6px;
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
              dt {
                height: 0.2rem;
                display: inline-block;
                font-size: 0.14rem;
                font-family: PingFangSC-Semibold, PingFang SC;
                font-weight: 600;
                color: #ffffff;
                line-height: 0.2rem;
                margin-right: 0.1rem;
              }
              .change {
                display: inline-block;
                width: 0.22rem;
                height: 0.22rem;
                margin-left: 0.05rem;
                font-size: 0.14rem;
                font-family: PingFangSC-Semibold, PingFang SC;
                font-weight: 600;
                color: #ffffff;
                line-height: 0.22rem;
                text-align: center;
                transition: all 0.3s;
                &:hover {
                  background-color: #00b4ff;
                  border-radius: 50%;
                  color: #fff;
                  cursor: pointer;
                }
              }
              dd {
                width: 100%;
                height: 0.5rem;
                margin-left: -0.14rem;
                .title {
                  // width: 0.6rem;//星级间距变宽
                  height: 0.17rem;
                  font-size: 0.12rem;
                  font-family: PingFangSC-Regular, PingFang SC;
                  font-weight: 400;
                  display: inline-block;
                  color: #ffffff;
                  line-height: 0.17rem;
                  text-align: start;
                }
                .num {
                  width: 0.44rem;
                  height: 0.42rem;
                  margin-left: 0.2rem;
                  font-size: 0.36rem;
                  font-family: DINAlternate-Bold, DINAlternate;
                  font-weight: bold;
                  color: #00b4ff;
                  line-height: 0.42rem;
                }
                .tit {
                  width: 0.16rem;
                  height: 0.22rem;
                  font-size: 0.16rem;
                  font-family: PingFangSC-Regular, PingFang SC;
                  font-weight: 400;
                  color: #ffffff;
                  line-height: 0.22rem;
                }
              }
            }
          }
          .wrapper-down {
            display: flex;
            justify-content: space-around;
            align-content: center;
            flex-flow: wrap;
            padding-top: 0.1rem;

            & > dl {
              text-align: center;
              width: 25%;
              & > dt {
                display: inline-block;
                height: 0.28rem;
                font-size: 0.24rem;
                font-family: DINAlternate-Bold, DINAlternate;
                font-weight: bold;

                color: #ffffff;
                line-height: 0.28rem;
                transition: all 0.3s;
                &:hover {
                  color: #00b4ff;
                  transform: scale(1.1);
                }
              }
              & > dd {
                height: 0.17rem;
                font-size: 0.12rem;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: bold;

                color: rgba(6, 14, 15, 0.8);
                line-height: 0.17rem;
                margin: 0 auto;
                margin-top: 0.02rem;
                text-align: center;
                letter-spacing: 0.02rem;
              }
              & > span {
                width: 0.12rem;
                height: 0.17rem;
                display: inline-block;
                font-size: 0.12rem;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #ffffff;
                line-height: 0.17rem;
              }
            }
          }
        }
        //卡片4
        .card-4 {
          width: 4.9rem;
          height: 2.1rem;
          background: linear-gradient(
            180deg,
            rgba(141, 141, 141, 0.3) 0%,
            rgba(225, 225, 225, 0.3) 100%
          );
          border-radius: 6px;
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
              dt {
                height: 0.2rem;
                display: inline-block;
                font-size: 0.14rem;
                font-family: PingFangSC-Semibold, PingFang SC;
                font-weight: 600;
                color: #ffffff;
                line-height: 0.2rem;
                margin-right: 0.1rem;
              }
              .change {
                display: inline-block;
                width: 0.22rem;
                height: 0.22rem;
                margin-left: 0.05rem;
                font-size: 0.14rem;
                font-family: PingFangSC-Semibold, PingFang SC;
                font-weight: 600;
                color: #ffffff;
                line-height: 0.22rem;
                text-align: center;
                transition: all 0.3s;
                &:hover {
                  background-color: #00b4ff;
                  border-radius: 50%;
                  color: #fff;
                  cursor: pointer;
                }
              }
              dd {
                width: 100%;
                height: 0.5rem;
                margin-left: -0.14rem;
                .title {
                  display: inline-block;
                  height: 0.17rem;
                  font-size: 0.12rem;
                  font-family: PingFangSC-Regular, PingFang SC;
                  font-weight: 400;
                  color: #ffffff;
                  line-height: 0.17rem;
                  text-align: start;
                }
                .num {
                  width: 0.44rem;
                  height: 0.42rem;
                  margin-left: 0.2rem;
                  font-size: 0.36rem;
                  font-family: DINAlternate-Bold, DINAlternate;
                  font-weight: bold;
                  color: #00b4ff;
                  line-height: 0.42rem;
                }
                .tit {
                  width: 0.16rem;
                  height: 0.22rem;
                  font-size: 0.16rem;
                  font-family: PingFangSC-Regular, PingFang SC;
                  font-weight: 400;
                  color: #ffffff;
                  line-height: 0.22rem;
                }
              }
            }
          }
          .wrapper-down {
            display: flex;
            justify-content: space-around;
            align-content: center;
            flex-flow: wrap;
            padding-top: 0.1rem;
            & > dl {
              text-align: center;
              width: 25%;
              & > dt {
                display: inline-block;
                height: 0.28rem;
                font-size: 0.24rem;
                font-family: DINAlternate-Bold, DINAlternate;
                font-weight: 600;
                color: #ffffff;
                line-height: 0.28rem;
                transition: all 0.3s;
                &:hover {
                  color: #00b4ff;
                  transform: scale(1.1);
                }
              }
              & > dd {
                height: 0.17rem;
                font-size: 0.12rem;
                font-family: PingFangSC-Regular, PingFang SC;
                color: rgba(6, 14, 15, 0.9);
                font-weight: bold;
                line-height: 0.17rem;
                margin: 0 auto;
                margin-top: 0.02rem;
                text-align: center;
                letter-spacing: 0.02rem;
              }
              & > span {
                width: 0.12rem;
                height: 0.17rem;
                display: inline-block;
                font-size: 0.12rem;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #ffffff;
                line-height: 0.17rem;
              }
            }
          }
        }
        .facility-status {
        }
      }
      .facility-status {
        width: 95%;
        height: 1.22rem;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        z-index: 1000;
        .vessel {
          width: 19%;
          height: 100%;
          // border: 1px solid green;
          #liquidFill1 {
            width: 100%;
            height: 100%;
          }
          #liquidFill2 {
            width: 100%;
            height: 100%;
          }
          #liquidFill3 {
            width: 100%;
            height: 100%;
          }
          #liquidFill4 {
            width: 100%;
            height: 100%;
            // transform: scale(1.1);
          }
          #liquidFill5 {
            width: 100%;
            height: 100%;
            // transform: scale(1.1);
          }
        }
      }
    }
  }
  .active-change {
    display: inline-block;
    width: 0.22rem;
    height: 0.22rem;
    margin-left: 0.2rem;
    font-size: 0.14rem;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #ffffff;
    line-height: 0.2rem;
    text-align: center;
    background-color: #00b4ff;
    border-radius: 50%;
    color: #fff;
    cursor: pointer;
    transition: all 0.3s;
  }
}

@media screen and (min-width: 1000px) and (max-width: 1900px) {
  .wrapper-up {
    .status {
      position: absolute !important;
      top: 0.04rem !important;
      right: 0rem !important;
      width: 0.6rem !important;
      height: 0.3rem !important;
      line-height: 0.3rem !important;
      h3 {
        line-height: 0.3rem !important;
      }
    }
    .star-title {
      .num {
        margin-left: 0.11rem !important;
      }
    }
  }
}
@media screen and (min-width: 1920px) {
  .wrapper-up {
    .star-title {
      .num {
        margin-left: 0.2rem;
      }
    }
  }
}
</style>
