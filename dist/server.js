import mongoose from "mongoose";
import app from "./app.js";
let server;
async function main() {
    try {
        await mongoose.connect(process.env.DATABASE_URL);
        server = app.listen(process.env.PORT, () => {
            console.log("legalmate is running");
        });
    }
    catch (err) {
        console.log(err);
    }
}
main();
//# sourceMappingURL=server.js.map