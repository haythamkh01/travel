import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../assets/2.jpeg";
import Footer from "../components/Footer";
import ContactUs from "../components/ContactUs";

function Contact () {
    return (
        <>
            <Navbar/>
            {/*<Hero
                cName="hero-mid"
                heroImg={AboutImg}
                title="Contact"

                btnClass="hide"
            />*/}
            <ContactUs/>

            <Footer/>
        </>
    )

}
export default Contact ;