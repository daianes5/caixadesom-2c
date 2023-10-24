//declaração/ crinado função tocaSomPom
function tocaSom(){
    document.querySelector(idElementoAudio).play()    
}

//chamando/invocando a função tocaSomPom pelo clique do botão
document.querySelector('.tecla_pom').onclik = tocaSom;

//referência constante listaDeTecla, buscando todos os botões
const listaDeTeclas = document.querySelectorAll('.tecla');

//chamando a função tocaSomPom pela item "0" da listaDeTecla
listaDeTeclas[0].onclick = tocaSom;

let contador = 0;
while(contador < listaDeTeclas.length){
    const wfeito =listaDeTeclas[contador].classList[1];
    const idAudio = "#om_"+efeito;
    listaDeTeclas[contador].onclick = function(){
    tocaSom(Audio);
    contador = contador = +1;
    console.log(contador) ;
}