import express from "express";
import { createClient } from "redis";

const app = express()
app.use(express.json());

const client = createClient()
client.on('error', console.error)

app.post('/submit', async (req, res) => {
    const probId = req.body.probId;
    const code = req.body.code;
    const lang = req.body.lang
    try {
        await client.lPush("problems", JSON.stringify({ code, lang, probId }))
        //store in db
        res.status(200).send("Submission recieved and stored...");
    } catch (error) {
        console.log("Redis error:", error);
        res.status(500).send("Failed to store submission.")
    }
})

async function startServer() {
    try {
        await client.connect();
        console.log("Connected to redis");
    }
    catch (error) {
        console.log("Failed to connect to redis", error)
    }
}
startServer();

