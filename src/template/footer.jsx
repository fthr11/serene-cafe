const Footer = () => {
    return (
    <footer className="w-full bg-[#B67136] text-white flex justify-center py-10">
        <div className="flex gap-5 md:gap-100 flex-col md:flex-row w-full px-4 md:px-0 md:w-[800px] lg:w-[1000px] xl:w-[1300px]">
            {/* Brand Info */}
            <div>
                <h2 className="text-xl font-bold mb-2">Kafe Nikmat</h2>
                <p className="text-sm ">Tempat ngopi dan ngobrol santai terbaik di kota.</p>
            </div>

            {/* Navigation Links */}
            <div>
                <h3 className="text-lg font-semibold mb-2">Navigasi</h3>
                <ul className="text-sm space-y-1">
                    <li><a href="/" className="hover:text-white">Beranda</a></li>
                    <li><a href="/menu" className="hover:text-white">Menu</a></li>
                    <li><a href="/tentang" className="hover:text-white">Tentang Kami</a></li>
                    <li><a href="/kontak" className="hover:text-white">Kontak</a></li>
                </ul>
            </div>

             {/* Social Media */}
            <div>
                <h3 className="text-lg font-semibold mb-2">Ikuti Kami</h3>
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
                    <a href="https://wa.me/628123456789" target="_blank" rel="noreferrer" className="hover:text-green-400">
                        <i className="ri-whatsapp-line"></i>
                    </a>
                </div>
            </div>
        </div>
    </footer>
    );
};

export default Footer;