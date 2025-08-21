import express from "express"

const app = express();
const port = 3000;

app.use(express.json());

let users = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Doe" },
];

app.get('/users', (req, res) => {
    const { name } = req.query;
    if (name) {
        //@ts-ignore
        const filteredusers = users.filter(user => user.name.toLowerCase().includes(name.toLowerCase()));
        res.json(filteredusers)
    }
    else {
        res.json(users);
    }
})

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});