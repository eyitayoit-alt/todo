const express = require('express');

const router = express.Router();
const allcontroller = require('../controllers/alltodo');
const addcontroller = require('../controllers/addtodo');
const removecontroller = require('../controllers/removetodo');
const viewcontroller = require('../controllers/viewtodo');
const changecontroller = require('../controllers/changetodo');
const Model = require('../models/model');


router.get('/', allcontroller.todoList)
router.post('/add', addcontroller.addatodo)
router.delete('/delete/:id',removecontroller.removeatodo)
router.get('/view/:id', viewcontroller.viewatodo)
router.put('/update/:id', changecontroller.changeatodo)




module.exports = router;

