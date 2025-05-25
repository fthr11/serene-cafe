import TitleLogo from "/gallery/TitleLogo.webp"

const Footer = () => {
    return (
    <footer className="w-full bg-[#B67136] text-white flex justify-center py-10">
        <div className="flex gap-5 md:gap-40 flex-col md:flex-row w-full px-4 md:px-0 md:w-[800px] lg:w-[1000px] xl:w-[1300px]">
            {/* Brand Info */}
            <div>
                <img className="w-[140px]" src={TitleLogo}/>

            </div>

            {/* Navigation Links */}
            <div className="flex flex-col">
                <h3 className="text-lg font-semibold mb-2">LINKS</h3>
                <div className="text-lg space-x-40 flex flex-row">
                    <ul>
                        <li><a href="/" className="hover:underline">Homepage</a></li>
                        <li><a href="/menu" className="hover:underline">Menu</a></li>
                        <li><a href="/menu" className="hover:underline">About</a></li>
                    </ul>
                    
                    <ul>
                        <li><a href="/tentang" className="hover:underline">Contacts</a></li>
                        <li><a href="https://maps.app.goo.gl/aNChpr6Q6JmZPoBk6"  className="hover:underline">Locations</a></li>    
                    </ul>
                </div>
            </div>

             {/* Social Media */}
            <div className="text-lg">
                <h3 className="font-semibold mb-2">Contacs</h3>
                <p  className="hover:underline">Serenecafe@gmail.com</p>
            </div>

            <div>
                <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
                <div className="flex space-x-4 text-2xl">
                    <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-blue-500">
                        <i className="ri-facebook-fill"></i>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-pink-500">
                        <i className="ri-instagram-line"></i>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-sky-400">
                        <i className="ri-twitter-x-line"></i>
                    </a>
                </div>
            </div>
        </div>
    </footer>
    );
};

export default Footer;