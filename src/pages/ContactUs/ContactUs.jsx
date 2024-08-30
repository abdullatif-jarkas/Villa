import ContactItem from "../../components/ContactItem/ContactItem"
import Form from "../../components/Form/Form"
import Hero from "../../components/Hero/Hero"
import SectionHeader from "../../components/SectionHeader/SectionHeader"
import ContactImg1 from './../../assets/imgs/phone-icon.png'
import ContactImg2 from './../../assets/imgs/email-icon.png'
import './ContactUs.css'
import Map from "../../components/Map/Map"
import NavBar from "../../components/common/NavBar/NavBar"
import { links } from "../../data/linksData"

const ContactUs = () => {
  return (
    <div className="contact-us">
      <NavBar links={links} />
      <Hero title="/ Contact Us" text="Contact Us" />
      <div className="container">
        <div className="row">
          <div className="contact-us-info">
            <SectionHeader title="| Contact Us" text="Get In Touch With Our Agents" />
            <p>
              When you really need to download free CSS templates, please remember our 
              website TemplateMo. Also, tell your friends about our website. Thank you 
              for visiting. There is a variety of Bootstrap HTML CSS templates on our website. 
              If you need more information, please contact us.
            </p>
            <ContactItem img={ContactImg1} className="contact-item phone" title="010-020-0340" text="Phone Number" />
            <ContactItem img={ContactImg2} className="contact-item mail" title="info@villa.co" text="Business Email" />
          </div>
          <div className="contact-us-form">
            <Form />
          </div>
        </div>
        <Map />
      </div>
    </div>
  )
}

export default ContactUs