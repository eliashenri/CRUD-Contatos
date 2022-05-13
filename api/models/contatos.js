'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Contatos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Contatos.init({
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        //Verifica os caracteres informados para saber se o nome é valiodo ou não.
        validaNome: function(n) {
          const nameRegex =  /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/
          if(nameRegex.test(n)) {return n
          } else { throw new Error('Nome invalido')}
        },
        notEmpty: {
          msg: "O campo nome precisa ser preenchido"
        }
      }
    },
    sobrenome: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        //Verifica os caracteres informados para saber se o nome é valiodo ou não.
        validaSobrenome: function(n) {
          const nameRegex =  /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/
          if(nameRegex.test(n)) {return n
          } else { throw new Error('Sobrenome invalido')}
        },
        notEmpty: {
          msg: "O campo sobrenome precisa ser preenchido"
        },
      }
    },
    cpf: {
      type: DataTypes.STRING,
      validate: {
        isInt: {
          args: true,
          msg: "O campo CPF permite apenas numeros"
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: "Email invalido"
        }
      }
    },
    telefone: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isInt: {
          args: true,
          msg: "Telefone invalido"
        },
        notEmpty: {
          msg: "O campo telefone precisa ser preenchido"
        },
        len: {
          args: [9,13],
          msg: "Quantidade invalida de numeros"
        }
      }
    },
  }, {
    sequelize,
    modelName: 'Contatos',
  });
  return Contatos;
};