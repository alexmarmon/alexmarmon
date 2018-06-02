const path = require('path')
const execa = require('execa')

// get port
const port = parseInt(process.env.PORT, 10)

// start Gatsby
const startGatsby = () => {
  execa.shell(`FORCE_COLOR=true gatsby develop --port ${port}`, [], { stdio: 'inherit' }).stdout.pipe(process.stdout)
}

startGatsby()

// export app
module.exports = app
