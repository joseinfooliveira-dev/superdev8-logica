// kebak-case ex: cliente-compras
// camelCase ex: clienteCompras
// PascalCase ex: ClienteCompras
// snake_case ex: cliente_compras
// SCREAMING_SNAKE_CASE ex: CLIENTE_COMPRAS

// Padrão de nomenclatura de função em JS é camelCase
function exemploVariaveisTexto() {
    const produto1 = "Xbox"; // String pq tem as aspas
    const produto2 = "Gameboy Color";

    // Concatenando a variável produto1 com espaço e depois com produto2
    const produtos = produto1 + " " + produto2;
    alert("produto: " + produtos);
}

function exemploVariaveisInteiro() {
    const numero1 = 18;
    const numero2 = 147;

    // const soma = 18 + 147; => 165
    // + da linha abaixo ele está fazendo uma soma
    const soma = numero1 + numero2;

    // + da linha abaixo ele está fazendo uma concatenação
    alert("soma: " + soma);
}

function exemploVariaveisFloat() {
    const quantidadeHoras = 10;
    const valorHora = 2.31;

    const salarioBruto = quantidadeHoras * valorHora;

    alert("Salário bruto: " + salarioBruto);
}

function exemploVariaveisBoolean() {

    // let: permite reatribuir o valor da variável depois de criada.
    // const: não permite reatribuir o valor, apenas a leitura (o vinculo é constante).
    let lorenzoFechouAba = false;
    lorenzoFechouAba = true;

    alert("Lorenzo fechou a aba: " + lorenzoFechouAba);
}

function exemploVariaveis() {
    const destino = "Maceió";
    const quantidadeDias = 20;
    const precoDiaria = 1300.1;
    let finalizadaCompra = false;

    let valorTotal = quantidadeDias * precoDiaria;

    // Usuário finalizou a compra
    finalizadaCompra = true;

    alert(
        "Destino: " + destino +
        "\nQuantidade de dias: " + quantidadeDias +
        "\nPreço da diária: " + precoDiaria +
        "\nFinalizada compra: " + finalizadaCompra +
        "\nValor total: " + valorTotal
    );

}

function exercicioPokemon() {
    const nomePokemon1 = "Grovyle";
    const numeroPokemon1 = 253;
    const descricaoPokemon1 = "Its strongly developed thigh muscles give it astounding agility and jumping performance.";
    const alturaPokemon1 = 0.9;
    const pesoPokemon1 = 21.6;
    const categoriaPokemon1 = "Wood Gecko";
    const habilidadePokemon1 = "Overgrow";

    const nomePokemon2 = "Venusaur";
    const numeroPokemon2 = 3;
    const descricaoPokemon2 = "While it basks in the sun, it can convert the light into energy. As a result, it is more powerful in the summertime.";
    const alturaPokemon2 = 2.0;
    const pesoPokemon2 = 100.0;
    const categoriaPokemon2 = "Seed";
    const habilidadePokemon2 = "Overgrow";

    let imc = pesoPokemon2 / (alturaPokemon2 * alturaPokemon2);

    let imc2 = pesoPokemon1 / (alturaPokemon1 * alturaPokemon1);
        
    alert("IMC do " + nomePokemon2 + ": " + imc +
        "\nIMC do " + nomePokemon1 + ": " + imc2);

}