import type { ZodObject } from "zod";
import catchAsync from "./CatchAsync.js";

const validationRequest = ( schema : ZodObject<any>) => {
   return catchAsync(async( req , res , next ) => {

    await schema.parseAsync({body : req.body ,  cookies : req.cookies})

    return next();
   })
}

export  default validationRequest;