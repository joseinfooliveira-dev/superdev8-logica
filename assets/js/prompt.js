function solicitarString() {
    let nome = prompt("Digite seu nome:");
    let sobrenome = prompt("Digite seu sobrenome:");
    let nomeSobrenome = nome + " " + sobrenome;
    alert("Nome completo: " + nomeSobrenome);
}

function solicitarInt() {
    let numeroCartao = parseInt(prompt("Digite o número do seu cartão de crédito:"));
    let codigoSeguranca = parseInt(prompt("Digite o código de segurança:"));
    alert("Número do cartão: " + numeroCartao + "\nCódigo de segurança: " + codigoSeguranca);
}
function solicitarFloat() {
    let saldoBancario = parseFloat(prompt("Digite o saldo da sua conta bancária:"));
    const saque = parseFloat(prompt("Digite o valor do saque:"));

    saldoBancario = saldoBancario - saque;

    alert("Saque realizado: " + saque + "\nSaldo atual: " + saldoBancario);
}
function solicitarBoolean() {
    let vencido = confirm("Produto vencido?");
    alert("Produto vencido: " + vencido);
}

function paciente() {
    let nome = prompt("Digite o nome do paciente:");
    const idade = parseInt(prompt("Digite a idade:"));
    const peso = parseFloat(prompt("Digite o peso:"));
    const possuiPlanoSaude = confirm("Possui plano de saúde?");
    const cpf = prompt("Digite o CPF:");

    let planoSaude = "";
    //se possui planoSaude for igual a verdadeiro
    if (possuiPlanoSaude) {
        planoSaude = prompt("Digite o nome do plano de saúde:");
    }

    const tipoSanguineo = prompt("Digite o tipo sanguíneo:");
    const altura = parseFloat(prompt("Digite a altura:"));

    const urgencia = prompt("Escolha o nível de Urgência [Migué, Atestado, Dorzinha, Dengue, Dor Extrema]");

        let tempoEspera = 0;
        if (urgencia === "Migué"){
            tempoEspera = 180;
        } else if (urgencia === "Atestado"){
            tempoEspera = 150;
        } else if (urgencia === "Dorzinha"){
            tempoEspera = 120;
        } else if (urgencia === "Dengue"){
            tempoEspera = 60;
        } else if(urgencia === "Dor Extrema"){
            tempoEspera = 30;
        } else {
            alert("Nível de urgência inválido!");
            return;
        }
        alert(
            "Dados do Paciente:\n" +
            "Nome: " + nome + "\n" +
            "Idade: " + idade + "\n" +
            "Peso: " + peso + "\n" +
            "Possui plano de saúde: " + (possuiPlanoSaude ? "Sim" : "Não") + "\n" +
            (possuiPlanoSaude ? "Plano de Saúde: " + planoSaude + "\n" : "") +
            "CPF: " + cpf + "\n" +
            "Tipo Sanguíneo: " + tipoSanguineo + "\n" +
            "Altura: " + altura + "\n" +
            "Nível de Urgência: " + urgencia + "\n" +
            "Tempo de Espera: " + tempoEspera + " minutos"
        )
} 

function exercicio01() {
    let nome = prompt("Digite o nome do personagem:");
    let idade = parseInt(prompt("Digite a idade do personagem:"));
    let cidade = prompt("Digite a cidade natal do personagem:");
    let possuiPoder = confirm("Seu personagem possui poderes especiais? (Sim/Não)");
    let poder = "";
    if (possuiPoder === true) {
        poder = prompt("Descreva o poder especial do personagem:");
    }
    let atuacoesMensais = parseInt(prompt("Quantas atuações mensais o personagem realiza?"));

    alert(
        "Nome do Personagem: " + nome + "\n" +
        "Idade: " + idade + "\n" +
        "Cidade Natal: " + cidade + "\n" +
        "Possui Poderes Especiais: " + (possuiPoder ? "Sim" : "Não") + "\n" +
        "Poder Especial: " + poder + "\n" +
        "Atuações Mensais: " + atuacoesMensais
    )   
}

function exercicio02() {
    let base = parseFloat(prompt("Digite a base do retângulo:"));
    let altura = parseFloat(prompt("Digite a altura do retângulo:"));
    let area = base * altura;
    alert("A área do retângulo é: " + area + " metros quadrados.");
}