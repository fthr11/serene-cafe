import ContactSectionTemplate from "./contact-section-template";
import Form from "./form";

const ContactSection = () => {
    return(
        <>
            <ContactSectionTemplate 
                form={<Form />}
            />
        </>
    )
}
export default ContactSection;