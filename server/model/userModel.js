import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    name: String,
    username: String,
    email: String,
    phone: String
}, { timestamps: true });

// Create and export the model
const User = mongoose.model('User', userSchema);
export default User;

//mongoose.model('table-collection name',schema to kept in table)
 