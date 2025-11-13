import express from "express"
import { ENV } from "./Config/env.js"
import { connectDB } from "./Config/db.js"

const app = express()


app.get('/', (req,res)=>{
    res.send("Hello world!")
})



app.listen(ENV.PORT, ()=>{ 
    console.log("Server started on port:",ENV.PORT)
    connectDB()
})