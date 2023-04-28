function generar(width,dots,contenido,li,li_nombre,indice,galeria,cantidad,desplaza,clase_activo) {
    if (!contenido || moto_contenido.length <= 0) {
        return;
    }
    for (let index = 0; index < contenido.length; index++) {
        contenido[index].style.width = (width) + "px";
        contenido[index].setAttribute("id", li_nombre+index );
    }
    ultima_moto = (moto_contenido.length < 3) ? ultima_moto = moto_contenido.length - 1 : 2;
    moto_contenido[primera_moto].classList.add("clase_activo");
    galeria.style.display = "";
    galeria.style.left = "0px";
    moto_contenedor.style.height = galeria.clientHeight+ "px";
}


function desplazar_galeria(galeria,indice,width,margen,contenido,desplaza,clase_activo,cantidad,li_nombre) {
    if (isNaN(moto_contenido.length) || !moto_contenido || moto_contenido.length <= 0){
        return
    }

    if (ultima_moto < moto_contenido.length-1) {
        let posicion = parseFloat(galeria.style.left.slice(0, -2))
        galeria.style.left =  (posicion-width)+"px"; 
        galeria.style.transition = "left 1s";
        ultima_moto++;
        primera_moto++;
    }
     
}

function moto_retroceder1(galeria,indice,width,margen,contenido,desplaza,clase_activo,cantidad,li_nombre) {
    if (isNaN(moto_contenido.length) || !moto_contenido || moto_contenido.length <= 0){
        return
    }

    if (primera_moto > 0) {
        let posicion = parseFloat(galeria.style.left.slice(0, -2))
        galeria.style.left =  (posicion+width)+"px"; 
        galeria.style.transition = "left 1s";
        ultima_moto--;
        primera_moto--;
    }
}


var detener_moto;
var avanzar_moto;
var moto_contenedor;
var moto_galeria;
var moto_contenido;
var moto_dots="";
var moto_li;
var li_moto;
var moto_width;
var moto_indice;
var moto_margen;
var moto_cantidad;
var moto_desplaza;
var ultima_moto;
var primera_moto = 0;

function configurar_moto() {
    moto_contenedor = document.getElementById('contenedor');
    moto_galeria = document.getElementById('galeria');
    moto_contenido = document.getElementsByClassName('slider-contenido');
    moto_margen = 0;
    moto_cantidad = 3;
    moto_width = (document.getElementById('contenedor').getBoundingClientRect().width / 3); 
    moto_indice = 0;
    moto_desplaza = 1;
    ultima_moto = moto_contenido.length - 1;

    if (isNaN(moto_contenido.length) || !moto_contenido || moto_contenido.length <= 0){
        return
    }

    generar(moto_width,moto_dots,moto_contenido,moto_li,"ver-imagen",moto_indice,moto_galeria,moto_cantidad, moto_desplaza,"moto__marcador-activo");
}


function moto_avanzar1(){
    if (isNaN(moto_contenido.length) || !moto_contenido || moto_contenido.length <= 0){
        return
    }

    desplazar_galeria(moto_galeria,moto_indice,moto_width,moto_margen,moto_contenido,moto_desplaza,"moto__marcador-activo",moto_cantidad,"ver-imagen");
}; 


function moto_retroceder(){
    if (isNaN(moto_contenido.length) || !moto_contenido || moto_contenido.length <= 0){
        return
    }
    if (primera_moto > 0) {
        moto_retroceder1(moto_galeria,moto_indice,moto_width,moto_margen,moto_contenido,moto_desplaza,"moto__marcador-activo",moto_cantidad,"ver-imagen");
    }
}; 



