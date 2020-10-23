<template>
  <div class="container-facility">
    <div class="facility-wrapper">
      <div class="facility-header">
        <p class="header-title">|&nbsp;颚破设备运行分析</p>
        <div class="header-date">
          <span>请选择日期</span>
          <a-date-picker @change="onChangeDate" :locale="locale" />
        </div>
        <div class="rate">
          <span class="title">综合评分</span>
          <a-rate class="axle-rate" :count="10" :default-value="4" disabled />
          <span class="num">8.9</span>
          <span class="tit">&nbsp;分</span>
        </div>
      </div>
      <div class="facility-main">
        <div class="title">
          <span class="colum"></span>
          运行状态
        </div>
        <div class="facility-progress">
          <!-- 模块1 -->
          <div class="progress-status">
            <div class="progress-title">
              <div class="title-1">
                <span class="title-left">告警临界点&nbsp;</span>
                <span class="title-center">&nbsp;----------------&nbsp;</span>
                <span class="title-right">&nbsp;18h</span>
              </div>
              <div class="title-1">
                <span class="title-left">常规临界点&nbsp;</span>
                <span class="title-center">&nbsp;----------------&nbsp;</span>
                <span class="title-right">&nbsp;12h</span>
              </div>
            </div>
            <div class="progress-position">
              <p class="normal">{{ changeMsg1 }}</p>
              <div class="progress">
                <div
                  :style="{
                    height: pipeChange.childrenHeight1 + '%',
                    background:
                      pipeChange.childrenHeight1 >= 0 &&
                      pipeChange.childrenHeight1 < 34
                        ? pipeChange.low
                        : '' ||
                          (pipeChange.childrenHeight1 >= 34 &&
                            pipeChange.childrenHeight1 < 67)
                        ? pipeChange.middle
                        : '' ||
                          (pipeChange.childrenHeight1 >= 67 &&
                            pipeChange.childrenHeight1 <= 100)
                        ? pipeChange.high
                        : '',
                  }"
                  class="children"
                ></div>
              </div>
              <p class="num">18.5</p>
              <p class="describe">总工作时间</p>
            </div>
          </div>
          <div class="progress-status">
            <!-- 模块2 -->
            <div class="progress-title">
              <div class="title-1" style="margin-top: 0.7rem">
                <span class="title-left">告警临界点&nbsp;</span>
                <span class="title-center">&nbsp;----------------&nbsp;</span>
                <span class="title-right">&nbsp;95%</span>
              </div>
              <div class="title-1" style="margin-top: 0.05rem">
                <span class="title-left">常规临界点&nbsp;</span>
                <span class="title-center">&nbsp;----------------&nbsp;</span>
                <span class="title-right">&nbsp;80%</span>
              </div>
            </div>
            <div class="progress-position">
              <p class="normal">{{ changeMsg2 }}</p>
              <div class="progress">
                <div
                  :style="{
                    height: pipeChange.childrenHeight2 + '%',
                    background:
                      pipeChange.childrenHeight2 >= 67 &&
                      pipeChange.childrenHeight2 <= 100
                        ? pipeChange.low
                        : '' ||
                          (pipeChange.childrenHeight2 >= 34 &&
                            pipeChange.childrenHeight2 < 67)
                        ? pipeChange.middle
                        : '' ||
                          (pipeChange.childrenHeight2 >= 0 &&
                            pipeChange.childrenHeight2 < 34)
                        ? pipeChange.high
                        : '',
                  }"
                  class="children"
                ></div>
              </div>
              <p class="num">{{ pipeChange.childrenHeight2 }}</p>
              <p class="describe">平均负荷</p>
            </div>
          </div>
          <div class="progress-status">
            <!-- 模块3 -->
            <div class="progress-title">
              <div class="title-1" style="margin-top: 0.7rem">
                <span class="title-left">告警临界点&nbsp;</span>
                <span class="title-center">&nbsp;----------------&nbsp;</span>
                <span class="title-right">&nbsp;5次</span>
              </div>
              <div class="title-1">
                <span class="title-left">常规临界点&nbsp;</span>
                <span class="title-center">&nbsp;----------------&nbsp;</span>
                <span class="title-right">&nbsp;3次</span>
              </div>
            </div>
            <div class="progress-position">
              <p class="normal">{{ changeMsg3 }}</p>
              <div class="progress">
                <div
                  :style="{
                    height: pipeChange.childrenHeight3 + '%',
                    background:
                      pipeChange.childrenHeight3 >= 0 &&
                      pipeChange.childrenHeight3 < 34
                        ? pipeChange.low
                        : '' ||
                          (pipeChange.childrenHeight3 >= 34 &&
                            pipeChange.childrenHeight3 < 67)
                        ? pipeChange.middle
                        : '' ||
                          (pipeChange.childrenHeight3 >= 67 &&
                            pipeChange.childrenHeight3 <= 100)
                        ? pipeChange.high
                        : '',
                  }"
                  class="children"
                ></div>
              </div>
              <p class="num">3</p>
              <p class="describe">开停次数</p>
            </div>
          </div>
          <div class="progress-status">
            <!-- 模块4 -->
            <div class="progress-title">
              <div class="title-1" style="margin-top: 1rem">
                <span class="title-left">告警临界点&nbsp;</span>
                <span class="title-center">&nbsp;----------------&nbsp;</span>
                <span class="title-right">&nbsp;75%</span>
              </div>
              <div class="title-1" style="margin-top: 0.05rem">
                <span class="title-left">常规临界点&nbsp;</span>
                <span class="title-center">&nbsp;----------------&nbsp;</span>
                <span class="title-right">&nbsp;50%</span>
              </div>
            </div>
            <div class="progress-position">
              <p class="normal">{{ changeMsg4 }}</p>
              <div class="progress">
                <div
                  :style="{
                    height: pipeChange.childrenHeight4 + '%',
                    background:
                      pipeChange.childrenHeight4 >= 0 &&
                      pipeChange.childrenHeight4 < 34
                        ? pipeChange.low
                        : '' ||
                          (pipeChange.childrenHeight4 >= 34 &&
                            pipeChange.childrenHeight4 < 67)
                        ? pipeChange.middle
                        : '' ||
                          (pipeChange.childrenHeight4 >= 67 &&
                            pipeChange.childrenHeight4 <= 100)
                        ? pipeChange.high
                        : '',
                  }"
                  class="children"
                ></div>
              </div>
              <p class="num">{{ pipeChange.childrenHeight4 }}</p>
              <p class="describe">开机率</p>
            </div>
          </div>
          <div class="progress-status">
            <!-- 模块5 -->
            <div class="progress-title">
              <div class="title-1" style="margin-top: 1.25rem">
                <span class="title-left">告警临界点&nbsp;</span>
                <span class="title-center">&nbsp;----------------&nbsp;</span>
                <span class="title-right">&nbsp;50%</span>
              </div>
              <div class="title-1" style="margin-top: 0.3rem">
                <span class="title-left">常规临界点&nbsp;</span>
                <span class="title-center">&nbsp;----------------&nbsp;</span>
                <span class="title-right">&nbsp;20%</span>
              </div>
            </div>
            <div class="progress-position">
              <p class="normal">
                {{ changeMsg5 }}
              </p>
              <div class="progress">
                <div
                  :style="{
                    height: pipeChange.childrenHeight5 + '%',
                    background:
                      pipeChange.childrenHeight5 >= 0 &&
                      pipeChange.childrenHeight5 < 34
                        ? pipeChange.low
                        : '' ||
                          (pipeChange.childrenHeight5 >= 34 &&
                            pipeChange.childrenHeight5 < 67)
                        ? pipeChange.middle
                        : '' ||
                          (pipeChange.childrenHeight5 >= 67 &&
                            pipeChange.childrenHeight5 <= 100)
                        ? pipeChange.high
                        : '',
                    transition: 'all 3s',
                  }"
                  class="children"
                ></div>
              </div>
              <p class="num">{{ pipeChange.childrenHeight5 }}</p>
              <p class="describe">设备利用率</p>
            </div>
          </div>
          <div class="progress-status">
            <!-- 模块6 -->
            <div class="progress-title">
              <div class="title-1" style="margin-top: 0.7rem">
                <span class="title-left">告警临界点&nbsp;</span>
                <span class="title-center">&nbsp;----------------&nbsp;</span>
                <span class="title-right">&nbsp;18h</span>
              </div>
              <div class="title-1">
                <span class="title-left">常规临界点&nbsp;</span>
                <span class="title-center">&nbsp;----------------&nbsp;</span>
                <span class="title-right">&nbsp;12h</span>
              </div>
            </div>
            <div class="progress-position">
              <p class="normal">{{ changeMsg6 }}</p>
              <div class="progress">
                <div
                  :style="{
                    height: pipeChange.childrenHeight6 + '%',
                    background:
                      pipeChange.childrenHeight6 >= 0 &&
                      pipeChange.childrenHeight6 < 34
                        ? pipeChange.low
                        : '' ||
                          (pipeChange.childrenHeight6 >= 34 &&
                            pipeChange.childrenHeight6 < 67)
                        ? pipeChange.middle
                        : '' ||
                          (pipeChange.childrenHeight6 >= 67 &&
                            pipeChange.childrenHeight6 <= 100)
                        ? pipeChange.high
                        : '',
                  }"
                  class="children"
                ></div>
              </div>
              <p class="num">18.5</p>
              <p class="describe">无障碍时间</p>
            </div>
          </div>
        </div>
      </div>
      <div class="facility-footer">
        <div class="title">
          <span class="colum"></span>
          运行分析
        </div>
        <div class="facility-analyse">
          <div id="charts1"></div>
          <div id="charts2"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import highCharts from 'highcharts'
import { Rate, DatePicker } from 'ant-design-vue'

import moment from 'moment'
import 'moment/locale/zh-cn'
import apis from './apis'
moment.locale('zh-cn')
export default {
  data () {
    return {
      locale: {
        lang: {
          placeholder: '请选择日期',
          today: '今天',
          yearFormat: 'YYYY',
          dateFormat: 'M/D/YYYY',
          dayFormat: 'D',
          dateTimeFormat: 'M/D/YYYY HH:mm:ss',
          monthFormat: 'MMMM'
        }
      },
      // 捕获路由
      routeId: '',
      // 控制高度
      pipeChange: {
        // 警告 -- 超过警戒值
        middle: 'linear-gradient(180deg, #9A6220 0%, #FFBB8C 100%)',
        // 危险 -- 超过平均值
        low: 'linear-gradient(360deg, #ED1414 0%, #960000 100%)',
        // 优秀 -- 正常
        high: 'linear-gradient(180deg, #005ccf 0%, #00b4ff 100%)',
        // 控制的是height
        childrenHeight1: '34',
        childrenHeight2: '92.67',
        childrenHeight3: '80',
        childrenHeight4: '84',
        childrenHeight5: '80',
        childrenHeight6: '34',
        msg: '正常'
      },
      // charts
      monmonup: [],
      chartsOption: {
        charts1: {},
        charts2: {}
      }
    }
  },
  created () {
    this.routeId = this.$route.query.id
  },
  mounted () {
    setTimeout(() => {
      this.initCol('charts1', this.chartsOption.charts1)
      this.initRadar('charts2', this.chartsOption.charts2)
    }, 200)
  },
  methods: {
    // 日期
    onChangeDate (date, dateString) {
      console.log(date, dateString)
    },
    // 雷达
    initRadar (id, datas) {
      this.chartsOption.charts2 = {
        tooltip: {},
        legend: null,
        radar: {
          name: {
            textStyle: {
              color: '#00B4FF',
              backgroundColor: 'transparent',
              borderRadius: 3,
              padding: [3, 5]
            }
          },
          axisLine: {
            lineStyle: {
              color: 'rgba(131,141,158,.1)',
              width: 3
            }
          },
          indicator: [
            {
              name: '总工作时间',
              max: 100
            },
            {
              name: '无故障时间',
              max: 100
            },
            {
              name: '设备利用率',
              max: 100
            },
            {
              name: '开机率',
              max: 100
            },
            {
              name: '设备开停次数',
              max: 100
            },
            {
              name: '平均负荷',
              max: 100
            }
          ],
          splitArea: {
            show: true,
            areaStyle: {
              // color: 'rgba(0,0,0,.15)', // 图表背景的颜色
              color: [
                'rgba(0,0,0, 0.1)',
                'rgba(0,0,0, 0.3)',
                'rgba(0,0,0, 0.4)',
                'rgba(0,0,0, 0.3',
                'rgba(0,0,0, .1)'
              ],
              shadowColor: 'rgba(0, 0, 0, 0.1)',
              shadowBlur: 10
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              width: 1,
              color: 'rgba(255,255,255,.15)' // 设置网格的颜色
            }
          }
        },
        series: [
          {
            name: '颚破设备图', // 需替换
            type: 'radar',
            data: [
              {
                value: [100, 98, 100, 72, 80, 92],
                // name: '当前部门',
                itemStyle: {
                  normal: {
                    color: 'rgba(21,79,195,1)',
                    lineStyle: {
                      color: '#5AD8A6'
                    }
                  }
                },
                areaStyle: {
                  color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                      {
                        offset: 0,
                        color: 'rgba(1,48,90,.7)' // 0% 处的颜色
                      },
                      {
                        offset: 1,
                        color: 'rgba(21,79,195,.8)' // 100% 处的颜色
                      }
                    ],
                    globalCoord: false // 缺省为 false
                  }
                }
              }
            ]
          }
        ]
      }
      this.myChartOne = this.$echarts.init(document.getElementById('charts2'))
      this.myChartOne.setOption(this.chartsOption.charts2)
    },
    // 柱状
    initCol (id, datas) {
      this.chartsOption.charts1 = {
        chart: {
          type: 'column',
          plotBackgroundColor: 'transparent',
          backgroundColor: 'rgba(0,0,0,0)',
          animation: {
            duration: 1000,
            easing: 'easeOutBounce'
          }
        },
        title: null,
        xAxis: {
          categories: this.monmonup,
          crosshair: true,
          labels: {
            style: {
              color: '#fff'
            }
          }
        },
        yAxis: {
          min: 0,
          title: {
            text: '工作时间 (分钟)',
            style: {
              color: '#fff'
            }
          },
          labels: {
            style: {
              color: '#fff'
            }
          }
        },
        credits: {
          enabled: false // 禁用版权信息，广告
        },
        legend: false,
        tooltip: {
          // head + 每个 point + footer 拼接成完整的 table
          headerFormat:
            '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat:
            '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b style="color:rgba(195,101,0,.8);padding:0">运行{point.y:.1f}分钟</b></td></tr>',
          footerFormat: '</table>',
          shared: true,
          useHTML: true
        },
        plotOptions: {
          column: {
            borderWidth: 0
          }
        },
        series: [
          {
            name: '颚破', // 需要替换
            data: [
              49.9,
              71.5,
              106.4,
              129.2,
              144.0,
              176.0,
              135.6,
              148.5,
              216.4,
              194.1,
              95.6,
              54.4,
              148.5,
              216.4,
              194.1,
              95.6,
              54.4,
              148.5,
              216.4,
              194.1,
              95.6,
              54.4,
              54.4,
              148.5,
              148.5
            ]
          }
        ]
      }
      const colCharts = new highCharts.chart(
        id,
        this.chartsOption.charts1,
        this.changeColor(this)
      )
    },
    changeColor (chart, colorUp, colorDown) {
      var colors = ['#FB9E40', '#FC4747']
      this.$highcharts.getOptions().colors = this.$highcharts.map(
        colors,
        function (color) {
          return {
            linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
            stops: [
              [0, colorUp],
              [1, colorDown]
            ]
          }
        }
      )
      // console.log(this.$highcharts.getOptions().colors[0]);
      this.$highcharts.getOptions().colors[0].stops[0][1] =
        'rgba(76,22,195,.75)'
      this.$highcharts.getOptions().colors[0].stops[1][1] =
        'rgba(209,164,255,.75)'
    }
  },
  computed: {
    changeMsg1 () {
      if (
        this.pipeChange.childrenHeight1 >= 0 &&
        this.pipeChange.childrenHeight1 < 34
      ) {
        return '超过平均值'
      } else if (
        this.pipeChange.childrenHeight1 >= 34 &&
        this.pipeChange.childrenHeight1 < 67
      ) {
        return '超过告警值'
      } else {
        return '正常'
      }
    },
    changeMsg2 () {
      if (
        this.pipeChange.childrenHeight2 >= 0 &&
        this.pipeChange.childrenHeight2 < 34
      ) {
        return '超过平均值'
      } else if (
        this.pipeChange.childrenHeight2 >= 34 &&
        this.pipeChange.childrenHeight2 < 67
      ) {
        return '超过告警值'
      } else {
        return '正常'
      }
    },
    changeMsg3 () {
      if (
        this.pipeChange.childrenHeight3 >= 0 &&
        this.pipeChange.childrenHeight3 < 34
      ) {
        return '超过平均值'
      } else if (
        this.pipeChange.childrenHeight3 >= 34 &&
        this.pipeChange.childrenHeight3 < 67
      ) {
        return '超过告警值'
      } else {
        return '正常'
      }
    },
    changeMsg4 () {
      if (
        this.pipeChange.childrenHeight4 >= 0 &&
        this.pipeChange.childrenHeight4 < 34
      ) {
        return '超过平均值'
      } else if (
        this.pipeChange.childrenHeight4 >= 34 &&
        this.pipeChange.childrenHeight4 < 67
      ) {
        return '超过告警值'
      } else {
        return '正常'
      }
    },
    changeMsg5 () {
      if (
        this.pipeChange.childrenHeight5 >= 0 &&
        this.pipeChange.childrenHeight5 < 34
      ) {
        return '超过平均值'
      } else if (
        this.pipeChange.childrenHeight5 >= 34 &&
        this.pipeChange.childrenHeight5 < 67
      ) {
        return '超过告警值'
      } else {
        return '正常'
      }
    },
    changeMsg6 () {
      if (
        this.pipeChange.childrenHeight6 >= 0 &&
        this.pipeChange.childrenHeight6 < 34
      ) {
        return '超过平均值'
      } else if (
        this.pipeChange.childrenHeight6 >= 34 &&
        this.pipeChange.childrenHeight6 < 67
      ) {
        return '超过告警值'
      } else {
        return '正常'
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
  overflow-y: hidden;
}
.container-facility {
  width: 100%;
  height: 100%;
  background: url("../../assets/right-side/detail/bg.png") no-repeat;
  background-size: 100% 100%;
  .facility-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    .facility-header {
      width: 97%;
      height: 0.45rem;
      background: rgba(0, 0, 0, 0.2);
      border-radius: 0px 6px 6px 0px;
      .header-title {
        width: 2.6rem;
        height: 0.45rem;
        display: inline-block;
        background: #00b4ff;
        border-radius: 6px 0px 0px 6px;
        font-size: 0.2rem;
        font-family: DINAlternate-Bold, DINAlternate;
        font-weight: bold;
        color: #ffffff;
        padding-left: 0.2rem;
        line-height: 0.45rem;
        text-align: start;
        //字间距
        letter-spacing: 0.01rem;
      }
      .header-date {
        display: inline-block;
        span {
          height: 0.17rem;
          font-size: 0.16rem;
          margin-left: 0.3rem;
          text-align: start;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #ffffff;
          line-height: 0.17rem;
          margin-top: 0.08rem;
        }
      }
      .rate {
        display: inline-block;
        float: right;
        transform: translateX(-0.4rem) translateY(-0.09rem);
        height: 0.45rem;
        .title {
          height: 0.45rem;
          display: inline-block;
          margin-right: 0.3rem;
          font-size: 12px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #ffffff;
          text-align: center;
          line-height: 0.45rem;
        }
        .axle-rate {
          font-size: 0.12rem;
          margin-right: 0.1rem;
        }
        .num {
          display: inline-block;
          height: 0.42rem;
          font-size: 0.36rem;
          font-family: DINAlternate-Bold, DINAlternate;
          font-weight: bold;
          color: #00b4ff;
          line-height: 0.42rem;
          transform: translateY(0.1rem);
          transition: all .3s;
          &:hover{
            transform: scale(1.1);
          }
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
    .facility-main {
      width: 97%;
      height: 4rem;
      background: rgba(0, 0, 0, 0.2);
      border-radius: 6px;
      .title {
        //文字
        width: 1.3rem;
        height: 0.3rem;
        display: inline-block;
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
      }
      .facility-progress {
        width: 100%;
        height: 3.3rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        transform: translateY(0.05rem);
        & > div:nth-of-type(1){
           .num{
            &::after{
              content: "h";
              }
          }
        }
        & > div:nth-of-type(2){
          .num{
            &::after{
              content: "%";
              }
          }
        }
        & > div:nth-of-type(3){
          .num{
            &::after{
              content: "次";
              }
          }
        }
        & > div:nth-of-type(4){
          .num{
            &::after{
              content: "%";
              }
          }
        }
        & > div:nth-of-type(5){
         .num{
            &::after{
              content: "%";
              }
          }
        }
        & > div:nth-of-type(6){
          .num{
            &::after{
              content: "h";
              }
          }
        }
        .progress-status {
          position: relative;
          width: 14%;
          height: 100%;
          .progress-title {
            //脱离文档流
            position: absolute;
            z-index: 100;
            .title-1 {
              margin-top: 0.8rem;
              span {
                font-size: 12px;
                font-family: PingFang-SC-Bold, PingFang-SC;
                font-weight: bold;
                color: #ffffff;
                line-height: 17px;
                //字间距
                letter-spacing: 0.02rem;
              }
              .title-center {
                display: inline-block;
                color:rgba(255,255,255,.5)
                // color:red;
              }
            }
          }
          .progress-position {
            position: absolute;
            top: 0.3rem;
            left: 0.83rem;
            width: 1rem;
            height: 2.6rem;
            .normal {
              width: 100%;
              height: 0.2rem;
              font-size: 0.14rem;
              font-family: PingFangSC-Semibold, PingFang SC;
              font-weight: 600;
              color: #ffffff;
              line-height: 0.2rem;
              text-align: center;
            }
            .progress {
              width: 0.8rem;
              height: 1.7rem;
              background: rgba(0, 0, 0, 0.15);
              margin: 0 auto;
              transform: rotate(-180deg);
              transition: all .3s;
              z-index: 100;
              &:hover{
                background: rgba(255, 255, 255, 0.2);
              }
              .children {
                //需要控制的是height
                width: 100%;
                // height: 50%;
                transition: all 1s;
              }
            }
            .num{
              font-size: .24rem;
              font-family: DINAlternate-Bold, DINAlternate;
              font-weight: bold;
              color: #00B4FF;
              line-height: .28rem;
              text-align: center;
              margin-top:.05rem ;
              margin-bottom:.1rem ;
              transition: all .3s;
              &:hover{
                transform: scale(1.1);
              }
              &::after{
                margin-left:.05rem ;
                font-size: .1rem;
                font-family: DINAlternate-Bold, DINAlternate;
                font-weight: bold;
                color: #00B4FF;
              }
            }
            .describe{
              font-size: .14rem;
              font-family: PingFangSC-Semibold, PingFang SC;
              font-weight: 600;
              color: #FFFFFF;
              line-height: .20rem;
              text-align: center;
            }
          }
        }
      }
    }
    .facility-footer {
      width: 97%;
      height: 4.1rem;
      background: rgba(0, 0, 0, 0.2);
      border-radius: 7px;
      .title {
        //文字
        width: 1.3rem;
        height: 0.3rem;
        display: inline-block;
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
      }
      .facility-analyse{
        width: 100%;
        height: calc(100% - .4rem);
        display: flex;
        justify-content: space-around;
        align-items: center;
        #charts1{
          width: 60%;
          height: 100%;
        }
        #charts2{
          width: 40%;
          height:  100%;
        }
      }
    }
  }
}
</style>
