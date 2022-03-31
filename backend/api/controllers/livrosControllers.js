const models = require("../models/livrosModels.js")

module.exports = {
    livrosindex,
    livrosGetAll
}

function livrosindex(req, res) {
    res.json("Rota Livros Encontrada")
        console.log("Rota Livros Encontrada! ")
}

function livrosGetAll(req, res) {
    res.json("Rota Livros Listar")
        console.log("Rota Livros Listar ")

models.getAllLivros(function(err, resposta){
    console.log("Retorno de livros {MODELS}" , resposta)
    if(err) {
        throw err
    } else {
        res.json(resposta)
    }
})
}
   