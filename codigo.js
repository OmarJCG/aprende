const o = document.querySelector(".o");

const typeWrite =(texto,tiempo=200,etiqueta)=>{
    let arrayCaracter = texto.split('');
    etiqueta.innerHTML="";
    let cont=0;
    let efecWrite = setInterval(function(){
        etiqueta.innerHTML += arrayCaracter[cont];
        cont++;
        if(cont=== arrayCaracter.length){
            clearInterval(efecWrite)
            etiqueta.style.border="none"
        }
    },tiempo);
};
typeWrite("TEMAS PARA VER",200,o);