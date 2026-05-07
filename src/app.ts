import express from 'express';
import cors from 'cors';
import router from './app/routes/index.js';
import globalErrorHandler from './app/middleWear/globalErrorHandler.js';

const app = express ();

// Middleware
app.use(cors())
app.use(express.json());
app.use("/api/v1" , router)

app.get("/" , (req , res) => {
    res.send("hello Legamate")
})

app.use(globalErrorHandler);


export default app;