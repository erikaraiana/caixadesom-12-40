function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
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


for (let contador = 0;contador < listaDeTeclas.length;contador++){
    const tecla = listaDeTeclas[contador];
    const efeito = tecla.classList.classList[1];
    const idAudio = `#som_${efeito}`;
    tecla.onclick = function(){
        tocaSom(idAudio);
    }
    listaDeTeclas[contador].onclick = function(){


    };
   
    
}
