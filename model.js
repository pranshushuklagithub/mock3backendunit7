const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    confirmPassword: {type:String,required:true}
})

const productSchema = mongoose.Schema({
    name:{type:String,required:true, default:"No title given by the product owner"},
    description:{type:String,default:"See the Images carfully before buying"},
    category: {type:String,required:true , default:"Other"},
    image: {type:String,required:true},
    location:{type:String,required:true},
    postedAt :{type:String,required:true},
    price: {type:Number,required:true},
    userId: {type:String, default:"Anonymous"},
})

const Usermodel = mongoose.model("user",userSchema)
const ProductModel = mongoose.model("product",productSchema)

module.exports={Usermodel,ProductModel};