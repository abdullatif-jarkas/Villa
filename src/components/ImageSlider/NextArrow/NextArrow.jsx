import { FaAngleRight } from 'react-icons/fa'
import './NextArrow.css'

const NextArrow = ({ className, style, onClick }) => {
  return (
    <div
    className={className}
    onClick={onClick}
    >
    <FaAngleRight style={{ ...style, color: "white", fontSize: "24px" }} />
  </div>
  )
}

export default NextArrow