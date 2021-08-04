console.log(`Trabalhando com listas`);

const salvador = `Salvador`;

const listaDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);


listaDestinos.push("Curitiba");

console.log("Destinos possíveis: " + listaDestinos);

listaDestinos.splice(1, 1);

console.log("Destinos possíveis: " + listaDestinos);

console.log("Você escolheu: " + listaDestinos[2]);