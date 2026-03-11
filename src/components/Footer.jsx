import { useNavigate } from "react-router-dom";
import icon2 from '../assets/iconNav.png';
import { FaXTwitter, FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa6";

function Footer(){
     const navigate = useNavigate();
    return(
        <footer className="px-6 md:px-16 lg:px-24 xl:px-32 w-full bg-gray-50">
            <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30">

                <div className="max-w-sm">
                    <div className="flex items-center gap-3">
                        <img src={icon2} className='w-10 h-10' alt="VoyageStay" />
                        <span className="text-black text-2xl font-semibold">VoyageStay</span>
                    </div>
                    <p className="mt-6 text-sm text-gray-500">
                        Discover the world's most exclusive hotels and resorts. Unparalleled luxury and comfort await at every destination we offer.
                    </p>
                    <div className="flex items-center gap-3 mt-4">
                        <a href="/" className="text-black hover:text-gray-600"><FaXTwitter className="w-5 h-5" /></a>
                        <a href="/" className="text-black hover:text-gray-600"><FaInstagram className="w-5 h-5" /></a>
                        <a href="/" className="text-black hover:text-gray-600"><FaFacebookF className="w-5 h-5" /></a>
                        <a href="/" className="text-black hover:text-gray-600"><FaYoutube className="w-5 h-5" /></a>
                    </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 w-full md:w-auto">
                    <div>
                        <h2 className="font-semibold text-gray-900 mb-5">COMPANY</h2>
                        <ul className="text-sm text-gray-500 space-y-2 list-none">
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/">Careers</a></li>
                            <li><a href="/">Blog</a></li>
                            <li><a href="/">Press</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-semibold text-gray-900 mb-5">SUPPORT</h2>
                        <ul className="text-sm text-gray-500 space-y-2 list-none">
                            <li><a href="/">Help Center</a></li>
                            <li><a href="/">Contact Us</a></li>
                            <li><a href="/">Privacy Policy</a></li>
                            <li><a href="/">Terms of Service</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-semibold text-gray-900 mb-5">EXPLORE</h2>
                        <ul className="text-sm text-gray-500 space-y-2 list-none">
                            <li><a href="/">Home</a></li>
                            <li><a onClick={() => navigate('/hotel')}>Hotels</a></li>
                            <li><a onClick={() => navigate('/experience')}>Experiences</a></li>
                            <li><a onClick={() => navigate('/about')}>About</a></li>
                        </ul>
                    </div>
                </div>

            </div>
            <p className="py-4 text-center text-xs md:text-sm text-gray-500">
                © VoyageStay 2024. All Rights Reserved.
            </p>
        </footer>
    )
}

export default Footer;