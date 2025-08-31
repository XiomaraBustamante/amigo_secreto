//declarando un array para almacenar los nombres
let nombres=[];
console.log(nombres);

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
    }
}

//recorrer el arreglo y crear el li
function actualizarLista(){
    let lista=document.getElementById('listaAmigos');
}





//limpiar el input
function limpiarCaja(){
    document.getElementById('amigo').value='';  
}