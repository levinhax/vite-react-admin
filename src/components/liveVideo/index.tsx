import React, { useRef, useEffect } from 'react'
// 借助video.js插件实现播放实时视频流
import Videojs from 'video.js'
import 'video.js/dist/video-js.css'

interface IProps {
  liveVideoConfig: {
    type: string
    origin: string
    autoPlay: boolean
  }
}

function LiveVideo(props: IProps) {
  const { liveVideoConfig } = props
  let myPlayer: any
  const videoRef: any = useRef() //拿到DOM容器
  // const [liveConfig, setLiveConfig] = useState({
  //   type: 'application/x-mpegURL',
  //   origin: 'http://cctvalih5ca.v.myalicdn.com/live/cctv1_2/index.m3u8',
  //   autoPlay: true,
  // })

  useEffect(() => {
    initVideo()
  }, [liveVideoConfig])

  useEffect(() => {
    // 在页面销毁生命周期里调用,否则页面销毁也会持续请求直播流
    return () => myPlayer.dispose()
  }, [])

  const initVideo = () => {
    // let myPlayer = Videojs(document.getElementById('liveVideo'), {
    //   controls: true,
    //   //自动播放属性,muted:静音播放
    //   autoplay: liveConfig.autoPlay,
    //   //建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
    //   preload: 'auto',
    //   //设置视频播放器的显示宽度（以像素为单位）
    //   // width: "800px",
    //   //设置视频播放器的显示高度（以像素为单位）
    //   // height: "400px",
    //   controlBar: {
    //     playToggle: true,
    //   },
    // })
    // console.log('myPlayer: ', myPlayer)

    // if (myPlayer) {
    //   myPlayer.dispose()
    // }

    myPlayer = Videojs(videoRef.current, {
      controls: true,
      //自动播放属性,muted:静音播放
      autoplay: liveVideoConfig.autoPlay,
      //建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
      preload: 'auto',
      //设置视频播放器的显示宽度（以像素为单位）
      // width: "800px",
      //设置视频播放器的显示高度（以像素为单位）
      // height: "400px",
      controlBar: {
        playToggle: true,
      },
    })
    console.log('myPlayer: ', myPlayer)
  }

  return (
    <div className="video-wrap">
      {/* 可以直播的视频标签 */}
      <video
        ref={videoRef}
        id="liveVideo"
        className="video-js vjs-big-play-centered vjs-fluid"
        style={{ width: '100%' }}
        controls
        preload="auto"
      >
        {liveVideoConfig.origin && <source type={liveVideoConfig.type} src={liveVideoConfig.origin} />}
      </video>
    </div>
  )
}

export default LiveVideo
