// var => Variável global, ou seja, existe em todos os arquivos (inseguro)
// let => Variável que possui escopo, ou seja, existe dentro do if, while, function...
// const => Variável que não permite alteração, ou seja, uma vez que foi definido o valor, não é possível alterar. Tem a mesma característica do let em relação ao escopo, existe dentro do if, while, function, fora deixa de existir (ela morre).


function exemplo01() {

    alert("Abre o console filhão");

    // let nome1 = "Maçã";
    // let nome2 = "Pera";
    // let nome3 = "Tomate";

    // Criando um vetor
    let frutas = [];
    // Adicionando os itens no vetor
    frutas.push("Maçã");
    frutas.push("Pera");
    frutas.push("Totamte");
    frutas.push("Rúcula");

    // Alterando o valor no veotr
    frutas [2] = "Tomate";

    // Remover 'Rúcula' da lista de frutas, porque não é fruta
    frutas.splice(3, 1); // Começa na posição 3 e remove 1 item

    console.log("Tamanho do vetor: " + frutas.length);

    // Acessando uma posição específica do vetor, ou seja,
    // acessando o valor armazenado naquela posição

    console.log("Fruta 1: " + frutas[1]);
    console.log("Fruta 2: " + frutas[2]);
    console.log("Fruta 3: " + frutas[3]);
    
}    
 
Function exercicio01Jogos() {


let jogos = [];
        
        jogos.push("Tíbia");
        console.log("Tamanho do vetor de jogos: " + jogos.length);

        jogos.push("Battlefield 4");
        console.log(jogos);

        jogos.push("League of Legends");
        jogos.push("Medal of Honor");
        jogos.push("GTA 6");
        jogos.splice(2, 1);
        
        console.log("Tamanho do vetor de jogos após exclusão: " + jogos.length);
        console.log(jogos);

        jogos[4] = "GTA VI";
        console.log("Tamanho  da lista após alteração: " + jogos.length);
        console.log("Elementos da lista de jogos: " + jogos);

}

function execicio02Pratos() {
    let pratos = [];
    pratos.push("Strogonoff");
    pratos.push("Panqueca");
    pratos.push("Salada");

    console.log(pratos);

    pratos.splice(2, 1 );
    console.log("Tamanho da lista: " + pratos.length);
    
    pratos.push("Risoto");
    pratos.push("Sopa");
    console.log("Tamanho da lista após adição: " + pratos.length);

    pratos(1) = "Panqueca de Carne";
    console.log("Elementos da lista de pratos: " + pratos);
    console.log("tamanho da lista: " + pratos.length);

}