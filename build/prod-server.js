const path = require('path')
const express = require('express')
const compress = require('compression')

// get port
const port = parseInt(process.env.PORT, 10)

// create express instance
const app = express()

// compress files before sending
app.use(compress())

// serve prod folder at '/'
app.use(express.static('public'))

// serve static folder
// app.use('/assets', express.static('src/assets'))

// handles '/url/path' page refreshes to /index.html - spa
app.get('*', (req, res) => {
  res.sendFile(path.resolve('./public/index.html'))
})

// start server
app.listen(port)

// log to console
console.log('listening on', port)

// export app for tests
module.exports = app
