import { CiCalendar } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import backgroundImg from '../assets/background.jpg';
import hotelImg from '../assets/hotel-img.jpg';
import hotelImg2 from '../assets/hotel-img2.webp';
import hotelImg3 from '../assets/hotel-img3.jpg';
import hotelImg4 from '../assets/hotel-img4.jpg';
import offerImg1 from '../assets/img1.jpg'
import offerImg2 from '../assets/img2.jpg';
import offerImg3 from '../assets/img3.jpg';
import feedbackImg1 from '../assets/feedback-img1.png';
import feedbackImg2 from '../assets/feedback-img2.png';
import feedbackImg3 from '../assets/feedback-img3.png';


function Hero() {
    const navigate = useNavigate();

    return (
        <>
            {/* Hero Section */}
            <div className="w-full min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImg})` }}>
                <div className="pt-20 px-6 sm:px-10 md:px-20">
                    <button className="mt-10 sm:mt-16 md:mt-20 lg:mt-50 bg-blue-400 text-white rounded-[20px] p-2 px-4 text-sm">
                        The Ultimate Hotel Experience
                    </button>
                    <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-4">Discover Your Perfect</h1>
                    <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-2">Gateway Destination</h1>
                    <p className="text-white mt-4 text-base lg:text-lg">Unparalleled luxury and comfort await at the world's most exclusive</p>
                    <p className="text-white text-base lg:text-lg">hotels and resorts. Start your journey today.</p>
                </div>

                {/* Search Bar */}
                <div className="bg-white rounded-[20px] p-6 mt-10 md:mt-20 mx-6 sm:mx-10 md:mx-20 max-w-[800px]">
                    <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-end gap-4 sm:gap-6">
                        <div className="flex flex-col w-full sm:w-auto">
                            <label className="text-gray-600 mb-2 flex items-center text-sm">
                                <CiCalendar className="me-2" />
                                Destination
                            </label>
                            <input type="text" placeholder="Type here" className="border border-gray-300 rounded p-2 w-full sm:w-[150px]" />
                        </div>

                        <div className="flex flex-col w-full sm:w-auto">
                            <label className="text-gray-600 mb-2 flex items-center text-sm">
                                <CiCalendar className="me-2" />
                                Check in
                            </label>
                            <input type="date" className="border border-gray-300 rounded p-2 w-full sm:w-[150px]" />
                        </div>

                        <div className="flex flex-col w-full sm:w-auto">
                            <label className="text-gray-600 mb-2 flex items-center text-sm">
                                <CiCalendar className="me-2" />
                                Check out
                            </label>
                            <input type="date" className="border border-gray-300 rounded p-2 w-full sm:w-[150px]" />
                        </div>

                        <div className="flex flex-col w-full sm:w-auto">
                            <label className="text-gray-600 mb-2 flex items-center text-sm">
                                <CiUser className="me-2" />
                                Guests
                            </label>
                            <input type="number" placeholder="0" className="border border-gray-300 rounded p-2 w-full sm:w-[100px]" />
                        </div>

                        <button className="bg-black text-white rounded-[10px] p-3 px-6 w-full sm:w-auto">
                            Search
                        </button>
                    </div>
                </div>
            </div>

            {/* Featured Destinations */}
            <div className="bg-gray-100 w-full p-6 sm:p-10">
                <div className="text-center mt-6 sm:mt-10">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Featured Destination</h1>
                    <p className="text-gray-600 mt-4 text-sm sm:text-base px-4">
                        Discover our handpicked selection of exceptional properties around the world, offering unparalleled luxury and unforgettable experiences.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-items-center gap-6 mt-10 sm:mt-16 max-w-7xl mx-auto">
                    {[
                        { img: hotelImg, name: "Urbanza Suites", rating: 4.5, price: "$399" },
                        { img: hotelImg2, name: "Novotel Geneve", rating: 4.7, price: "$299" },
                        { img: hotelImg3, name: "Royale Plaza", rating: 4.4, price: "$249" },
                        { img: hotelImg4, name: "San Lorenzo", rating: 4.8, price: "$349" },
                    ].map(({ img, name, rating, price }) => (
                        <div key={name} className="bg-white rounded-[15px] w-full max-w-[320px] p-4">
                            <div className="relative">
                                <img src={img} className="rounded-[10px] w-full h-[200px] object-cover" alt={name} />
                                <span className="absolute top-2 left-2 bg-white text-sm px-3 py-1 rounded-[15px]">Best Seller</span>
                            </div>
                            <div className="mt-4">
                                <div className="flex justify-between items-center">
                                    <h3 className="font-bold text-xl">{name}</h3>
                                    <div className="flex items-center">
                                        <FaStar className="text-orange-500" />
                                        <span className="ms-1">{rating}</span>
                                    </div>
                                </div>
                                <div className="flex items-center mt-2 text-gray-600">
                                    <CiLocationOn />
                                    <span className="ms-1 text-sm">Main Road 123 Street , 23 Colony</span>
                                </div>
                                <div className="flex justify-between items-center mt-4">
                                    <div>
                                        <span className="text-2xl font-bold">{price}</span>
                                        <span className="text-gray-600">/night</span>
                                    </div>
                                    <button className="border border-gray-300 rounded-[8px] px-4 py-2">Book Now</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mt-10">
                    <button onClick={() => navigate('/hotel')} className="border border-black rounded-[8px] px-6 py-3">
                        View All Destinations
                    </button>
                </div>
            </div>

            {/* Exclusive Offers */}
            <div className="bg-gray-100 w-full p-6 sm:p-10 pb-16 sm:pb-20">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-6 sm:mt-10">
                        <div>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Exclusive Offers</h1>
                            <p className="text-gray-600 mt-4 text-sm sm:text-base">
                                Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories.
                            </p>
                        </div>
                        <button onClick={() => navigate('/experience')} className="flex items-center whitespace-nowrap">
                            <span className="me-2">View All Offers</span>
                            <FaArrowRight />
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 sm:mt-16">
                        {[
                            { img: offerImg1, discount: "25% OFF", title: "Summer Escape Package", desc: "Enjoy a complimentary night and daily breakfast", expires: "Expires Aug 31" },
                            { img: offerImg2, discount: "20% OFF", title: "Romantic Getaway", desc: "Special couples package including spa treatment", expires: "Expires Sep 20" },
                            { img: offerImg3, discount: "30% OFF", title: "Luxury Retreat", desc: "Book 60 days in advance and save on your stay at any of our luxury properties worldwide.", expires: "Expires Sep 25" },
                        ].map(({ img, discount, title, desc, expires }) => (
                            <div
                                key={title}
                                className="bg-cover bg-center rounded-[15px] h-[250px] flex flex-col justify-between p-6"
                                style={{ backgroundImage: `url(${img})` }}
                            >
                                <div>
                                    <span className="bg-white text-sm px-3 py-1 rounded-[15px]">{discount}</span>
                                </div>
                                <div>
                                    <h2 className="text-white text-2xl sm:text-3xl font-bold">{title}</h2>
                                    <p className="text-white mt-2 text-sm sm:text-base">{desc}</p>
                                    <p className="text-white text-sm mt-2">{expires}</p>
                                    <button onClick={() => navigate('/experience')} className="flex items-center text-white mt-3">
                                        <span className="me-2">View Offers</span>
                                        <FaArrowRight />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Testimonials */}
            <div className="bg-gray-100 w-full p-6 sm:p-10 pb-16 sm:pb-20">
                <div className="text-center mt-6 sm:mt-10">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">What Our Guests Say</h1>
                    <p className="text-gray-600 mt-4 text-sm sm:text-base px-4">
                        Discover why discerning travelers consistently choose QuickStay for their exclusive and luxurious stays.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 sm:mt-16 max-w-7xl mx-auto">
                    {[
                        { img: feedbackImg1, name: "Liam Johnson", review: "\"I've used many booking platforms before, but none compare to the personalized experience and attention to detail that QuickStay provides. Their curated selection of hotels is unmatched.\"" },
                        { img: feedbackImg2, name: "Sophia Lee", review: "\"I have tried countless travel apps previously, yet nothing rivals the customized service and unique focus on quality found at QuickStay. Their exclusive portfolio of accommodations is truly superior.\"" },
                        { img: feedbackImg3, name: "Stan Rodriguez", review: "\"After testing numerous reservation sites lately, I find the tailored approach and dedicated support at QuickStay superior. The hand-picked assortment of resorts is honestly in a league of its own.\"" },
                    ].map(({ img, name, review }) => (
                        <div key={name} className="bg-white rounded-[15px] p-6">
                            <div className="flex items-center gap-4 mb-4">
                                <img src={img} alt={name} className="w-12 h-12 rounded-full object-cover" />
                                <h5 className="text-black font-semibold">{name}</h5>
                            </div>
                            <div className="flex items-center gap-1 mb-4">
                                <FaStar className="text-orange-500" />
                                <FaStar className="text-orange-500" />
                                <FaStar className="text-orange-500" />
                                <FaStar className="text-orange-500" />
                                <FaStarHalfAlt className="text-orange-500" />
                            </div>
                            <p className="text-gray-700">{review}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Newsletter */}
            <div className="bg-gray-100 w-full p-6 sm:p-10 pb-16 sm:pb-20">
                <div className="max-w-6xl mx-auto">
                    <div className="bg-gray-800 rounded-[20px] p-8 sm:p-16 text-center">
                        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-semibold">Stay Inspired</h1>
                        <p className="text-gray-400 mt-4 text-sm sm:text-base px-4">
                            Join our newsletter and be the first to discover new destinations, exclusive offers, and travel inspiration.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-gray-700 text-white placeholder-gray-400 rounded-[10px] px-6 py-3 w-full sm:w-[300px] focus:outline-none"
                            />
                            <button className="bg-black text-white rounded-[10px] px-6 py-3 flex items-center gap-2 w-full sm:w-auto justify-center">
                                Subscribe
                                <FaArrowRight />
                            </button>
                        </div>

                        <p className="text-gray-500 text-sm mt-4">By subscribing, you agree to our Privacy Policy and consent to receive updates.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;