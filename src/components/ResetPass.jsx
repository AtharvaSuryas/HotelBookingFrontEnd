import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { CiMail, CiLock } from "react-icons/ci";
import { MdOutlinePassword } from "react-icons/md";
import backgroundImg from '../assets/background.jpg';
import { resetOtp } from "../services/user_service";
import { resetPassword } from "../services/user_service";

function ForgotPassword() {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleEmailSubmit = (e) => {
        e.preventDefault();
        if (!email) return;
        setLoading(true);
        resetOtp({email});
        setTimeout(() => {
            setLoading(false);
            setStep(2);
        }, 800);
    };

    const handleResetSubmit = (e) => {
        e.preventDefault();
        if (!otp || !newPassword) return;
        setLoading(true);
        resetPassword({email,otp,newPassword});
        setTimeout(() => {
            setLoading(false);
            alert("Password reset successful!");
            navigate("/login");
        }, 800);
    };

    return (
        <div
            className="w-full min-h-screen bg-cover bg-center flex items-center justify-center p-4"
            style={{ backgroundImage: `url(${backgroundImg})` }}
        >
            <div className="bg-white rounded-[20px] w-full max-w-[420px] p-6 sm:p-10 shadow-lg">


                <div className="flex justify-center gap-2 mb-6">
                    <span className={`h-2 rounded-full transition-all duration-300 ${step === 1 ? "w-6 bg-black" : "w-2 bg-gray-300"}`} />
                    <span className={`h-2 rounded-full transition-all duration-300 ${step === 2 ? "w-6 bg-black" : "w-2 bg-gray-300"}`} />
                </div>


                {step === 1 && (
                    <>
                        <div className="text-center mb-6 sm:mb-8">
                            <h1 className="text-2xl sm:text-3xl font-bold">Forgot Password?</h1>
                            <p className="text-gray-500 mt-2 text-xs sm:text-sm">
                                Enter your email and we'll send you a one-time code
                            </p>
                        </div>

                        <form onSubmit={handleEmailSubmit}>
                            <div className="flex flex-col mb-6">
                                <label className="text-gray-600 mb-2 flex items-center gap-2 text-sm">
                                    <CiMail />
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="border border-gray-300 rounded-[8px] p-3 text-sm focus:outline-none focus:border-gray-400 w-full"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="bg-black hover:bg-gray-800 disabled:bg-gray-400 transition-colors text-white w-full rounded-[10px] p-3 flex items-center justify-center gap-2 font-medium"
                            >
                                {loading ? "Sending..." : "Send OTP"}
                                {!loading && <FaArrowRight />}
                            </button>
                        </form>
                    </>
                )}


                {step === 2 && (
                    <>
                        <div className="text-center mb-6 sm:mb-8">
                            <h1 className="text-2xl sm:text-3xl font-bold">Reset Password</h1>
                            <p className="text-gray-500 mt-2 text-xs sm:text-sm">
                                Enter the OTP sent to <span className="text-black font-medium">{email}</span>
                            </p>
                        </div>

                        <form onSubmit={handleResetSubmit}>
                            <div className="flex flex-col mb-4">
                                <label className="text-gray-600 mb-2 flex items-center gap-2 text-sm">
                                    <CiMail />
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    value={email}
                                    readOnly
                                    className="border border-gray-200 bg-gray-50 rounded-[8px] p-3 text-sm text-gray-400 w-full cursor-not-allowed"
                                />
                            </div>


                            <div className="flex flex-col mb-4">
                                <label className="text-gray-600 mb-2 flex items-center gap-2 text-sm">
                                    <MdOutlinePassword />
                                    One-Time Password (OTP)
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter the OTP"
                                    value={otp}
                                    onChange={(e) => setOtp(e.target.value)}
                                    required
                                    maxLength={6}
                                    className="border border-gray-300 rounded-[8px] p-3 text-sm focus:outline-none focus:border-gray-400 w-full tracking-widest"
                                />
                            </div>


                            <div className="flex flex-col mb-6">
                                <label className="text-gray-600 mb-2 flex items-center gap-2 text-sm">
                                    <CiLock />
                                    New Password
                                </label>
                                <input
                                    type="password"
                                    placeholder="Enter new password"
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    required
                                    className="border border-gray-300 rounded-[8px] p-3 text-sm focus:outline-none focus:border-gray-400 w-full"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="bg-black hover:bg-gray-800 disabled:bg-gray-400 transition-colors text-white w-full rounded-[10px] p-3 flex items-center justify-center gap-2 font-medium"
                            >
                                {loading ? "Resetting..." : "Reset Password"}
                                {!loading && <FaArrowRight />}
                            </button>
                        </form>

                        <button
                            onClick={() => setStep(1)}
                            className="w-full text-center text-xs sm:text-sm text-gray-400 hover:text-gray-600 transition-colors mt-4"
                        >
                            ← Change email address
                        </button>
                    </>
                )}

                <p className="text-center text-xs sm:text-sm text-gray-400 mt-6">
                    Remember your password?{" "}
                    <button onClick={() => navigate('/login')} className="text-black font-semibold hover:underline">
                        Sign in
                    </button>
                </p>

            </div>
        </div>
    );
}

export default ForgotPassword;