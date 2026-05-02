import express from 'express';
import cors from 'cors';

const app = express ();

// Middleware
app.use(cors())
app.use(express.json());

app.get("/" , (req , res) => {
    res.send("hello Legamate")
})


export default app;