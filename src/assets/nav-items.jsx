import { motion } from "framer-motion";

const NavItems = ({children,href}) => {
    return (
        <motion.div className="group relative inline-block">
            <a
                href={href}
                className="cursor-pointer text-white relative after:content-[''] after:absolute after:right-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 group-hover:after:w-full"
            >
                {children}
            </a>
        </motion.div>
    )
}
export default NavItems;