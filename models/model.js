const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  _id: {
    type: Number
},
    title: {
        required: true,
        type: String
    },
    description: {
        required: true,
        type: String
    },
    timestamp: {
      
      type: String
  }
})

module.exports = mongoose.model('Todo', dataSchema)

