const connectToMongo = require('./db');
connectToMongo ();
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
  
})
//available Route
app.use('/api/auth,' require('roy'))

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})