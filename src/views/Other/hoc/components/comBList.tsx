// import React, { useEffect, useState } from 'react'
import React from 'react'
import WithListData from './comWithListData'

interface Item {
  name: string
  price: number
}

// const ComBList = () => {
//   const [data, setData] = useState<Array<Item>>([])

//   useEffect(() => {
//     // 发起请求获取列表数据
//     // fetch(url)
//     //   .then(res => {
//     //     return res.json()
//     //   })
//     //   .then(({ data }) => {
//     //     setData(data)
//     //   })

//     setData([
//       {
//         name: '冰墩墩',
//         price: 200,
//       },
//       {
//         name: '雪容融',
//         price: 200,
//       },
//     ])
//   }, [])

//   return (
//     <div className="list-wrapper" style={{ padding: 20, border: '1px solid #e9e9e9', display: 'inline-block' }}>
//       {data.map((item, index) => (
//         <div key={index}>
//           <div>
//             名称: {item.name}; 价格: {item.price} 元
//           </div>
//         </div>
//       ))}
//     </div>
//   )
// }

// export default ComBList

interface IProp {
  data: Array<Item>
}

const ComBList = ({ data }: IProp) => {
  return (
    <div className="list-wrapper" style={{ padding: 20, border: '1px solid #e9e9e9', display: 'inline-block' }}>
      {data.map((item: Item, index: number) => (
        <div key={index}>
          <div>
            名称: {item.name}; 价格: {item.price} 元
          </div>
        </div>
      ))}
    </div>
  )
}

export default WithListData(ComBList, 'apiB')
