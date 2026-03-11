import { FaArrowRight } from "react-icons/fa";
import { CiGlobe, CiHeart, CiStar } from "react-icons/ci";
import aboutImg from '../assets/background.jpg';
// teamImg imports left intact in case you plan to use them later!
import teamImg1 from '../assets/feedback-img1.png';
import teamImg2 from '../assets/feedback-img2.png';
import teamImg3 from '../assets/feedback-img3.png';

function About() {
    return (
        <>
            {/* Added px-4 for mobile side-padding and adjusted min-height for mobile */}
            <div className="w-full min-h-[400px] md:min-h-[500px] bg-cover bg-center flex items-center justify-center px-4" style={{ backgroundImage: `url(${aboutImg})` }}>
                <div className="text-center">
                    {/* Scaled down text size for mobile (text-4xl) to desktop (md:text-6xl) */}
                    <h1 className="text-white text-4xl md:text-6xl font-bold">Redefining Luxury Travel</h1>
                    <p className="text-white mt-4 text-base md:text-lg">Experience the world's most exclusive hotels and resorts</p>
                    <p className="text-white text-base md:text-lg">with unparalleled service and attention to detail</p>
                </div>
            </div>

            {/* Adjusted padding: p-4 on mobile, md:p-10 on desktop */}
            <div className="bg-gray-100 w-full p-6 md:p-10 pb-20">
                <div className="max-w-6xl mx-auto">
                    
                    <div className="text-center mt-10 md:mt-16">
                        {/* Responsive headings and text */}
                        <h1 className="text-3xl md:text-5xl font-bold">Our Mission</h1>
                        <p className="text-gray-600 mt-4 md:mt-6 text-base md:text-lg max-w-3xl mx-auto">
                            At VoyageStay, we believe that travel is more than just a destination—it's an experience. 
                            Our mission is to connect discerning travelers with the world's most exceptional properties, 
                            ensuring every stay is memorable and transformative.
                        </p>
                    </div>

                    {/* Changed strictly 3 columns to 1 column on mobile, 3 on md and up */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-10 md:mt-16">
                        
                        <div className="bg-white rounded-[15px] p-6 md:p-8 text-center shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex justify-center mb-4">
                                <div className="bg-blue-50 rounded-full p-4">
                                    <CiGlobe className="w-8 h-8 md:w-10 md:h-10 text-blue-500" />
                                </div>
                            </div>
                            <h3 className="text-lg md:text-xl font-bold mb-3">Global Reach</h3>
                            <p className="text-gray-600 text-sm">
                                Access to over 10,000 handpicked properties across 150+ countries worldwide
                            </p>
                        </div>

                        <div className="bg-white rounded-[15px] p-6 md:p-8 text-center shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex justify-center mb-4">
                                <div className="bg-orange-50 rounded-full p-4">
                                    <CiHeart className="w-8 h-8 md:w-10 md:h-10 text-orange-500" />
                                </div>
                            </div>
                            <h3 className="text-lg md:text-xl font-bold mb-3">Personalized Service</h3>
                            <p className="text-gray-600 text-sm">
                                24/7 dedicated concierge team ensuring every detail of your stay is perfect
                            </p>
                        </div>

                        <div className="bg-white rounded-[15px] p-6 md:p-8 text-center shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex justify-center mb-4">
                                <div className="bg-purple-50 rounded-full p-4">
                                    <CiStar className="w-8 h-8 md:w-10 md:h-10 text-purple-500" />
                                </div>
                            </div>
                            <h3 className="text-lg md:text-xl font-bold mb-3">Exclusive Access</h3>
                            <p className="text-gray-600 text-sm">
                                Members-only rates, room upgrades, and special perks at luxury hotels
                            </p>
                        </div>
                    </div>

                    {/* Adjusted padding for mobile screens */}
                    <div className="mt-16 md:mt-20 bg-white rounded-[20px] p-8 md:p-12 shadow-sm">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 md:mb-8">Our Story</h2>
                            <p className="text-gray-600 mb-4 text-sm md:text-base leading-relaxed">
                                Founded in 2020, VoyageStay was born from a simple idea: luxury travel should be accessible, 
                                personalized, and unforgettable. Our founders, seasoned travelers themselves, recognized a gap 
                                in the market for a platform that truly understood what discerning guests wanted.
                            </p>
                            <p className="text-gray-600 mb-4 text-sm md:text-base leading-relaxed">
                                What started as a curated collection of 50 boutique hotels has grown into a global network 
                                of over 10,000 premium properties. But despite our growth, we've never lost sight of what 
                                matters most: creating extraordinary experiences for our guests.
                            </p>
                            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                Today, VoyageStay serves travelers in over 100 countries, facilitating more than 1 million 
                                bookings annually. But we're just getting started. Join us as we continue to redefine what 
                                luxury travel means in the modern world.
                            </p>
                        </div>
                    </div>

                    {/* Adjusted padding and text sizes for mobile */}
                    <div className="mt-16 md:mt-20 bg-gray-800 rounded-[20px] p-10 md:p-16 text-center shadow-lg">
                        <h2 className="text-white text-3xl md:text-4xl font-semibold mb-3 md:mb-4">Ready to Start Your Journey?</h2>
                        <p className="text-gray-400 mb-6 md:mb-8 text-sm md:text-base px-4">
                            Discover exclusive hotels and create unforgettable memories with VoyageStay
                        </p>
                        <button className="bg-white text-black hover:bg-gray-100 transition-colors rounded-[10px] px-6 py-3 flex items-center gap-2 mx-auto font-medium">
                            Explore Hotels
                            <FaArrowRight />
                        </button>
                    </div>

                </div>
            </div>
        </>
    );
}

export default About;