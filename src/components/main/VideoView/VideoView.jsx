import SectionHeader from '../../SectionHeader/SectionHeader'
import VideoFrame from '../../VideoFrame/VideoFrame'
import './VideoView.css'
import VideoImg from './../../../assets/imgs/video-frame.jpg'

const VideoView = () => {
  return (
    <>
      <div className='video-view'>
        <div className="container">
          <SectionHeader title="| Video View" text="Get Closer View & Different Feeling" />
        </div>
      </div>
      <div className="container">
        <VideoFrame url={VideoImg} />
      </div>
    </>

  )
}

export default VideoView