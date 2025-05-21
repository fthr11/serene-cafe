import { motion } from "framer-motion"

const MenuTemplate = ({mapping, title}) => {
    return(
        <div className="flex justify-center items-center w-full bg-white text-[#221B1A] py-20 md:py-40 ">
            <motion.div
                initial={{ opacity: 0, y: 150 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: .5 }}
                viewport={{ once : true }}
                className="gap-10 flex flex-col flex-wrap items-center justify-center  max-w-[1300px]"
            >
                {/* Menu - Judulnya */}
                <div className="w-full px-4 text-3xl md:text-4xl lg:text-5xl text-left">
                    {title}
                </div>
        
                {/* Gambar-Gambar di menu */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 w-full px-4 ease-in-out">
                    {mapping}
                </div>
            </motion.div>
        </div>
    )
}

export default MenuTemplate;



