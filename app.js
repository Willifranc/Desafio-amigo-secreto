const inputAmigo = document.getElementById("amigo");
const listaAmigos = [];
const ulListaAmigos = document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado");

function agregarAmigo() {
    if (!inputAmigo.value) {
        alert("ingresa un nombre, por favor");

        //inputAmigo.value = "";
    }
    listaAmigos.push(inputAmigo.value);
    ulListaAmigos.innerHTML += `<li>${inputAmigo.value}</li>`;
    limpiarCaja();
}

function limpiarCaja() {
    document.getElementById("amigo").value = "";
}

function sortearAmigo() {
    const random = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos[random];
    ulResultado.innerHTML = `<li>Su amigo secreto es: ${amigoSecreto}</li>`;
};