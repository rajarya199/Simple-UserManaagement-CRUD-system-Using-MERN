import mongoose from "mongoose";

import autoIncrement from 'mongoose-auto-increment'
 const userScheme=mongoose.Schema({
    name:String,
    username:String,
    email:String,
    phone:String
 })

autoIncrement.initialize(mongoose.connection)
userScheme.plugin(autoIncrement.plugin,'user');

//mongoose.model('table-collection name',schema to kept in table)
 const user= mongoose.model('user',userScheme)
 export default user;