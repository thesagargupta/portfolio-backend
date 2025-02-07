import express from 'express';
import cors from 'cors';
import "dotenv/config"
import connectDB from './config/mongodb.js';
import contactrouter from './routes/contactRoute.js';

const app = express()
const port = process.env.PORT || 8600
connectDB()

// middleware

app.use(express.json())
app.use(cors())

app.use("/api/contact", contactrouter);
app.get("/", (req, res) => {
    res.send("api working")
})

app.listen(port, () =>console.log("port listening " + port))