import React, { useEffect } from 'react'
import { BrowserRouter as Router, useRoutes } from 'react-router-dom'
import innerRoutes from '@/router/innerRoutes'
import outerRoutes from '@/router/outerRoutes'

const GetRoutes = () => {
  const element = useRoutes([...outerRoutes, ...innerRoutes])
  return element
}

function App() {
  useEffect(() => {
    console.log('环境变量标题：', import.meta.env.VITE_APP_TITLE)
    document.title = import.meta.env.VITE_APP_TITLE
  }, [])

  return (
    <Router>
      <GetRoutes />
    </Router>
  )
}

export default App
