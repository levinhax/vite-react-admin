import React, { useState, useEffect } from 'react'
import ScrollLoad from '../ScrollLoadHook'

const ScrollLoadTab = () => {
  const [listData, setListData] = useState<Array<any>>([])

  useEffect(() => {
    const len = 200
    const data = []
    for (let i = 0; i < len; i++) {
      data.push({
        id: i,
        text: `第${i}个元素`,
      })
    }
    setListData(data)
  }, [])

  return (
    <div className="scroll-load-wrapper">
      {listData.map(item => {
        return <ScrollLoad key={item.id} id={item.id} text={item.text} />
      })}
    </div>
  )
}

export default ScrollLoadTab
