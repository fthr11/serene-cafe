const MenuCard = ({image, title, imgClassName}) => {
    return(
        <div className="flex flex-col justify-center items-center text-black">
            <img className={imgClassName} src={image} />
            <h1 className="text-sm md:text-2xl pt-5 ">{title}</h1>
        </div>
    )
}

export default MenuCard;