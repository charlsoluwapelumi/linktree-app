

const Contact = () => {
  return (
    <div>
        <h1>Contact Me</h1>
        <p>Hi there, contact me to ask me about anything you have in mind.</p>
    
        <form>

            <label for="fname">First name:</label>
            <input type="text" id="first_name"></input>

            <label for="lname">Last name:</label>
            <input type="text" id="last_name"></input>

            <label for="fname">Email:</label>
            <input type="email" id="email" ></input>

            <label for="message">Message:</label>
            <input type="textarea" id="message"></input>

            <input type="checkbox">ghhhg</input>

            <button type="submit" id="btn__submit">Send message</button>
        </form>
    </div>
  )
}

export default Contact