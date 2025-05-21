import OurStory from "/gallery/OuterStory.webp";
import AboutTemplate from "./about-template";

const AboutSection1 = () => {
    return (
        <>
            <AboutTemplate
                img = {OurStory}
                xImage ={'100%'}
                xText = {'-50%'}
                flex= {"md:flex-row"}
                title= {"Our Beggining"}
                description1= {"In early 2015, New York City was as fast-paced and electrifying as ever. Skyscrapers kissed the clouds, subways roared beneath the streets, and people rushed from one place to another with coffee in hand, rarely slowing down. Among the crowd was John Doe, a 29-year-old creative spirit stuck in a gray corporate job that paid well but left her feeling hollow."}
                buttonDisplay = {"hidden"}
            />
        </>
    );
};

export default AboutSection1;
