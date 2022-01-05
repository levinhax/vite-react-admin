import React, { useRef, useEffect } from 'react'
// 借助video.js插件实现播放实时视频流
import Videojs from 'video.js'
import 'video.js/dist/video-js.css'

type VideoJsPlayer = /*unresolved*/ any

interface ISource {
  type: string
  src: string
}

type IProps = {
  options: {
    autoPlay: boolean
    controls: boolean
    responsive: boolean
    fluid: boolean
    sources: Array<ISource>
  }
  // eslint-disable-next-line no-unused-vars
  onReady(player: VideoJsPlayer): void
}

function LiveVideo(props: IProps) {
  const { options, onReady } = props

  const videoRef: any = useRef() // 拿到DOM容器
  const playerRef: any = useRef()

  useEffect(() => {
    // make sure Video.js player is only initialized once
    if (!playerRef.current) {
      const videoElement = videoRef.current
      if (!videoElement) return

      const player = (playerRef.current = Videojs(videoElement, options, () => {
        console.log('onPlayerReady')
        player.autoplay(options.autoPlay)
        onReady && onReady(player)
      }))
      console.log('player: ', player)
    } else {
      // you can update player here [update player through props]
      const player = playerRef.current
      player.autoplay(options.autoPlay)
      player.src(options.sources)
    }
  }, [options, videoRef])

  useEffect(() => {
    const player = playerRef.current

    return () => {
      if (player) {
        player.dispose()
        playerRef.current = null
      }
    }
  }, [playerRef])

  // useEffect(() => {
  //   initVideo()
  // }, [liveVideoConfig])

  // useEffect(() => {
  //   // 在页面销毁生命周期里调用,否则页面销毁也会持续请求直播流
  //   return () => myPlayer.dispose()
  // }, [])

  // const initVideo = () => {
  //   // let myPlayer = Videojs(document.getElementById('liveVideo'), {
  //   //   controls: true,
  //   //   //自动播放属性,muted:静音播放
  //   //   autoplay: liveConfig.autoPlay,
  //   //   //建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
  //   //   preload: 'auto',
  //   //   //设置视频播放器的显示宽度（以像素为单位）
  //   //   // width: "800px",
  //   //   //设置视频播放器的显示高度（以像素为单位）
  //   //   // height: "400px",
  //   //   controlBar: {
  //   //     playToggle: true,
  //   //   },
  //   // })
  //   // console.log('myPlayer: ', myPlayer)
  // }

  return (
    <div className="video-wrap">
      {/* 可以直播的视频标签 */}
      <video ref={videoRef} className="video-js vjs-big-play-centered" />
    </div>
  )
}

export default LiveVideo
