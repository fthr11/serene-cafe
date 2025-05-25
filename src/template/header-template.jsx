const HeaderTemplate = ({img, title}) => {
    return (
        <div className={`relative h-[150px] md:h-[200px] lg:h-[400px] w-full overflow-hidden items-center justify-center`}>
            <img 
                src={img} 
                alt="Hero" 
                className="w-full h-full object-cover brightness-50" 
            />
            <h1 
                className="absolute text-white tracking-[15px] font-montserrat font-thin top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl" 
            >
                {title}
            </h1>
        </div>
    );
};

export default HeaderTemplate;
