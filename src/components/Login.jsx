import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
// import axios from 'axios';
import backgroundImg from '../assets/background.jpg';
import { loginUser } from "../services/user_service";

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = () => {
        // e.preventDefault();
        alert("Login Successful")
        const data = {
            email,
            password
        }
        loginUser(data)


    };

    return (

        <div className="w-full min-h-screen bg-cover bg-center flex items-center justify-center p-4" style={{ backgroundImage: `url(${backgroundImg})` }}>

 
            <div className="bg-white rounded-[20px] w-full max-w-[420px] p-6 sm:p-10 shadow-lg">

                <div className="text-center mb-6 sm:mb-8">

                    <h1 className="text-2xl sm:text-3xl font-bold">Welcome Back</h1>
                    <p className="text-gray-500 mt-2 text-xs sm:text-sm">Sign in to access your bookings and exclusive offers</p>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col mb-4">
                        <label className="text-gray-600 mb-2 flex items-center gap-2 text-sm">
                            <CiMail />
                            Email Address
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="border border-gray-300 rounded-[8px] p-3 text-sm focus:outline-none focus:border-gray-400 w-full"
                        />
                    </div>

                    <div className="flex flex-col mb-2">
                        <label className="text-gray-600 mb-2 flex items-center gap-2 text-sm">
                            <CiLock />
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="border border-gray-300 rounded-[8px] p-3 text-sm focus:outline-none focus:border-gray-400 w-full"
                        />
                    </div>

                    <div className="flex justify-end mb-6">
                        <button type="button" onClick={() => navigate('/forgotpassword')} className="text-xs sm:text-sm text-gray-400 hover:text-gray-600 transition-colors">Forgot password?</button>
                    </div>

                    <button
                        type="submit"
                        className="bg-black hover:bg-gray-800 transition-colors text-white w-full rounded-[10px] p-3 flex items-center justify-center gap-2 font-medium"
                    >
                        Sign In
                        <FaArrowRight />
                    </button>
                </form>

                <div className="flex items-center gap-4 my-6">
                    <hr className="flex-1 border-gray-200" />
                    <span className="text-gray-400 text-xs sm:text-sm">or</span>
                    <hr className="flex-1 border-gray-200" />
                </div>

                <button className="w-full border border-gray-300 rounded-[10px] p-3 flex items-center justify-center gap-3 text-sm text-gray-600 hover:bg-gray-50 transition-colors">
                    <img src="https://www.google.com/favicon.ico" alt="Google Logo" className="w-4 h-4" />
                    Continue with Google
                </button>

                <p className="text-center text-xs sm:text-sm text-gray-400 mt-6">
                    Don't have an account?{" "}
                    <button onClick={() => navigate('/register')} className="text-black font-semibold hover:underline">Sign up</button>
                </p>

            </div>

        </div>
    );
}

export default Login;