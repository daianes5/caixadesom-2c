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

for( let contador = 0 contador < listaDeTeclas.length;contador++){
    const tecla = listaDeTeclas[contados}]
    const efeito =tecla.classList[1];
    const idAudio = `#som_${efeito}`;
    tecla.onclick = function(){
        tocaSom(idAudio);
    }
    contador = contador + 1;

}