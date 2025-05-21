import Navbar from "../assets/navbar"
import Footer from "../template/footer";
import AboutHeader from "./header";
import AboutSection1 from "./about-section1";
import AboutSection2 from "./about-section2";


const AboutPage = () => {
    return(
        <div className="scroll-smooth font-poppins">
            <Navbar/>
            <AboutHeader/>
            <div className="md:py-20">
                <AboutSection1/>
                <AboutSection2/>
            </div>
            <Footer/>
        </div>
    )
}

export default AboutPage;