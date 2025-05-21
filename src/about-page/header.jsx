import HeaderTemplate from "../template/header-template"
import LocationImage from "/gallery/Location.webp"

const AboutHeader = () => {
    return(
        <>
            <HeaderTemplate
                img = {LocationImage}
                height = {'h-[200px] md:h-[500px] lg:h-[600px]'}
                title = {'about'}
                
            /> 
        </>
    )
}

export default AboutHeader;