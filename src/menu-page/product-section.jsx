import productsData from "../data/products-data"
import MenuCard from "../template/menu-card"
import MenuTemplate from "./menu-template"

const ProductSection = () => {
    return(
        <>
            <MenuTemplate
                title={"Products"}
                mapping={
                        productsData.map((menu, id) => (
                            <MenuCard 
                            key={id} 
                            image={menu.img} 
                            title={menu.title}
                            imgClassName={"w-full h-auto"}
                            />
                        )
                    )
                }
            />
        </>
    )
}

export default ProductSection;