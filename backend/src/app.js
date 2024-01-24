import express from "express"
import cors from "cors"

const app = express()

app.use(cors({
      origin: process.env.CORS_ORIGIN,
      credentials: true
}))

app.use(express.json({limit:"16kb"}))

//routes import
import stockRouter from "./routes/stock.routes.js"

app.use("/api", stockRouter)

export {app}