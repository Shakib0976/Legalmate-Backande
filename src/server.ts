import mongoose from "mongoose";
import app from "./app.js";
import config from "./app/config/index.js";

let server

async function main() {
    try {
        await mongoose.connect(config.databaseUrl as string);
        server = app.listen(config.port, () => {
            console.log("legalmate is running");
        })
    }
    catch (err) {
        console.log(err);
    }

}


main();