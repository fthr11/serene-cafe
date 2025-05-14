import Location from "/gallery/Location.webp";
import SectionTemplate from "../template/section-template";

const Section6 = () => {
    return (
        <>
            <SectionTemplate
                className = "mt-40"
                img = {Location}
                xImage ={"100%"}
                xText ={-50}
                flex= {"md:flex-row-reverse"}
                title= {"Location"}
                description1 = {"Serene Cafe has 5 branches, four are located in New York City and one is located in Brooklyn."}
                button = {"ALL LOCATIONS"}
            />
        </>
        // <div className="w-full bg-white text-[#221B1A] flex justify-center py-40">
        //     <div className="flex items-center gap-5 md:gap-25 flex-col-reverse md:flex-row md:w-[800px] lg:w-[1000px] xl:w-[1300px]">
        //         {/* Konten teks */}
        //         <div className="flex flex-col gap-5 text-[12px] md:text-[16px] px-5 md:px-0">
        //             <h1 className="text-3xl md:text-4xl lg:text-5xl text-start">
        //                 Location
        //             </h1>

        //             <p className="text-justify md:pt-5">
        //                 Serene Cafe has 5 branches, four are located in New York City and one is located in Brooklyn.
        //             </p>

        //             <span className="border rounded-full w-fit px-4 mt-3 font-medium cursor-pointer">
        //                 ALL LOCATION
        //                 <i className="pl-2 ri-arrow-right-line"></i>
        //             </span>
        //         </div>

        //         {/* Gambar tetap besar dan tidak mengecil */}
        //         <div className="relative px-3 md:px-0 w-[600px] md:w-[900px]">
        //             <img
        //                 className="w-full h-auto object-contain"
        //                 src={Location}
        //                 alt="Our Story"
        //             />
        //         </div>
        //     </div>
        // </div>
        );
    };
export default Section6;