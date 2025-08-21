const mongoose = require('mongoose');

//mongodb+srv://admin:GoJBMbIWSJ9SLHIx@cluster0.vnwgvpl.mongodb.net/todos

mongoose.connect("mongodb+srv://admin:GoJBMbIWSJ9SLHIx@cluster0.vnwgvpl.mongodb.net/todos");

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}

