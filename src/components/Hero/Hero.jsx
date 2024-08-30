import { Link } from 'react-router-dom'
import './Hero.css'
import Home from '../../pages/Home/Home'

const Hero = ({ title, text }) => {
  return (
    <div className='hero'>
        <div className="hero-container">
          <span className="breadcrumb">
            <Link to="/">Home</Link> {title}
          </span>
          <h3>{text}</h3>
        </div>
    </div>
  )
}

export default Hero