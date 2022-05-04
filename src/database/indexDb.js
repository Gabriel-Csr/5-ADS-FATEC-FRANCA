const Sequelize = require('sequelize')
const dbConfig = require('../../config/database.js')

const conexao = new Sequelize(dbConfig)

try{
    conexao.authenticate();
    console.log('Conexão estabelecida Mysql')
} catch (error) {
    console.log('Falha na conexão Mysql!!!')
}

module.exports = conexao