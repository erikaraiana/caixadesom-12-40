function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play()
}
document.querySelector('.tecla_Pom').onclick = tocaSom;

function tocaSomClap(){
    document.querySelector('#som_tecla_clap').play()
}
document.querySelector('.tecla_clap').onclick = tocaSomClap;


const listaDeTeclas = document.querySelectorAll('.tecla')
listaDeTeclas[1].onclick = tocaSomClap;

//chamando a função tocaSomPom pela item "0" da listaDeTecla
listaDeTeclas[0].onclick = tocaSom;

let contador = 0;
while(contador < listaDeTeclas.length){
    const efeito = listcaDeTeclas[contador].classList[1];
    const idAudio = "#som_"+efeito;
    listaDeTeclas[contador].onclick = function(){


    };
    contador = contador + 1;
    console.log(contador);
}
