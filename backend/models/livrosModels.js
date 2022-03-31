const conexao = require ("../../config/conexao.js")

module.exports = {
    getAllLivros
}

function getAllLivros(calllback) {
    conexao.query("select * from livros" , callback)
}