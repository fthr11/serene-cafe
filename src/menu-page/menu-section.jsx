import menuData from "../data/menu-data";
import MenuTemplate from "./menu-template";
import MenuCard from "../template/menu-card";

const MenuSection = () => {
    return(
        <>
            <MenuTemplate
                title={"Menu"}
                mapping={
                        menuData.map((menu, id) => (
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

export default MenuSection;



