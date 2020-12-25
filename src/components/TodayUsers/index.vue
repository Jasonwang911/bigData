<template>
  <common-card
  title="今日交易用户数"
  value="81,875" >
    <template>
      <div ref="today-users-chart" style="width:100%;height:100%;"></div>
    </template>
    <template v-slot:footer>
      <span class="footer-title">退货率 </span>
      <span class="emphasis">5.14%</span>
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
    const chartDom = this.$refs['today-users-chart']
    const chart = this.$echarts.init(chartDom)
    chart.setOption({
      color: ['#3392DB'],
      xAxis: {
        type: 'category',
        data: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00'],
        show: false
      },
      yAxis: {
        show: false
      },
      series: [{
        type: 'bar',
        data: [410, 82, 200, 240, 152, 187, 384, 452, 256, 540, 454, 444],
        barWidth: '60%'
      }],
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
</style>
