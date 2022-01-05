import React, { useState, useRef } from 'react'
import LiveVideo from '@/components/liveVideo'
import { Row, Col, Select } from 'antd'

const { Option } = Select

function LiveVideoTab() {
  const playerRef: any = useRef()
  const [liveVideoConfig, setLiveVideoConfig] = useState({
    autoPlay: true,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        type: 'application/x-mpegURL',
        src: 'http://cctvalih5ca.v.myalicdn.com/live/cctv1_2/index.m3u8',
      },
    ],
  })

  const [sourceList] = useState([
    {
      name: 'CCTV1',
      id: 1,
      autoPlay: true,
      controls: true,
      responsive: true,
      fluid: true,
      sources: [
        {
          type: 'application/x-mpegURL',
          src: 'http://cctvalih5ca.v.myalicdn.com/live/cctv1_2/index.m3u8',
        },
      ],
    },
    {
      name: 'CCTV2',
      id: 2,
      autoPlay: true,
      controls: true,
      responsive: true,
      fluid: true,
      sources: [
        {
          type: 'application/x-mpegURL',
          src: 'http://cctvalih5ca.v.myalicdn.com/live/cctv2_2/index.m3u8',
        },
      ],
    },
    {
      name: 'CCTV3',
      id: 3,
      autoPlay: true,
      controls: true,
      responsive: true,
      fluid: true,
      sources: [
        {
          type: 'application/x-mpegURL',
          src: 'http://cctvalih5ca.v.myalicdn.com/live/cctv3_2/index.m3u8',
        },
      ],
    },
  ])

  const handlePlayerReady = (player: any) => {
    playerRef.current = player

    // you can handle player events here
    player.on('waiting', () => {
      console.log('player is waiting')
    })

    player.on('dispose', () => {
      console.log('player will dispose')
    })
  }

  const handleSelectChange = (value: number) => {
    const curSource = sourceList.find(item => item.id === value)
    if (curSource) {
      // if (!playerRef.current) {
      //   return
      // }
      setLiveVideoConfig(curSource)
      // [update player through instance's api]
      // playerRef.current.src([{ src: 'http://ex.com/video.mp4', type: 'video/mp4' }])
      // playerRef.current.autoplay(false)
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
          <LiveVideo options={liveVideoConfig} onReady={handlePlayerReady} />
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
