const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/todo-app")
const TODOSchema = new mongoose.Schema({
    title:String,
    Description: String,
    Completed:Boolean
})
const todo = mongoose.model('todos',TODOSchema);
module.exports = todo;