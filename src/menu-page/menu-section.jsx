import menuData from "../data/menu-data";
import MenuCard from "../template/menu-card";

const MenuSection = () => {
    return(
        <div className="w-screen md:w-full bg-white text-[#221B1A] flex justify-center py-20 md:py-40">
            <div className="flex justify items-center gap-5 md:gap-15 flex-wrap md:w-[800px] lg:w-[1000px] xl:w-[1300px] overflow-x-hidden"> 
                <div className="text-3xl md:text-4xl lg:text-5xl">Menu</div>
                {menuData.map((menu, id) => (
                    <MenuCard 
                        key={id} 
                        image={menu.img} 
                        title={menu.title}
                        imgClassName={"w-[393px]"}
                    />
                ))}
            </div>
        </div>
    )
}

export default MenuSection;



