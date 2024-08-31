import express from 'express'
import Connection from './database/db.js'
import dotenv from 'dotenv'
import Routes from './routes/route.js'
import cors from 'cors'
import bodyParser from 'body-parser'

const app=express();
dotenv.config();
// at once u cannnot send data to multiple server eg 3000,8000 it will show cors cross origin error so 
//solve it in backend by using cors()


app.use(cors());
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use('/',Routes)

const port=process.env.PORT
const username=process.env.DB_USER;
const password=process.env.DB_PASS
Connection(username,password)
//listen( port no ,callbck fn)
app.listen(port,()=>console.log(`server is running in port no ${port}`))