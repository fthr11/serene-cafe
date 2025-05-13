import MenuScroll from "../template/menu-scroll";
import productsData from "../data/products-data";
import MenuCard from "../template/menu-card";

const Section5 = () => {
    return (
        <>
            <MenuScroll
                title={"Products"}
                mapping={
                    <div  className="flex gap-2 md:gap-2 lg:gap-14 xl:gap-8 w-max">
                        {productsData.slice(0,8).map((menu, id) => (                  
                            <MenuCard imgClassName="w-[150px] md:w-[190px] lg:w-[224px] xl:w-[304px]" key={id} image={menu.img} title={menu.title} />
                        ))}
                    </div>
                }
            />
        </>
    )
}

export default Section5;