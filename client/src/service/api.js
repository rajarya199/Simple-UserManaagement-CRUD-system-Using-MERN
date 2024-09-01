import axios from 'axios'
const URL='http://localhost:8000'
export const addUser= async(data)=>{
 try {
    return await  axios.post(`${URL}/add`,data)
 }
 catch(error){
    console.log('error while calling add user api',error)
    
 }
}

export const getUsers=async()=>{
   try{
      return await axios.get(`${URL}/alluser`);
   }
   catch(err){
      console.log('error while calling getuser api',err)
   }
}
