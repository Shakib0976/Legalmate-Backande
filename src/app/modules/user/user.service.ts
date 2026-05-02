import { User } from "./user.model.js"

const getAllUsersFromDB = async() => {
    const result = await User.find()
    return result;
}

export const userService = {
    getAllUsersFromDB
}