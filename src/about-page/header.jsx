import HeaderTemplate from "../template/header-template"
import LocationImage from "/gallery/Location.webp"

const AboutHeader = () => {
    return(
        <>
            <HeaderTemplate
                img = {LocationImage}
                title = {'ABOUT'}
                
            /> 
        </>
    )
}

export default AboutHeader;