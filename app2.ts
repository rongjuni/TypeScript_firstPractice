//npm i --save-dev @types/node
//npm install @types/express - in order to know that types of the paramater of app.get
const express = require('express')
const app = express();

// app.get("/", (req: Express.Request, res:Express.Response, next:Express.NextFunction)=>{
app.get("/", (req: any, res: any, next: any)=>{
    try {
        res.status(200).send("Test")
    } catch (error) {
        next(error)
    }
})