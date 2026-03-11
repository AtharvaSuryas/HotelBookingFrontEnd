import axios from "axios";
import instance from "./axiosConfig";

export const loginUser = async (data) => {
    const response = await instance.post("/login", data);
    return response;
}

export const registerUser = async (data) => {
    const response = await instance.post("/register", data);
    return response;
}

export const resetOtp = async (data) => {
    const response = await instance.post("/send-reset-otp",data);
    return response;
}

export const resetPassword = async (data) => {
    const response = await instance.post("/reset-password",data);
    return response;
}