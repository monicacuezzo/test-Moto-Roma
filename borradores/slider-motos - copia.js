function generar(width,dots,contenido,li,li_nombre,indice,galeria,cantidad,desplaza,clase_activo) {
    // if (width <= 0 || isNaN(width)) {
    //     return;
    // }
    // console.log("generar "+width+" * "+contenido.length+" indice:"+indice)
    
    for (let index = 0; index < contenido.length; index++) {
        contenido[index].style.width = (width) + "px";
        contenido[index].setAttribute("id", li_nombre+index );
    }

    if (moto_contenido.length < 3) {
        ultima_moto = moto_contenido.length - 1;
    }else{
        ultima_moto = 2;
    }
    moto_contenido[primera_moto].classList.add("clase_activo");
    
    
    
    // li = document.getElementsByClassName(li_nombre);
    // li[indice].classList.add(clase_activo);
    // dots.style.display = (li.length < 2 || contenido.length == cantidad) ? 'none' : '';
    galeria.style.display = "";
    galeria.style.left = "0px";
}


function desplazar_galeria(galeria,indice,width,margen,contenido,desplaza,clase_activo,cantidad,li_nombre) {
    console.log("desplazar_galeria primera-"+primera_moto+" ultima-"+ultima_moto+"***"+galeria.style.left)
    if (ultima_moto < moto_contenido.length-1) {
        // galeria.style.transform = "translate("+(-((width)))+"px)";
        galeria.style.transition = "left 1s";

        // let posicion = galeria.style.left.slice(0, -2);
        let posicion = parseFloat(galeria.style.left.slice(0, -2))

        console.log("LEFT: "+posicion)

        galeria.style.left =  (posicion-width)+"px"; 
        ultima_moto++;
        primera_moto++;
        // setTimeout(() => {
        //     galeria.style.transition = "none";
        //     galeria.style.transform = "translate(0px)";
        //     for (let index = 1; index <= desplaza; index++) {
        //         galeria.insertAdjacentElement("beforeEnd",contenido[0]);
        //     }
        // }, 1000);
    }
     
}

function moto_retroceder1(galeria,indice,width,margen,contenido,desplaza,clase_activo,cantidad,li_nombre) {
    // galeria.insertAdjacentElement("afterbegin",contenido[contenido.length-1]);
    // var li = document.getElementsByClassName(li_nombre);

    // li[indice].classList.remove(clase_activo);
    // indice--;
    // indice = (indice < 0 ) ? li.length-1 : indice;
    // li[indice].classList.add(clase_activo);
    // return indice;

   
    console.log("antes de retroceder primera-"+primera_moto+" ultima-"+ultima_moto+" width:"+width)
    if (primera_moto > 0) {
        // galeria.style.transform = "translate("+(width)+"px)";

        let posicion = parseFloat(galeria.style.left.slice(0, -2))

        console.log("retroceder LEFT: "+posicion+ "*" +(posicion+width))

        galeria.style.left =  (posicion+width)+"px"; 

        galeria.style.transition = "left 1s";
        ultima_moto--;
        primera_moto--;
    }
    console.log("despues primera-"+primera_moto+" ultima-"+ultima_moto)

    // galeria.style.transform = "translate("+(((width)*desplaza))+"px)";
    // galeria.style.transition = "transform 1s";
    // setTimeout(() => {
    //     galeria.style.transition = "none";
    //     galeria.style.transform = "translate(0px)";
    //     // for (let index = 1; index <= desplaza; index++) {
    //     //     galeria.insertAdjacentElement("beforeEnd",contenido[0]);
    //     // }
    //     galeria.insertAdjacentElement("afterbegin",contenido[contenido.length-1]);
    // }, 1000);
}

// function desplazar1(galeria,indice,width,margen,contenido,desplaza,clase_activo,cantidad,li_nombre) {




//     // if (cantidad == 1) {
//         // galeria.style.transform = "translate("+(-((width+(margen))*desplaza))+"px)";
//     // }else{
//         galeria.style.transform = "translate("+(-((width)))+"px)";
//         galeria.style.transition = "transform 1s";
//     // }
//     galeria.style.transition = "none";
//     galeria.style.transform = "translate(0px)";
//     for (let index = 1; index <= desplaza; index++) {
//         galeria.insertAdjacentElement("beforeEnd",contenido[0]);
//     }
//     // var li = document.getElementsByClassName(li_nombre);
//     // li[indice].classList.remove(clase_activo);
//     // indice++;
//     // indice = (indice >= li.length) ? 0 : indice;
//     // li[indice].classList.add(clase_activo);
//     // return indice;
// }


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
// var desplazar_moto;
var ultima_moto;
var primera_moto = 0;

function configurar_moto() {
    moto_contenedor = document.getElementById('contenedor');
    moto_galeria = document.getElementById('galeria');
    moto_contenido = document.getElementsByClassName('slider-contenido');
    // moto_dots = document.getElementById('moto__marcadores-slide');
    moto_margen = 0;
    moto_cantidad = 3;
    // moto_width = (screen.width < 520) ? ((document.getElementById('contenedor').getBoundingClientRect().width / moto_cantidad) - moto_margen) : (document.getElementById('contenedor').getBoundingClientRect().width / moto_cantidad);
    moto_width = (document.getElementById('contenedor').getBoundingClientRect().width / 3); 
    console.log("WIDTH "+moto_width) 
    moto_indice = 0;
    moto_desplaza = 1;
    ultima_moto = moto_contenido.length - 1;

    generar(moto_width,moto_dots,moto_contenido,moto_li,"ver-imagen",moto_indice,moto_galeria,moto_cantidad, moto_desplaza,"moto__marcador-activo");

    // moto_galeria.style.transform = "translate("+(+(moto_margen/2))+"px)";

    // desplazar_moto = setInterval(function(){
    //     if (moto_galeria.clientWidth > document.getElementById('contenedor').clientWidth) {
    //         moto_indice = desplazar_galeria(moto_galeria,moto_indice,moto_width,moto_margen,moto_contenido,moto_desplaza,"moto__marcador-activo",moto_cantidad,"ver-imagen");
    //     }
    // },3000);
}

// avanzar_moto = () => {
// desplazar_moto = setInterval(function(){
//     if (moto_galeria.clientWidth > document.getElementById('contenedor').clientWidth) {
//         moto_indice = desplazar_galeria(moto_galeria,moto_indice,moto_width,moto_margen,moto_contenido,moto_desplaza,"moto__marcador-activo",moto_cantidad,"ver-imagen");
//     }
// },3000);
// };

// detener_moto = () => {
//     // console.log("detener")
//     clearInterval(desplazar_moto);
// };

function moto_avanzar1(){
    // detener_moto();
    // moto_indice = desplazar1(moto_galeria,moto_indice,moto_width,moto_margen,moto_contenido,moto_desplaza,"moto__marcador-activo",moto_cantidad,"ver-imagen");

    // moto_indice = 
    moto_contenido[primera_moto].classList.remove("clase_activo");

    desplazar_galeria(moto_galeria,moto_indice,moto_width,moto_margen,moto_contenido,moto_desplaza,"moto__marcador-activo",moto_cantidad,"ver-imagen");
    // avanzar_moto();

    console.log("primera-"+primera_moto+" ultima-"+ultima_moto)
    moto_contenido[primera_moto].classList.add("clase_activo");
}; 

function moto_retroceder(){
    moto_contenido[primera_moto].classList.remove("clase_activo");

    moto_retroceder1(moto_galeria,moto_indice,moto_width,moto_margen,moto_contenido,moto_desplaza,"moto__marcador-activo",moto_cantidad,"ver-imagen");

    moto_contenido[primera_moto].classList.add("clase_activo");

    console.log("primera-"+primera_moto+" ultima-"+ultima_moto)
}; 


