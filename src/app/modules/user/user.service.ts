import ApiError from "../../utils/AppError.js";
import { Client } from "../client/client.model.js";
import { Lawyer } from "../lawyer/lawyer.model.js";
import { User } from "./user.model.js";
import bcrypt from "bcrypt";    
import  httpStatus  from "http-status";

const getAllUsersFromDB = async () => {
    const result = await User.find()
    return result;
}

const createAUserInDB = async (payload: any) => {
    const existingUser = await User.findOne({
        email: payload.email
    })
    if (existingUser) {
        throw new   ApiError(httpStatus.CONFLICT, "User with this email already exists");
    }

    if (payload.password) {
        const saltRounds = parseInt(process.env.SALT_ROUNDS || "10");

        payload.password = await bcrypt.hash(payload.password, saltRounds);
    }

    const result = await User.create(payload);

    const userData = {
        name:payload.name,
        email: payload.email,
        user:result._id
    }

    if(payload.role === "client"){
        await Client.create(userData);
    }
    else if(payload.role === "lawyer"){
        await Lawyer.create(userData);
    }

    return result;
}

export const userService = {
    getAllUsersFromDB,
    createAUserInDB
}