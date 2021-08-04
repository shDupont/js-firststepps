console.log(`Trabalhando com loops`);


const listaDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

// console.log("Destinos possíveis: " + listaDestinos);

let estaAcompanhado = false;
let idadeComprador = 15;
let temPassagemComprada = false;
const destino = "Curitiba";

const podeComprar = idadeComprador >= 18 || estaAcompanhado == true;

for (let i = 0; i < listaDestinos.length; i++) {
    if(listaDestinos[i] == destino){
        destinoExiste = true;
        console.log("Seu destino existe!")
        break;
    }
}

let contador = 0;
let destinoExiste = false;

while (contador < 3){
    
    if (listaDestinos[contador] == destino) {
        destinoExiste = true;
        console.log("Seu destino existe!")
        break;
    }
    contador++
}

console.log("Destino existe: ", destinoExiste)