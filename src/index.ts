import carregarPessoas from "./function/carregarPessoas";

const pessoas = carregarPessoas("src/data/dados.csv")

pessoas.forEach(p => console.log(p.toString()))