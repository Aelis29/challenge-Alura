let amigos = [];

function agregarAmigo() {
  let campoEntrada = document.getElementById("amigo");
  let nombreAmigo = campoEntrada.value;

  // Validar la entrada
  if (nombreAmigo === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }

  // Actualizar el array de amigos
  amigos.push(nombreAmigo);

  // Limpiar el campo de entrada
  campoEntrada.value = "";

  // Mostrar la lista actualizada de amigos
  mostrarAmigos();
}

function mostrarAmigos() {
  let listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = "";

  amigos.forEach(function (amigo) {
    let elemento = document.createElement("li");
    elemento.textContent = amigo;
    listaAmigos.appendChild(elemento);
  });
}

// Mostrar la lista actualizada de amigos
mostrarAmigos();

function mostrarAmigos() {
  let listaAmigos = document.getElementById("listaAmigos");

  // Limpiar la lista existente
  listaAmigos.innerHTML = "";

  // Iterar sobre el arreglo
  for (let i = 0; i < amigos.length; i++) {
    // Crear un nuevo elemento de lista
    let elemento = document.createElement("li");
    elemento.textContent = amigos[i];
    listaAmigos.appendChild(elemento);
  }
}
function sortearAmigo() {
  // Validar que haya amigos disponibles
  if (amigos.length === 0) {
    alert("La lista de amigos está vacía.");
    return;
  }

  // Generar un índice aleatorio
  let indiceAleatorio = Math.floor(Math.random() * amigos.length);

  // Obtener el nombre sorteado
  let amigoSorteado = amigos[indiceAleatorio];

  // Mostrar el resultado
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = ""; // Limpiar resultados anteriores
  let elemento = document.createElement("li");
  elemento.textContent = "Amigo sorteado: " + amigoSorteado;
  resultado.appendChild(elemento);
}
function limpiarLista() {
  // Limpiar el array de amigos
  amigos = [];

  // Limpiar la lista en el HTML
  let listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = "";

  // Limpiar el resultado del sorteo
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = "";
}
