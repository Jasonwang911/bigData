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
              type: 'group',
              position: endPoint,
              children: [{
                type: 'path',
                shape: {
                  d: 'M1024 255.996 511.971 767.909 0 255.996 1024 255.996z',
                  x: -5,
                  y: -20,
                  width: 10,
                  height: 10,
                  layout: 'cover'
                },
                style: {
                  fill: '#45c946'
                }
              }, {
                type: 'path',
                shape: {
                  d: 'M0 767.909l512.029-511.913L1024 767.909 0 767.909z',
                  x: -5,
                  y: 10,
                  width: 10,
                  height: 10,
                  layout: 'cover'
                },
                style: {
                  fill: '#45c946'
                }
              }]
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
