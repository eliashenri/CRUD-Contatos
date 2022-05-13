'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await await queryInterface.bulkInsert('Contatos', [
      
      {
        nome: 'Nikola',
        sobrenome: 'Tesla',
        cpf: '99999999999',
        email: 'nikola@nikola',
        telefone: '41999999999',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Alberto',
        sobrenome: 'Dumont',
        cpf: '44444444444',
        email: '',
        telefone: '11222222222',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Howard',
        sobrenome: 'Lovecraft',
        cpf: '',
        email: '',
        telefone: '13888888888',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Ada',
        sobrenome: 'Lovelace',
        cpf: '',
        email: 'ada@ada',
        telefone: '14111111111',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Alan',
        sobrenome: 'Turing',
        cpf: '77777777777',
        email: 'alan@alan',
        telefone: '11666666666',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
