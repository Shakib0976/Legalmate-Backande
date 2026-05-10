import { is } from "zod/locales";
import { Client } from "./client.model.js"


const getAllClientsFromDB = async() => {
    const result = await Client.find({isDeleted : false})
    return result;
}

const getSingleClientFromDB = async(id : string) => {
    const result = await Client.findById(id , { isDeleted: false }).populate("user" )
    return result;
}



export const ClientService = {
    getAllClientsFromDB,
    getSingleClientFromDB
}