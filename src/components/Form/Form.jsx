import './Form.css'

const Form = () => {
  return (
    <form className="contact-form">
      <fieldset>
        <label htmlFor="name">Full Name</label>
        <input type="text" id='name' name='name' placeholder='Your Name...' />
      </fieldset>
      <fieldset>
        <label htmlFor="email">Email Address</label>
        <input type="email" id='email' name='email' placeholder='Your E-mail...' />
      </fieldset>
      <fieldset>
        <label htmlFor="subject">Subject</label>
        <input type="text" id='subject' name='subject' placeholder='Your Name...' />
      </fieldset>
      <fieldset>
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" placeholder='Your Message'></textarea>
      </fieldset>
      <fieldset>
        <button type="submit" id="form-submit" className="orange-button">Send Message</button>
      </fieldset>
    </form>
  )
}

export default Form