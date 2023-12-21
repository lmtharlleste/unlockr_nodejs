import express from "express";

const app = express()

app.get("/", (req, res) => {
    res.status(201).send("Tudo ok por aqui!")
})

export default app
