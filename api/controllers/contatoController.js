const database = require('../models')

class ContatoController {
    static async pegaTodosOsContatos(req, res){
        try {
          const todosOsContatos = await database.Contatos.findAll()
          return res.status(200).json(todosOsContatos)  
        } catch (error) {
          return res.status(500).json(error.message)
        }
      }
    
    static async pegaUmContato(req, res) {
        const { id } = req.params
        try {
          const umContato = await database.Contatos.findOne( { 
            where: { 
              id: Number(id) 
            }
          })
          return res.status(200).json(umContato)
        } catch (error) {
          return res.status(500).json(error.message)
        }
    }
    
    static async criaContato(req, res) {
        const novoContato = req.body
        try {
          const novoContatoCriado = await database.Contatos.create(novoContato)
          return res.status(200).json(novoContatoCriado)
        } catch (error) {
          return res.status(500).json(error.message)
        }
    }
    
    static async atualizaContato(req, res) {
        const { id } = req.params
        const novasInfos = req.body
        try {
          await database.Contatos.update(novasInfos, { where: { id: Number(id) }})
          const contatoAtulizado = await database.Contatos.findOne( { where: { id: Number(id) }})
          return res.status(200).json(contatoAtulizado)
        } catch (error) {
          return res.status(500).json(error.message)
        }
    }
    
    static async apagaContato(req, res) {
        const { id } = req.params
        try {
          await database.Contatos.destroy({ where: { id: Number(id) }})
          return res.status(200).json({ mensagem: `id ${id} deletado` })
    
        } catch (error) {
          return res.status(500).json(error.message)
        }
    }
}

module.exports = ContatoController