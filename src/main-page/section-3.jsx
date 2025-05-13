import WhyOurCoffee from "/gallery/WhyOurCoffee.webp";
import SectionTemplate from "../template/section-template";

const Section3 = () => {
    return (
        <>
            <SectionTemplate
                img = {WhyOurCoffee}
                xImage ={'100%'}
                xText = {'-50%'}
                flex = {"md:flex-row-reverse"}
                title= {"Why Our Coffee?"}
                description1={"At Serene Cafe, coffee is more than just a drink — it's a moment of peace in your busy day. We carefully source premium beans from sustainable farms, roast them with precision, and craft each cup with passion. Our commitment to quality ensures a rich, aromatic, and unforgettable coffee experience."}
                description2={"Whether you’re starting your day or winding down, every sip of our coffee tells a story — of craftsmanship, warmth, and connection. Choose Serene Cafe for coffee that speaks to your soul."}
                button= {"SEE MORE"}
            />
        </>
        );
    };
export default Section3;