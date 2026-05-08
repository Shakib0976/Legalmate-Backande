import type { NextFunction, Request, Response } from "express";
import catchAsync from "../../utils/CatchAsync.js";
import sendResponse from "../../utils/SendResponse.js";
import { LawyerService } from "./lawyer.service.js";
import httpStatus from "http-status";

const getAllLawyers = catchAsync(async ( req : Request , res :Response , next : NextFunction) => {

    const result = await LawyerService.getAllLawyersFromDB();

    sendResponse( res , {
        statusCode:httpStatus.OK ,
        success: true ,
        message: "All lawyers retrieved successfully",
        data: result
    })
})

const getSingleLawyer = catchAsync(async ( req : Request , res :Response , next : NextFunction) => {

    const result = await LawyerService.getSingleLawyerFromDB(req.params.id as string);

    sendResponse( res , {
        statusCode:httpStatus.OK ,
        success: true ,
        message: "Single lawyer retrieved successfully",
        data: result
    })
})


const updateBasicInfo = catchAsync(async( req : Request , res :Response , next : NextFunction) => {
    const result = await LawyerService.updateBasicInfoFromDB(req.params.id as string , req.body);

    sendResponse( res , {
        statusCode:httpStatus.OK ,
        success: true ,
        message: "Basic info updated successfully",
        data: result
    })
})


export const LawyerController = {
    getAllLawyers,
    getSingleLawyer,
    updateBasicInfo,
}