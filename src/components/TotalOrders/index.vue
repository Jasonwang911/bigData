<template>
  <common-card
  title="累计订单量"
  value="￥ 11,093,165" >
    <template>
      <v-chart :options="getOptions()"></v-chart>
    </template>
    <template v-slot:footer>
      <span class="footer-title">昨日订单量 </span>
      <span class="emphasis">￥ 99,000,000</span>
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
  },
  methods: {
    getOptions () {
      return {
        xAxis: {
          type: 'category',
          show: false,
          boundaryGap: false
        },
        yAxis: {
          show: false
        },
        series: [{
          type: 'line',
          data: [126, 432, 523, 240, 152, 187, 384, 452, 256, 540, 454],
          areaStyle: {
            color: 'purple'
          },
          lineStyle: {
            opacity: 0
          },
          itemStyle: {
            opacity: 0
          },
          smooth: true
        }],
        grid: {
          top: 0,
          right: 0,
          left: 0,
          bottom: 0
        }
      }
    }
  }
}
</script>

<style lang='scss' scoped>
</style>
