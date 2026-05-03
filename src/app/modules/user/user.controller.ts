import { get } from "mongoose";
import { userService } from "./user.service.js";
import type { Request, Response } from "express";
import catchAsync from "../../utils/CatchAsync.js";
import sendResponse from "../../utils/SendResponse.js";
import httpStatus from "http-status";

const getAllUsers = catchAsync(async (req, res, next) => {

    const result = await userService.getAllUsersFromDB();

    sendResponse(res , {
        statusCode : httpStatus.OK,
        success: true,
        message: "All users retrieved successfully",
        data: result
    })
    // if (!result) {
    //     return res.status(404).json({
    //         success: false,
    //         message: "No users found",
    //         data: []
    //     })
    // }
    // res.status(200).json({
    //     success: true,
    //     message: "All users retrieved successfully",
    //     data: result
    // })
})

const createAUser = catchAsync(async ( req , res , next) => {
    const result = await userService.createAUserInDB(req.body);
    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: "User created successfully",
        data: result
    });
})

export const UserController = {
    getAllUsers,
    createAUser
}