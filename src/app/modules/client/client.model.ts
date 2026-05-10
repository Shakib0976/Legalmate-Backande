import { model, Schema, Types } from "mongoose";
import type { TClient } from "./client.interface.js";

//    name : string,
//     email : string,
//     address : string,
//     image?: string,
//     location : string;
//     occupation : string;
//     status : "approved" | "pending" | "rejected"
//     isDeleted : boolean;
const clientSchema = new Schema<TClient>({
    name: {
        type: String,
        required: true
    },
    user: {

        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
    },
    address: {
        type: String,
      
    },
    location: {
        type: String,
       
    },
    occupation: {
        type: String,
        
    },
    status: {
        type: String,
        enum: ["approved", "pending", "rejected"],
        default: "pending"
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
}
// time stamp for created at and updated at

)

export const Client = model<TClient>("client", clientSchema)