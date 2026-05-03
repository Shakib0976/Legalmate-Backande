import { model, Schema } from "mongoose";
import type { TUser } from "./user.interfate.js";

const userSchema = new Schema<TUser>({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        select: 0
    },
    image: {
        type: String,
    },
    role: {
        type: String,
        enum: ["lawyer", "admin", "client"],
        required: true,
        default: "client"
    },
    status: {
        type: String,
        enum: ["active", "inactive"],
        default: "active"
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
})

export const User = model<TUser>("User", userSchema);