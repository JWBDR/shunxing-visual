<template>
  <div class="container-power">
    <div class="online-date">
      <span>请选择日期</span>
      <a-date-picker @change="onChangeDate" :locale="locale" />
    </div>
    <div class="online-star">
      <div class="title">
        <span class="colum"></span>
        耗电量考核
      </div>
      <dl>
        <dt>总耗电量</dt>
        <dd>12345</dd>
        <span>&nbsp;&nbsp;kwh</span>
      </dl>
      <dl>
        <dt>平均单吨耗电量</dt>
        <dd>1.2</dd>
        <span>&nbsp;&nbsp;kwh/t</span>
      </dl>
      <dl>
        <dt>综合评分</dt>
        <dd>
          <a-rate class="axle-rate" :count="10" :default-value="4" disabled />
        </dd>
      </dl>
    </div>
    <div class="online-charts">
      <div>
        <div class="title">
          <span class="colum"></span>
          当日耗电量
        </div>
        <div id="container1"></div>
      </div>
      <div>
        <div class="title">
          <span class="colum"></span>
          单吨耗电量
        </div>
        <div id="container2"></div>
      </div>
    </div>
    <div class="online-summarizing">
      <div class="title">
        <span class="colum"></span>
        主设备耗电量及分布
      </div>
      <div class="summarizing-charts">
        <div id="container3"></div>
        <div id="container4"></div>
      </div>
    </div>
  </div>
</template>

<script>
import highCharts from 'highcharts'
import { DatePicker, Rate } from 'ant-design-vue'

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
      // 星级文字
      desc: ['差', '正常', '良好', '非常好'],
      monmonup: [],
      chartsOption: {
        charts1: {},
        charts2: {},
        charts3: {},
        charts4: {}
      }
    }
  },
  created () {
    for (var i = 0; i < 24; i++) {
      this.monmonup.push(i + 1)
    }
  },
  mounted () {
    setTimeout(() => {
      this.initAreacharts1('container1', this.chartsOption.charts1)
      this.initAreacharts1('container2', this.chartsOption.charts2)
      this.initCol('container3', this.chartsOption.charts3)
      this.initPie('container4', this.chartsOption.charts4)
    }, 300)
  },
  methods: {
    // 日期
    onChangeDate (date, dateString) {
      console.log(date, dateString)
    },
    // 中1 面积图
    initAreacharts1 (id, datas) {
      this.chartsOption.charts1 = {
        chart: {
          type: 'area',
          plotBackgroundColor: 'transparent',
          backgroundColor: 'rgba(0,0,0,0)',
          animation: {
            duration: 3000,
            easing: 'easeOutBounce'
          }
        },
        legend: {
          itemStyle: {
            color: '#fff',
            fontWeight: 'bold'
          }
        },
        title: null,
        xAxis: {
          categories: this.monmonup,
          gridLineWidth: null,
          // 轴线
          lineColor: '#fff',
          lineWidth: 1,
          labels: {
            style: {
              color: '#fff'
            }
          }
          // 中间线
        },
        yAxis: {
          title: null,
          labels: {
            // formatter: function () {
            //   return this.value / 1000 + "k";
            // },
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
        tooltip: {
          shared: true,
          useHTML: true,
          pointFormat: '{series.name}： <b>{point.y:,.0f}</br>'
        },
        plotOptions: {
          area: {
            linecap: 'round',
            marker: {
              fillColor: '#FFFFFF',
              lineWidth: 2,
              lineColor: null,
              radius: 2,
              states: {
                hover: {
                  fillColor: 'white',
                  lineColor: '#fff',
                  lineWidth: 2
                }
              }
            },
            // lineColor: "#fff",
            // lineWidth: .5,
            fillOpacity: 0
          }
        },
        series: [
          {
            name: '产量',
            data: [
              29459,
              31056,
              31982,
              32040,
              31233,
              29224,
              27342,
              26662,
              26956,
              27912,
              28999,
              27342,
              26662,
              26956,
              27912,
              28999,
              27342,
              26662,
              26956,
              27912,
              28999,
              11643,
              13092,
              14478
            ]
          },
          {
            name: '总耗电量',
            data: [
              11643,
              13092,
              14478,
              15915,
              17385,
              19055,
              21205,
              23044,
              25393,
              11643,
              13092,
              26662,
              26956,
              27912,
              14478,
              27935,
              30062,
              13092,
              26662,
              26956,
              27912,
              14478,
              27935,
              30062
            ]
          }
        ]
      }
      const charts1 = new highCharts.chart(
        id,
        this.chartsOption.charts1,
        this.changeColor(charts1, 'rgba(247,208,99,.6)', 'rgba(0,102,255,.6)')
      )
    },
    initCol (id, datas) {
      this.chartsOption.charts3 = {
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
            text: '耗电量 (kwh)',
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
        legend: {
          itemStyle: {
            color: '#fff',
            fontWeight: 'bold'
          }
        },
        tooltip: {
          // head + 每个 point + footer 拼接成完整的 table
          headerFormat:
            '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat:
            '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b style="color:{series.color};padding:0">{point.y:.1f} kwh</b></td></tr>',
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
            name: '颚破',
            color: '#0090FF',
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
              148.5
            ]
          },
          {
            name: '立轴破',
            color: '#FF5ECC',
            data: [
              83.6,
              78.8,
              98.5,
              93.4,
              106.0,
              84.5,
              105.0,
              104.3,
              91.2,
              83.5,
              106.6,
              92.3,
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
              105.0,
              104.3
            ]
          },
          {
            name: '开关柜',
            color: '#4C16C3',
            data: [
              48.9,
              38.8,
              39.3,
              41.4,
              47.0,
              48.3,
              59.0,
              59.6,
              52.4,
              65.2,
              59.3,
              51.2,
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
              41.4,
              47.0
            ]
          },
          {
            name: '除尘系统',
            color: '#556ACD',
            data: [
              42.4,
              33.2,
              34.5,
              39.7,
              52.6,
              75.5,
              57.4,
              60.4,
              47.6,
              39.1,
              46.8,
              39.7,
              52.6,
              75.5,
              39.7,
              52.6,
              75.5,
              39.7,
              52.6,
              75.5,
              57.4,
              51.1,
              51.1,
              51.1
            ]
          }
        ]
      }
      new highCharts.chart(id, this.chartsOption.charts3)
    },
    initPie (id, datas) {
      this.chartsOption.charts4 = {
        chart: {
          type: 'pie',
          plotBackgroundColor: 'transparent',
          backgroundColor: 'rgba(0,0,0,0)',
          animation: {
            duration: 1000,
            easing: 'easeOutBounce'
          },
          options3d: {
            enabled: true,
            alpha: 45,
            beta: 0
          },
          style: {
            fontFamily: '',
            fontSize: '12px',
            fontWeight: 'bold',
            color: '#006cee'
          }
        },
        title: null,
        tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        // 图例开始
        legend: {
          itemStyle: {
            color: '#fff',
            fontWeight: 'bold'
          }
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            showInLegend: true,
            depth: 55,
            dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b>: {point.percentage:f}%',
              style: {
                // 旁边的字体色
                color: '#fff',
                fontSize: '20px',
                fontWeight: 'bold',
                fontFamily: '微软雅黑'
              }
            }
          }
        },
        // 图例结束
        style: {
          fontSize: '.14rem',
          color: '#fff'
        },
        credits: {
          enabled: false // 禁用版权信息，广告
        },
        series: [
          {
            name: '耗电量占比', // 名
            colorByPoint: true,
            size: '100%',
            innerSize: '60%',
            data: [
              {
                name: '颚破',
                color: 'rgba(0,144,255,.6)',
                y: 20,
                sliced: true
              },
              {
                name: '立轴破',
                color: 'rgba(255,94,204,.6)',
                y: 30
              },
              {
                name: '开关柜',
                color: 'rgba(76,22,195,.6)',
                y: 40
              },
              {
                name: '除尘系统',
                color: 'rgba(85,106,205,.6)',
                y: 10
              }
            ]
          }
        ]
      }
      new highCharts.chart(id, this.chartsOption.charts4)
    },
    // linear变色
    changeColor (chart, colorUp1, colorDown1) {
      var colors = ['#FB9E40', '#FC4747']
      this.$highcharts.getOptions().colors = this.$highcharts.map(
        colors,
        function (color) {
          return {
            linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
            stops: [
              [0, colorUp1],
              [1, colorDown1]
            ]
          }
        }
      )
      // 数据1
      this.$highcharts.getOptions().colors[0].stops[0][1] =
        'rgba(21,79,195,.6)'
      this.$highcharts.getOptions().colors[0].stops[1][1] = 'rgba(1,48,90,.6)'
      // 数据2
      this.$highcharts.getOptions().colors[1].stops[0][1] =
        'rgba(0,199,106,.6)'
      this.$highcharts.getOptions().colors[1].stops[1][1] = 'rgba(0,67,36,.6)'
      // console.log(this.$highcharts.getOptions().colors[1].stops[0][1]);
      // console.log(this.$highcharts.getOptions().colors[1].stops[1][1]);
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
.container-power {
  // position: relative;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, #1e3259 0%, #1e3f82 100%);
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  .online-date {
    width: 97%;
    height: 0.5rem;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 6px;
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
  .online-star {
    width: 97%;
    height: 0.7rem;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    .title {
      //文字
      width: 1.3rem;
      height: 0.3rem;
      display: inline-block;
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
    dl,
    dt,
    dd {
      display: inline-block;
    }
    dl {
      line-height: 0.7rem;
      margin-left: 1rem;
      dd {
        height: 0.28rem;
        font-size: 0.24rem;
        line-height: 0.17rem;
        display: inline-block;
        transition: all 0.3s;
        margin: 0 auto;
        font-family: DINAlternate-Bold, DINAlternate;
        font-weight: bold;
        color: #00b4ff;
        line-height: 0.28rem; //字间距
        letter-spacing: 0.01rem;
        padding-right: 0.02rem;
      }
      dt {
        width: 1.3rem;
        height: 0.2rem;
        font-size: 0.14rem;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #ffffff;
        line-height: 0.2rem; //字间距
        letter-spacing: 0.01rem;
      }
      & > span {
        display: inline-block;
        font-weight: 400;
        line-height: 0.17rem;
        height: 0.17rem;
        font-size: 0.12rem;
        font-family: PingFangSC-Regular, PingFang SC;
        color: #00b4ff;
        line-height: 0.17rem; //字间距
        letter-spacing: 0.01rem;
      }
      .axle-rate {
        transform: translateX(-0.4rem);
        font-size: 0.18rem;
        margin-right: 0.1rem;
        color: #00b4ff;
      }
    }
  }
  .online-charts {
    width: 97%;
    height: 3.3rem;
    display: flex;
    justify-content: space-between;
    align-content: center;
    & > div > h2 {
      margin: 0.1rem;
    }
    & > div:nth-of-type(1) {
      width: 48%;
      height: 100%;
      background: rgba(0, 0, 0, 0.2);
      border-radius: 6px;
      #container1 {
        width: 95%;
        height: 90%;
        transform: translateY(0.16rem);
        margin: 0 auto;
      }
    }
    & > div:nth-of-type(2) {
      width: 45%;
      height: 100%;
      background: rgba(0, 0, 0, 0.2);
      border-radius: 6px;
      #container2 {
        width: 95%;
        height: 90%;
        transform: translateY(0.16rem);
        margin: 0 auto;
      }
    }
    .title {
      //文字
      width: 1.3rem;
      height: 0.3rem;
      display: inline-block;
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
  }
  .online-summarizing {
    width: 97%;
    height: 4rem;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    .summarizing-charts {
      width: 100%;
      height: 85%;
      display: flex;
      justify-content: space-between;
      align-content: center;
      #container3 {
        transform: translateY(0.4rem);
        flex: 1.5;
      }
      #container4 {
        flex: 1;
        transform: translateY(0.4rem);
      }
    }
    .title {
      //文字
      width: 1.8rem;
      height: 0.3rem;
      display: inline-block;
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
  }
}
</style>
