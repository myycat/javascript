/*
var nome = " Welves Ferreira";
var idade = 38;
var idade2 = 15;
var frase = "Brasil é o melhor time do mundo";


console.log(idade + v1);
*/
function botao(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar")

}

function redirecionar(){
    //window.open("https://www.sellercomputadores.com.br/");
    window.location.href = "https://www.sellercomputadores.com.br/"
}

function trocar(elemento){
 //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
  // alert("trocar texto");
  elemento.innerHTML = "Obrigado por passar o mouse";
} 

function voltar(elemento){
    document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Página carregada com sucesso");
}

function funcaochange(elemento){
    console.log(elemento.value)
}

function funcaomudar(elemento){
    console.log(elemento.value)
}