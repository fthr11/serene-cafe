import HeroImage from "/gallery/HeroImage.webp";
import TitleLogo from "/gallery/TitleLogo.webp";

const Section1 = () => {
    return (
        <div className="relative h-screen w-full overflow-hidden">
            <img 
                src={HeroImage} 
                alt="Hero" 
                className="w-full h-full object-cover" 
            />
            <img 
                src={TitleLogo} 
                alt="Title Logo"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200px] md:w-[250px]" 
            />
        </div>
    );
};

export default Section1;
