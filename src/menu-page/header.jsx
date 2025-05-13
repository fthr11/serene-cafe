import HeaderTemplate from "../template/header-template"
import MenuHeaderImage from "/gallery/MenuHeader.png"
import TitleLogo from "/gallery/TitleLogo.webp";

const MenuHeader = () => {
    return (
        <>
            <HeaderTemplate
                img={MenuHeaderImage}
                height={'h-[200px] md:h-[500px] lg:h-[600px]'}
                titleImg={TitleLogo}
            />
        </>
    )
}

export default MenuHeader;