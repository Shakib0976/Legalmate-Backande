import { Schema } from "mongoose";
import type { TClient } from "./client.interface.js";


const clientSchema = new Schema <TClient>({
    name  : {
        type : String,
        required : true
    },
    email : {
        type : String,
    }
})