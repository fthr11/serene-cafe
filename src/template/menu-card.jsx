const MenuCard = ({image, title, imgClassName}) => {
    return(
        <div className="flex flex-col justify-center items-center text-black pt-4 md:pt-0">
            <img className={imgClassName} src={image} />
            <h1 className="text-lg md:text-2xl pt-5 ">{title}</h1>
        </div>
    )
}

export default MenuCard;