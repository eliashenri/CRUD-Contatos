const bodyParser = require('body-parser')
const contatos = require('./contatosRoute')

module.exports = app => {
  app.use(
    bodyParser.json(),
    contatos
  )
}