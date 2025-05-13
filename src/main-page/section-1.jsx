import HeaderTemplate from "../template/header-template";
import HeroImage from "/gallery/HeroImage.webp";
import TitleLogo from "/gallery/TitleLogo.webp";

const Section1 = () => {
    return (
        <>
            <HeaderTemplate
                img = {HeroImage}
                height={"h-screen"}
                titleImg={TitleLogo}
            />
        </>
    );
};

export default Section1;
