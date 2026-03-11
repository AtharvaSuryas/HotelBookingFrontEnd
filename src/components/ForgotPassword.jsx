import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import backgroundImg from '../assets/background.jpg';
import { CiMail } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";
import { resetOtp } from '../services/user_service';

function ResetPassword() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");
    const [newPassword, setnewPassword] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if(email == "") return;
        resetOtp({email})
        alert("OTP Sent on Email!");
    }


    return (
        <div className="w-full min-h-screen bg-cover bg-center flex items-center justify-center p-4" style={{ backgroundImage: `url(${backgroundImg})` }}>
            <div className="bg-white rounded-[20px] w-full max-w-[420px] p-6 sm:p-10 shadow-lg">
                <div className='text-center mb-6 sm:mb-8'>
                    <h1 className='text-2xl sm:text-3xl font-bold'>Forgot Password?</h1>
                    <p className="text-gray-500 mt-2 text-xs sm:text-sm">Enter your Email to receive one-time password to reset your  account's password.</p>
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

                    <button
                        type="submit"
                        className="bg-black hover:bg-gray-800 transition-colors text-white w-full rounded-[10px] p-3 flex items-center justify-center gap-2 font-medium"
                    >
                        Get OTP
                        <FaArrowRight />
                    </button>
                </form>
            </div>
        </div>

    )

}

export default ResetPassword;