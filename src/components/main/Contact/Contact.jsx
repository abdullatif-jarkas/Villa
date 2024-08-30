import ContactItem from '../../ContactItem/ContactItem'
import SectionHeader from '../../SectionHeader/SectionHeader'
import './Contact.css'
import ContactImg1 from './../../../assets/imgs/phone-icon.png'
import ContactImg2 from './../../../assets/imgs/email-icon.png'
import Form from '../../Form/Form'
import Map from '../../Map/Map'

const Contact = () => {
  return (
    <>
      <div className='contact'>
        <SectionHeader title="| Contact Us" text="Get In Touch With Our Agents" />
      </div>
      <div className="contact-content">
        <div className="container">
          <div className="row">
            <div className="col col-1">
              <Map />
              <div className="contact-info">
                <ContactItem img={ContactImg1} className="contact-item phone" title="010-020-0340" text="Phone Number" />
                <ContactItem img={ContactImg2} className="contact-item mail" title="info@villa.co" text="Business Email" />
              </div>
            </div>  
            <div className="col col-2">
              <Form />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact