
import catchAsync from "../../utils/CatchAsync.js"
import sendResponse from "../../utils/SendResponse.js"
import { AuthService } from "./auth.service.js"
import httpStatus from "http-status"



const loginUser = catchAsync(async (req, res, next) => {
    const result = AuthService.loginUser(req.body)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "User logged in successfully",
        data: result
    })
})


export const AuthControllers = {
    loginUser,
}