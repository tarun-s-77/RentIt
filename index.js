const express = require('express')
const path = require('path')
const app = express()
const port = 5050

app.use(express.static(path.join(__dirname, "website")))

  app.get('/website',(req,res)=> {
    res.sendFile(path.join(__dirname, 'index.html'))
  })
  app.listen(port, ()=> {
    console.log('Example app listning at http://localhost:${port}')
  })

  
