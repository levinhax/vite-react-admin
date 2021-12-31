import React, { useState } from 'react'
import '../index.less'
import './bulletChat.less'

function BulletChat() {
  const [commentList] = useState([
    {
      id: 1,
      value: '666666666666666',
    },
    {
      id: 2,
      value: '666666666666666',
    },
    {
      id: 3,
      value: '666666666666666',
    },
    {
      id: 4,
      value: '666666666666666',
    },
    {
      id: 5,
      value: '666666666666666',
    },
    {
      id: 6,
      value: '666666666666666',
    },
    {
      id: 7,
      value: '666666666666666',
    },
    {
      id: 8,
      value: '666666666666666',
    },
    {
      id: 9,
      value: '666666666666666',
    },
    {
      id: 10,
      value: '666666666666666',
    },
  ])

  return (
    <div className="other-animation-wrapper bullet-chat-wrapper">
      <h3 className="title">弹幕效果</h3>
      <div className="content">
        <div className="bullet-chat-content">
          <div className="g-avatar"></div>

          <div className="g-barrage-container">
            {commentList.map(item => {
              return (
                <div className="g-barrage" key={item.id}>
                  {item.value}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BulletChat
