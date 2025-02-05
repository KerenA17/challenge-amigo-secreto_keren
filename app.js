// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaNombres=[] //array donde se almacenan los nombres que ingresa el usuario

function agregarAmigo(){
    let nombre = document.getElementById('nombreAmigo').value.trim(); //captura de los nombres

        //alerta cuando no se agreguen nombres o cuando ingresen numeros    
        if(nombre === "" || !isNaN(nombre)){
            alert("Favor de escribir un nombre");
            return;
        }

    listaNombres.push(nombre); //añadir los nombres en el array
    console.log(listaNombres); //visualizar los nombre-solo es de prueba 
}

//funcion para que el campo se limpie despues de escribir un nombre 
function limpiarCampo(){
   document.querySelector('#nombreAmigo').value="";
}
