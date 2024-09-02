
import User from "../model/userModel.js"
//request - what to send along with api [data that come from frontend ]

//response-- data to send from backend to frontend



export const addUser = async (request, response) => {
    const user = request.body;  // Extracts user data from the request body
    
    const newUser = new User(user);  // Creates a new User instance using the data

    try {
        await newUser.save();  // Saves the new user document to the database
        response.status(201).json(newUser);  // Sends the saved user document back as a response
    } catch (err) {
        response.status(409).json({ message: err.message });  // Sends an error response if saving fails
    }
};

export const getUser=async(request,response)=>{
    
    try {
     const users= await User.find({});
     response.status(200).json(users)

    }catch(error){
        response.status(404).json({message:error.message})

    }
}

export const getUserDetail=async(request,response)=>{
    // console.log(request.params.id)
    try{
        // const user= await User.find({_id:request.params.id});
        const user=await User.findById(request.params.id)
        response.status(200).json(user)
    }
    catch(error){
       
        response.status(404).json({message:error.message})
    
    }
}

export const editUser=async(request,response)=>{
    let user=request.body;
    const editUser=new User(user);
    try{
        await User.updateOne({_id:request.params.id},editUser)
        response.status(201).json(editUser)
    }
    catch(error){
        response.status(409).json({message:error.message})

    }
}

export const deleteUser=async(request,response)=>{
    try{
        await User.deleteOne({_id:request.params.id});
        response.status(200).json({message:error.message})
    }
    catch(error){
        response.status(409).json({message:error.message})

    }
}