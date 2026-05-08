import { model, Schema } from "mongoose";
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
        required: true
    },
    location: {
        type: String,
        required: true
    },
    occupation: {
        type: String,
        required: true
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