import { useRef, useState } from "react";
import { motion } from "framer-motion";

const MenuScroll = ({ mapping, title }) => {
    const sliderRef = useRef(null);
    const [activeButton, setActiveButton] = useState('left');

    const scrollRight = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollLeft += 1500;
        }
    };

    const scrollLeft = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollLeft -= 1500;
        }
    };

    const handleScroll = () => {
        if (sliderRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;

            if (scrollLeft + clientWidth >= scrollWidth - 10) {
                setActiveButton('right');
            } else if (scrollLeft <= 10) {
                setActiveButton('left');
            }
        }
    };

    const setButton = (direction) => {
        const isActive = activeButton === direction;
        return `ri-checkbox-blank-circle-fill cursor-pointer text-xs md:text-md
        ${isActive ? 'text-[#221B1A]' : 'text-[#D9D9D9]'}`;
    };

    return (
        <div className="w-full  bg-white text-[#221B1A] flex justify-center py-20 md:pt-40">
            <div className="flex flex-col gap-5 md:gap-15 w-full px-5 md:px-0 md:w-[800px] lg:w-[1000px] xl:w-[1300px]">
                <div className="text-3xl md:text-4xl lg:text-5xl">{title}</div>

                <div className="flex flex-col items-center gap-10">
                    {/* Scrollable Menu */}
                    <div
                        className="w-full cursor-pointer overflow-x-scroll scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                        ref={sliderRef}
                        onScroll={handleScroll}
                    >
                        <div className="flex gap-4 min-w-full">
                            <motion.div
                                initial={{ opacity: 0, y: "60%" }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0 }}
                                transition={{ duration: 0.4 }}
                            >
                                {mapping}
                            </motion.div>
                        </div>
                    </div>

                    <div className="flex gap-6">
                        <i onClick={scrollLeft} className={setButton('left')}></i>
                        <i onClick={scrollRight} className={setButton('right')}></i>
                    </div>

                    <a href="/menu" className="border rounded-full w-fit px-4 mt-3 font-medium cursor-pointer">
                        SEE MORE
                        <i className="pl-2 ri-arrow-right-line"></i>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default MenuScroll;
