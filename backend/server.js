const express = require('express');
const app = express()
const port = 4000
app.use(express.json())
const router  = require("./routes")

app.get('/', (req, res) => {
  res.send('Welcome to Purple Canvas!')
})

app.use("/api", router)

app.listen(port, () => {
  console.log(`Purple canvas backend is  listening on port ${port}`)
})