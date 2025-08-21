//Write basic boilerplate for express
//with express.json() middleware

const express = require('express');
const { createTodo, updateTodo } = require('./types');
const { todo } = require('./db');
const app = express();
const port = 3000

app.use(express.json())

app.post('/todo', async function (req, res) {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    console.log(parsedPayload);
    if (!parsedPayload.success) {
        console.log("test1")
        res.status(411).json(
            {
                msg: "Wrong values provided"
            }
        )
    }

    //put this in mongodb
    try {
        await todo.create({
            title: createPayload.title,
            description: createPayload.description,
            completed: false
        })


    }
    catch (error) {
        res.json({
            msg: error
        })

    }
    res.json({
        msg: "Todo Created!"
    })




})
app.get('/todos', async function (req, res) {

    const todos = await todo.find();

    res.json({ todos });
})

app.put('/completed', async function (req, res) {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.parse(updatePayload);
    if (!parsedPayload.sucess) {
        res.status(411).json(
            {
                msg: "Wrong values provided"
            }
        )
    }
    //update this in mongodb

    await todo.update({
        _id: req.body.id
    }, {
        completed: true
    })
    res.json({
        msg: "Todo marked as completed!"
    })
})

app.listen(port, function () {
    console.log("Listening to port ", port);
})