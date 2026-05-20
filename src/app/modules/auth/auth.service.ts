import ApiError from "../../utils/AppError.js"
import { User } from "../user/user.model.js"
import type { TLoginUser } from "./auth.interface.js"
import httpStatus from "http-status"
import bcrypt from "bcrypt"




const loginUser = async (payload: TLoginUser) => {
    const user = await User.findOne({ email: payload.email })

    if (!user) {
        throw new ApiError(httpStatus.NOT_FOUND, "User not found")
    };

    const isUserDeleted = user.isDeleted

    if (isUserDeleted) {
        throw new ApiError(httpStatus.FORBIDDEN, "You are Blocked ")
    };
    if (user?.status == "inactive") {
        throw new ApiError(httpStatus.FORBIDDEN, "You are Blocked ")
    };


    const isPasswordMatched = await bcrypt.compare(payload.password, user.password);

    if (!isPasswordMatched) {
        throw new ApiError(httpStatus.UNAUTHORIZED, "Invalid password")
    };


    const jwtPayload = {
        userId: user._id,
        role: user.role,
    };


};


export const AuthService = {
    loginUser,
};
