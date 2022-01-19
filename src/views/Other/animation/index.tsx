import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Divider } from 'antd'
import Border from '@/components/border'
import CardItem from '@/components/card-item'
import './index.less'

function OtherAnimation() {
  const history = useHistory()
  const [listData] = useState([
    {
      id: 1,
      title: '电池动画',
      desc: '',
      path: '/other/animation/battery',
    },
    {
      id: 2,
      title: '弹幕效果',
      desc: '',
      path: '/other/animation/bullet',
    },
    {
      id: 3,
      title: '轮播',
      desc: '',
      path: '/other/animation/banner',
    },
  ])

  const renderList = listData.map(item => {
    return (
      <Border className="list-item border1" key={item.id}>
        <h3 onClick={() => handleClick(item)}>{item.title}</h3>
        <p>描述</p>
      </Border>
    )
  })

  const handleClick = (item: any) => {
    history.push(item.path)
  }

  return (
    <div className="other-animation-wrapper">
      <h3 className="title">动画</h3>
      <div className="content">
        {renderList}

        <Divider />

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
