import HeaderTemplate from "../template/header-template"
import MenuHeaderImage from "/gallery/MenuHeader.png"

const MenuHeader = () => {
    return (
        <>
            <HeaderTemplate
                img={MenuHeaderImage}
                height={'h-[200px] md:h-[500px] lg:h-[600px]'}
                title={"menu"}
            />
        </>
    )
}

export default MenuHeader;