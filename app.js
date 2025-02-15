// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaNombres=[];//array donde se almacenan los nombres que ingresa el usuario
let disponibles=1;
let ver;
function agregarAmigo(){
    let nombre = document.getElementById('nombreAmigo').value.trim(); //captura de los nombres

        //alerta cuando no se agreguen nombres o cuando ingresen numeros    
        if(nombre === "" || !isNaN(nombre)){
            alert("Favor de escribir un nombre");
            return;
        }

    listaNombres.push(nombre); //Añadir los nombres en el array
    limpiarCampo();
    verLista();   
}

//funcion para que el campo se limpie despues de escribir un nombre 
function limpiarCampo(){
   document.querySelector('#nombreAmigo').value="";
}

function verLista(){
    ver = document.getElementById('listaAmigos'); //seleccionar donde se mostraran los nombres
    ver.innerHTML=""; //limpiar lista para evitar dobles

    for (var k= 0; k<listaNombres.length; k++){ //recorrer el array
       const li = document.createElement("li");  //crear un <li>
        li.textContent = "● "+listaNombres[k]; //escribir el nombre
        ver.appendChild(li); //se agregan los nombres a ver para visualizarlos en la pagina
    }
}

function sorteo(){
    ver.innerHTML="";
    //verificar que haya amigos disponibles para el sorteo
    if(listaNombres.length===0){
        console.log("NO hay elementos en la lista");
        return;
    }else{
        console.log(`${listaNombres.length} ${listaNombres.length==1?'amigo disponible':'amigos disponibles'} `);
    }

    //generar indice aleatorio para la seleccion del nombre
    let indiceAleatorio = Math.floor(Math.random()*listaNombres.length);
    console.log(indiceAleatorio);

    //acceder al nombre sorteado de acuerdo al indice
    let nombreSorteado = listaNombres[indiceAleatorio];
    let finalResul = document.getElementById('resultado');
    finalResul.innerHTML=(`El amigo secreto sorteado es: ${nombreSorteado}`);//se muestra el nombre
    
}

function reiniciar(){
    listaNombres = []; // Vaciar la lista
    document.getElementById('listaAmigos').innerHTML = ""; // Limpiar la lista en HTML
    document.getElementById('resultado').innerHTML = ""; // Limpiar el resultado
    document.querySelector('#nombreAmigo').value = ""; // Limpiar el input
}