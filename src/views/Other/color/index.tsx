import React, { useState } from 'react'
import { Badge, Card, message } from 'antd'
import classes from './index.module.less'
import { copyToBoard } from '@/utils/core'

function OtherColor() {
  const [colorsMap] = useState([
    {
      title: '波尔多红',
      value: 'rgb(76, 0, 9)',
    },
    {
      title: '普鲁士蓝（柏林蓝）',
      value: 'rgb(0, 49, 83)',
    },
    {
      title: '勃艮第红',
      value: 'rgb(128, 0, 32)',
    },
    {
      title: '波尔多红',
      value: 'rgb(76, 0, 9)',
    },
    {
      title: '邦迪蓝',
      value: 'rgb(0, 149, 182)',
    },
    {
      title: '木乃伊棕',
      value: 'rgb(143, 75, 40)',
    },
    {
      title: '卡布里蓝',
      value: 'rgb(26, 85, 153)',
    },
    {
      title: '提香红',
      value: 'rgb(176, 89, 35)',
    },
    {
      title: '蒂凡尼蓝',
      value: 'rgb(129, 216, 208)',
    },
    {
      title: '覆盆子红',
      value: 'rgb(158, 46, 36)',
    },
    {
      title: '虎皮黄',
      value: 'rgb(226, 175, 66)',
    },
    {
      title: '薄荷绿',
      value: 'rgb(64, 125, 82)',
    },
    {
      title: '草黄',
      value: 'rgb(207, 182, 74)',
    },
    {
      title: '星蓝',
      value: 'rgb(154, 180, 205)',
    },
    {
      title: '鸢尾蓝',
      value: 'rgb(65, 138, 180)',
    },
    {
      title: '苋菜紫',
      value: 'rgb(142, 41, 97)',
    },
    {
      title: '钢蓝',
      value: 'rgb(16, 20, 32)',
    },
    {
      title: '云峰白',
      value: 'rgb(218, 227, 230)',
    },
    {
      title: '岩石棕',
      value: 'rgb(140, 80, 44)',
    },
    {
      title: '橄榄石绿',
      value: 'rgb(184, 206, 142)',
    },
    {
      title: '竹绿',
      value: 'rgb(79, 164, 133)',
    },
    {
      title: '钴蓝',
      value: 'rgb(70, 146, 185)',
    },
    {
      title: '月影白',
      value: 'rgb(194, 196, 195)',
    },
    {
      title: '笋皮棕',
      value: 'rgb(107, 51, 26)',
    },
    {
      title: '茜色',
      value: 'rgb(191, 59, 83)',
    },
    {
      title: '曙红',
      value: 'rgb(168, 30, 50)',
    },
    {
      title: '桃红',
      value: 'rgb(231, 118, 127)',
    },
    {
      title: '朱砂',
      value: 'rgb(233, 72, 41)',
    },
    {
      title: '朱磦',
      value: 'rgb(230, 101, 58)',
    },
    {
      title: '海棠红',
      value: 'rgb(208, 86, 103)',
    },
    {
      title: '胭脂',
      value: 'rgb(150, 40, 50)',
    },
    {
      title: '石榴红',
      value: 'rgb(227, 29, 19)',
    },
    {
      title: '黛蓝',
      value: 'rgb(63, 79, 101)',
    },
    {
      title: '景泰蓝',
      value: 'rgb(0, 78, 162)',
    },
    {
      title: '石青',
      value: 'rgb(30, 127, 160)',
    },
    {
      title: '天青',
      value: 'rgb(195, 224, 231)',
    },
    {
      title: '靛蓝',
      value: 'rgb(5, 79, 116)',
    },
    {
      title: '柳色',
      value: 'rgb(168, 205, 52)',
    },
    {
      title: '祖母绿',
      value: 'rgb(23, 111, 88)',
    },
    {
      title: '栀子色',
      value: 'rgb(245, 213, 83)',
    },
    {
      title: '墨色',
      value: 'rgb(78, 96, 108)',
    },
    {
      title: '玄青',
      value: 'rgb(59, 58, 78)',
    },
    {
      title: '玄色',
      value: 'rgb(55, 7, 8)',
    },
    {
      title: '绛紫',
      value: 'rgb(135, 65, 84)',
    },
    {
      title: '葡萄色',
      value: 'rgb(78, 45, 93)',
    },
    {
      title: '顺圣紫',
      value: 'rgb(92, 16, 40)',
    },
    {
      title: '琥珀色',
      value: 'rgb(195, 107, 37)',
    },
    {
      title: '琉璃黄',
      value: 'rgb(255, 179, 15)',
    },
  ])

  // const handleCopy = (item: any, e: any) => {
  //   console.log('copy: ', item, e)
  // }
  const handleCopy = (item: any) => {
    copyToBoard(item.value)
    message.success(`${item.title}色值已复制到剪切板`)
  }

  const renderColorList = colorsMap.map((item, index) => {
    return (
      <div className={classes['list-item']} key={index} onClick={() => handleCopy(item)}>
        <Badge.Ribbon text="Copy" color={item.value} style={{ cursor: 'pointer' }}>
          <Card title={item.title} size="small">
            {item.value}
          </Card>
        </Badge.Ribbon>
      </div>
    )
  })

  return (
    <div className={classes['other-color-wrapper']}>
      <h3 className={classes.title}>色彩</h3>
      <div className={classes.contentContainer}>
        {/* <div className={classes['list-item']} onClick={e => handleCopy('pink', e)}>
          <Badge.Ribbon text="Hippies" color="pink" style={{ cursor: 'pointer' }}>
            <Card title="Pushes open the window" size="small">
              and raises the spyglass.
            </Card>
          </Badge.Ribbon>
        </div> */}

        {renderColorList}
      </div>
    </div>
  )
}

export default OtherColor
