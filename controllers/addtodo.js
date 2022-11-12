
const { request } = require("express")
const Model=require("../models/model")



exports.addatodo=(req,res)=>{
   
   
   const data = new Model({
    
    title: req.body.title,
    description: req.body.description,
    timestamp:req.body.timestamp
   
   
})
try {
  const dataToSave = data.save();
  res.status(200).json(dataToSave)
}
catch (error) {
  res.status(400).json({message: error.message})
}
}