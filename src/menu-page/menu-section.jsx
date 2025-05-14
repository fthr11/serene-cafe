import menuData from "../data/menu-data";
import MenuCard from "../template/menu-card";

const MenuSection = () => {
    return(
        <div className="w-full bg-white text-[#221B1A] py-20 md:py-40 flex flex-col gap-10 flex-wrap items-center justify-center">

            {/* Menu - Judulnya */}
            <div className="w-full max-w-[1300px] px-4 text-3xl md:text-4xl lg:text-5xl text-left">
                Menu
            </div>

            {/* Gambar-Gambar di menu */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full max-w-[1300px] px-4">
                {menuData.map((menu, id) => (
                    <MenuCard 
                        key={id} 
                        image={menu.img} 
                        title={menu.title}
                        imgClassName={"w-full h-auto"}
                    />
                ))}
            </div>
        </div>
    )
}

export default MenuSection;



