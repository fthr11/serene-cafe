import { motion } from "framer-motion";
import Cappucino from "/gallery/Cappucino.webp";

const ContactSectionTemplate = ({flex, xImage, form}) => {
    const isMobile = window.innerWidth <= 768;
    const safeXImage = isMobile ? 50: xImage;

    return (
        <div className="w-screen overflow-x-hidden bg-white text-[#221B1A] flex justify-center py-20 md:py-40">
            <div className={`flex items-center gap-5 flex-col md:flex-row md:justify-betw md:gap-20 w-full md:w-[800px] lg:w-[1000px] xl:w-[1270px] ${flex}`}>
                
                {/* Gambar tetap besar dan tidak mengecil */}
                <div className="flex px-3 md:px-0 w-[490px] md:w-1/2 overflow-hidden">
                    
                    <motion.div 
                        initial = {{ opacity: 0, x: safeXImage }}
                        whileInView = {{ opacity: 1, x: 0}}
                        transition={{ duration: .5}}
                        viewport= {{ once: true }}             
                    >
                        <img
                            className="relative w-full px-8 md:px-0 h-auto object-contain z-10" 
                            src={Cappucino}
                        />
                    </motion.div>
                </div>         
                
                
                {/* Konten teks */}
                <div className="flex flex-col gap-5 md:w-1/2 text-[12px] md:text-[16px] px-4 md:px-0">
                    <h1 className="relative overflow-hidden">
                        <motion.div
                            initial = {{opacity: 0, y : "100%"}}
                            whileInView = {{ opacity: 1, y: 0}}
                            transition={{ duration: .5}}
                            viewport= {{ once: true }}
                            className="h-[50px] text-3xl md:text-4xl lg:text-5xl text-start"
                        >
                            CONTACT US
                        </motion.div>
                    </h1>
                    

                    <motion.div 
                        initial = {{opacity: 0, y : 100}}
                        whileInView = {{ opacity: 1, y: 0}}
                        transition={{ duration: .8}}
                        viewport= {{ once: true }}
                    >
                        <div> 
                            {form}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ContactSectionTemplate;


