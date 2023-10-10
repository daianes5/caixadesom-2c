function tocaSomPom(){
    document.querySelector('#som_tecla_pom').play()    
}
document.querySelector('.tecla_pom').onclik = tocaSomPom;

function tocaSomClap(){
    document.querySelector('#som_tecla_clap').play()    
}
document.querySelector('.tecla_clap').onclik = tocaSomClap;

const ListaDeTeclas = document.querySelectorAll('.tecla');
listaDeTeclas[1].onclick = tocaSomClap;