import HeaderTemplate from "../template/header-template"
import MenuHeaderImage from "/gallery/MenuHeader.png"
import TitleLogo from "/gallery/TitleLogo.webp";

const MenuHeader = () => {
    return (
        <>
            <HeaderTemplate
                img={MenuHeaderImage}
                height={''}
                titleImg={TitleLogo}
            />
        </>
    )
}

export default MenuHeader;