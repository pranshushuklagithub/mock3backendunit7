const express = require("express");
const productRouter = express.Router();
const {ProductModel} = require("./model")


productRouter.get("/",async (req,res)=>{

    try {  
     const product = await ProductModel.find()
     res.send(product);
    // console.log(product)
    } catch (error) {
     res.send('Something Went Wrong !')
    }
 })
 productRouter.get("/:userId",async (req,res)=>{
    const {userId} = req.params
    try {  
     const product = await ProductModel.find({userId:userId})
     res.send(product);
    // console.log(userId)
    } catch (error) {
     res.send('Something Went Wrong !')
    }
 })

 productRouter.put("/:id",async (req,res)=>{
    // console.log(req.params)
    
    
    try {  
     const {name,description,image,category,location,postedAt,price,userId} = req.body;
     const product = await ProductModel.findByIdAndUpdate(req.params.id,{name,description,image,category,location,postedAt,price,userId})
     res.send("Your Product Updated Successfully !");
    // console.log("product")
    } catch (error) {
     res.send('Something Went Wrong !')
    }
 })


productRouter.post("/",async (req,res)=>{

    try { 
      
     const {name,description,image,category,location,postedAt,price,userId} = req.body;
     const product = new ProductModel({
      name,description,image,category,location,postedAt,price,userId
     })
     await product.save();
     res.send(`Your Product Added Successfully !`);
    // console.log(req.body)
    } catch (error) {
     res.send('Something Went Wrong !')
    }
 })

 productRouter.delete("/:id",async (req,res)=>{
    // console.log(req.params.id)
    
    try {  
     
     const product = await ProductModel.findOneAndDelete(req.params.id)
     res.send("Your Product is Successfully Removed !");
    // console.log(product)
    } catch (error) {
     res.send('Something Went Wrong !')
    }
 })


 module.exports = {productRouter}