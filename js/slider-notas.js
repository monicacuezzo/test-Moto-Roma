function generar(width,dots,contenido,li,li_nombre,indice,galeria,cantidad,desplaza,clase_activo) {
        // if (width <= 0 || isNaN(width)) {
        //     return;
        // }
        
        for (let index = 0; index < contenido.length; index++) {
            contenido[index].style.width = (width) + "px";
            contenido[index].setAttribute("id", li_nombre+index );
        }
        
        dots.innerHTML = "";
        for (let index = 0; index < (contenido.length / desplaza); index++) {
            dots.innerHTML = dots.innerHTML + '<li class="'+li_nombre+'"><div class="'+li_nombre+'_a" id="'+li_nombre+(index * desplaza)+'"><div class="dot"></div></div></li>';
        }
        li = document.getElementsByClassName(li_nombre);
        li[indice].classList.add(clase_activo);
        dots.style.display = (li.length < 2 || contenido.length == cantidad) ? 'none' : '';
        galeria.style.display = "";
    }


function desplazar_galeria(galeria,indice,width,margen,contenido,desplaza,clase_activo,cantidad,li_nombre) {
        // if (width <= 0 || isNaN(width) || !contenido) {
        //     return;
        // }
        if (cantidad == 1) {
            galeria.style.transform = "translate("+(-((width+(margen))*desplaza))+"px)";
        }else{
            galeria.style.transform = "translate("+(-((width)*desplaza))+"px)";
        }
        galeria.style.transition = "transform 1s";
        setTimeout(() => {
            galeria.style.transition = "none";
            galeria.style.transform = "translate(0px)";
            for (let index = 1; index <= desplaza; index++) {
                galeria.insertAdjacentElement("beforeEnd",contenido[0]);
            }
        }, 2000);
        var li = document.getElementsByClassName(li_nombre);
        li[indice].classList.remove(clase_activo);
        indice++;
        indice = (indice >= li.length) ? 0 : indice;
        li[indice].classList.add(clase_activo);
        return indice;
}

function blog_retroceder1(galeria,indice,width,margen,contenido,desplaza,clase_activo,cantidad,li_nombre) {
     galeria.insertAdjacentElement("afterbegin",contenido[contenido.length-1]);
    var li = document.getElementsByClassName(li_nombre);
    li[indice].classList.remove(clase_activo);
    indice--;
    indice = (indice < 0 ) ? li.length-1 : indice;
    li[indice].classList.add(clase_activo);
    return indice;
}

function desplazar1(galeria,indice,width,margen,contenido,desplaza,clase_activo,cantidad,li_nombre) {
    if (cantidad == 1) {
        galeria.style.transform = "translate("+(-((width+(margen))*desplaza))+"px)";
    }else{
        galeria.style.transform = "translate("+(-((width)*desplaza))+"px)";
    }
    galeria.style.transition = "none";
    galeria.style.transform = "translate(0px)";
    for (let index = 1; index <= desplaza; index++) {
        galeria.insertAdjacentElement("beforeEnd",contenido[0]);
    }
    var li = document.getElementsByClassName(li_nombre);
    li[indice].classList.remove(clase_activo);
    indice++;
    indice = (indice >= li.length) ? 0 : indice;
    li[indice].classList.add(clase_activo);
    return indice;
}


var detener_blog;
var avanzar_blog;
var blog_contenedor;
var blog_galeria;
var blog_contenido;
var blog_dots;
var blog_li;
var li_blog;
var blog_width;
var blog_indice;
var blog_margen;
var blog_cantidad;
var blog_desplaza;
var desplazar_blog;

function configurar_blog() {
    blog_contenedor = document.getElementById('blog__contenedor');
    blog_galeria = document.getElementById('blog__galeria');
    blog_contenido = document.getElementsByClassName('seccion-consejos__slider-blog');
    blog_dots = document.getElementById('blog__marcadores-slide');
    blog_margen = (screen.width < 520) ? 20 : (blog_contenedor.getBoundingClientRect().width * 0.01)+3;
    blog_cantidad = (screen.width < 520) ? 1 : 2;
    blog_width = (screen.width < 520) ? ((document.getElementById('blog__contenedor').getBoundingClientRect().width / blog_cantidad) - blog_margen) : (document.getElementById('blog__contenedor').getBoundingClientRect().width / blog_cantidad);  
    blog_indice = 0;
    blog_desplaza = 1;

    generar(blog_width,blog_dots,blog_contenido,blog_li,"ver-imagen",blog_indice,blog_galeria,blog_cantidad, blog_desplaza,"blog__marcador-activo");

    blog_galeria.style.transform = "translate("+(+(blog_margen/2))+"px)";

    desplazar_blog = setInterval(function(){
        if (blog_galeria.clientWidth > document.getElementById('blog__contenedor').clientWidth) {
            blog_indice = desplazar_galeria(blog_galeria,blog_indice,blog_width,blog_margen,blog_contenido,blog_desplaza,"blog__marcador-activo",blog_cantidad,"ver-imagen");
        }
    },3000);
}

avanzar_blog = () => {
    desplazar_blog = setInterval(function(){
        if (blog_galeria.clientWidth > document.getElementById('blog__contenedor').clientWidth) {
            blog_indice = desplazar_galeria(blog_galeria,blog_indice,blog_width,blog_margen,blog_contenido,blog_desplaza,"blog__marcador-activo",blog_cantidad,"ver-imagen");
        }
    },3000);
};

detener_blog = () => {
    clearInterval(desplazar_blog);
};

function blog_avanzar1(){
    detener_blog();
    blog_indice = desplazar1(blog_galeria,blog_indice,blog_width,blog_margen,blog_contenido,blog_desplaza,"blog__marcador-activo",blog_cantidad,"ver-imagen");
    avanzar_blog();
}; 

 
