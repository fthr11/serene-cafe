import Navbar from "../assets/navbar";
import Footer from "../template/footer";
import MenuHeader from "./header";
import MenuSection from "./menu-section";
import ProductSection from "./product-section";
import { motion } from "framer-motion"

const MenuPage = () => {
    return(
        <div className="w-screen scroll-smooth font-poppins">
            <Navbar/>
            <MenuHeader/>
            <MenuSection/>
            <ProductSection/>
            <Footer/>
        </div>
    )
}

export default MenuPage;


// http://localhost:5173/