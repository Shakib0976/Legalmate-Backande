import  catchAsync from "../../utils/CatchAsync.js";
import sendResponse from "../../utils/SendResponse.js";
import  httpStatus  from "http-status";
import { ClientService } from "./client.service.js";


const getAllClients = catchAsync(async ( req , res , next) => {

    const result = await ClientService.getAllClientsFromDB();

    sendResponse( res , {
        statusCode: httpStatus.OK ,
        success: true , 
        message: "All clients retrieved successfully",
        data: result
    })
    

})

const getSingleClient = catchAsync(async ( req , res , next) => {

    const result = await ClientService.getSingleClientFromDB(req.params.id as string);

    sendResponse( res , {
        statusCode: httpStatus.OK ,
        success: true , 
        message: "Single client retrieved successfully",
        data: result
    })
    

})

export const clientController = {
    getAllClients,
    getSingleClient
}