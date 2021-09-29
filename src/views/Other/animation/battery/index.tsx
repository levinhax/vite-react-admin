import React from 'react'

import '../index.less'
import './battery.less'

function BatteryAnimation() {
  return (
    <div className="other-animation-wrapper battery-animation-wrapper">
      <h3 className="title">充电动画</h3>
      <div className="content">
        <div className="list-item">
          <div className="battery-container">
            <div className="battery"></div>
          </div>
        </div>

        {/* 增加波浪效果 */}
        <div className="list-item">
          <div className="wave-battery-container">
            <div className="header"></div>
            <div className="battery"></div>
            <div className="battery-copy">
              <div className="g-wave"></div>
              <div className="g-wave"></div>
              <div className="g-wave"></div>
            </div>
          </div>
        </div>

        {/* 模拟安卓充电 */}
        <div className="list-item">
          <div className="g-container">
            <div className="g-number">98.7%</div>
            <div className="g-contrast">
              <div className="g-circle"></div>
              <ul className="g-bubbles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BatteryAnimation
