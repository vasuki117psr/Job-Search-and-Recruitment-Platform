const mongoose=require('mongoose')
const userSchema=mongoose.Schema({
    username:String,
    email:{type:String,unique:true},
    password:String,
    isVerified:{type:Boolean,default:false}
},{timestamps:true}
)
const userModel=new mongoose.model('users',userSchema)
module.exports=userModel