<template>
  <div class="weather" :style="{'background-image': `url(${imgs})`}">
    <div class="content"> 
      <div class="gl">公<br/>历</div>
      <div class="date">
        <p class="year">{{ year }}</p>
        {{ date }}
      </div>
      <div class="icon">
        <i :class="icon"></i>
      </div>
      <div class="type">
        <p>
          {{ weather.yesterday.type  || '阴天'}}
          <el-divider direction="vertical"></el-divider>
          {{ weather.yesterday.fx || '南风' }}
        </p>
        <p class="temp">{{ high || '31°' }}/{{ low || '10°' }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import imgs from './img/bg.png'
const typeIcon = {
  '大风': 'dafeng',
  '暴雨': 'baoyu',
  '冰雹': 'bingbao',
  '大雨': 'dayu',
  '风': 'feng',
  '冻雨': 'dongyu',
  '大雪': 'daxue',
  '多云': 'duoyun',
  '沙尘暴': 'shachenbao',
  '雷阵雨': 'leizhenyu',
  '台风': 'taifeng',
  '雾': 'wu',
  '晴天': 'qingtian',
  '龙卷风': 'longjuanfeng',
  '小雪': 'xiaoxue',
  '小雨': 'xiaoyu',
  '阵雨': 'zhenyu',
  '雨夹雪': 'yujiaxue',
  '中雨': 'zhongyu',
  '阴天': 'yintian'
}
export default {
  computed: {
    high() {
      let high = this.weather.yesterday.high
      return high && high.replace('高温 ', '').replace('℃', '°')
    },
    low() {
      let low = this.weather.yesterday.low
      return low && low.replace('低温 ', '').replace('℃', '°')
    },
    icon() {
      let type = this.weather.yesterday.type
      return `sh-icon-${typeIcon[type] || 'yintian'}`
    }
  },
  data() {
    return {
      imgs,
      weather: { yesterday: {} },
      aqi: {},
      year: this.$dayjs().format('YYYY'),
      date: this.$dayjs().format('MM / DD'),
    }
  },
  methods: {
    getWeater() {
      // 新定义一个axios避免请求带token造成跨域
      const instance = axios.create({})
      instance.get(
        'http://wthrcdn.etouch.cn/weather_mini', 
        { params: {city: '广州市', _: this.$dayjs().valueOf()}}
      )
      .then(({ data }) => {
          if (data && data.data) {
            this.weather = data.data
          }
        this.$emit('loaded')
      })
      .catch()
    },
    getAqi(name) {
      this.$get(
        'http://wthrcdn.etouch.cn',
        { id: name },
        data => { },
        error => {
          if (error && error.data) {
            this.aqi = error.data
          }
        }
      )
    },
  },

}
</script>

<style lang="scss" scoped>
.weather {
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: relative;
  font-family: Arial-Regular, Arial;
  border-radius: 4px;
  overflow: hidden;
}
.content {
  position: absolute;
  left: 40%;
  bottom: 40%;
  display: flex;
  margin: 0 0 -30px -180px;
}
.gl {
  width: 24px;
  height: 42px;
  background: #58A5FE;
  border-radius: 11px 11px 11px 11px;
  color: #FFFFFF;
  text-align: center;
  font-size: 12px;
  padding-top: 5px;
}
.date {
  font-size: 24px;
  margin-left: 10px;
  .year {
    font-size: 16px;
  }
}
.icon {
  font-size: 50px;
  margin-left: 30px;
  i {
    color: #76798E;
  }
}
.type{
  margin-left: 10px;
  font-size: 12px;
  .el-divider--vertical{
    margin: 0
  }
  p {
    text-align: right;
  }
  .temp {
    font-size: 30px;
  }
}
</style>