import type { NextFunction, Request, Response } from "express";

const notFoundHandler =  ( req : Request , res : Response ) => {


    res.status(404).json ({
        success : false,
        message : "API NOT FOUND"
    })
}

export default notFoundHandler;  