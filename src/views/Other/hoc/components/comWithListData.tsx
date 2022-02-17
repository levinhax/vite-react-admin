import React, { useState, useEffect } from 'react'

interface Item {
  name: string
  age?: number
  price?: number
}

// Component 为传入的组件，url 为每个组件对应的请求地址
const WithListData = (Component: any, url: string) => {
  const WithListDataComponent = () => {
    const [data, setData] = useState<Array<Item>>([])
    useEffect(() => {
      // fetch(url)
      //   .then(res => {
      //     return res.json()
      //   })
      //   .then(({ data }) => {
      //     setData(data)
      //   })

      if (url === 'apiA') {
        setData([
          {
            name: '冰墩墩',
            age: 20,
          },
          {
            name: '雪容融',
            age: 18,
          },
        ])
      } else if (url === 'apiB') {
        setData([
          {
            name: '冰墩墩',
            price: 200,
          },
          {
            name: '雪容融',
            price: 200,
          },
        ])
      }
    }, [])
    // 将请求返回的 data 属性以 props 的形式返回给传入的 Component 组件
    return <Component data={data} />
  }
  return WithListDataComponent
}

export default WithListData
