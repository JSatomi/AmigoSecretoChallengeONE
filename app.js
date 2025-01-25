// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigo = [];
let lista = document.getElementById("listaAmigos"); // adquiero referencia del elemento
let amigoSorteado = document.getElementById("resultado");

//agregarAmigo();
//funcion que captura el amigo y verfica que no este vacio
function agregarAmigo(){
    let nombreIngresado = document.getElementById("amigo").value;
        if(nombreIngresado == "" || nombreIngresado == " "){
            alert("Por favor ingresa el nombre de tu amigo");
        }else{
            limpiarEntrada();
            amigo.push(nombreIngresado);
           // console.log(amigo);
            iterarLista();
        }
}

function limpiarEntrada(){
    document.querySelector("#amigo").value="";
}

//Actualizamos la lista en el DOM
function iterarLista(){
    lista.innerHTML = ""; // limpio mi array de HTML 
    for(let a of amigo ){
        lista.innerHTML += `<li>${a}</li>`;
    }
}

function sortearAmigo(){
    if(amigo.length > 0){
       let amigoAleatorio = Math.floor(Math.random() * amigo.length);
       console.log(amigoAleatorio);
       amigoSorteado.innerHTML = `<li>El amigo sorteado es: ${amigo[amigoAleatorio]} !!!</li>`;
    }else{
        amigoSorteado.innerHTML = `<li>NO HAS AGREGADO AMIGOS</li>`;
    }
}
