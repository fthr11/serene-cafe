import HeaderTemplate from "../template/header-template"
import MenuHeaderImage from "/gallery/MenuHeader.png"

const MenuHeader = () => {
    return (
        <>
            <HeaderTemplate
                img={MenuHeaderImage}
                title={"MENU"}
            />
        </>
    )
}

export default MenuHeader;