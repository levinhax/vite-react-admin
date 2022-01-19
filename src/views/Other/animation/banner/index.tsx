import React, { useState, useEffect } from 'react'
import '../index.less'
import './index.css'

import BannerImg1 from '@/assets/images/other/animation/banner1.jpg'
import BannerImg2 from '@/assets/images/other/animation/banner2.jpg'
import BannerImg3 from '@/assets/images/other/animation/banner3.jpg'
import BannerImg4 from '@/assets/images/other/animation/banner4.jpg'
import BannerImg5 from '@/assets/images/other/animation/banner5.jpg'
import BannerArrowL from '@/assets/images/other/animation/banner-arrow-l.png'
import BannerArrowR from '@/assets/images/other/animation/banner-arrow-r.png'

export interface IAttrConfig {
  width: number
  top: number
  left: number
  [opacity: string]: number
  zIndex: number
}

function Banner() {
  let [bannerConfig, setBannerConfig] = useState<
    Array<{ width: number; top: number; left: number; opacity: number; zIndex: number }>
  >([
    {
      width: 400,
      top: 20,
      left: 50,
      opacity: 60,
      zIndex: 2,
    },
    {
      width: 490,
      top: 70,
      left: 0,
      opacity: 88,
      zIndex: 3,
    },
    {
      width: 600,
      top: 100,
      left: 200,
      opacity: 100,
      zIndex: 4,
    },
    {
      width: 490,
      top: 70,
      left: 510,
      opacity: 80,
      zIndex: 3,
    },
    {
      width: 400,
      top: 20,
      left: 550,
      opacity: 88,
      zIndex: 2,
    },
  ])
  let images: Array<any> = []
  let throttle = true // 可设置节流

  useEffect(() => {
    images = [...document.querySelectorAll('.banner-img')]
    bannerConfig.forEach((attr, index) => {
      if (index < images.length) {
        animate(images[index], attr, () => {
          // console.log('轮播动画')
        })
      }
    })
  })

  // 获取元素原本的属性信息
  const getStyle = (obj: HTMLElement, attr: string) => {
    // return obj.currentStyle ? obj.currentStyle[attr] : window.getComputedStyle(obj, null)[attr] // 只有IE和Opera支持使用CurrentStyle
    return (window as any).getComputedStyle(obj, null)[attr]
  }

  const animate = (obj: any, attrConfig: IAttrConfig, fn: { (): void; (): void; (): any }) => {
    clearInterval(obj.timer)
    // 开启一个定时器
    obj.timer = setInterval(() => {
      let flag = true
      for (let attr in attrConfig) {
        let current = 0
        // 获取元素属性的当前值, 没有则取0
        current =
          attr === 'opacity'
            ? Math.round(parseInt(String(getStyle(obj, attr) * 100))) || 0
            : parseInt(getStyle(obj, attr))
        // 计算一个 "叠加值", (目标值 - 当前值) / 10, 10不是固定, 可根据效果来调整, 就好比控制时间
        let step = (attrConfig[attr] - current) / 10
        // 大于零向上取整, 小于零向下取整
        step = step > 0 ? Math.ceil(step) : Math.floor(step)
        if (attr == 'opacity') {
          // 判断是否支持透明度属性
          if ('opacity' in obj.style) {
            obj.style.opacity = (current + step) / 100
          } else {
            obj.style.filter = 'alpha(opacity = ' + (current + step) * 10 + ')'
          }
        } else if (attr == 'zIndex') {
          obj.style.zIndex = attrConfig[attr]
        } else {
          obj.style[attr] = current + step + 'px' // 不断添加 "叠加值" 让当前值最终等于目标值
        }
        if (current !== Number(attrConfig[attr])) flag = false // 当前值等于目标值, 即可停止定时器
      }
      if (flag) {
        clearInterval(obj.timer)
        // 执行回调
        fn && fn()
      }
    }, 10)
  }

  // 切换
  const changeBanner = (flag: boolean) => {
    if (flag) {
      // bannerConfig.push(bannerConfig.shift())
      const prevBannerConfig = JSON.parse(JSON.stringify(bannerConfig))
      prevBannerConfig.push(prevBannerConfig.shift())
      setBannerConfig(prevBannerConfig)
    } else {
      // bannerConfig.unshift(bannerConfig.pop())
      const prevBannerConfig = JSON.parse(JSON.stringify(bannerConfig))
      prevBannerConfig.unshift(prevBannerConfig.pop())
      setBannerConfig(prevBannerConfig)
    }
    // 重新调整样式
    bannerConfig.forEach((attr, index) => {
      animate(images[index], attr, () => {
        // console.log('轮播动画')
      })
    })
  }

  const change = (flag: boolean) => {
    throttle && changeBanner(flag)
  }

  return (
    <div className="other-animation-wrapper banner-wrapper">
      <div className="banner-content">
        <div className="banner-slide">
          <img src={BannerImg1} alt="banner1" className="banner-img" />
          <img src={BannerImg2} alt="banner2" className="banner-img" />
          <img src={BannerImg3} alt="banner3" className="banner-img" />
          <img src={BannerImg4} alt="banner4" className="banner-img" />
          <img src={BannerImg5} alt="banner5" className="banner-img" />

          <img
            src={BannerArrowL}
            alt="banner-arrow-l"
            className="banner-arrow banner-arrow-l"
            onClick={() => change(false)}
          />
          <img
            src={BannerArrowR}
            alt="banner-arrow-r"
            className="banner-arrow banner-arrow-r"
            onClick={() => change(true)}
          />
        </div>
      </div>
    </div>
  )
}

export default Banner
