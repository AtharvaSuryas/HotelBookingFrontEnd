import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import expImg3 from '../assets/img3.jpg';
import expImg4 from '../assets/img4.jpg';
import expImg5 from '../assets/img5.jpg';
import expImg6 from '../assets/img6.png';
import expImg7 from '../assets/img7.jpg';
import expImg8 from '../assets/img8.webp';

const experiences = [
    { id: 1, tag: "Adventure", title: "Mountain Trekking", desc: "Explore breathtaking mountain trails with expert guides", expires: "Available Year-Round", img: expImg4 },
    { id: 2, tag: "Wellness", title: "Luxury Spa Retreat", desc: "Rejuvenate your mind and body with world-class spa treatments", expires: "Expires Oct 15", img: expImg3 },
    { id: 3, tag: "Culture", title: "City Heritage Tour", desc: "Discover the rich history and culture of iconic destinations worldwide", expires: "Expires Nov 30", img: expImg5 },
    { id: 4, tag: "Dining", title: "Fine Dining Experience", desc: "Savour exclusive menus curated by award-winning chefs", expires: "Available Year-Round", img: expImg6 },
    { id: 5, tag: "Water", title: "Ocean Safari", desc: "Dive into the deep blue with guided snorkeling and diving tours", expires: "Expires Sep 30", img: expImg7 },
    { id: 6, tag: "Leisure", title: "Sunset Yacht Cruise", desc: "Sail into the horizon on a private yacht with a curated dining experience", expires: "Expires Dec 31", img: expImg8 },
];

function Experience() {
    const navigate = useNavigate();

    return (
        <div className="bg-gray-100 w-full p-4 md:p-10 pb-20">
            <div className="max-w-7xl mx-auto">


                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mt-6 md:mt-10">
                    <div>
                        <h1 className="text-3xl md:text-5xl font-bold">Experiences</h1>

                        <p className="text-gray-600 mt-4 text-sm md:text-base max-w-2xl">
                            Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories.
                        </p>
                    </div>
                    <button onClick={() => navigate('/hotel')} className="flex items-center gap-2 mt-2 md:mt-0 text-gray-500 font-medium hover:text-orange-600 transition-colors">
                        <span>View All Experiences</span>
                        <FaArrowRight />
                    </button>
                </div>


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 md:mt-16">
                    {experiences.map(exp => (
                        <div
                            key={exp.id}    
                            className="bg-cover bg-center rounded-[15px] h-[300px] md:h-[260px] flex flex-col justify-between p-6 bg-black/40 bg-blend-overlay hover:shadow-lg transition-all hover:scale-[1.02]"
                            style={{ backgroundImage: `url(${exp.img})` }}
                        >
                            <div>
                                <span className="bg-white text-gray-800 font-medium text-xs md:text-sm px-3 py-1 rounded-[15px]">{exp.tag}</span>
                            </div>
                            <div>
                                <h2 className="text-white text-xl md:text-2xl font-bold">{exp.title}</h2>
                                <p className="text-white/90 mt-2 text-sm line-clamp-2">{exp.desc}</p>
                                <p className="text-white/80 text-xs mt-2">{exp.expires}</p>
                                <button onClick={() => navigate('/hotel')} className="flex items-center text-white mt-4 gap-2 text-sm font-medium hover:underline">
                                    <span>View Details</span>
                                    <FaArrowRight />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}

export default Experience;