import Logo from "/gallery/Logo.webp";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const [scrollY, setScrollY] = useState(false);
    const [isOpen, setIsopen] = useState(false);

    const toggleNavbar = () => {
        setIsopen(!isOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            {window.scrollY > 10 ? setScrollY(true): setScrollY(false)}
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Animasi container
    const menuVariants = {
        hidden: { y: "100%", opacity: 1 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut",
                when: "beforeChildren",
                staggerChildren: 0.2,
            },
        },
        exit: { y: "100%", opacity: 1, transition: { duration: 0.4 } },
    };

    // Animasi item
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    };

    const mobileNavbar = 
    [
        {
            id:"home",
            to: "/"     
        }, 
        {
            id:"about",
            to:"/about"
        }, 
        {
            id:"menu",
            to:"/menu"
        }, 
        {
            id:"contact",
            to:"/contact"
    }]
    return (
        <nav className={`w-full fixed transition-all z-100 duration-200 ${scrollY ? 'bg-[#B67136]' : 'bg-transparent md:py-6'}`}>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="md:hidden flex flex-col justify-center items-center min-h-screen bg-white text-black text-lg fixed top-0 left-0 w-full"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={menuVariants}
                    >
                        <i onClick={toggleNavbar} className="absolute ri-close-large-line right-5 top-5 text-2xl cursor-pointer"></i>
                        <motion.ul className="flex flex-col gap-10 text-center">
                            {
                                mobileNavbar.map((item, index) => (
                                <motion.li
                                    key={index}
                                    className="cursor-pointer"
                                    variants={itemVariants}
                                >
                                    <a href={item.to}>{item.id}</a>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="flex justify-center pt-2 pb-3 items-center text-white text-2xl">
                <li className="hidden md:flex md:gap-32 lg:gap-44 xl:gap-62">
                    <a href="/" className="text-start cursor-pointer">home</a>
                    <a href="/about" className="text-start cursor-pointer">about</a>
                    <img src={Logo} className="w-6 sm:w-auto cursor-pointer" />
                    <a href="/menu" className="text-start cursor-pointer">menu</a>
                    <a href="/contact" className="text-start cursor-pointer">contact</a>
                </li>

                <li className="md:hidden flex justify-between w-screen px-5">
                    <img src={Logo} className="w-10 sm:w-auto cursor-pointer" />
                    <i onClick={toggleNavbar} className="ri-menu-3-line text-3xl cursor-pointer"></i>
                </li>
            </div>
        </nav>
    );
};

export default Navbar;
