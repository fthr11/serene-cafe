import Location from "/gallery/Location.webp";
import SectionTemplate from "../template/section-template";

const Section6 = () => {
    return (
        <>
            <SectionTemplate
                className = "mt-40"
                img = {Location}
                xImage ={"100%"}
                xText ={-50}
                flex= {"md:flex-row-reverse"}
                title= {"Location"}
                description1 = {"Serene Cafe located in Jl. Raya Serene No. 123, Bali, Indonesia. A perfect spot to enjoy a cup of coffee while surrounded by the beauty of nature."}
                button={"SEE LOCATION"}
                link = {"https://maps.app.goo.gl/aNChpr6Q6JmZPoBk6"}
            />
        </>
        );
    };
export default Section6;