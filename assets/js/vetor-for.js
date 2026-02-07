// incrementar
// i = i + 1; // i = (atual) + 1;
// i += 1; // i = atual + 1;
// i++/ // i = atual + 1;

//decrementar
// i = i - 1; // i = (atual) - 1;
// i -= 1; // i = atual - 1;
// i-- // i = atual - 1;

function exemploJogos() {
    let jogos = [];
    // for(let i = 0; i < 5, i = i + 1) {
    for (let i = 0; i < 5; i += 1) {
        let nomeJogo = prompt("Digite o nome do jogo:");
        jogos.push(nomeJogo);
    }

    // Apresentar os jogos
    let textoParaApresentar = "";
    for (let i = 0; i < 5; i += 1) {
        let nomeJogo = jogos[i];
        textoParaApresentar = textoParaApresentar + nomeJogo + "\n";

    }
    alert("Jogos: " + textoParaApresentar);
}

function calculadora() {
    let numeros = [];
    // Solicitar Numeros

    for (let i = 0; i < 4; i += 1) {
        let numero = parseInt(prompt("Digite o número"));

        // Armazenar no vetor
        numeros.push(numero);
    }
    // Somar os números
    let somaManual = numeros[0] + numeros[1] + numeros[2] + numeros[3];
    alert("Soma Manual: " + somaManual);

    let soma = 0;
    for (let i = 0; i < 4; i += 1) {
        let numero = numeros[i];
        soma = soma + numero;
    }
    alert("Soma: " + soma);
}

// Incrementar 
// i = i + 1; // i = (atual) + 1;
// i += 1; // i = (atual) + 1;
// i++; // i = (atual) + 1

// Decrementar
// i = i - 1;
// i -= 1;
// i--;


function exemploJogos() {
    let jogos = [];

    // for(let i = 0; i < 5; i = i + 1){
    for (let i = 0; i < 5; i += 1) {
        let nomeJogo = prompt("Digite o nome do jogo");

        jogos.push(nomeJogo);
    }

    // Apresentar os jogos
    let textoParaApresentar = "";
    for (let i = 0; i < 5; i += 1) {
        let nomeJogo = jogos[i];
        textoParaApresentar = textoParaApresentar + nomeJogo + "\n";
    }

    alert("Jogos: " + textoParaApresentar);
}


function calculardora() {
    let numeros = [];

    // Solicitar os números
    for (let i = 0; i < 4; i += 1) {
        let numero = parseInt(prompt('Digite o número'));

        // Armazenar no vetor
        numeros.push(numero);
    }

    // Somar os números
    let somaManual = numeros[0] + numeros[1] + numeros[2] + numeros[3];
    alert("Soma manual: " + somaManual);

    let soma = 0;
    for (let i = 0; i < 4; i += 1) {
        let numero = numeros[i];
        soma = soma + numero;
    }

    alert("Soma: " + soma);
}

function calcularFolhasPagamento() {
    let colaboradores = ["Lorenzo", "Augusto", "Judity", "Narutinho"];
    let horasTrabalhadas = [320, 80, 220, 50];
    let valoresPorHora = [65, 15, 15, 700];
    let descontos = [1000, 200, 250, 1000];
    let auxilios = [1300, 150, 8, 5000];

    // let colaboradores = [];
    // let horasTrabalhadas = [];
    // let valoresPorHora = [];
    // let descontos = [];
    // let auxilios = [];
    let salariosBrutos = [];
    let salarioLiquidos = [];

    let quantidadeColaboradores = parseInt(
        prompt("Digite a quantidade de colaboradores que deseja gerar as folhas de pagamento"));

    for (let i = 0; i < quantidadeColaboradores; i += 1) {
        let nomeColaborador = prompt("Digite o nome do colaborador");
        let quantidadeHorasTrabalhadas = parseInt(prompt("Digite a quantidade de horas trabalhadas"));
        let valorPagoPorHora = parseFloat(prompt("Digite o valor pago por hora"));

        let temDescontos = confirm("Tem descontos?");
        let valorDescontos = 0;
        if (temDescontos === true) {
            valorDescontos = parseFloat(prompt("Digite o valor do desconto"));
        }

        let temAuxilios = confirm("Tem auxílios?");
        let valorAuxilios = 0;
        if (temAuxilios === true) {
            valorAuxilios = parseFloat(prompt("Digite o valor do auxílio"));
        }

        colaboradores.push(nomeColaborador);
        horasTrabalhadas.push(quantidadeHorasTrabalhadas);
        valoresPorHora.push(valorPagoPorHora);
        descontos.push(valorDescontos);
        auxilios.push(valorAuxilios);
    }

    for (let i = 0; i < quantidadeColaboradores; i += 1) {
        const quantidadeHorasTrabalhadas = horasTrabalhadas[i];
        const valorPagoPorHora = valoresPorHora[i];

        let salarioBruto = quantidadeHorasTrabalhadas * valorPagoPorHora;
        salariosBrutos.push(salarioBruto);
    }

    for (let i = 0; i < quantidadeColaboradores; i += 1) {
        let salarioLiquido = salariosBrutos[i] - descontos[i] + auxilios[i];
        salarioLiquidos.push(salarioLiquido);
    }

    for (let i = 0; i < quantidadeColaboradores; i += 1) {
        const nome = colaboradores[i];
        const horas = horasTrabalhadas[i];
        const valorHora = valoresPorHora[i];
        const bruto = salariosBrutos[i];
        const desconto = descontos[i];
        const auxilio = auxilios[i];
        const liquido = salarioLiquidos[i];

        alert(
            "🧾 Folha de Pagamento\n" +
            "━━━━━━━━━━━━━━━━━━━━\n" +
            "👤 Colaborador: " + nome + "\n" +
            "⏱️ Horas trabalhadas: " + horas + "\n" +
            "💰 Valor por hora: R$ " + valorHora.toFixed(2) + "\n" +
            "🟢 Salário bruto: R$ " + bruto.toFixed(2) + "\n" +
            "🔻 Descontos: R$ " + desconto.toFixed(2) + "\n" +
            "🎁 Auxílios: R$ " + auxilio.toFixed(2) + "\n" +
            "━━━━━━━━━━━━━━━━━━━━\n" +
            "✅ Salário líquido: R$ " + liquido.toFixed(2) + " 💵"
        );
    }
}

function jogoPalavras() {
    let palavras = ["Roblox", "Free Fire", "GTA"];
    let nomeJogador = prompt("Digite seu nome de jogador:");
    let quantidadeTentativas = 10;

    if (nomeJogador.toLowerCase().includes("lorenzo")) {
        quantidadeTentativas = 3;
    }

    while (quantidadeTentativas >= 0) {
        let nomeJogo = prompt("Tente adivinhar o nome dos 3 jogos");
        // Verificando se o nome que o usuário digitou está dentro da lista
        if (palavras.includes(nomeJogo)) {
            // Dar mais 3 tentativas a cada acerto
            quantidadeTentativas += 3;
            // Como descobrir a posição
            let indiceJogo = palavras.indexOf(nomeJogo);
            // Remover da lista o jogo que acertou
            palavras.splice(indiceJogo, 1);
            console.log(palavras);
            alert(`Acertou ${nomeJogo}`);
            if (palavras.length === 0) {
                alert("Ganhou o jogo!");
                break;
            }
        } else {
            // Decrementar em 1
            quantidadeTentativas -= 1;
            alert(`Errou!\nVocê tem mais ${quantidadeTentativas} tentativas`);
        }
        console.log("Quantidade de tentativas: " + quantidadeTentativas + "\npalavras: " + palavras);
        if (quantidadeTentativas <= 0) {
            alert("Você perdeu o jogo!");
            break;
        }
    }
    
}

//        [0, 1, 2, 3]
// numeros = [1, 3, 4, 9]
// soma = 17
// i = 3
// numero = 9

function exemploCorTintas() {

    let tintas = [];

    // Solicitando o nome de 5 tintas
    for (let i = 0; i < 5; i = i + 1) {
        // Solicitando o nome da tinta
        let nomeTinta = prompt("Digite a cor da tinta " + (i + 1));
        // Adicionando (salvado) o nome da tinta no vetor
        tintas.push([nomeTinta]);
    }

    let texto = "";
    for (let i = 0; i < 5; i = i + 1) {
        // texto = texto + tintas[i] + "\n";
        texto += tintas[i] + "\n";
    }
    alert("cores de tintas: \n" + texto);
}

function alunos() {
    let alunos = [];

    let resultado = "";
    for (let i = 0; i < 13; i += 1) {

        resultado += alunos[i] + "\n!";
    }
    alert(resultado)
    // let menorNomeAluno = alunos[0];
    let menorNomeAluno = "iojqoijqwoidjoqijdiqdjodjqij";
    // Percorrer a lista
    for (let i = 0; i < 13; i += 1) {
        // pegar o nome do aluno
        let nomeAlunoPercorrido = alunos[i];
        // verificar se o tamnaho do nome do aluno é menor que o tmanho do menor nome de aluno
        if (nomeAlunoPercorrido.length < menorNomeAluno.length) {
            // Caso sim: atualizar o menorNomeAluno com o nome do aluno
            menorNomeAluno = nomeAlunoPercorrido;
        }
    }

    alert("o Aluno com menor nome do aluno: " + menorNomeAluno);
}

/*
Ex 1: Criar uma função exercicio01, solicitando o nome dos smartphones
    - Criar uma lista com o nome dos smartphones(vazia)
        - Solicitar o nome de 5 smartphones(utilizar for) e armazenar em uma lista
            - Apresentar o nome dos 5 smartphones
*/


function exercicio01() {
    let nomeSmartphones = [];
    let categorias = [];
    let precos = [];

    let quantidade = parseInt(prompt("quantos produtos deseja cadastrar?"))
    // Solicitar 5 smartphones

    for (let i = 0; i < 5; i += 1) {
        let nomeSmartphone = prompt("Digite o nome do smartphone " + (i + 1));
        let caterogiaProduto = prompt("Digite a categoria do produto");
        let precoProduto = parseFloat(prompt("Digite o preço do produto"));

        produto.push(nomeSmartphone);
        categoria.push(categoriaProduto);
        precos.push(precoProduto);
    }

    // Apresentar os 5 smartphones
    let texto = "";
    for (let i = 0; i < 5; i += 1) {
        for (let i = 0; i < quantidade; i += 1)

            alert("Smartphones: " + nomeSmartphone[1]
                , "\nCategoria: " + categoriaProduto[1]
                , "\nPreço do produto R$ " + precoProduto[1]
            );
    }

    // MAIOR PREÇO

    for (let i = 0; i < quantidade; i += i) {
        let quantidade = "";

        if (precoProduto[i] >= 100) {
            classificacao = "Caro";
        } else if (precoProduto[i] >= 50) {
            classificação = "Médio";
        } else if (precoProduto[i] >= 20) {
                classificacao = "Barato";
            } else {
                classicação = "Muito barato";
            }

                alert(
                "Produto " + produtos[i] +
                " | Preço: R$ " + precos[i].tofixed(2) +
                " | Classificação: " + classicação
            );
        }
    }

    function exemploDescobrirQuemMaiorVakor() {
        let indice = 0;
        let maiorPreço = 0;
        let produtoMaiorPreço = "";

        while (indice < 3) {
            const produto = prompt("Insira o nome do Produto");
            const preco = parseFloat(prompt("Digite o preço"))

            if (preco > maiorPreço) {
                maiorPreço = preco;
                // Armazenar o nome do produto pois ele até o momento
                // tem o maior valor.
                produtoMaiorPreço = produto;
            }
            indice = indice + 1;
        }
        alert("O produto " + produtoMaiorPreço + " tem o maior preço " + maiorPreço)
    }

    function exemploDescobrirQuemMenorValor() {
        let indice = 0;
        let menorPreço = 0;
        let produtoMenorPreço = 0;

        while (indice < 3) {
            const produto = prompt("Digite o nome do produto");
            const preço = parseFloat(prompt("Digite o preço do produto"));

            if (preço < menorPreço) {
                menorPreço = preço;
                produtoMenorPreço = produto;
            }
            indice = indice + 1;
        }
        alert("o produto " + produtoMenorPreço + " Tem o menor preço " + menorPreço);
    }

    function exemploexercicio01(){

        
        let smartphones = [];
        let quantidadeEstoque = [];
        let precosUnitarios = [];

        for (let i = 0; i<5; i += i + 1){
            let nome = prompt ("Digite o nome do Smartphone") ${i + 1}:´);
            let quantidade = parseInt(prompt("Digite a quantidade em estoque do produto"))
            let preco = parseFloat(prompt"Diite o preço unitário do smartphone")
            
            smartphones.push(nome);
            quantidadeEstouqe.push(quantidade);
            precosUnitarios.push(preco);
}

let resultado = "Lista de smartphones\n\n"

for (let i = 0; i < 5; i += 1){

    
}
