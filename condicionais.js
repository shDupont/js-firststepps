console.log(`Trabalhando com listas`);


const listaDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

console.log("Destinos possíveis: " + listaDestinos);

const estaAcompanhado = false;
const idadeComprador = 15;
const temPassagemComprada = true;

if (idadeComprador >= 18 || estaAcompanhado) {
    listaDestinos.splice(1, 1)
    console.log("Maior de idade ou está acompanhado \nDestinos possíveis: " + listaDestinos);
} else {
    console.log("Não é maior de idade, não posso vender uma viagem");
}

console.log("Embarque: \n\n")
if(idadeComprador > 18 && temPassagemComprada){
    console.log("Boa Viagem!")
} else {
    console.log("Você não pode embarcar!")
}