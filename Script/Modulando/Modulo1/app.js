let pessoa = require("./modelos/pessoa.js");
let produto = require("./modelos/produto.js");
let calculos = require("./modelos/calcular.js");

const valorProduto = 10;
mineiro = pessoa();
prod = produto();
imposto = calculos();

console.log(JSON.stringify(mineiro));
console.log("Nome"+mineiro.nome);
console.log("Profissão"+mineiro.profissao);
console.log(JSON.stringify(prod));


console.log("===================================");

console.log("Valor do Produto:", valorProduto);
console.log("Valor com Imposto:",calculos.adicionar(valorProduto));
console.log("Valor do Imposto:" ,calculos.valor(valorProduto));


