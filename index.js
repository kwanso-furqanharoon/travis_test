var express = require('express')
 
var app = express()
const port = process.env.PORT || 3000 

app.get('/testme', (req, res) => { 
  console.log("route file")
  return res.send({ success: true, message: "App Deployed" })
})

app.listen(port, () => console.log('Example app listening on port '+port))