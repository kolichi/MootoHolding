import mongoose from "mongoose";

const User = mongoose.model('user', new mongoose.Schema({

 first_name:{type:String},
 last_name:{type:String},
 Contact_number:{type:Number, unique:true},
 password:{type:String}

}))
export default User;
