<template>
  <common-card
  title="累计销售额"
  value="￥ 32,093,165">
    <template>
      <div class="compare-wrapper">
        <div class="compare">
          <span>日同比</span>
          <span class="emphasis">7.33%</span>
          <div class="increase"></div>
        </div>
        <div class="compare">
          <span>月同比</span>
          <span class="emphasis">7.33%</span>
          <div class="decrease"></div>
        </div>
      </div>
    </template>
    <template v-slot:footer>
      <span class="footer-title">昨日销售额 </span>
      <span class="emphasis">￥ 30,000,000</span>
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
  computed: {},
  methods: {}
}
</script>

<style lang='scss' scoped>
.compare-wrapper{
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .compare{
    margin-top: 3px;
    font-size: 12px;
    display: flex;
    align-items: center;
  }
}

.footer-title{
  font-size: 12px;
}
</style>
