import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import hotelImg from '../assets/hotel-img.jpg';
import hotelImg2 from '../assets/hotel-img2.webp';
import hotelImg3 from '../assets/hotel-img3.jpg';
import hotelImg4 from '../assets/hotel-img4.jpg';

const hotels = [
    { id: 1, city: "New York", name: "Urbanza Suites", rating: 4, reviews: "200+", address: "Main Road 123 Street , 23 Colony", amenities: ["Room Service", "Mountain View", "Pool Access"], price: 399, type: "Luxury Room", img: hotelImg },
    { id: 2, city: "New York", name: "Novotel Geneve", rating: 4, reviews: "200+", address: "Main Road 123 Street , 23 Colony", amenities: ["Room Service", "Mountain View", "Pool Access"], price: 299, type: "Double Bed", img: hotelImg2 },
    { id: 3, city: "New York", name: "Royale Plaza", rating: 3, reviews: "150+", address: "Main Road 123 Street , 23 Colony", amenities: ["Room Service", "Pool Access"], price: 199, type: "Single Bed", img: hotelImg3 },
    { id: 4, city: "New York", name: "San Lorenzo", rating: 5, reviews: "190+", address: "Main Road 123 Street , 23 Colony", amenities: ["Room Service","Mountain View"], price: 359, type: "Luxury Room", img: hotelImg4 },
];

const roomTypes = ["Single Bed", "Double Bed", "Luxury Room", "Family Suite"];
const priceRanges = ["$0 to 500", "$500 to 1000", "$1000 to 2000", "$2000 to 3000"];
const sortOptions = ["Price Low to High", "Price High to Low", "Newest First"];

function Hotel() {
    const [types, setTypes] = useState([]);
    const [prices, setPrices] = useState([]);
    const [sort, setSort] = useState("");

    const toggle = (list, setList, val) =>
        setList(list.includes(val) ? list.filter(v => v !== val) : [...list, val]);

    const filtered = hotels
        .filter(h => types.length === 0 || types.includes(h.type))
        .filter(h => prices.length === 0 || prices.some(r => {
            const [lo, hi] = r.replace(/\$/g, "").split(" to ").map(Number);
            return h.price >= lo && h.price <= hi;
        }))
        .sort((a, b) =>
            sort === "Price Low to High" ? a.price - b.price :
            sort === "Price High to Low" ? b.price - a.price : 0
        );

    return (
        <div className="bg-gray-100 w-full p-4 md:p-10 pb-20">
            <div className="max-w-7xl mx-auto">

                <div className="mt-6 md:mt-10 text-center md:text-left">
                    <h1 className="text-3xl md:text-5xl font-bold">Hotel Rooms</h1>
                    <p className="text-gray-600 mt-4 text-sm md:text-base">Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories.</p>
                </div>


                <div className="flex flex-col lg:flex-row gap-8 mt-10 md:mt-16 items-start">

                    
                    <div className="flex-1 w-full">
                        {filtered.length > 0 ? filtered.map(h => (
                            <div key={h.id} className="bg-white rounded-[15px] p-4 flex flex-col md:flex-row gap-4 md:gap-6 mb-6 shadow-sm hover:shadow-md transition-shadow">
                                <img src={h.img} className="rounded-[10px] w-full md:w-[250px] h-[200px] md:h-[170px] object-cover flex-shrink-0" alt={h.name} />
                                
                                <div className="flex-1 flex flex-col justify-between">
                                    <div>
                                        <p className="text-gray-400 text-sm">{h.city}</p>
                                        <h3 className="font-bold text-xl md:text-2xl mt-1">{h.name}</h3>
                                        
                                        <div className="flex items-center gap-1 mt-2">
                                            {[1,2,3,4,5].map(i => (
                                                <FaStar key={i} className={i <= h.rating ? "text-orange-500" : "text-gray-200"} />
                                            ))}
                                            <span className="text-gray-400 text-sm ms-1">{h.reviews} reviews</span>
                                        </div>
                                        
                                        <div className="flex items-center mt-2 text-gray-500">
                                            <CiLocationOn className="flex-shrink-0" />
                                            <span className="ms-1 text-sm line-clamp-1">{h.address}</span>
                                        </div>
                                        
                                        <div className="flex flex-wrap gap-2 mt-3">
                                            {h.amenities.map(a => (
                                                <span key={a} className="border border-gray-200 rounded-[15px] px-3 py-1 text-xs text-gray-500">{a}</span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex flex-row justify-between items-center mt-6 md:mt-4 pt-4 md:pt-0 border-t md:border-t-0 border-gray-100">
                                        <div>
                                            <span className="text-2xl font-bold">${h.price}</span>
                                            <span className="text-gray-500 text-sm">/night</span>
                                        </div>
                                        <button className="bg-orange-500 text-white md:bg-transparent md:text-black border border-orange-500 md:border-gray-300 hover:bg-orange-600 md:hover:bg-gray-50 rounded-[8px] px-5 py-2 text-sm font-medium transition-colors">Book Now</button>
                                    </div>
                                </div>
                            </div>
                        )) : (
                            <p className="text-center text-gray-400 py-20 bg-white rounded-[15px] shadow-sm">No hotels match your filters.</p>
                        )}
                    </div>


                    <div className="w-full lg:w-64 flex-shrink-0 bg-white rounded-[15px] p-6 border border-gray-200 lg:sticky lg:top-8 shadow-sm">
                        <div className="flex justify-between items-center mb-5">
                            <span className="font-semibold text-gray-700">FILTERS</span>
                            <button onClick={() => { setTypes([]); setPrices([]); setSort(""); }} className="text-sm text-gray-400 hover:text-gray-600 font-medium">CLEAR</button>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-x-8 gap-y-0">
                            <div>
                                <p className="font-semibold text-gray-700 mb-3 mt-2 lg:mt-0">Room Type</p>
                                <div className="flex flex-col gap-2 mb-6">
                                    {roomTypes.map(t => (
                                        <label key={t} className="flex items-center gap-2 cursor-pointer">
                                            <input type="checkbox" checked={types.includes(t)} onChange={() => toggle(types, setTypes, t)} className="accent-orange-500 w-4 h-4" />
                                            <span className="text-sm text-gray-500">{t}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <hr className="border-gray-100 mb-5 block sm:hidden lg:block" />
                                <p className="font-semibold text-gray-700 mb-3">Price Range</p>
                                <div className="flex flex-col gap-2 mb-6">
                                    {priceRanges.map(r => (
                                        <label key={r} className="flex items-center gap-2 cursor-pointer">
                                            <input type="checkbox" checked={prices.includes(r)} onChange={() => toggle(prices, setPrices, r)} className="accent-orange-500 w-4 h-4" />
                                            <span className="text-sm text-gray-500">{r}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className="sm:col-span-2 lg:col-span-1">
                                <hr className="border-gray-100 mb-5" />
                                <p className="font-semibold text-gray-700 mb-3">Sort By</p>
                                <div className="flex flex-col sm:flex-row lg:flex-col gap-4 sm:gap-6 lg:gap-2">
                                    {sortOptions.map(o => (
                                        <label key={o} className="flex items-center gap-2 cursor-pointer">
                                            <input type="radio" name="sort" checked={sort === o} onChange={() => setSort(sort === o ? "" : o)} className="accent-orange-500 w-4 h-4" />
                                            <span className="text-sm text-gray-500">{o}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Hotel;