<template>
  <div class="container-online">
    <div class="online-up">
      <div class="facility">
        <div class="progress">
          <div
            :style="{
              width: pipeChange.childrenHeight1 + '%',
              background:
                pipeChange.childrenHeight1 >= 0 &&
                pipeChange.childrenHeight1 <= 43
                  ? pipeChange.bad
                  : '' ||
                    (pipeChange.childrenHeight1 > 43 &&
                      pipeChange.childrenHeight1 <= 57)
                  ? pipeChange.low
                  : '' ||
                    (pipeChange.childrenHeight1 >= 58 &&
                      pipeChange.childrenHeight1 <= 88)
                  ? pipeChange.middle
                  : '' ||
                    (pipeChange.childrenHeight1 >= 89 &&
                      pipeChange.childrenHeight1 <= 100)
                  ? pipeChange.high
                  : '',
            }"
            class="children"
          ></div>
          <span class="title">顺8级带(砂)</span>
          <span class="percentage"
            >{{ pipeChange.childrenHeight1 }}&nbsp;%</span
          >
        </div>
        <div class="detail">
          <div class="wrapper-down">
            <dl>
              <dt class="large">12900</dt>
              <span>&nbsp;&nbsp;T</span>
              <dd>已生产产量</dd>
            </dl>
            <dl>
              <dt>23340</dt>
              <span>&nbsp;&nbsp;T</span>
              <dd>预计产量</dd>
            </dl>
            <dl>
              <dt>420</dt>
              <span>T</span>
              <dd>实时产量</dd>
            </dl>
            <dl>
              <dt class="large">289.24</dt>
              <span>&nbsp;&nbsp;Kwh</span>
              <dd>当日能耗</dd>
            </dl>
            <dl>
              <span>&nbsp;&nbsp;￥</span>
              <dt>115.35</dt>
              <dd>当日电费</dd>
            </dl>
            <dl>
              <dt>23.1</dt>
              <span>&nbsp;&nbsp;%</span>
              <dd>日同比</dd>
            </dl>
            <dl>
              <dt class="large">2348</dt>
              <span>&nbsp;&nbsp;Hz</span>
              <dd>当前频率</dd>
            </dl>
            <dl>
              <dt>18</dt>
              <span>&nbsp;%</span>
              <dd>当前负载</dd>
            </dl>
          </div>
        </div>
        <div class="charts">
          <div id="charts-1"></div>
          <p>24小时生产统计表</p>
        </div>
        <div class="down">
          <div class="down-detail">
            <span>正常运行时长：18.2h&nbsp;</span>
            <span>&nbsp;已运行时长：18.2h</span>
          </div>
          <div class="down-progress">
            <a-progress
              style=""
              :show-info="false"
              :percent="50"
              status-success="active"
            />
          </div>
          <div class="progress-detail">
            <span>0</span>
            <span>当日不同时间运行情况</span>
            <span>24</span>
          </div>
        </div>
      </div>
      <div class="facility">
        <div class="progress">
          <div
            :style="{
              width: pipeChange.childrenHeight2 + '%',
              background:
                pipeChange.childrenHeight2 >= 0 &&
                pipeChange.childrenHeight2 <= 43
                  ? pipeChange.bad
                  : '' ||
                    (pipeChange.childrenHeight2 > 43 &&
                      pipeChange.childrenHeight2 <= 57)
                  ? pipeChange.low
                  : '' ||
                    (pipeChange.childrenHeight2 >= 58 &&
                      pipeChange.childrenHeight2 <= 88)
                  ? pipeChange.middle
                  : '' ||
                    (pipeChange.childrenHeight2 >= 89 &&
                      pipeChange.childrenHeight2 <= 100)
                  ? pipeChange.high
                  : '',
            }"
            class="children"
          ></div>
          <span class="title">泥级带(泥饼)</span>
          <span class="percentage"
            >{{ pipeChange.childrenHeight2 }}&nbsp;%</span
          >
        </div>
        <div class="detail">
          <div class="wrapper-down">
            <dl>
              <dt class="large">12900</dt>
              <span>&nbsp;&nbsp;T</span>
              <dd>已生产产量</dd>
            </dl>
            <dl>
              <dt>23340</dt>
              <span>&nbsp;&nbsp;T</span>
              <dd>预计产量</dd>
            </dl>
            <dl>
              <dt>420</dt>
              <span>T</span>
              <dd>实时产量</dd>
            </dl>
            <dl>
              <dt class="large">289.24</dt>
              <span>&nbsp;&nbsp;Kwh</span>
              <dd>当日能耗</dd>
            </dl>
            <dl>
              <span>&nbsp;&nbsp;￥</span>
              <dt>115.35</dt>
              <dd>当日电费</dd>
            </dl>
            <dl>
              <dt>23.1</dt>
              <span>&nbsp;&nbsp;%</span>
              <dd>日同比</dd>
            </dl>
            <dl>
              <dt class="large">2348</dt>
              <span>&nbsp;&nbsp;Hz</span>
              <dd>当前频率</dd>
            </dl>
            <dl>
              <dt>18</dt>
              <span>&nbsp;%</span>
              <dd>当前负载</dd>
            </dl>
          </div>
        </div>
        <div class="charts">
          <div id="charts-2"></div>
          <p>24小时生产统计表</p>
        </div>
        <div class="down">
          <div class="down-detail">
            <span>正常运行时长：18.2h&nbsp;</span>
            <span>&nbsp;已运行时长：18.2h</span>
          </div>
          <div class="down-progress">
            <a-progress
              style=""
              :show-info="false"
              :percent="50"
              status-success="active"
            />
          </div>
          <div class="progress-detail">
            <span>0</span>
            <span>当日不同时间运行情况</span>
            <span>24</span>
          </div>
        </div>
      </div>
      <div class="facility">
        <div class="progress">
          <div
            :style="{
              width: pipeChange.childrenHeight3 + '%',
              background:
                pipeChange.childrenHeight3 >= 0 &&
                pipeChange.childrenHeight3 <= 43
                  ? pipeChange.bad
                  : '' ||
                    (pipeChange.childrenHeight3 > 43 &&
                      pipeChange.childrenHeight3 <= 57)
                  ? pipeChange.low
                  : '' ||
                    (pipeChange.childrenHeight3 >= 58 &&
                      pipeChange.childrenHeight3 <= 88)
                  ? pipeChange.middle
                  : '' ||
                    (pipeChange.childrenHeight3 >= 89 &&
                      pipeChange.childrenHeight3 <= 100)
                  ? pipeChange.high
                  : '',
            }"
            class="children"
          ></div>
          <span class="title">泥1级带(泥粉砂)</span>
          <span class="percentage"
            >{{ pipeChange.childrenHeight3 }}&nbsp;%</span
          >
        </div>
        <div class="detail">
          <div class="wrapper-down">
            <dl>
              <dt class="large">12900</dt>
              <span>&nbsp;&nbsp;T</span>
              <dd>已生产产量</dd>
            </dl>
            <dl>
              <dt>23340</dt>
              <span>&nbsp;&nbsp;T</span>
              <dd>预计产量</dd>
            </dl>
            <dl>
              <dt>420</dt>
              <span>T</span>
              <dd>实时产量</dd>
            </dl>
            <dl>
              <dt class="large">289.24</dt>
              <span>&nbsp;&nbsp;Kwh</span>
              <dd>当日能耗</dd>
            </dl>
            <dl>
              <span>&nbsp;&nbsp;￥</span>
              <dt>115.35</dt>
              <dd>当日电费</dd>
            </dl>
            <dl>
              <dt>23.1</dt>
              <span>&nbsp;&nbsp;%</span>
              <dd>日同比</dd>
            </dl>
            <dl>
              <dt class="large">2348</dt>
              <span>&nbsp;&nbsp;Hz</span>
              <dd>当前频率</dd>
            </dl>
            <dl>
              <dt>18</dt>
              <span>&nbsp;%</span>
              <dd>当前负载</dd>
            </dl>
          </div>
        </div>
        <div class="charts">
          <div id="charts-3"></div>
          <p>24小时生产统计表</p>
        </div>
        <div class="down">
          <div class="down-detail">
            <span>正常运行时长：18.2h&nbsp;</span>
            <span>&nbsp;已运行时长：18.2h</span>
          </div>
          <div class="down-progress">
            <a-progress
              style=""
              :show-info="false"
              :percent="50"
              status-success="active"
            />
          </div>
          <div class="progress-detail">
            <span>0</span>
            <span>当日不同时间运行情况</span>
            <span>24</span>
          </div>
        </div>
      </div>
      <div class="facility">
        <div class="progress">
          <div
            :style="{
              width: pipeChange.childrenHeight4 + '%',
              background:
                pipeChange.childrenHeight4 >= 0 &&
                pipeChange.childrenHeight4 <= 43
                  ? pipeChange.bad
                  : '' ||
                    (pipeChange.childrenHeight4 > 43 &&
                      pipeChange.childrenHeight4 <= 57)
                  ? pipeChange.low
                  : '' ||
                    (pipeChange.childrenHeight4 >= 58 &&
                      pipeChange.childrenHeight4 <= 88)
                  ? pipeChange.middle
                  : '' ||
                    (pipeChange.childrenHeight4 >= 89 &&
                      pipeChange.childrenHeight4 <= 100)
                  ? pipeChange.high
                  : '',
            }"
            class="children"
          ></div>
          <span class="title">石2级带(5-8石)</span>
          <span class="percentage"
            >{{ pipeChange.childrenHeight4 }}&nbsp;%</span
          >
        </div>
        <div class="detail">
          <div class="wrapper-down">
            <dl>
              <dt class="large">12900</dt>
              <span>&nbsp;&nbsp;T</span>
              <dd>已生产产量</dd>
            </dl>
            <dl>
              <dt>23340</dt>
              <span>&nbsp;&nbsp;T</span>
              <dd>预计产量</dd>
            </dl>
            <dl>
              <dt>420</dt>
              <span>T</span>
              <dd>实时产量</dd>
            </dl>
            <dl>
              <dt class="large">289.24</dt>
              <span>&nbsp;&nbsp;Kwh</span>
              <dd>当日能耗</dd>
            </dl>
            <dl>
              <span>&nbsp;&nbsp;￥</span>
              <dt>115.35</dt>
              <dd>当日电费</dd>
            </dl>
            <dl>
              <dt>23.1</dt>
              <span>&nbsp;&nbsp;%</span>
              <dd>日同比</dd>
            </dl>
            <dl>
              <dt class="large">2348</dt>
              <span>&nbsp;&nbsp;Hz</span>
              <dd>当前频率</dd>
            </dl>
            <dl>
              <dt>18</dt>
              <span>&nbsp;%</span>
              <dd>当前负载</dd>
            </dl>
          </div>
        </div>
        <div class="charts">
          <div id="charts-4"></div>
          <p>24小时生产统计表</p>
        </div>
        <div class="down">
          <div class="down-detail">
            <span>正常运行时长：18.2h&nbsp;</span>
            <span>&nbsp;已运行时长：18.2h</span>
          </div>
          <div class="down-progress">
            <a-progress
              :show-info="false"
              :percent="50"
              status-success="active"
            />
          </div>
          <div class="progress-detail">
            <span>0</span>
            <span>当日不同时间运行情况</span>
            <span>24</span>
          </div>
        </div>
      </div>
      <div class="facility">
        <div class="progress">
          <div
            :style="{
              width: pipeChange.childrenHeight5 + '%',
              background:
                pipeChange.childrenHeight5 >= 0 &&
                pipeChange.childrenHeight5 <= 43
                  ? pipeChange.bad
                  : '' ||
                    (pipeChange.childrenHeight5 > 43 &&
                      pipeChange.childrenHeight5 <= 57)
                  ? pipeChange.low
                  : '' ||
                    (pipeChange.childrenHeight5 >= 58 &&
                      pipeChange.childrenHeight5 <= 88)
                  ? pipeChange.middle
                  : '' ||
                    (pipeChange.childrenHeight5 >= 89 &&
                      pipeChange.childrenHeight5 <= 100)
                  ? pipeChange.high
                  : '',
            }"
            class="children"
          ></div>
          <span class="title">石5级带(中间堆)</span>
          <span class="percentage"
            >{{ pipeChange.childrenHeight5 }}&nbsp;%</span
          >
        </div>
        <div class="detail">
          <div class="wrapper-down">
            <dl>
              <dt class="large">12900</dt>
              <span>&nbsp;&nbsp;T</span>
              <dd>已生产产量</dd>
            </dl>
            <dl>
              <dt>23340</dt>
              <span>&nbsp;&nbsp;T</span>
              <dd>预计产量</dd>
            </dl>
            <dl>
              <dt>420</dt>
              <span>T</span>
              <dd>实时产量</dd>
            </dl>
            <dl>
              <dt class="large">289.24</dt>
              <span>&nbsp;&nbsp;Kwh</span>
              <dd>当日能耗</dd>
            </dl>
            <dl>
              <span>&nbsp;&nbsp;￥</span>
              <dt>115.35</dt>
              <dd>当日电费</dd>
            </dl>
            <dl>
              <dt>23.1</dt>
              <span>&nbsp;&nbsp;%</span>
              <dd>日同比</dd>
            </dl>
            <dl>
              <dt class="large">2348</dt>
              <span>&nbsp;&nbsp;Hz</span>
              <dd>当前频率</dd>
            </dl>
            <dl>
              <dt>18</dt>
              <span>&nbsp;%</span>
              <dd>当前负载</dd>
            </dl>
          </div>
        </div>
        <div class="charts">
          <div id="charts-5"></div>
          <p>24小时生产统计表</p>
        </div>
        <div class="down">
          <div class="down-detail">
            <span>正常运行时长：18.2h&nbsp;</span>
            <span>&nbsp;已运行时长：18.2h</span>
          </div>
          <div class="down-progress">
            <a-progress
              style=""
              :show-info="false"
              :percent="50"
              status-success="active"
            />
          </div>
          <div class="progress-detail">
            <span>0</span>
            <span>当日不同时间运行情况</span>
            <span>24</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 中部开始 -->
    <div class="online-center">
      <div class="ver-axle">
        <div class="axle-index">
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
        <div class="detail">
          <div class="detail-wrapper-down">
            <div class="mot-left">
              <p>颚破J8389321</p>
              <img src="../../assets/right-side/online/col.png" />
            </div>
            <div class="mot-right">
              <dl>
                <dt class="large">245</dt>
                <span>&nbsp;&nbsp;A</span>
                <dd>当前电流</dd>
              </dl>
              <dl>
                <dt>100</dt>
                <span>&nbsp;&nbsp;%</span>
                <dd>当前负载</dd>
              </dl>
              <dl>
                <dt>24.59</dt>
                <span>&nbsp;&nbsp;h</span>
                <dd>正常运行时长</dd>
              </dl>
              <dl>
                <dt class="large">22.58</dt>
                <span>&nbsp;&nbsp;h</span>
                <dd>当日运行时长</dd>
              </dl>
            </div>
          </div>
        </div>
        <div class="charts" id="charts1">
          <div class="charts-up">
            <dl>
              <dt>156</dt>
              <span>&nbsp;&nbsp;Kwh</span>
              <dd>当日能耗</dd>
            </dl>
            <dl>
              <dt class="large">22.33</dt>
              <span>&nbsp;&nbsp;%</span>
              <dd>日同比</dd>
            </dl>
            <dl>
              <span>&nbsp;￥</span>
              <dt>999.99</dt>
              <dd>当日电费</dd>
            </dl>
          </div>
          <div class="charts-down">
            <div id="charts-6"></div>
          </div>
        </div>
      </div>
      <div class="ver-axle">
        <div class="axle-index">
          <dl class="star-title">
            <dt>棒条给料机</dt>
            <span
              :class="{
                'change-cricle': clickFlag,
                'active-cricle': index == current1,
              }"
              v-for="(item, index) in spanNum"
              :key="item.id"
              @click="addClass1(index)"
            >
              {{ item.num }}
            </span>
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
          <div class="status-success">
            <h3>开机</h3>
          </div>
        </div>
        <div class="detail">
          <div class="detail-wrapper-down">
            <div class="mot-left">
              <p>颚破J8389321</p>
              <img src="../../assets/right-side/online/stick.png" />
            </div>
            <div class="mot-right">
              <dl>
                <dt class="large">245</dt>
                <span>&nbsp;&nbsp;A</span>
                <dd>当前电流</dd>
              </dl>
              <dl>
                <dt>100</dt>
                <span>&nbsp;&nbsp;%</span>
                <dd>当前负载</dd>
              </dl>
              <dl>
                <dt>24.59</dt>
                <span>&nbsp;&nbsp;h</span>
                <dd>正常运行时长</dd>
              </dl>
              <dl>
                <dt class="large">22.58</dt>
                <span>&nbsp;&nbsp;h</span>
                <dd>当日运行时长</dd>
              </dl>
            </div>
          </div>
        </div>
        <div class="charts" id="charts1">
          <div class="charts-up">
            <dl>
              <dt>156</dt>
              <span>&nbsp;&nbsp;Kwh</span>
              <dd>当日能耗</dd>
            </dl>
            <dl>
              <dt class="large">22.33</dt>
              <span>&nbsp;&nbsp;%</span>
              <dd>日同比</dd>
            </dl>
            <dl>
              <span>&nbsp;￥</span>
              <dt>999.99</dt>
              <dd>当日电费</dd>
            </dl>
          </div>
          <div class="charts-down">
            <div id="charts-7"></div>
          </div>
        </div>
      </div>
      <div class="ver-axle">
        <div class="axle-index">
          <dl class="star-title">
            <dt>泥粉筛</dt>
            <span
              :class="{
                'change-cricle': clickFlag,
                'active-cricle': index == current2,
              }"
              v-for="(item, index) in spanNum2"
              :key="item.id"
              @click="addClass2(index)"
            >
              {{ item.num }}
            </span>
            <dt>高频筛</dt>
            <span
              :class="{
                'change-cricle': clickFlag,
                'active-cricle': index == current3,
              }"
              v-for="(item, index) in spanNum3"
              :key="item.id"
              @click="addClass3(index)"
            >
              {{ item.num }}
            </span>
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
          <div class="status-success">
            <h3>开机</h3>
          </div>
        </div>
        <div class="detail">
          <div class="detail-wrapper-down">
            <div class="mot-left">
              <p>颚破J8389321</p>
              <img src="../../assets/right-side/online/mud.png" />
            </div>
            <div class="mot-right">
              <dl>
                <dt class="large">245</dt>
                <span>&nbsp;&nbsp;A</span>
                <dd>当前电流</dd>
              </dl>
              <dl>
                <dt>100</dt>
                <span>&nbsp;&nbsp;%</span>
                <dd>当前负载</dd>
              </dl>
              <dl>
                <dt>24.59</dt>
                <span>&nbsp;&nbsp;h</span>
                <dd>正常运行时长</dd>
              </dl>
              <dl>
                <dt class="large">22.58</dt>
                <span>&nbsp;&nbsp;Kwh</span>
                <dd>当日运行时长</dd>
              </dl>
            </div>
          </div>
        </div>
        <div class="charts" id="charts1">
          <div class="charts-up">
            <dl>
              <dt>156</dt>
              <span>&nbsp;&nbsp;Kwh</span>
              <dd>当日能耗</dd>
            </dl>
            <dl>
              <dt class="large">22.33</dt>
              <span>&nbsp;&nbsp;%</span>
              <dd>日同比</dd>
            </dl>
            <dl>
              <span>&nbsp;￥</span>
              <dt>999.99</dt>
              <dd>当日电费</dd>
            </dl>
          </div>
          <div class="charts-down">
            <div id="charts-8"></div>
          </div>
        </div>
      </div>
      <div class="ver-axle">
        <div class="axle-index">
          <dl class="star-title">
            <dt>颚破</dt>
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
          <div class="status-stop">
            <h3>停机</h3>
          </div>
        </div>
        <div class="detail">
          <div class="detail-wrapper-down">
            <div class="mot-left">
              <p>颚破J8389321</p>
              <img src="../../assets/right-side/online/jaw-crusher.png" />
            </div>
            <div class="mot-right">
              <dl>
                <dt class="large">245</dt>
                <span>&nbsp;&nbsp;A</span>
                <dd>当前电流</dd>
              </dl>
              <dl>
                <dt>100</dt>
                <span>&nbsp;&nbsp;%</span>
                <dd>当前负载</dd>
              </dl>
              <dl>
                <dt>24.59</dt>
                <span>&nbsp;&nbsp;h</span>
                <dd>正常运行时长</dd>
              </dl>
              <dl>
                <dt class="large">22.58</dt>
                <span>&nbsp;&nbsp;Kwh</span>
                <dd>当日运行时长</dd>
              </dl>
            </div>
          </div>
        </div>
        <div class="charts">
          <div class="charts-up">
            <dl>
              <dt>23.1</dt>
              <span>&nbsp;&nbsp;%</span>
              <dd>日同比</dd>
            </dl>
            <dl>
              <dt class="large">2348</dt>
              <span>&nbsp;&nbsp;Hz</span>
              <dd>当前频率</dd>
            </dl>
            <dl>
              <dt>18</dt>
              <span>&nbsp;%</span>
              <dd>当前负载</dd>
            </dl>
          </div>
          <div class="charts-down">
            <div id="charts-9"></div>
          </div>
        </div>
      </div>
    </div>
    <!-- 中部结束 -->
    <div class="online-down">
      <div class="online-charts" id="down-charts1">
        <p>料堆</p>
        <div class="storage-wrapper">
          <!-- 下面左下两个进度条 -->
          <div class="storage-progress">
            <div class="material">
              <span>料堆A</span>
              <a-progress
                :stroke-color="{
                  '0%': '#c36500',
                  '100%': '#ffcb74',
                }"
                :strokeWidth="25"
                class="storage-progress-1"
                :percent="50"
                status="active"
              />
            </div>
            <div class="material">
              <span>料堆B</span>
              <a-progress
                :stroke-color="{
                  '0%': '#108ee9',
                  '100%': '#87d068',
                }"
                :strokeWidth="25"
                class="storage-progress-1"
                :percent="50"
                status="active"
              />
            </div>
          </div>
          <!-- 左下饼图 -->
          <div class="storage-progress">
            <div id="material-pile"></div>
          </div>
        </div>
      </div>

      <div class="online-charts" id="down-charts2">
        <p>储水罐</p>
        <div class="storage-wrapper">
          <div class="storage-progress">
            <div class="material">
              <span class="material-title">储水罐A</span>
              <a-progress
                :stroke-color="{
                  '0%': '#FF5ECC',
                  '100%': '#FFDD97',
                }"
                :strokeWidth="20"
                class="storage-progress-1"
                :percent="50"
                status="active"
              />
            </div>
            <div class="material">
              <span class="material-title">储水罐B</span>
              <a-progress
                :stroke-color="{
                  '0%': '#0B0090',
                  '100%': '#556ACD',
                }"
                :strokeWidth="20"
                class="storage-progress-1"
                :percent="50"
                status="active"
              />
            </div>
            <div class="material">
              <span class="material-title">储水罐C</span>
              <a-progress
                :stroke-color="{
                  '0%': '#0006B5',
                  '100%': '#0090FF',
                }"
                :strokeWidth="20"
                class="storage-progress-1"
                :percent="50"
                status="active"
              />
            </div>
          </div>
          <div id="material-pile2"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import highCharts from 'highcharts'
import { Progress } from 'ant-design-vue'
import apis from './apis'
import { myMixin } from '../../mixins/onlineCharts'
export default {
  mixins: [myMixin],
  data () {
    return {
      clickFlag: true,
      current1: 0, // 默认哪个有类名
      current2: 0,
      current3: 0,
      // 又要有id,又不能dom同级别渲染同一数组，不要报错只能三个数组咯
      spanNum: [
        {
          id: Math.floor(Math.random() * (10000 - 1) + 1),
          num: 1
        },
        {
          id: Math.floor(Math.random() * (99999 - 1) + 1),
          num: 2
        },
        {
          id: Math.floor(Math.random() * (88888 - 1) + 1),
          num: 3
        }
      ],
      spanNum2: [
        {
          id: Math.floor(Math.random() * (10000 - 1) + 1),
          num: 1
        },
        {
          id: Math.floor(Math.random() * (99999 - 1) + 1),
          num: 2
        },
        {
          id: Math.floor(Math.random() * (88888 - 1) + 1),
          num: 3
        }
      ],
      spanNum3: [
        {
          id: Math.floor(Math.random() * (10000 - 1) + 1),
          num: 1
        },
        {
          id: Math.floor(Math.random() * (99999 - 1) + 1),
          num: 2
        },
        {
          id: Math.floor(Math.random() * (88888 - 1) + 1),
          num: 3
        }
      ],
      monmonup: [],
      // prgressWidth1: "0.2rem",
      // btn文字
      msg: '开机',
      // btn背景色
      BtnColorChange: {},
      // 设备背景色
      backgroundColorChange: {
        err:
          'linear-gradient(180deg,rgba(199, 0, 0, 0.3) 0%,rgba(255, 130, 130, 0.3) 100%)',
        success:
          'linear-gradient(180deg,rgba(141, 141, 141, 0.3) 0%,rgba(225, 225, 225, 0.3) 100%)',
        stop:
          'linear-gradient(180deg,#413125 0%,rgba(255, 193, 143, 0.3) 100%)'
      },
      // 5个prigress
      pipeChange: {
        // 89 - 100
        high:
          'linear-gradient(270deg,rgba(27, 255, 0, 0.3) 0%,rgba(2, 195, 0, 0.15) 100%)',
        // 58 - 88
        middle: 'linear-gradient(270deg, #00B4FF 0%, #43D6FD 100%)',
        // 44 - 57
        low: 'linear-gradient(270deg, #ED1414 0%, #960000 100%)',
        // 0 - 43
        bad: 'linear-gradient(270deg, #9A9A9A 0%, #7C7C7C 100%)',
        // 下面百分比
        childrenHeight1: '97',
        childrenHeight2: '88',
        childrenHeight3: '57',
        childrenHeight4: '43',
        childrenHeight5: '67'
      },
      // 临时饼图数据
      pieOptions: {
        leftPie: [
          {
            name: '料堆A',
            y: 37,
            sliced: true
          },
          {
            name: '料堆B',
            y: 63
          }
        ],
        rightPie: [
          {
            name: '储水罐A',
            y: 20,
            sliced: true
          },
          {
            name: '储水罐B',
            y: 30
          },
          {
            name: '储水罐C',
            y: 50
          }
        ]
      }
    }
  },
  computed: {},
  created () {
    for (var i = 0; i < 24; i++) {
      this.monmonup.push(i + 1)
    }
  },
  mounted () {
    setTimeout(() => {
      this.initCol('charts-1', this.pieOptions.left) // 柱状1
      this.initCol('charts-2', this.pieOptions.left) // 柱状1
      this.initCol('charts-3', this.pieOptions.left) // 柱状1
      this.initCol('charts-4', this.pieOptions.left) // 柱状1
      this.initCol('charts-5', this.pieOptions.left) // 柱状1
      this.initCol('charts-6', this.pieOptions.left) // 柱状1
      this.initCol('charts-7', this.pieOptions.left) // 柱状1
      this.initCol('charts-8', this.pieOptions.left) // 柱状1
      this.initCol('charts-9', this.pieOptions.left) // 柱状1
      this.initLeftPie('material-pile', this.pieOptions.leftPie) // 左下饼图
      this.initLeftPie('material-pile2', this.pieOptions.rightPie) // 右下饼图
    }, 200)
  },
  methods: {
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
    // 上方柱状开始
    initCol (id, options, datas) {
      options = {
        chart: {
          type: 'column',
          plotBackgroundColor: 'transparent',
          backgroundColor: 'rgba(0,0,0,0)',
          animation: {
            duration: 3000,
            easing: 'easeOutBounce'
          }
        },
        legend: false,
        yAxis: {
          title: null,
          min: 0,
          style: {
            color: '#fff'
          },
          labels: {
            formatter: function () {
              if (this.value <= 30) {
                return this.value + ''
              } else if (this.value > 60 && this.value <= 100) {
                return this.value + ''
              } else {
                return this.value + ''
              }
            },
            style: {
              color: '#fff',
              fontFamily: '微软雅黑'
            }
          },
          minorGridLineWidth: 0,
          minorTickInterval: 'auto',
          minorTickColor: '#fff',
          minorTickWidth: 1,
          //  gridLineWidth: 1,
          // gridLineColor: "#fff",
          // 中间线
          gridLineWidth: 0.5,
          gridLineColor: '#fff'
        },
        xAxis: {
          categories: this.monmonup,
          // crosshair: true,
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
        title: null,
        tooltip: {
          shared: true,
          useHTML: true
        },
        plotOptions: {
          column: {
            borderWidth: 0
          },
          series: {
            // colorByPoint: true
          }
        },
        style: {
          fontSize: '.14rem',
          color: '#fff'
        },
        credits: {
          enabled: false // 禁用版权信息，广告
        },
        series: [
          {
            name: '顺8级带(砂)',
            color: 'rgba(0,169,255,.6)',
            data: [
              10,
              40,
              60,
              20,
              50,
              10,
              40,
              60,
              20,
              50,
              10,
              40,
              60,
              20,
              50,
              10,
              40,
              60,
              20,
              50,
              10,
              40,
              60,
              20
            ]
          }
        ]
      }
      const air = new highCharts.chart(id, options)
    },
    //
    //
    //
    // 左下饼图
    initLeftPie (id, datas, options) {
      options = {
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
          pointFormat: '{point.name}: <b>{point.percentage:.1f}%</b>',
          style: {
            fontSize: '.1rem',
            color: 'rgba(0,0,0,.8)'
          }
        },
        labels: {
          style: {
            color: '#fff',
            fontSize: '.14rem',
            fontWeight: 'bold',
            fontFamily: '微软雅黑'
          }
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            depth: 55,
            dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b>: {point.percentage:f}%',
              style: {
                // 旁边的字体色
                color: '#fff',
                fontSize: '10px',
                fontFamily: '微软雅黑'
              }
            }
          }
        },
        credits: {
          enabled: false // 禁用版权信息，广告
        },
        // innerSize: "30",
        series: [
          {
            // colorByPoint: true,
            size: '100%',
            // innerSize: datas.length > 2 ? "70%" : "40%",
            data: datas
          }
        ]
      }
      var colors = [
        'rgba(255,221,151,.6)',
        'rgba(85,106,205,.6)',
        'rgba(0,144,255,.9)'
      ]
      this.$highcharts.getOptions().colors = this.$highcharts.map(
        colors,
        function (color) {
          return {
            linearGradient: { x1: 0, x2: 0, y1: 1, y2: 0 },
            stops: [
              [0, color],
              [1, colors]
            ]
          }
        }
      )
      if (datas.length == 2) {
        // console.log(datas.length);
        this.$highcharts.getOptions().colors[0].stops[0][1] =
          'rgba(255,203,116,.6)'
        this.$highcharts.getOptions().colors[0].stops[1][1] =
          'rgba(195,101,0,.6)'
        // 数据2
        this.$highcharts.getOptions().colors[1].stops[0][1] =
          'rgba(159,227,93,.6)'
        this.$highcharts.getOptions().colors[1].stops[1][1] =
          'rgba(0,137,255,.6)'
      } else if (datas.length == 3) {
      }
      // init
      var fir = new highCharts.chart(id, options)
      // console.log(fir)
    }
    // linear变色
    // changeColor(chart, colorUp1, colorDown1) {
    // if (chart.series[0].processedYData.length == 2) {
    // 饼图1
    // 数据1
    // this.$highcharts.getOptions().colors[0].stops[0][1] =
    //     "rgba(195,101,0,.6)";
    //   this.$highcharts.getOptions().colors[0].stops[1][1] =
    //     "rgba(255,203,116,.6)";
    // 数据2
    //   this.$highcharts.getOptions().colors[1].stops[0][1] =
    //     "rgba(0,137,255,.6)";
    //   this.$highcharts.getOptions().colors[1].stops[1][1] =
    //     "rgba(159,227,93,.6)";
    // } else if (chart.series[0].processedYData.length == 3) {
    //   //饼图2
    // console.log( this.$highcharts.getOptions());
    //   //数据1
    //   this.$highcharts.getOptions().colors[0].stops[0][1] =
    //     // "rgba(255,94,204,.6)";
    //   this.$highcharts.getOptions().colors[0].stops[1][1] =
    //     "rgba(255,221,151,.6)";
    //   //数据2
    //   this.$highcharts.getOptions().colors[1].stops[0][1] =
    //     "rgba(11,0,144,.6)";
    //   this.$highcharts.getOptions().colors[1].stops[1][1] =
    //     "rgba(85,106,205,.6)";
    //   //数据3
    //   // this.$highcharts.getOptions().colors[2].stops[0][1] =
    //   //   "rgba(0,6,181,.6)";
    //   // this.$highcharts.getOptions().colors[2].stops[1][1] =
    //   //   "rgba(0,144,255,.6)";
    // }
    // console.log(this.$highcharts.getOptions().colors[1].stops[0][1]);
    // console.log(this.$highcharts.getOptions().colors[1].stops[1][1]);
    // },
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
.container-online {
  // position: relative;
  border: 1px solid transparent;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, #1e3259 0%, #1e3f82 100%);
  .online-up {
    width: 100%;
    height: 3.88rem;
    margin-top: 0.07rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 0.05rem;
    .facility {
      width: 3.2rem;
      // width: 2.55rem;
      height: 100%;
      background: linear-gradient(
        180deg,
        rgba(141, 141, 141, 0.3) 0%,
        rgba(225, 225, 225, 0.3) 100%
      );
      border-radius: 6px;
      .progress {
        position: relative;
        // width: 100%;
        height: 0.4rem;
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
        background: linear-gradient(
          180deg,
          rgba(0, 0, 0, 0.3) 0%,
          rgba(0, 0, 0, 0.15) 99%
        );
        border-radius: 6px 6px 0px 0px;
        .title {
          position: absolute;
          top: 0.08rem;
          left: 0.1rem;
          width: 1.62rem;
          height: 0.25rem;
          font-size: 0.18rem;
          font-family: PingFangSC-Semibold, PingFang SC;
          font-weight: 600;
          color: #ffffff;
          line-height: 0.25rem;
          transition: all 0.3s;
          &:hover {
            transform: translateX(-0.1rem);
            color: #00b4ff;
          }
        }
        .percentage {
          position: absolute;
          top: 0.07rem;
          right: 0.1rem;
          height: 0.28rem;
          font-size: 0.24rem;
          font-family: DINAlternate-Bold, DINAlternate;
          font-weight: bold;
          color: #ffffff;
          line-height: 0.28rem;
          transition: all 0.3s;
          &:hover {
            transform: translateX(-0.1rem);
            color: #00b4ff;
          }
        }
        .children {
          width: 0%;
          height: 0.4rem;

          border-top-left-radius: 6px;
          border-top-right-radius: 6px;
          background: linear-gradient(
            270deg,
            rgba(27, 255, 0, 0.3) 0%,
            rgba(2, 195, 0, 0.15) 100%
          );
        }
      }
      .detail {
        width: 100%;
        height: 35%;
        background: linear-gradient(
          180deg,
          rgba(141, 141, 141, 0.3) 0%,
          rgba(225, 225, 225, 0.3) 100%
        );
        .wrapper-down {
          width: 100%;
          height: 100%;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-content: space-around;
          flex-flow: wrap;
          padding-top: 0.04rem;
          & > dl {
            // border: 1px solid;
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
              height: 0.17rem;
              font-size: 0.14rem;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              color: #ffffff;
              line-height: 0.17rem;
              display: inline-block;
              transition: all 0.3s;
              margin: 0 auto;
            }
            & > dd {
              width: 0.8rem;
              height: 0.17rem;
              font-size: 0.08rem;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 600;
              color: rgba(0, 0, 0, 0.5);
              line-height: 0.17rem;
              letter-spacing: 0.01rem;
              margin: 0 auto;
            }
            & > span {
              display: inline-block;
              font-size: 0.02rem;
              margin-left:0.05rem;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              color: #ffffff;
              line-height: 0.17rem;
            }
          }
        }
      }
      .charts {
        width: 100%;
        height: 1.3rem;
        background: linear-gradient(
          180deg,
          rgba(0, 0, 0, 0.5) 0%,
          rgba(0, 0, 0, 0.3) 100%
        );
        #charts-1 {
          width: 98%;
          height: 97%;
          transform: translateX(-0.03rem);
        }
        p {
          transform: translateY(-0.15rem);
          font-size: 0.12rem;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.5);
          line-height: 0.17rem;
          text-align: center;
        }
        #charts-2 {
          width: 98%;
          height: 97%;
          transform: translateX(-0.03rem);
        }
        #charts-3 {
          width: 98%;
          height: 97%;
          transform: translateX(-0.03rem);
        }
        #charts-4 {
          width: 98%;
          height: 97%;
          transform: translateX(-0.03rem);
        }
        #charts-5 {
          width: 98%;
          height: 97%;
          transform: translateX(-0.03rem);
        }
      }
      .down {
        width: 100%;
        height: 0.63rem;
        .down-detail {
          margin-top: 0.12rem;
          font-size: 0.12rem;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #ffffff;
          line-height: 17px;
          text-align: center;
        }
        .down-progress {
          transform: scale(0.89);
        }
        .progress-detail {
          width: 100%;
          display: flex;
          justify-content: space-around;
          align-items: center;
          span {
            font-size: 0.12rem;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #ffffff;
            line-height: 0.17rem;
          }
        }
      }
    }
  }
  //中部开始
  .online-center {
    width: 100%;
    height: 3.66rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 0.05rem;
    .ver-axle {
      width: 4.08rem;
      height: 100%;
      background: linear-gradient(
        180deg,
        rgba(141, 141, 141, 0.3) 0%,
        rgba(225, 225, 225, 0.3) 100%
      );
      border-radius: 6px;
      .axle-index {
        position: relative;
        width: 100%;
        height: 0.8rem;
        .status-success {
          position: absolute;
          top: 0.05rem;
          right: 0rem;
          width: 0.56rem;
          height: 0.4rem;
          background: rgba(0, 199, 106, 0.3);
          border-top-left-radius: 0.4rem;
          border-bottom-left-radius: 0.4rem;
          h3 {
            font-size: 0.12rem;
            color: #fff;
            padding-left: 0.26rem;
            line-height: 0.43rem;
          }
        }
        .status-stop {
          position: absolute;
          top: 0.05rem;
          right: 0rem;
          width: 0.56rem;
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
            line-height: 0.43rem;
          }
        }
        .status-err {
          position: absolute;
          top: 0.05rem;
          right: 0rem;
          width: 0.56rem;
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
            line-height: 0.43rem;
          }
        }
        .star-title {
          width: 100%;
          height: 0.6rem;
          background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.3) 0%,
            rgba(0, 0, 0, 0.15) 99%
          );
          border-radius: 6px 6px 0px 0px;
          dt {
            display: inline-block;
            height: 0.3rem;
            font-size: 0.14rem;
            font-family: PingFangSC-Semibold, PingFang SC;
            font-weight: 600;
            color: #ffffff;
            line-height: 0.2rem;
            padding: 0 0.1rem;
            line-height: 0.3rem;
          }
          .change {
            display: inline-block;
            height: 0.3rem;
            font-size: 0.14rem;
            font-family: PingFangSC-Semibold, PingFang SC;
            font-weight: 600;
            color: #ffffff;
            line-height: 0.2rem;
            padding: 0 0.1rem;
            line-height: 0.3rem;
            margin-left: 0.02rem;
            transition: all .3s;
            &:hover {
              background-color: #00b4ff;
              border-radius: 0.1rem;
              color: #fff;
              cursor: pointer;
            }
          }
          .change-cricle {
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
            transition: all .3s;
            &:hover {
              background-color: #00b4ff;
              border-radius: 50%;
              color: #fff;
              cursor: pointer;
            }
          }
          .active-cricle {
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
            background-color: #00b4ff;
            border-radius: 50%;
            color: #fff;
            cursor: pointer;
            transition: all .3s;
          }
          dd {
            margin-left: 0.04rem;
            .title {
              display: inline-block;
              height: 0.17rem;
              font-size: 0.12rem;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              color: #ffffff;
              line-height: 0.17rem;
              text-align: start;
              padding-right: 0.05rem;
            }
            .axle-rate {
              font-size: 0.09rem;
              margin-right: 0.05rem;
            }
            .num {
              // width: 23px;
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
      }
      .detail {
        .detail-wrapper-down {
          width: 100%;
          height: 1.57rem;
          display: flex;
          justify-content: space-around;
          align-content: center;
          flex-flow: no-wrap;
          padding-top: 0.04rem;
          margin-top: -0.22rem;

          .mot-left {
            display: flex;
            justify-content: space-around;
            align-content: center;
            flex-flow: wrap;
            width: 60%;
            height: 100%;
            p {
              width: 1rem;
              height: 0.2rem;
              font-size: 0.12rem;
              margin: 0 auto;
              text-align: center;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              color: #ffffff;
              line-height: 0.2rem;
              background: rgba(0, 0, 0, 0.3);
              border-radius: 0.13rem;
              margin-bottom: 0.1rem;
            }
            img {
              width: 1.12rem;
              height: 0.84rem;
              margin: 0 auto;
              display: inline-block;
            }
          }
          .mot-right {
            display: flex;
            justify-content: space-around;
            align-content: center;
            flex-flow: wrap;
            & > dl {
              text-align: center;
              width: 50%;
              & > dt {
                display: inline-block;
                height: 0.28rem;
                font-size: 0.14rem;
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
                font-weight: 500;
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
      }
      .charts {
        width: 100%;
        height: 1.51rem;
        background: linear-gradient(
          180deg,
          rgba(0, 0, 0, 0.5) 0%,
          rgba(0, 0, 0, 0.3) 100%
        );
        border-radius: 0 0 6px 6px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
        .charts-up {
          width: 100%;
          height: 30%;
          display: flex;
          justify-content: space-around;
          align-items: center;
          & > dl {
            width: 30%;
            height: 98%;
            padding: 0;
            margin: 0;
            text-align: center;
            &:hover dt {
              color: #00b4ff;
            }
            & > dt {
              display: inline-block;
              height: 0.28rem;
              font-size: 0.14rem;
              font-family: DINAlternate-Bold, DINAlternate;
              font-weight: 600;
              color: #ffffff;
              line-height: 0.28rem;
              transition: all 0.3s;
            }
            & > dd {
              font-size: 0.12rem;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              color: rgba(255, 255, 255, 0.5);
              line-height: 0.17rem;
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
        .charts-down {
          width: 100%;
          height: 76%;
          // border: 1px solid orange;
          #charts-6 {
            width: 100%;
            height: 100%;
          }
          #charts-7 {
            width: 100%;
            height: 100%;
          }
          #charts-8 {
            width: 100%;
            height: 100%;
          }
          #charts-9 {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
  .online-down {
    width: 100%;
    height: 1.6rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .online-charts {
      width: 7.69rem;
      height: 100%;
      background: rgba(0, 0, 0, 0.2);
      border-radius: 6px;
      p {
        height: 0.2rem;
        font-size: 0.14rem;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #00b4ff;
        line-height: 0.2rem;
        padding: 0.02rem 0 0 0.2rem;
      }
      .storage-wrapper {
        width: 100%;
        height: calc(100% - 0.33rem);
        // border: 1px solid;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .storage-progress {
          width: 45%;
          height: 100%;
          .material {
            margin: 0.2rem 0;
            span {
              height: 0.2rem;
              font-size: 0.14rem;
              font-family: PingFangSC-Semibold, PingFang SC;
              font-weight: 600;
              color: #ffffff;
              line-height: 0.2rem;
              padding-right: 0.2rem;
            }
            .storage-progress-1 {
              width: 70%;
              height: 0.4rem;
            }
          }
          #material-pile {
            width: 100%;
            height: 100%;
            transform: scale(1.5) translateX(-0.12rem) translateY(-0.1rem);
            transition: all 0.3s;
            &:hover {
              // transform: scale(1.7) translateY(-.3rem);
            }
          }
        }
      }
    }
    #down-charts2 {
      width: 7.69rem;
      height: 100%;
      background: rgba(0, 0, 0, 0.2);
      border-radius: 6px;
      p {
        height: 0.2rem;
        font-size: 0.14rem;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #00b4ff;
        line-height: 0.2rem;
        padding: 0.02rem 0 0 0.2rem;
      }
      .storage-wrapper {
        width: 100%;
        height: calc(100% - 0.33rem);
        display: flex;
        justify-content: space-around;
        align-items: center;
        .storage-progress {
          width: 45%;
          height: 100%;
          margin-bottom: 0.2rem;
          display: flex;
          justify-content: space-around;
          align-items: center;
          flex-wrap: wrap;
          .material {
            width: 100%;
            height: 1%;
            display: flex;
            justify-content: space-around;
            align-items: center;
            flex-wrap: wrap;

            // margin: 0.2rem 0;
            span {
              height: 0.2rem;
              font-size: 0.14rem;
              font-family: PingFangSC-Semibold, PingFang SC;
              font-weight: 600;
              color: #ffffff;
              line-height: 0.2rem;
              padding-right: 0.2rem;
            }
            .material-title {
              margin-bottom: 0.16rem;
            }
            .storage-progress-1 {
              width: 70%;
              height: 0.4rem;
            }
          }
        }
        #material-pile2 {
          width: 50%;
          height: 100%;
          transform: scale(1.4) translateX(0rem) translateY(-0.05rem);
          &:hover {
            // transform: scale(1.7) translateY(-.3rem);
          }
        }
      }
    }
  }
}
</style>
