import React, { useState, useEffect } from 'react'
import './index.less'
import faker from 'faker'
import VirtualList from '../VirtualList'

function VirtualListTab() {
  const [listData, setListData] = useState<Array<any>>([])

  useEffect(() => {
    // 记录数据生成开始时间
    let now = Date.now()
    let data = [],
      len = 100000
    for (let id = 0; id < len; id++) {
      data.push({
        id,
        value: faker.lorem.sentences().slice(0, 20), // 长文本
      })
    }
    setListData(data)
    console.log('listData: ', listData)
    setTimeout(() => {
      console.log('数据生成总时间：', Date.now() - now)
    }, 0)
  }, [])

  const ListItem = (itemData: any) => (
    <div>
      {itemData.id} : {itemData.value}
    </div>
  )

  return (
    <div className="virtual-list-tab-wrapper">
      <h2 className="title">虚拟列表</h2>

      <div className="list-content">
        {/* <VirtualList listData={listData} itemSize={60} /> */}
        <VirtualList listData={listData} itemSize={60} itemRender={(item: any) => ListItem(item)} />
      </div>
    </div>
  )
}

export default VirtualListTab
