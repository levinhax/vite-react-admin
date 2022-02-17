// import React, { useEffect, useState } from 'react'
import React from 'react'
import WithListData from './comWithListData'

interface Item {
  name: string
  age: number
}

// const ComAList = () => {
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
//         age: 20,
//       },
//       {
//         name: '雪容融',
//         age: 18,
//       },
//     ])
//   }, [])

//   return (
//     <div className="list-wrapper" style={{ padding: 20, border: '1px solid #e9e9e9', display: 'inline-block' }}>
//       {data.map((item, index) => (
//         <div key={index}>
//           <div>
//             名称: {item.name}; 年龄: {item.age} 岁
//           </div>
//         </div>
//       ))}
//     </div>
//   )
// }

// export default ComAList

interface IProp {
  data: Array<Item>
}

const ComAList = ({ data }: IProp) => {
  return (
    <div className="list-wrapper" style={{ padding: 20, border: '1px solid #e9e9e9', display: 'inline-block' }}>
      {data.map((item: Item, index: number) => (
        <div key={index}>
          <div>
            名称: {item.name}; 年龄: {item.age} 岁
          </div>
        </div>
      ))}
    </div>
  )
}

export default WithListData(ComAList, 'apiA')
