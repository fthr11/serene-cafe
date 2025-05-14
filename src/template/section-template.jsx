import { motion } from "framer-motion";

const SectionTemplate = ({title, description1, description2, img, flex, link, button, xImage, xText}) => {
    const isMobile = window.innerWidth <= 768;
    const safeXImage = isMobile ? 50: xImage;

    return (
        <div className="w-full  overflow-x-hidden md:w-full bg-white text-[#221B1A] flex justify-center py-20 md:py-40">
            <div className={`flex items-center gap-5 md:gap-20 flex-col w-full md:w-[800px] lg:w-[1000px] xl:w-[1300px] ${flex}`}>
                {/* Gambar tetap besar dan tidak mengecil */}
                
                <div className="flex px-3 md:px-0 w-[450px] md:w-[3000px] xl:w-[1800px] overflow-hidden">
                    
                    <motion.div 
                        initial = {{ opacity: 0, x: safeXImage }}
                        whileInView = {{ opacity: 1, x: 0}}
                        transition={{ duration: .5}}
                        viewport= {{ once: true }}             
                    >
                        <img
                            className="relative w-full px-8 md:px-0 h-auto object-contain z-10" 
                            src={img}
                        />
                    </motion.div>
                </div>         
                
                
                {/* Konten teks */}
                <div className="flex flex-col gap-5 text-[12px] md:text-[16px] px-4 md:px-0">
                    <h1 className="relative overflow-hidden">
                        <motion.div
                            initial = {{x : xText}}
                            whileInView = {{ opacity: 1, x: 0}}
                            transition={{ duration: .5}}
                            viewport= {{ once: true }}
                            className="h-full text-3xl md:text-4xl lg:text-5xl text-start"
                        >
                            {title}
                        </motion.div>
                    </h1>
                    

                    <p className="relative overflow-hidden">
                        <motion.div
                            initial = {{opacity: 0,x : xText}}
                            whileInView = {{ opacity: 1, x: 0}}
                            transition={{ duration: .6}}
                            viewport= {{ once: true }}
                            className="text-justify text-sm lg:text-lg md:pt-5"
                        >
                            {description1}
                        </motion.div>
                        
                    </p>
                    <p className="relative overflow-hidden">
                        <motion.div
                            initial = {{ opacity: 0, x : xText}}
                            whileInView = {{ opacity: 1, x: 0}}
                            transition={{ duration: .7}}
                            viewport= {{ once: true }}
                            className="text-justify text-sm lg:text-lg"
                        >
                            {description2}
                        </motion.div>
                        
                    </p>

                    <a href={link} className="border rounded-full w-fit px-4 mt-3 font-medium cursor-pointer">
                        {button}
                        <i className="pl-2 ri-arrow-right-line"></i>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SectionTemplate;


