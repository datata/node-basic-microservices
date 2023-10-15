import express from "express"

const app = express()
const PORT = process.env.PORT || 3001

app.use(express.json())

app.get('/register', (req, res) => {
  return res.send("REGISTER")
})

app.get('/login', (req, res) => {

  console.log(req.body);
  return res.send("LOGIN")
})

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`)
})