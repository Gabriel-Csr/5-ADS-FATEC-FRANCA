const express = require("express")
const path = require("path")
const rotas = express.Router()

const app = express ()

const porta = process.env.PORT = 3000

app.use(express.json())
app.use("/", rotas)

app.use("views",path.join(__dirname,"./"))
app.set("view engone", "ejs")

app.use("views", path.join(__dirname + "/publico"))
app.use(express.static("publico"))
app.use(express.static("imagens"))
app.use(express.static("estilos"))

rotas.get("/", (req, res) => {
    res.send("Rota raiz encontrada")
})

rotas.get("/ola", (req, res) => {
    res.send("Diga Olá Mundo!")
})

rotas.get("/compras", (req, res) => {
    res.send("Compre a vontade com o seu cartão de crédito")
})

rotas.get("/inicio", (req, res) => {
   // res.sendFile(path.join(__dirname + "index.html"))//
   res.render("Index.ejs",{
       title: " NodeJS - EJS",
       mensagem: "Iniciando o uso de NodeJS - Express - EJS",
       Titulo: "Menu Principal",
       autor: "5° ADS - Programação Scipts"
   })
})


app.listem(porta, () => {
    console.log("Servidor rodando na porta" + porta)

})