const HeaderTemplate = ({height, img, titleImg}) => {
    return (
        <div className={`relative ${height} w-full overflow-hidden`}>
            <img 
                src={img} 
                alt="Hero" 
                className="w-full h-full object-cover" 
            />
            <img 
                src={titleImg} 
                alt="Title Logo"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120px] md:w-[250px] sm:w-[20px]" 
            />
        </div>
    );
};

export default HeaderTemplate;
