import { FaPlay } from 'react-icons/fa'
import './VideoFrame.css'

const VideoFrame = ({ url }) => {
  return (
    <div className='video-frame'>
      <img src={url} alt="video-frame" />
      <a className='video-play-btn' href="https://youtube.com" target='_blank'>
        <FaPlay />
      </a>
    </div>
  )
}

export default VideoFrame