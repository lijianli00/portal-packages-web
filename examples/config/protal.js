import { WeatherBox } from 'portal-packages'
import DddBox from './ddd.vue'

export const gardList = [
  {
    name: '天气',
    children: [
      { w: 8, h: 4, type: 'Weather', name: '天气', attrs: {} },
      { w: 8, h: 4, type: 'Ddd', name: '测试', attrs: { dd: 222 } }
    ]
  }
]

export const gardComponents = {
  Weather: WeatherBox,
  Ddd: DddBox
}
