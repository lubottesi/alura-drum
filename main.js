function tocaSom(seletorAudio){
    const elemento = document.querySelector(seletorAudio);
    /*
    if(elemento == null){
        alert("Elemento não encontrado");
    }
    */

    if(elemento != null && elemento.localName == 'audio'){
        elemento.play();
    } else {
        alert("Elemento não encontrado ou seletor inválido");
    }

    //na parte do if que eu coloco elemento != null eu posso reduzir para elemento apenas. Ou seja: if(elemento && elemento.localName == 'audio') - se elemento existe e sua tag for audio...
}

/*
document.querySelector(".tecla_pom").onclick = tocaSomPom; //quando clicado vai receber a função tocaSomPom
*/

const listaDeTeclas = document.querySelectorAll(".tecla");

/*
let contador = 0;
while(contador<listaDeTeclas.length)
*/

for(let contador = 0; contador<listaDeTeclas.length; contador++){

    const tecla = listaDeTeclas[contador];

    const instrumento = tecla.classList[1]; //eu coloco 1 porque estou acessando a segunda classe da minha lista de classes. POis cada button tem duas classes: 0: "tecla" e 1:"tecla_pum"

    //o id do audio é som_tecla_pom. Mas nos já temos a parte tecla_pom slava na constante instrumento. Entao vamos juntar essas duas partes na constante idAudio. Para isso temos que fazer uma string entre crase
    
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function(){
        tocaSom(idAudio);
    }
    //contador++; caso usassemos o while

    tecla.onkeydown = function(evento){ //a funcao esta captando as teclas apertadas
        console.log(evento.code);

        if (evento.code === "Space" || evento.code === "Enter"){
            tecla.classList.add("ativa"); //quando a tecla estiver abaixada, ou seja, apertando uma tecla
        }
    }

    tecla.onkeyup = function(){
        tecla.classList.remove("ativa");
    }
}

//Outra maneira de adicionar classe com clique eh:
/*
document.querySelectorAll('.tecla').forEach(function(tecla) {
    tecla.addEventListener('click', function() {
        this.classList.add('ativa');
    });
});
*/

//Outra maneira de remover classe com clique eh:
/*
document.querySelectorAll('.tecla').forEach(function(tecla) {
    tecla.addEventListener('click', function(event) {
        const elementoClicado = event.target;

        if (elementoClicado.classList.contains('ativa')) {
            elementoClicado.classList.remove('ativa');
        } else {
            elementoClicado.classList.add('ativa');
        }
    });
});
*/
