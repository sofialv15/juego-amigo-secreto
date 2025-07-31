// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Fucionalidades:

let listaNombresAmigos = [];

function limpiar() {
    document.querySelector('#amigo').value = '';
}

//Agregar nombres: Los usuarios escribirán el nombre de un amigo en 
// un campo de texto y lo agregarán a una **lista** visible al hacer clic
//  >>boton<< en "Adicionar".

function agregarAmigo() {
    // Capturar el valor del campo de entrada:
    let nombreAmigo = document.getElementById('amigo');
    // Validar la entrada
    if ( nombreAmigo === '') {
        return console.log(alert('Por favor, inserte un nombre'));
    } else {
        // Actualizar el array de amigos
        listaNombresAmigos.push(nombreAmigo);
        return nombreAmigo;
    }
    limpiar();
}

//Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo"
// se seleccionará **aleatoriamente** un nombre de la lista y
//  se mostrará en la página.

function sortearAmigo() {
    // Validar que haya amigos disponibles
    if (nombreAmigo === '') {
        return console.log(alert('Por favor, inserte un nombre'));
    } else {
        // Generar un indice aleatorio
        let indiceAleatorio = Math.floor(Math.random()*nombreAmigo)+1;
        // Obtener el nro sorteado / Mostrar el resultado 
        return console.log(indiceAleatorio);
    }
       
}
