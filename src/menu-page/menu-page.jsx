import Navbar from "../assets/navbar";
import Footer from "../template/footer";
import MenuHeader from "./header";
import MenuSection from "./menu-section";
import ProductSection from "./product-section";

const MenuPage = () => {
    return(
        <div className="w-screen scroll-smooth font-montserrat">
            <Navbar/>
            <MenuHeader/>
            <MenuSection/>
            <ProductSection/>
            <Footer/>
        </div>
    )
}

export default MenuPage;

