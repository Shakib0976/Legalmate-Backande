import type { Types } from "mongoose";



export interface TClient {
    name : string,
    user: Types.ObjectId,
    email : string,
    address : string,
    image?: string,
    location?: string;
    occupation?: string;
    status : "approved" | "pending" | "rejected"
    isDeleted : boolean;
}