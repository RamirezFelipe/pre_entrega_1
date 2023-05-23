
// inicializar la variable que contiene la lista de tareas
let listaTODO = [];

function agregarTarea(){
    /* Funcion para agregar tareas a la lista */
    let tarea = prompt('Ingresar una tarea a realizar');
    if (tarea != null && tarea != ''){
        listaTODO.push(tarea);
    }else{
        alert('No se ingreso una tarea valida');
    }

    
    alert("las tareas a realizar son: \n"+ listaTODO.join("\n"));
}
function borrarTarea(){
    /* Funcion para borrar tareas de la lista */
    console.log('Se presiono el boton para borrar tareas')
    if (listaTODO.length == 0){
        alert('No hay tareas para borrar')
        return
    }
        let TareaStr = '';
        for (let i =0; i < listaTODO.length;i++){
            TareaStr += (i + 1) + '- ' + listaTODO[i] + '\n';
        }
    alert("Las tareas a realizar son: \n" + TareaStr);
    
    let index = prompt( 'Ingrese el numero de la tarea a borrar');

    if (!isNaN(index) && index > 0 && index <= listaTODO.length){
        listaTODO.splice(index - 1,1);
        alert("La tarea se ha eliminado");
    }else{
        alert('El número ingresado es invalido');
    }
}
function verTareas(){
    /* Funcion para ver las tareas de la lista */
    let TareaStr = '';
    console.log('hola hola')
    if (listaTODO.length == 0){
        alert('No hay tareas para mostrar')
        return
    }
    for (let i = 0; i < listaTODO.length; i++){
        TareaStr += (i + 1) + '- ' + listaTODO[i] + '\n';
    alert("Las tareas a realizar son: \n" + "TareaStr");
    }
    return
}

// Agregar eventos cuando se presionen las teclas
window.addEventListener('keydown', function(event) {
    // con letra "a" se agregan tareas
    // con letra "b" se borran tareas
    // con letra "l" se listan las tareas
    if (event.key == "a"){
        agregarTarea();
    } else if (event.key == "b"){
        borrarTarea();
    } else if (event.key == "l"){
        verTareas();
    }

});
