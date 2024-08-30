import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const PrevArrow = ({ className, style, onClick }) => {
  return (
    <div
    className={className}
    onClick={onClick}
  >
    <FaAngleLeft style={{ ...style, color: "white", fontSize: "24px" }} />
  </div>
  )
}

export default PrevArrow