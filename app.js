//declarando un array para almacenar los nombres
let nombres=[];

//agregando una funcion para agregar los nombres
function agregarAmigo(){
    let nomAmigo=document.getElementById('amigo').value;
    
    //Si esta vacio pon un alert
    if(nomAmigo==""){
        alert('Porfavor ingrese un nombre');
    }
    //si no almacena los nombres en el arreglo
    else{
       nombres.push(nomAmigo);
       limpiarCaja();
       actualizarLista();
       
       
    }
}

//limpiar el input
function limpiarCaja(){
    document.getElementById('amigo').value='';  
}

//recorrer el arreglo y crear el li
function actualizarLista(){
    let lista=document.getElementById('listaAmigos');
    lista.innerHTML = "";
    for(let i=0; i<nombres.length;i++){
      lista.innerHTML+=`<li>${nombres[i]}</li>`;
    }
}

// sortear los amigos
function sortearAmigo() {
    // 1. Validar que haya amigos disponibles
    if (nombres.length == 0) {
        alert('No hay amigos que sortear');
    } else {
        // 2. Generar un índice aleatorio
        let indiceAleatorio = Math.floor(Math.random() * nombres.length);
        
        // 3. Obtener el nombre sorteado
        let amigoSorteado = nombres[indiceAleatorio];
        
        // 4. Mostrar el resultado
        document.getElementById('resultado').innerHTML = "Amigo secreto: " + amigoSorteado;
    }
}