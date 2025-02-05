// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaNombres=[]

function agregarAmigo(){
    let nombre = document.getElementById('nombreAmigo').value.trim();
    
        if(nombre === "" || !isNaN(nombre)){
            alert("Favor de escribir un nombre");
            return;
        }

    listaNombres.push(nombre);
    console.log(listaNombres);


}




