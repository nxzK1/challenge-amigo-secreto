// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let participantes = [];

function agregarAmigo() {
    let nombreIngresado = document.getElementById('amigo').value;

    if (nombreIngresado != '') {
        participantes.push(nombreIngresado);
        console.log(participantes);
        // console.log(typeof(participantes));
    } else {
        alert("Por favor, inserte un nombre. (Error campo vacío)");
    }

    limpiarInputUsuario();
    imprimirLista();

    return;
}

function sortearAmigo() {
    if (participantes.length === 0) {
        alert("No hay amigos en la lista. Por favor, ingrese uno.");
        return false;
    }
    let amigoSorteado = Math.floor(Math.random() * participantes.length);
    console.log(participantes[amigoSorteado]);

    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `Tu amigo secreto es ${participantes[amigoSorteado]}`;

    participantes = [];
}

function imprimirLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    for (let i = 0; i < participantes.length; i++) {
        let elementoLi = document.createElement("li");
        elementoLi.textContent = participantes[i];
        lista.appendChild(elementoLi);
        // console.log(participantes[i]);
    }
}

function limpiarInputUsuario() {
    let valorInputUsuario = document.getElementById('amigo');
    valorInputUsuario.value = '';
}

// Funciones creadas pero no utilizadas por redundancia.

/*
function imprimirResultado() {
    let amigoSorteado = Math.floor(Math.random() * participantes.length);

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `Tu amigo secreto es ${participantes[amigoSorteado]}`;
}
*/

/*
function checkAmigos() {
    if (participantes.length === 0) {
        alert("No hay amigos en la lista. Por favor, ingrese uno.");
        return false;
    }
    return true;
}
*/