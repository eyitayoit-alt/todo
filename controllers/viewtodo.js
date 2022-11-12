


const { json } = require("express")
const Model=require("../models/model")

exports.viewatodo=async(req,res)=>{
       
   try{
      const data = await Model.findById(req.params.id);
      res.json(data)
  }
  catch(error){
      res.status(500).json({message: error.message})
  }
        
    }