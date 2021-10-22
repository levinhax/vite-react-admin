import React, { useState, useEffect } from 'react'
import { message, Input, Button } from 'antd'
import { useCopyToClipboard } from 'react-use'

// interface IProps {
//   name: string
// }

const { TextArea } = Input

// const OtherHook: React.FC<IProps> = props => {
const OtherHook = () => {
  const [text, setText] = useState('')
  const [state, copyToClipboard] = useCopyToClipboard()

  useEffect(() => {
    state.error
      ? message.error(`Unable to copy value: ${state.error.message}`)
      : state.value && message.info(`Copied: ${state.value}`)
  }, [state])

  return (
    <div>
      <h3>常用hook(react-use)</h3>
      <div>
        <TextArea rows={4} value={text} onChange={e => setText(e.target.value)} />
        <Button type="primary" onClick={() => copyToClipboard(text)} style={{ marginTop: '12px' }}>
          copy text
        </Button>
        {state.error ? <p>Unable to copy value: {state.error.message}</p> : state.value && <p>Copied {state.value}</p>}
      </div>
    </div>
  )
}

export default OtherHook
