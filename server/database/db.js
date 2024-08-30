import mongoose from "mongoose"

const Connection= async(username,password)=>{
    const URL=`mongodb+srv://${username}:${password}@crud-app.uqntv.mongodb.net/?retryWrites=true&w=majority&appName=Crud-app`;

try{
     await mongoose.connect(URL);
    console.log('db is connected')
}
catch(err){
    console.log("error while connecting db",err)
}
}
 export default Connection