import { get } from "mongoose";
import { userService } from "./user.service.js";
import type { Request, Response } from "express";

const getAllUsers = async (req : Request, res : Response) => {
    try{
     
        const result = await userService.getAllUsersFromDB();
        if(!result){
            return res.status(404).json({
                success : false,
                message : "No users found",
                data : []
            })
        }
        res.status(200).json({
            success : true,
            message : "All users retrieved successfully",
            data : result
        })
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            success : false,
            message : "internal server error",
            data : []
        })
    }
}

export const UserController = {
    getAllUsers
}