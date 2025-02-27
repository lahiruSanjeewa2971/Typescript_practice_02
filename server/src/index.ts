import express from 'express';
const app = express()

app.get("/", (req, res) => {
    res.send("Jo - 1")
})

app.listen(5000)