import express from "express"
import { userRouter } from "./Routes/user.route.js";
import { apiRouter } from "./Routes/news.route.js";
import 'dotenv/config'
import { dbConnect } from "./db.config.js";
import cors from "cors"

const app = express()
const allowedOrigin = process.env.FRONTEND_URL
dbConnect()
app.use(express.json())
app.use(cors({
  origin:allowedOrigin
}));


app.use('/user',userRouter)
app.use('/api',apiRouter)

app.listen(3000,()=>{
  console.log("Running...");
  
})