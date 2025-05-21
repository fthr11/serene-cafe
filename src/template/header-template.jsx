const HeaderTemplate = ({height, img, title}) => {
    return (
        <div className={`relative ${height} w-full font-montserrat overflow-hidden items-center justify-center`}>
            <img 
                src={img} 
                alt="Hero" 
                className="w-full h-full object-cover brightness-50" 
            />
            <h1
                className="absolute text-white font-medium top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl" 
            >
                {title}
            </h1>
        </div>
    );
};

export default HeaderTemplate;
