import React, { useState, useEffect, useRef } from 'react'
import './index.css'

interface ItemProps {
  id: number
  text: string
}

const ScrollLoad = (props: ItemProps) => {
  const { text } = props
  const [loading, setLoading] = useState(true)
  const itemRef: any = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setLoading(false)
          observer.unobserve(entry.target)
        }
      })
    })
    observer.observe(itemRef.current)

    return () => {
      observer.disconnect()
    }
  })

  return (
    <div className="scrollitem" ref={itemRef}>
      {loading ? 'Loading...' : text}
    </div>
  )
}

export default ScrollLoad
