import mongoose from "mongoose";
import { User } from "../../domain/user.schema";


const userSchema = new mongoose.Schema<User>({
    userName :{type: String, required: false},
    email:{type:String, required: false},
    mobileNo: {type: String, required: false}
})

export const userModel = mongoose.model<User>("users", userSchema)