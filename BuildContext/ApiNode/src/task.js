const express = require("express")
const router = express.Router()

let tasks = [
    { id: 1, name: "Aprender Docker" },
    { id: 2, name: "Aprender Node" }
]

router.get("/tasks", (req, res) => {
    res.json(tasks)
})

router.post("/tasks", (req, res) => {

    const task = {
        id: tasks.length + 1,
        name: req.body.name
    }

    tasks.push(task)

    res.status(201).json(task)
})

module.exports = router