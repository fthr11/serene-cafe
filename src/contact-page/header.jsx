import HeaderTemplate from "../template/header-template";
import ContactImage from "/gallery/Contact.jpg";

const ContactHeader = () => {
    return(
        <>
            <HeaderTemplate
                img={ContactImage}
                height={'h-[150px] md:h-[200px] lg:h-[400px]'}
                title={"CONTACT"}
            />
        </>
    )
}

export default ContactHeader;