var array = [0,1,2,3,4,5];
var detec_click = 0;
var detec_estado = [0,0,0,0,0,0];

for(let i = 0; i<6; i++){
   array[i] = document.getElementsByClassName ('opacidadPrueba')[i];

   array[i].addEventListener('click', function(){ //ACÁ POR ALGUNA RAZÓN NO FUNCIONA CUANDO LLAMO DIRECTAMENTE A LA FUNCIÓN cambiar_opacidad, 
                                                //por eso la complejizé un poco con esta otra función
       detec_click = 1;

       if(detec_click == 1){
           cambiar_opacidad(i);
           detec_click = 0;
       }

   });
}


function cambiar_opacidad (j){

    if(detec_estado[j] == 0){
        array[j].style.opacity = "80%";
        detec_estado[j] = 1;
    }

    else if(detec_estado[j] == 1){
        array[j].style.opacity = "0%";
        detec_estado[j] = 0;
    }
}



//FORMULARIO DE CONTACTO. OBTENIENDO DATOS



function obtener_datos (){

    var nombre = document.getElementById("NOMBRE").value;

    comprobar_datos(nombre);
}


function comprobar_datos (nombre){

    var contador_ingresados = 0;

    if(nombre != ""){
        contador_ingresados++;
    }

    else {
        $('#texto_comp_nombre').text('Por favor escriba su nombre.');
    }


    if(contador_ingresados == 1){
        //HACER FUNCION PARA MANDAR EMAIL
    }
}
