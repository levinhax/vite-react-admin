import React, { useState } from 'react'
import LiveVideo from '@/components/liveVideo'
import { Row, Col, Select } from 'antd'

const { Option } = Select

function LiveVideoTab() {
  const [liveVideoConfig, setLiveVideoConfig] = useState({
    type: 'application/x-mpegURL',
    origin: 'http://cctvalih5ca.v.myalicdn.com/live/cctv1_2/index.m3u8',
    autoPlay: true,
  })

  const [sourceList] = useState([
    {
      name: 'CCTV1',
      id: 1,
      type: 'application/x-mpegURL',
      origin: 'http://cctvalih5ca.v.myalicdn.com/live/cctv1_2/index.m3u8',
      autoPlay: true,
    },
    {
      name: 'CCTV2',
      id: 2,
      type: 'application/x-mpegURL',
      origin: 'http://cctvalih5ca.v.myalicdn.com/live/cctv2_2/index.m3u8',
      autoPlay: true,
    },
    {
      name: '测试',
      id: 100,
      type: 'application/x-mpegURL',
      origin: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
      autoPlay: true,
    },
  ])

  const handleSelectChange = (value: number) => {
    const curSource = sourceList.find(item => item.id === value)
    if (curSource) {
      setLiveVideoConfig(curSource)
    }
  }

  const renderOptions = sourceList.map(item => {
    return (
      <Option key={item.id} value={item.id}>
        {item.name}
      </Option>
    )
  })

  return (
    <div className="videos-wrap">
      <Row gutter={16}>
        <Col xs={12} sm={12} md={12} lg={12} xl={10}>
          <LiveVideo liveVideoConfig={liveVideoConfig} />
          <div style={{ paddingTop: '24px' }}>
            <Select defaultValue={1} style={{ width: 160 }} onChange={handleSelectChange}>
              {renderOptions}
            </Select>
          </div>
        </Col>

        <Col xs={12} sm={12} md={12} lg={12} xl={10}>
          Col2
        </Col>
      </Row>
    </div>
  )
}

export default LiveVideoTab
