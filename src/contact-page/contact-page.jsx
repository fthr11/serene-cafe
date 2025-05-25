import Navbar from "../assets/navbar";
import Footer from "../template/footer";
import ContactSection from "./contact-section";
import ContactHeader from "./header";

const ContactPage = () => {
    return(
        <div className="scroll-smooth font-montserrat">
            <Navbar />
            <ContactHeader/>
            <ContactSection/>
            <Footer/>
        </div>
    )
}

export default ContactPage;