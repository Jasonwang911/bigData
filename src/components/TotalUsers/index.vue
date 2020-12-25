<template>
  <common-card
  title="累计用户数"
  value="1181,875" >
    <template>
      <div ref="total-users-chart" style="width:100%;height:100%;"></div>
    </template>
    <template v-slot:footer>
      <div class="total-user-footer">
        <span class="footer-title">日同比 </span>
        <span class="emphasis">8.73%</span>
        <div class="decrease"></div>
        <span class="footer-title mounth">月同比 </span>
        <span class="emphasis">5.91%</span>
        <div class="increase"></div>
      </div>
    </template>
  </common-card>
</template>

<script>
import commonCardMixin from '@/mixins/commonCardMixin'

export default {
  mixins: [commonCardMixin],
  data () {
    return {}
  },
  mounted () {
    const chartDom = this.$refs['total-users-chart']
    const chart = this.$echarts.init(chartDom)
    chart.setOption({
      color: ['#3392DB'],
      xAxis: {
        type: 'value',
        show: false
      },
      yAxis: {
        type: 'category',
        show: false
      },
      series: [
        {
          type: 'bar',
          stack: '总量',
          data: [500],
          barWidth: '10px',
          itemStyle: {
            color: '#45c946'
          }
        },
        {
          type: 'bar',
          stack: '总量',
          data: [5000],
          itemStyle: {
            color: '#eee'
          }
        },
        {
          type: 'custom',
          data: [500],
          stack: '总量',
          renderItem: (params, api) => {
            console.log(params, api)
            const value = api.value(0)
            const endPoint = api.coord([value, 0])
            return {
              type: 'path',
              position: endPoint,
              shape: {
                d: 'M344.70912 178.8416c0 20.30592-10.14784 38.22592-25.62048 49.03936l0 642.9184c0 18.87232-15.29856 34.17088-34.17088 34.17088-18.87232 0-34.17088-15.29856-34.17088-34.17088L250.74688 227.87072c-15.47264-10.81344-25.62048-28.7232-25.62048-49.03936 0-33.03424 26.7776-59.8016 59.8016-59.8016C317.93152 119.04 344.70912 145.80736 344.70912 178.8416zM346.13248 225.82272c0 88.27904 0 176.54784 0 264.81664 172.20608 63.5904 280.55552-63.5904 452.75136 0 0-88.27904 0-176.54784 0-264.81664C626.688 162.23232 518.33856 289.41312 346.13248 225.82272z',
                x: 0,
                y: 0,
                width: 20,
                height: 20
              },
              style: {
                fill: 'red'
              }
            }
          }
        }
      ],
      grid: {
        top: 0,
        right: 0,
        left: 0,
        bottom: 0
      }
    })
  }
}
</script>

<style lang='scss' scoped>
.total-user-footer{
  display: flex;
  align-items: center;
  .mounth{
    margin-left: 15px;
  }
}
</style>
