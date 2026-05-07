import { User } from "./user.model.js";
import bcrypt from "bcrypt";    

const getAllUsersFromDB = async () => {
    const result = await User.find()
    return result;
}

const createAUserInDB = async (payload: any) => {
    const existingUser = await User.findOne({
        email: payload.email
    })
    if (existingUser) {
        throw new Error("User with this email already exists");
    }

    if (payload.password) {
        const saltRounds = parseInt(process.env.SALT_ROUNDS || "10");

        payload.password = await bcrypt.hash(payload.password, saltRounds);
    }

    const result = await User.create(payload);
    return result;
}

export const userService = {
    getAllUsersFromDB,
    createAUserInDB
}