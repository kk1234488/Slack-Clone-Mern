import express from "express"
import { ENV } from "./Config/env.js"
import { connectDB } from "./Config/db.js"
import { serve } from "inngest/express";
import { clerkMiddleware } from "@clerk/express"
import { functions, inngest } from "./Config/inngest.js"

const app = express()

app.use(express.json())

// req.auth will be available in the request object
app.use(clerkMiddleware())

app.use("/api/inngest", serve({ client: inngest, functions }));

app.get('/', (req,res)=>{
    req.auth.is
    res.send("Hello world!")
})

const startServer = async () =>{
    try {
        await connectDB()
        if(ENV.NODE_ENV !== "production"){
            app.listen(ENV.PORT, ()=>{
                console.log("Server started on port " + ENV.PORT)
            })
        }
    }
    catch(error){
        console.error("Error starting server: ", error)
        process.exit(1) 
    }
}

startServer()

export default app