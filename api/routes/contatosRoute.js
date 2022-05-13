const { Router } = require('express')
const ContatoController = require('../controllers/contatoController')

const router = Router()

router
  .get('/contatos', ContatoController.pegaTodosOsContatos)
  .get('/contatos/:id', ContatoController.pegaUmContato)
  .post('/contatos', ContatoController.criaContato)
  .put('/contatos/:id', ContatoController.atualizaContato)
  .delete('/contatos/:id', ContatoController.apagaContato)

module.exports = router