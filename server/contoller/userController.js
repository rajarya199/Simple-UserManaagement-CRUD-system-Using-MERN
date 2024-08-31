
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
