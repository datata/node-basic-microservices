import express from "express"
import proxy from "express-http-proxy"

const app = express()

const PORT = process.env.PORT || 3000

app.use('/auth', proxy("http://localhost:3001"))

app.get('/', (req, res) => {
  return res.send("server healthy")
})

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`)
})