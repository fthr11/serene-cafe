import Navbar from "../assets/navbar";
import Section1 from "./section-1";
import Section2 from "./section-2";
import Section3 from "./section-3"
import Section4 from "./section-4";
import Section5 from "./section-5";
import Section6 from "./section-6";
import Footer from "../template/footer";

const MainPage = () => {
    return(
        <div className="scroll-smooth font-montserrat">
            <Navbar />
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section6 />
            <Footer/>
        </div>
    )
}

export default MainPage;