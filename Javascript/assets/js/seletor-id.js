const botaoLimparCampos = document.getElementById("limpar-campos")
botaoLimparCampos.addEventListener("click", limparCampos);

const botaoProcessar = document.getElementById("processar")
botaoProcessar.addEventListener("click", processarPedido);

function limparCampos(){

    let campoPlacaMae = document.getElementById("placa-mae")
    console.log(campoPlacaMae);

    let campoPlacaVideo = document.getElementById("placa-video")
    console.log(campoPlacaVideo);

    campoPlacaMae.value = "";
    campoPlacaVideo.value = "";

}

function processarPedido(){

    let campoPlacaMae = document.getElementById("placa-mae");
    let campoPlacaVideo = document.getElementById("placa-video");
    
    let placaMae = campoPlacaMae.value;
    let placavideo = campoPlacaVideo.value;

    alert(placaMae + " " +placavideo);
}

function somar(){

    let campoNumero01 = document.getElementById("numero01");
    console.log(campoNumero01);

    let campoNumero02 = documento.getElementById("numero02");
    console.log(campoNumero02);

    let numero01 = parseInt(campoNumeor01.value);
    let numero02 = parseInt(campoNumeor02.value);
    
    let soma = numero01 + campoNumero02;
    alert("soma "+ soma);
}

function calcularMedia() {

    const campoNome = document.getElementById("nome");
    const campoNota1 = document.getElementById("nota1");
    const campoNota2 = document.getElementById("nota2");
    const campoNota3 = document.getElementById("nota3");

    // console.log(campoNome);
    // console.log(campoNota1)
    // console.log(campoNota2)
    // console.log(campoNota3)

    let nome = campoNome.value
    let nota1 = parseFloat(campoNota1.value);
    let nota2 = parseFloat(campoNota2.value);
    let nota3 = parseFloat(campoNota3.value);

    //console.log(nome);
    //console.log(nota1);
    //console.log(nota2);
    //console.log(nota3);
    
    let media = (nota1 + nota2 + nota3) / 3;
    
    let status = "";
    If (media < 7){
        status = "Reprovado";
    } else {
    Status = "Aprovado"        
    }

    const texto = `Aluno: ${nome}<br>
    nota 1: ${nota1.toFixed(2).replace(".", ",")}<br>
    nota 2: ${nota2.toFixed(2).replace(".", ",")}<br>
    nota 3: ${nota3.toFixed(2).replace(".", ",")}<br>
    Média: ${media.toFixed(2).replace(".", ",")}<br>
    Status: ${status}`;

    cont divResultadoMedia = documento.getElementById("resultado-media");
    divResultadoMedia.innerHTML = texto;
    
    
}