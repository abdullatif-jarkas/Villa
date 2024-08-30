import { FaCalendar } from 'react-icons/fa'
import './CardButton.css'
import { Link } from 'react-router-dom'

const CardButton = ({ id }) => {
  return (
    <Link to={`/property-details/${id}`} className="nav-btn">
      <span className="btn-icon">
        <FaCalendar />
      </span>
      <span className="btn-text">Schedule a visit</span>
    </Link>
  )
}

export default CardButton