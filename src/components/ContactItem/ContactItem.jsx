import './ContactItem.css'

const ContactItem = ({ img, className, title, text }) => {
  return (
    <div className={className}>
      <img src={img} alt="contact-item" />
      <div className="phone-content">
        <h6>{title}</h6>
        <span>{text}</span>
      </div>
    </div>
  )
}

export default ContactItem