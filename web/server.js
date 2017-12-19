const express = require("express")
const history = require("connect-history-api-fallback")
const path = require("path")
const serveStatic = require("serve-static")

const app = express()

app.use(history({ verbose: true }))
app.use(serveStatic(path.join(__dirname, "/dist")))

const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log("Server started at http://localhost:5000")
})
