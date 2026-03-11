import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import icon2 from '../assets/iconNav.png';
import { CiSearch } from "react-icons/ci";
import { HiMenu, HiX } from "react-icons/hi";

function Navbar(){
    const navigate = useNavigate();
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu on route change / outside scroll
    useEffect(() => {
        if (menuOpen) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = '';
        return () => { document.body.style.overflow = ''; };
    }, [menuOpen]);

    const textColor = scrolled ? "text-black" : "text-white";
    const navLinks = [
        { label: "Home", href: "/" },
        { label: "Hotel", href: "/hotel" },
        { label: "Experience", href: "/experience" },
        { label: "About", href: "/about" },
    ];

    return (
        <>
            <nav className={`flex w-full fixed top-0 z-50 h-16 items-center justify-between px-6 md:px-10 transition-all duration-300 ${scrolled ? "bg-white shadow-md" : "bg-black/50"}`}>

                <div className="flex items-center gap-3">
                    <img src={icon2} className={`w-10 h-10 ${scrolled ? "" : "invert"}`} alt="VoyageStay" />
                    <span className={`text-xl font-semibold ${textColor}`}>VoyageStay</span>
                </div>


                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map(({ label, href }) => (
                        <a key={label} onClick={()=> navigate(href)} className={`${textColor} hover:opacity-70 transition-opacity`}>{label}</a>
                    ))}
                </div>

                <div className="hidden md:flex items-center gap-4">
                    <CiSearch className={`w-6 h-6 ${textColor}`} />
                    <button
                        onClick={() => navigate('/login')}
                        className={`rounded-[30px] px-6 py-2 transition-colors ${scrolled ? "bg-black text-white" : "bg-white text-black"}`}
                    >
                        Login
                    </button>
                </div>

                <div className="flex md:hidden items-center gap-4">
                    <CiSearch className={`w-6 h-6 ${textColor}`} />
                    <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
                        {menuOpen
                            ? <HiX className={`w-6 h-6 ${textColor}`} />
                            : <HiMenu className={`w-6 h-6 ${textColor}`} />
                        }
                    </button>
                </div>
            </nav>


            <div className={`fixed inset-0 z-40 bg-white flex flex-col pt-20 px-8 transition-transform duration-300 md:hidden ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>
                <nav className="flex flex-col gap-6 mt-4">
                    {navLinks.map(({ label, href }) => (
                        <a
                            key={label}
                            href={href}
                            onClick={() => setMenuOpen(false)}
                            className="text-black text-2xl font-medium border-b border-gray-100 pb-4 hover:text-gray-500 transition-colors"
                        >
                            {label}
                        </a>
                    ))}
                </nav>
                <button
                    onClick={() => { navigate('/login'); setMenuOpen(false); }}
                    className="mt-8 bg-black text-white rounded-[30px] px-6 py-3 text-lg w-full"
                >
                    Login
                </button>
            </div>
        </>
    );
}

export default Navbar;