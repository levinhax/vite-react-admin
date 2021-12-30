import React, { useState, useRef, useEffect, useMemo } from 'react'
import classes from './index.module.css'

interface IListData {
  id: number
  value: string
}

interface IProp {
  listData: Array<IListData>
  itemSize?: number
}

function VirtualList(props: IProp) {
  const { listData = [], itemSize = 100 } = props

  const listRef: any = useRef()
  const [screenHeight, setScreenHeight] = useState(0) // 可视区域高度
  const [startOffset, setStartOffset] = useState(0) // 偏移量
  const [startInd, setStartInd] = useState(0) // 起始索引
  const [endInd, setEndInd] = useState(0) // 结束索引

  useEffect(() => {
    setScreenHeight(listRef.current.clientHeight)
    setStartInd(0)
    setEndInd(startInd + visibleCount)
  }, [])

  useEffect(() => {
    setEndInd(startInd + visibleCount)
  }, [screenHeight])

  // 列表总高度
  const listHeight = useMemo(() => {
    return listData.length * itemSize
  }, [listData, itemSize])

  // 可显示的列表项数
  const visibleCount = useMemo(() => {
    return Math.ceil(screenHeight / itemSize)
  }, [screenHeight, itemSize])

  // 偏移量
  const listTransform = useMemo(() => {
    return `translate3d(0,${startOffset}px,0)`
  }, [startOffset])

  // 真实显示列表数据
  const visibleData = useMemo(() => {
    return listData.slice(startInd, Math.min(endInd, listData.length))
  }, [startInd, endInd, screenHeight])

  const scrollEvent = () => {
    // 当前滚动位置
    let scrollTop = listRef.current.scrollTop
    let startIndex = Math.floor(scrollTop / itemSize)
    // 此时的开始索引
    setStartInd(startIndex)
    // 此时的结束索引
    // setEndInd(startInd + visibleCount)
    setEndInd(startIndex + visibleCount)
    // 此时的偏移量
    setStartOffset(scrollTop - (scrollTop % itemSize))
  }

  const renderVisibleList = visibleData.map(item => {
    return (
      <div
        key={item.id}
        className={classes['virtual-list-item']}
        style={{ height: itemSize + 'px', lineHeight: itemSize + 'px' }}
      >
        {item.id} : {item.value}
      </div>
    )
  })

  return (
    <div ref={listRef} className={classes['virtual-list-container']} onScroll={scrollEvent}>
      <div className={classes['virtual-list-phantom']} style={{ height: listHeight }}></div>
      <div className={classes['virtual-list']} style={{ transform: listTransform }}>
        {renderVisibleList}
      </div>
    </div>
  )
}

export default VirtualList
