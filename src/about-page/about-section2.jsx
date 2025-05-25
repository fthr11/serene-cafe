import AboutImage2 from "/gallery/jeniscoffee.jpg";
import AboutTemplate from "./about-template";

const AboutSection2 = () => {
    return (
        <>
            <AboutTemplate
                img = {AboutImage2}
                xImage ={'-100%'}
                xText = {'50%'}
                flex= {"md:flex-row-reverse"}
                title= {"Our Background"}
                description1= {"John Doe, longing for peace amid Bali fast-paced life, left her corporate job in 2015 to open Serene Café — a cozy, quiet space inspired by her small-town roots, where people could slow down, relax, and feel at home."}
                buttonDisplay = {"hidden"}
            />
        </>
    );
};

export default AboutSection2;
