import dotenv from "dotenv"
import connectDB from "./db/index.js"
import { app } from "./app.js"

dotenv.config({
      path: './env'
})

connectDB()
.then(()=>{

      app.get("/", (req, res)=>{
            res.send("App is running!!!!!!!!!!!!!!!")
      })

      app.listen(process.env.PORT || 8000, ()=>{
            console.log(`App is listenig on http://localhost:${process.env.PORT}`)
      })
})
.catch((error)=>{
      console.log("MongoDB connection failed !!", error)
})