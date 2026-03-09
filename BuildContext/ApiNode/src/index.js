const express = require("express")
const config = require("./config")
const taskRoutes = require("./task")

const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    res.json({
        message: "Bienvenido a la API",
        app: config.appName
    })
})

app.use("/api", taskRoutes)

app.listen(config.port, () => {
    console.log(`Servidor corriendo en puerto ${config.port}`)
})