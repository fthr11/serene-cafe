import Navbar from "../assets/navbar";
import Footer from "../template/footer";
import MenuHeader from "./header";
import MenuSection from "./menu-section";

const MenuPage = () => {
    return(
        <div className="scroll-smooth font-poppins">
            <Navbar/>
            <MenuHeader/>
            <MenuSection/>
            <Footer/>
        </div>
    )
}

export default MenuPage;


// http://localhost:5173/