import "./ContactUsStyles.css"


function ContactUs (){
    return (
        <>
        <div className="contact-header"><h1>Contact Us!</h1></div>
            <div className="from-container">
                <h2>Send Message To Us !</h2>
                <form>

                    <input type="text" placeholder="Username"/>
                    <input type="email" placeholder="Email"/>
                    <input type="text" placeholder="Subject"/>
                    <textarea placeholder="Message" rows="4"></textarea>
                    <button type="submit">Send Message</button>

                </form>
            </div>
        </>
    )
}

export default ContactUs;