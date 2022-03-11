import React, { useEffect } from 'react'
import { BrowserRouter as Router, useRoutes } from 'react-router-dom'
import PageLoading from './components/page-loading/pageLoading'
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
    <>
      <Router>
        <React.Suspense fallback={<PageLoading />}>
          <GetRoutes />
        </React.Suspense>
      </Router>
    </>
  )
}

export default App
