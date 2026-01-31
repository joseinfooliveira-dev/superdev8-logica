function exemplo01() {
    // Solicitar o nome de quatro pessoas

    // Declarando a variável
    let indice = 0;

    // Condição
    while(indice < 4) {
        let nome = prompt("Digite o nome");

        // Incrementar
        indice = indice + 1;
    }

    // Declarar a variável
    // Condição
    // Incrementar
    for(let indice = 0; indice < 4; indice = indice + 1){
        let nome = prompt("Digite o nome");
    }
}

function relogio() {
    // Exibir as horas de 0 a 23
    // Exibir os minutos de 0 a 59
    // Exibir os segundos de 0 a 59
    for (let hora = 0; hora < 24; hora = hora + 1) {
        for (let minuto = 0; minuto < 60; minuto = minuto + 1) {
            for (let segundo = 0; segundo < 60; segundo = segundo + 1) {
                alert(hora + ":" + minuto + ":" + segundo);
            }
        }
    }
}

function solicitarDadosPaciente () {
    let quantidadePacientes = parseInt(prompt("Digite a quantidade"));

    for (let indice = 0; indice < quantidadePacientes; indice = indice + 1) {
        let nome = prompt("Digite o nome");
        let idade = parseInt(prompt("Digite a idade"));
        let peso = parseFloat(prompt("Digite o peso"));
        let altura = parseFloat(prompt("Digite a altura"));    
    }
}

function exemploContagemRegressiva() {
    for (let indice = 10; indice >= 0; indice = indice - 1) {
        alert(indice);
    }
    alert("Feliz ano novo!");
}

function exemploNumerosPares() {
    for (let i = 0; i <= 1000; i = i + 1) {
        if ( i % 2 == 0 )
        alert(i);
    }
    for(let i = 0; i <= 1000; i = i + 2) {
        alert(i);
    }   