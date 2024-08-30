import express from 'express'
import Connection from './database/db.js'
import dotenv from 'dotenv'
const app=express();
dotenv.config();
const port=process.env.PORT
const username=process.env.DB_USER;
const password=process.env.DB_PASS
Connection(username,password)
//listen( port no ,callbck fn)
app.listen(port,()=>console.log(`server is running in port no ${port}`))