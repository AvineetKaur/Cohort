//write basic express boilerplate code
//with express.json() middleware

const express = require('express');
const cors = require('cors');
const { createTodo, updateTodo } = require('./types');
const { todo } = require('./db');
const app = express();

app.use(express.json());
app.use(cors());

app.get('/todos', async function (req, res) {
    const todos = await todo.find({});
    console.log(todos);
    res.json({
        "todos": todos
    })



})
app.post('/todo', async function (req, res) {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs"
        })
        return;
    }
    //put into mongodb

    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })
    res.json({
        msg: "To Do created successfully"
    })


})
app.put('/completed', async function (req, res) {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs"
        })
        return;
    }

    await todo.update({
        _id: req.body.id
    }, {
        completed: true
    })

    res.json({
        msg: "Todo marked is completed"
    })

})

app.listen(3000);