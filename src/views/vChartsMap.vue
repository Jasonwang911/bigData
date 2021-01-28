<template>
  <div class="box">
    <ve-bmap :settings="chartSettings" :title="title" height="100%"></ve-bmap>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: {
        text: 'MES销售数据地图统计',
        subtext: '销售额统计图',
        sublink: 'http://www.baidu.com',
        left: 'center',
        top: '3%'
      },
      chartSettings: {
        key: 'N37nSvNDvtA2YlkbrzInd99H8Qu2Wub4',
        bmap: {
          center: [116.36645, 39.778213],
          zoom: 17,
          roam: true,
          mapStyle: {
            styleJson: [{
              featureType: 'water',
              elementType: 'all',
              stylers: {
                color: '#d1d1d1'
              }
            }, {
              featureType: 'land',
              elementType: 'all',
              stylers: {
                color: '#f3f3f3'
              }
            }, {
              featureType: 'railway',
              elementType: 'all',
              stylers: {
                visibility: 'off'
              }
            }, {
              featureType: 'highway',
              elementType: 'all',
              stylers: {
                color: '#fdfdfd'
              }
            }, {
              featureType: 'highway',
              elementType: 'labels',
              stylers: {
                visibility: 'off'
              }
            }, {
              featureType: 'arterial',
              elementType: 'geometry',
              stylers: {
                color: '#fefefe'
              }
            }, {
              featureType: 'arterial',
              elementType: 'geometry.fill',
              stylers: {
                color: '#fefefe'
              }
            }, {
              featureType: 'poi',
              elementType: 'all',
              stylers: {
                visibility: 'off'
              }
            }, {
              featureType: 'green',
              elementType: 'all',
              stylers: {
                visibility: 'off'
              }
            }, {
              featureType: 'subway',
              elementType: 'all',
              stylers: {
                visibility: 'off'
              }
            }, {
              featureType: 'manmade',
              elementType: 'all',
              stylers: {
                color: '#d1d1d1'
              }
            }, {
              featureType: 'local',
              elementType: 'all',
              stylers: {
                color: '#d1d1d1'
              }
            }, {
              featureType: 'arterial',
              elementType: 'labels',
              stylers: {
                visibility: 'off'
              }
            }, {
              featureType: 'boundary',
              elementType: 'all',
              stylers: {
                color: '#fefefe'
              }
            }, {
              featureType: 'building',
              elementType: 'all',
              stylers: {
                color: '#d1d1d1'
              }
            }, {
              featureType: 'label',
              elementType: 'labels.text.fill',
              stylers: {
                color: '#999999'
              }
            }]
          }
        }
      },
      chartData: {
        columns: ['位置', '税收'],
        rows: [
          {
            位置: '北京',
            税收: 123
          },
          {
            位置: '上海',
            税收: 123
          }
        ]
      }
    }
  },
  components: {},
  computed: {},
  methods: {}
}
</script>

<style lang='scss' scoped>
.box{
  width: 100vw;
  height: 100vh;
}
</style>
