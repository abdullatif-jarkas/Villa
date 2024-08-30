import { FaCalendar } from 'react-icons/fa'
import './NavButton.css'
import { Link } from 'react-router-dom'

const NavButton = () => {
  return (
    <Link to='/property-details' className="nav-btn">
      <span className="btn-icon">
        <FaCalendar />
      </span>
      <span className="btn-text">Schedule a visit</span>
    </Link>
  )
}

export default NavButton