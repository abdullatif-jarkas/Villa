import './SectionHeader.css'

const SectionHeader = ({ title, text }) => {
  return (
    <div className="section-heading">
      <h6 className='section-h6'>{title}</h6>
      <h2 className='section-h2'>{text}</h2>
    </div>
  )
}

export default SectionHeader