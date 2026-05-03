import { User } from "./user.model.js"

const getAllUsersFromDB = async () => {
    const result = await User.find()
    return result;
}

const createAUserInDB = async (payload: any) => {
    const existingUser = await User.findOne({
         email : payload.email
        })
    if (existingUser) {
        throw new Error("User with this email already exists");
    }
    const result = await User.create(payload);
    return result;
}

export const userService = {
    getAllUsersFromDB,
    createAUserInDB
}