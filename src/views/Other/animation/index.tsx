import React from 'react'

import Border from '@/components/border'
import CardItem from '@/components/card-item'
import './index.less'

function OtherAnimation() {
  return (
    <div className="other-animation-wrapper">
      <h3 className="title">动画</h3>
      <div className="content">
        <div className="list-item">
          <CardItem />
        </div>

        <Border className="list-item border1">
          <h3>标题</h3>
          <p>描述</p>
        </Border>

        <Border className="list-item border2">
          <h3>标题</h3>
          <p>描述</p>
        </Border>

        <Border className="list-item border3">
          <h3>标题</h3>
          <p>描述</p>
        </Border>

        <Border className="list-item border4">
          <h3>标题</h3>
          <p>描述</p>
        </Border>

        <Border className="list-item border5">
          <h3>标题</h3>
          <p>描述</p>
        </Border>

        <Border className="list-item border6">
          <h3>标题</h3>
          <p>描述</p>
        </Border>

        <Border className="list-item border7">
          <h3>标题</h3>
          <p>描述</p>
        </Border>

        <Border className="list-item border8">
          <h3>标题</h3>
          <p>描述</p>
        </Border>
      </div>
    </div>
  )
}

export default OtherAnimation
