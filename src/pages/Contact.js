import Footer from "../components/Footer"

const name = "{name}"

const Contact = () => {
  return (
    <div id="contact-page">
      <h1>Contact Me</h1>
      <p>Hi there, contact me to ask me about anything you have in mind.</p>
  
      <form>

        <div className="names">
          <div>
            <label for="fname">First name</label>
            <input type="text" id="first_name" placeholder="Enter your first name"></input>
          </div>

          <div>
            <label for="lname">Last name</label>
            <input type="text" id="last_name" placeholder="Enter your last name"></input>
          </div>
        </div>

        <div>
          <label for="fname">Email</label>
          <input type="email" id="email" placeholder="yourname@email.com"></input>
        </div>

        <div>
          <label for="message">Message</label>
          <textarea id="message" rows="5" placeholder="Send me a message and I'll reply you as soon as possible..."></textarea>
        </div>

        
        <div>
          <input type="checkbox" id="checkbox"></input>
          <label for="checkbox">You agree to providing your data to {name} who may contact you.</label>
        </div>
        

        <button type="submit" id="btn__submit">Send message</button>
      </form>

      <Footer />
    </div>
  )
}

export default Contact