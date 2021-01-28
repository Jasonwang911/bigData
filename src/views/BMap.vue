<template>
  <div>
    <v-chart :options="options" :autoresize="true" />
  </div>
</template>

<script>
import 'echarts/extension/bmap/bmap'

export default {
  data () {
    return {
      options: {}
    }
  },
  mounted () {
    const testPoint = [
      {
        name: '北京义利面包',
        value: [116.364213, 39.780182, 20]
      },
      {
        name: '西红门派出所',
        value: [116.359596, 39.780265, 90]
      },
      {
        name: '人民公安大学',
        value: [116.373457, 39.771538, 115]
      }
    ]
    const testPoint2 = [
      {
        name: '星光数据中心',
        value: [116.369531, 39.779315, 250]
      },
      {
        name: '瑞幸咖啡',
        value: [116.365395, 39.778525, 150]
      }
    ]
    this.options = {
      title: {
        text: 'MES销售数据地图统计',
        subtext: '销售额统计图',
        sublink: 'http://www.baidu.com',
        left: 'center',
        top: '3%'
      },
      tooltip: {},
      series: [
        {
          name: '销售额',
          type: 'scatter', // 类型： 散点图
          coordinateSystem: 'bmap',
          data: testPoint,
          encode: {
            value: 2
          },
          itemStyle: {
            color: 'purple'
          },
          symbolSize: function (value) {
            return value[2] / 2
          },
          label: {
            show: false,
            position: 'right',
            // formatter: '{b}',
            formatter: function (v) {
              const { data: { name } } = v
              return name
            }
          },
          emphasis: {
            label: {
              show: true
            }
          }
        },
        {
          name: 'TOP 2',
          type: 'effectScatter', // 强调展示
          coordinateSystem: 'bmap',
          data: testPoint2,
          encode: {
            value: 2
          },
          itemStyle: {
            color: 'purple',
            shadowBlur: 10,
            shadowColor: '#333'
          },
          symbolSize: function (value) {
            return value[2] / 3
          },
          label: {
            show: false,
            position: 'right',
            // formatter: '{b}',
            formatter: function (v) {
              const { data: { name } } = v
              return name
            }
          },
          emphasis: {
            label: {
              show: true
            }
          },
          hoverAnimation: true,
          rippleEffect: {
            brushType: 'stroke' // 空心波纹
          }
        }
      ],
      bmap: {
        key: 'N37nSvNDvtA2YlkbrzInd99H8Qu2Wub4',
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
    }
  }
}
</script>

<style lang='scss' scoped>
.echarts{
  width: 100vw;
  height: 100vh;
}
</style>
