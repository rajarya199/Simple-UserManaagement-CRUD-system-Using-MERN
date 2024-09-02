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


export const getUserdetail=async(id)=>{
   try{
      return await axios.get(`${URL}/userdetail/${id}`)

   }
   catch(err){
      console.log('error while calling get user-detail api',err)

   }
}

export const editUser=async(user,id)=>{
   try{
      return await axios.put(`${URL}/editUserDetail/${id}`,user)
   }
   catch(error){
      console.log('error while calling edituser api',error)
   }

}

export const deleteUser=async(id)=>{
   try{
      return await axios.delete(`${URL}/deleteuser/${id}`)
   }
   catch(error){
      console.log('error while calling the delete user api')
   }
}