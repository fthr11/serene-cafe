import menuData from "../data/menu-data";
import MenuCard from "../template/menu-card";
import MenuScroll from "../template/menu-scroll";
import { motion } from "framer-motion";

const Section4 = () => {
    return (
        <>
            <MenuScroll
                title={"Menu"}
                mapping={
                    <div  className="flex gap-1 md:gap-10 w-max">
                        {menuData.map((menu, id) => (                  
                            <MenuCard key={id} image={menu.img} title={menu.title} imgClassName={"w-[200px] md:w-[240px] lg:w-[307px] xl:w-[406px]"} />
                        ))}
                    </div>
                }
            />
        </>
    );
};

export default Section4;
