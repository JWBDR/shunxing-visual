<template>
  <div class="container-measure">
    <div class="online-date">
      <span>请选择日期</span>
      <a-date-picker
        :popupStyle="pickStyle"
        @change="onChangeDate"
        :locale="locale"
      />
    </div>
    <div class="online-facility">
      <div class="facility-detail">
        <div class="facility-up">
          <img
            src="../../assets/right-side/measure/belt.png"
            title="顺8级带(砂)"
            alt="皮带机"
          />
          <div class="facility-title">顺8级带(砂)</div>
        </div>
        <div class="facility-down">
          <dl>
            <dd>总产量</dd>
            <dt class="large">245</dt>
            <span>&nbsp;&nbsp;t</span>
          </dl>
          <dl>
            <dd>计划完成率</dd>
            <dt class="large">97.98</dt>
            <span>&nbsp;&nbsp;%</span>
          </dl>
          <dl>
            <dd>产销比</dd>
            <dt class="large">99.98</dt>
            <span>&nbsp;&nbsp;%</span>
          </dl>
          <dl>
            <dd>成品率</dd>
            <dt class="large">99.98</dt>
            <span>&nbsp;&nbsp;%</span>
          </dl>
          <dl>
            <dd>负荷比重</dd>
            <dt class="large">99.98</dt>
            <span>&nbsp;&nbsp;%</span>
          </dl>
          <dl>
            <dd>开机时间</dd>
            <dt class="large">100.58</dt>
            <span>&nbsp;&nbsp;h</span>
          </dl>
          <dl>
            <dd>无故障时间</dd>
            <dt class="large">189.49</dt>
            <span>&nbsp;&nbsp;h</span>
          </dl>
        </div>
      </div>
      <div class="facility-detail">
        <div class="facility-up">
          <img
            src="../../assets/right-side/measure/belt.png"
            title="泥6级带(泥饼)"
            alt="皮带机"
          />
          <div class="facility-title">泥6级带(泥饼)</div>
        </div>
        <div class="facility-down">
          <dl>
            <dd>总产量</dd>
            <dt class="large">245</dt>
            <span>&nbsp;&nbsp;t</span>
          </dl>
          <dl>
            <dd>计划完成率</dd>
            <dt class="large">97.98</dt>
            <span>&nbsp;&nbsp;%</span>
          </dl>
          <dl>
            <dd>产销比</dd>
            <dt class="large">99.98</dt>
            <span>&nbsp;&nbsp;%</span>
          </dl>
          <dl>
            <dd>成品率</dd>
            <dt class="large">99.98</dt>
            <span>&nbsp;&nbsp;%</span>
          </dl>
          <dl>
            <dd>负荷比重</dd>
            <dt class="large">99.98</dt>
            <span>&nbsp;&nbsp;%</span>
          </dl>
          <dl>
            <dd>开机时间</dd>
            <dt class="large">100.58</dt>
            <span>&nbsp;&nbsp;h</span>
          </dl>
          <dl>
            <dd>无故障时间</dd>
            <dt class="large">189.49</dt>
            <span>&nbsp;&nbsp;h</span>
          </dl>
        </div>
      </div>
      <div class="facility-detail">
        <div class="facility-up">
          <img
            src="../../assets/right-side/measure/belt.png"
            title="泥1级带(泥粉)"
            alt="皮带机"
          />
          <div class="facility-title">泥1级带(泥粉)</div>
        </div>
        <div class="facility-down">
          <dl>
            <dd>总产量</dd>
            <dt class="large">245</dt>
            <span>&nbsp;&nbsp;t</span>
          </dl>
          <dl>
            <dd>计划完成率</dd>
            <dt class="large">97.98</dt>
            <span>&nbsp;&nbsp;%</span>
          </dl>
          <dl>
            <dd>产销比</dd>
            <dt class="large">99.98</dt>
            <span>&nbsp;&nbsp;%</span>
          </dl>
          <dl>
            <dd>成品率</dd>
            <dt class="large">99.98</dt>
            <span>&nbsp;&nbsp;%</span>
          </dl>
          <dl>
            <dd>负荷比重</dd>
            <dt class="large">99.98</dt>
            <span>&nbsp;&nbsp;%</span>
          </dl>
          <dl>
            <dd>开机时间</dd>
            <dt class="large">100.58</dt>
            <span>&nbsp;&nbsp;h</span>
          </dl>
          <dl>
            <dd>无故障时间</dd>
            <dt class="large">189.49</dt>
            <span>&nbsp;&nbsp;h</span>
          </dl>
        </div>
      </div>
      <div class="facility-detail">
        <div class="facility-up">
          <img
            src="../../assets/right-side/measure/belt.png"
            title="石2级带(5-8石)"
            alt="皮带机"
          />
          <div class="facility-title">石2级带(5-8石)</div>
        </div>
        <div class="facility-down">
          <dl>
            <dd>总产量</dd>
            <dt class="large">245</dt>
            <span>&nbsp;&nbsp;t</span>
          </dl>
          <dl>
            <dd>计划完成率</dd>
            <dt class="large">97.98</dt>
            <span>&nbsp;&nbsp;%</span>
          </dl>
          <dl>
            <dd>产销比</dd>
            <dt class="large">99.98</dt>
            <span>&nbsp;&nbsp;%</span>
          </dl>
          <dl>
            <dd>成品率</dd>
            <dt class="large">99.98</dt>
            <span>&nbsp;&nbsp;%</span>
          </dl>
          <dl>
            <dd>负荷比重</dd>
            <dt class="large">99.98</dt>
            <span>&nbsp;&nbsp;%</span>
          </dl>
          <dl>
            <dd>开机时间</dd>
            <dt class="large">100.58</dt>
            <span>&nbsp;&nbsp;h</span>
          </dl>
          <dl>
            <dd>无故障时间</dd>
            <dt class="large">189.49</dt>
            <span>&nbsp;&nbsp;h</span>
          </dl>
        </div>
      </div>
      <div class="facility-detail">
        <div class="facility-up">
          <img
            src="../../assets/right-side/measure/belt.png"
            title="石5级带(中间堆)"
            alt="皮带机"
          />
          <div class="facility-title">石5级带(中间堆)</div>
        </div>
        <div class="facility-down">
          <dl>
            <dd>总产量</dd>
            <dt class="large">245</dt>
            <span>&nbsp;&nbsp;t</span>
          </dl>
          <dl>
            <dd>计划完成率</dd>
            <dt class="large">97.98</dt>
            <span>&nbsp;&nbsp;%</span>
          </dl>
          <dl>
            <dd>产销比</dd>
            <dt class="large">99.98</dt>
            <span>&nbsp;&nbsp;%</span>
          </dl>
          <dl>
            <dd>成品率</dd>
            <dt class="large">99.98</dt>
            <span>&nbsp;&nbsp;%</span>
          </dl>
          <dl>
            <dd>负荷比重</dd>
            <dt class="large">99.98</dt>
            <span>&nbsp;&nbsp;%</span>
          </dl>
          <dl>
            <dd>开机时间</dd>
            <dt class="large">100.58</dt>
            <span>&nbsp;&nbsp;h</span>
          </dl>
          <dl>
            <dd>无故障时间</dd>
            <dt class="large">189.49</dt>
            <span>&nbsp;&nbsp;h</span>
          </dl>
        </div>
      </div>
    </div>
    <div class="online-charts">
      <div class="left">
        <div class="title">
          <span class="colum"></span>
          皮带秤汇总
        </div>
        <div id="container1"></div>
      </div>
      <div class="right">
        <div class="title">
          <span class="colum"></span>
          皮带秤详细
        </div>
        <ul class="change-data">
          <li
            :class="{
              'normal-list': listFlag,
              'active-list': index == current,
            }"
            v-for="(item, index) in changeBeltDetail"
            :key="index"
            @click="addClass(index)"
          >
            {{ item.name }}
          </li>
        </ul>
        <div id="container2"></div>
      </div>
    </div>
  </div>
</template>

<script>
import highCharts from 'highcharts'
import { DatePicker } from 'ant-design-vue'
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
      pickStyle: {
        // data style
      },
      // charts
      chartsOption: {
        charts1: {},
        charts2: {}
      },
      // charts title
      listFlag: true,
      current: 0, // 默认哪个有类名
      changeBeltDetail: [
        {
          name: '产线'
        },
        {
          name: '顺8级带(砂)'
        },
        {
          name: '泥6级带(泥饼)'
        },
        {
          name: '泥1级带(泥粉)'
        },
        {
          name: '石2级带(5-8石)'
        },
        {
          name: '石5级带(中间堆)'
        }
      ]
    }
  },
  created () {},
  mounted () {
    setTimeout(() => {
      this.initPie('container1', this.chartsOption.charts1) // 左下
      this.initLine('container2', this.chartsOption.charts2) // 右下
    }, 300)
  },
  methods: {
    // 下方切换数据
    addClass (index) {
      // this.current是请求要害
      this.current = index
      console.log(index, `第${index + 1}`)
    },
    onChangeDate (date, dateString) {
      console.log(date, dateString)
    },
    // 左下
    initPie (id, datas) {
      this.chartsOption.charts1 = {
        chart: {
          type: 'pie',
          plotBackgroundColor: 'transparent',
          backgroundColor: 'rgba(0,0,0,0)',
          animation: {
            duration: 1000,
            easing: 'easeOutBounce'
          }
          // options3d: {
          //   enabled: true,
          //   alpha: 25,
          //   beta: 0,
          // },
        },
        title: null,
        tooltip: {
          pointFormat: '生产占比: <b>{point.percentage:.1f}%</b>',
          style: {
            fontSize: '.18rem',
            color: 'rgba(0,0,0,.8)'
          }
        },
        // 图例开始
        legend: {
          itemStyle: {
            color: '#fff',
            fontWeight: 'bold'
          }
        },
        labels: {
          style: {
            color: '#fff',
            fontSize: '20px',
            fontWeight: 'bold',
            fontFamily: '微软雅黑'
          }
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            depth: 105,
            dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b>: {point.percentage:f}%',
              style: {
                // 旁边的字体色
                color: '#fff',
                fontSize: '19px',
                fontWeight: 'bold',
                fontFamily: '微软雅黑'
              }
            }
          }
        },
        // 图例结束
        credits: {
          enabled: false // 禁用版权信息，广告
        },
        series: [
          {
            // name: "耗电量占比", //名
            colorByPoint: true,
            size: '100%',
            // innerSize: "70%",
            data: [
              {
                name: '石5级带(中间堆)',
                color: 'rgba(0,144,255,.6)',
                y: 20
              },
              {
                name: '石2级带(5-8石)',
                color: 'rgba(255,94,204,.6)',
                y: 30
              },
              {
                sliced: true,
                name: '泥1级带(泥粉)',
                color: 'rgba(76,22,195,.6)',
                y: 30
              },
              {
                name: '泥6级带(泥饼)',
                color: 'rgba(85,106,205,.6)',
                y: 10
              },
              {
                name: '顺8级带(砂)',
                color: 'rgba(255,221,151,.6)',
                y: 10
              }
            ]
          }
        ]
      }
      const measurePie = new highCharts.chart(id, this.chartsOption.charts1)
    },
    // 右下
    initLine (id, datas) {
      this.chartsOption.charts2 = {
        chart: {
          type: 'line',
          plotBackgroundColor: 'transparent',
          backgroundColor: 'rgba(0,0,0,0)',
          animation: {
            duration: 1000,
            easing: 'easeOutBounce'
          }
        },
        legend: {
          itemStyle: {
            color: '#fff'
          },
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'middle'
        },
        title: null,
        // 图例开始
        plotOptions: {
          series: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
              // enabled: false,
            },
            showInLegend: true
          }
        },

        // 图例结束
        credits: {
          enabled: false // 禁用版权信息，广告
        },
        yAxis: {
          gridLineWidth: 1,
          gridLineColor: 'rgba(255, 255, 255, 0.5)',
          title: {
            text: '产量 ： T',
            style: {
              color: '#fff'
            }
          },
          lineColor: '#00B4FF',
          lineWidth: 1,
          labels: {
            style: {
              color: '#00B4FF'
            }
          }
        },
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
        tooltip: {
          pointFormat: '{series.name}: <b>{point.y}</b><br/>',
          valueSuffix: ' T',
          shared: true
        },
        series: [
          {
            name: '产量',
            color: '#00B4FF',
            data: [
              62,
              48,
              78,
              67,
              56,
              73,
              83,
              82,
              78,
              67,
              56,
              73,
              83,
              78,
              67,
              56,
              73,
              83,
              78,
              67,
              56,
              73,
              83,
              73,
              83
            ]
          }
        ]
      }
      const measureCol = new highCharts.chart(id, this.chartsOption.charts2)
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
.container-measure {
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, #1e3259 0%, #1e3f82 100%);
  display: flex;
  justify-content: space-around;
  align-content: space-around;
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
  .online-facility {
    width: 99%;
    height: 4.5rem;
    display: flex;
    justify-content: space-around;
    align-content: center;
    .facility-detail {
      width: 18%;
      height: 100%;
      display: flex;
      justify-content: space-around;
      align-content: center;
      flex-wrap: wrap;
      background: rgba(0, 0, 0, 0.2);
      border-radius: 6px;
      .facility-up {
        width: 100%;
        height: 1.7rem;
        display: flex;
        justify-content: space-around;
        align-content: center;
        flex-wrap: wrap;
        background: linear-gradient(
          180deg,
          rgba(0, 0, 0, 0.3) 0%,
          rgba(0, 0, 0, 0.15) 99%
        );
        border-radius: 6px 6px 0px 0px;
        img {
          width: 2.16rem;
          height: 1.22rem;
          display: inline-block;
        }
        .facility-title {
          font-size: 0.2rem;
          font-family: PingFangSC-Semibold, PingFang SC;
          font-weight: 600;
          color: #00b4ff;
          line-height: 0.28rem;
          transform: translateY(0.03rem);
        }
      }
      .facility-down {
        width: 100%;
        height: calc(100% - 1.7rem);
        display: flex;
        justify-content: center;
        align-content: center;
        flex-wrap: wrap;
        dl {
          width: 67%;
          padding: 0;
          margin: 0;
          &:hover {
            & > dt {
              color: #00b4ff;
            }
          }
          & > dd {
            width: 0.875rem;
            display: inline-block;
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: rgba(255, 255, 255, 0.5);
            text-align: end;
            margin-right: 0.06rem;
          }
          & > dt {
            width: 0.8rem;
            display: inline-block;
            margin-right: 0.05rem;
            font-size: 0.2rem;
            font-family: DINAlternate-Bold, DINAlternate;
            font-weight: 500;
            color: #ffffff;
            text-align: end;
            line-height: 0.28rem;
          }
          & > span {
            width: 0.2rem;
            display: inline-block;
            font-size: 0.12rem;
            font-family: PingFangSC-Regular, PingFang SC;
            color: #ffffff;
            opacity: 0.6;
            text-align: center;
            line-height: 17px;
          }
        }
      }
    }
  }
  .online-charts {
    width: 99%;
    height: 3.9rem;
    display: flex;
    justify-content: space-around;
    align-content: center;
    .left,
    .right {
      width: 48%;
      height: 100%;
      background: rgba(0, 0, 0, 0.2);
      border-radius: 6px;
    }
    .left {
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
      #container1 {
        width: 100%;
        height: calc(100% - 0.4rem);
      }
    }
    .right {
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
      .change-data {
        display: inline-block;
        transform: translateX(0.1rem) translateY(0.17rem);
        .normal-list {
          float: left;
          font-size: 0.12rem;
          font-family: PingFangSC-Semibold, PingFang SC;
          font-weight: 600;
          line-height: 0.17rem;
          color: rgba(255, 255, 255, 0.5);
          margin-right: 0.2rem;
          cursor: pointer;
          &:hover {
            text-decoration: underline;
            color: #00b4ff;
          }
        }
        .active-list {
          text-decoration: underline;
          color: #00b4ff;
        }
      }
      #container2 {
        width: 100%;
        height: calc(100% - 0.4rem);
      }
    }
  }
}
</style>
