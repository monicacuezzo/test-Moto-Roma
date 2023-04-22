var iniciar_destination;
var detener_slider1;
var avanzar_slider1;

function generar(width,dots,contenido,li,li_nombre,indice,galeria,cantidad,desplaza,clase_activo) {
        // if (width <= 0 || isNaN(width)) {
        //     return;
        // }
        // console.log("generar "+width+" * "+contenido.length+" indice:"+indice)
        
        for (let index = 0; index < contenido.length; index++) {
            contenido[index].style.width = (width) + "px";
            contenido[index].setAttribute("id", li_nombre+index );
        }
        
        dots.innerHTML = "";
        for (let index = 0; index < (contenido.length / desplaza); index++) {
            dots.innerHTML = dots.innerHTML + '<li class="'+li_nombre+'"><a class="'+li_nombre+'_a" href="'+li_nombre+(index * desplaza)+'"><div class="dot"></div></a></li>';
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
            // console.log("desplaza1: "+(-((width+(margen*2))*desplaza))+" "+clase_activo)
            galeria.style.transform = "translate("+(-((width+(margen))*desplaza))+"px)";
        }else{
            // console.log("desplaza +1: "+(-((width)*desplaza))+" "+clase_activo+cantidad)
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
        // console.log("indice:"+indice+" li[indice] "+li[indice] )
        var li = document.getElementsByClassName(li_nombre);
        // console.log("indice "+indice)
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
    // galeria.style.transition = "transform 1s";
    // setTimeout(() => {
        galeria.style.transition = "none";
        galeria.style.transform = "translate(0px)";
        for (let index = 1; index <= desplaza; index++) {
            galeria.insertAdjacentElement("beforeEnd",contenido[0]);
        }
    // }, 2000);
    var li = document.getElementsByClassName(li_nombre);
    li[indice].classList.remove(clase_activo);
    indice++;
    indice = (indice >= li.length) ? 0 : indice;
    li[indice].classList.add(clase_activo);
    return indice;
}



// **************** HOME- SLIDER SUPERIOR ****************
var slider1_contenedor;
var slider1_galeria;
var slider1_contenido;
var slider1_dots;
var slider1_li;
var li_slider1;
var slider1_width;
var slider1_indice;
var slider1_margen;
var slider1_cantidad;
var slider1_desplaza;
var desplazar_slider1;

function configurar_slider1() {
    console.log("entra en configurar_slider1")
    slider1_contenedor = document.getElementById('contenedor');
    slider1_galeria = document.getElementById('galeria');
    slider1_contenido = document.getElementsByClassName('item');
    slider1_dots = document.getElementById('slider1__dots');
    // slider1_li = document.getElementsByClassName("slider1__li");
    slider1_margen = 0;
    slider1_cantidad = 1;
    // slider1_width = Math.floor(document.getElementById('contenedor').clientWidth / slider1_cantidad) - slider1_margen;
    // var ancho_contenedor = document.getElementById('contenedor').clientWidth;
    // document.getElementById('contenedor').style.width = ancho_contenedor+"px!important";
    slider1_width = (document.getElementById('contenedor').getBoundingClientRect().width / slider1_cantidad) - slider1_margen;
    slider1_indice = 0;
    slider1_desplaza = 1;

    // console.log("width item:"+slider1_width+" cant items:"+slider1_contenido.length+" contenedor:"+document.getElementById('contenedor').clientWidth)

    generar(slider1_width,slider1_dots,slider1_contenido,slider1_li,"imagen_slider",slider1_indice,slider1_galeria,slider1_cantidad, slider1_desplaza,"seccion-slider1__marcador-activo");

    desplazar_slider1 = setInterval(function(){
        if (slider1_galeria.clientWidth > document.getElementById('contenedor').clientWidth) {
            slider1_indice = desplazar_galeria(slider1_galeria,slider1_indice,slider1_width,slider1_margen,slider1_contenido,slider1_desplaza,"seccion-slider1__marcador-activo",slider1_cantidad,"imagen_slider");
        }
    },3000);

    avanzar_slider1 = () => {
        desplazar_slider1 = setInterval(function(){
            if (slider1_galeria.clientWidth > document.getElementById('contenedor').clientWidth) {
                slider1_indice = desplazar_galeria(slider1_galeria,slider1_indice,slider1_width,slider1_margen,slider1_contenido,slider1_desplaza,"seccion-slider1__marcador-activo",slider1_cantidad,"imagen_slider");
            }
        },3000);
    };

    detener_slider1 = () => {
        console.log("detener")
        clearInterval(desplazar_slider1);
    };
}


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
    // console.log("entra en configurar_blog")
    blog_contenedor = document.getElementById('blog__contenedor');
    blog_galeria = document.getElementById('blog__galeria');
    blog_contenido = document.getElementsByClassName('seccion-consejos__slider-blog');
    blog_dots = document.getElementById('blog__marcadores-slide');
    // blog_li = document.getElementsByClassName("blog_li");
    blog_margen = (screen.width < 520) ? 20 : (blog_contenedor.getBoundingClientRect().width * 0.01)+3;
    console.log("blog-margen"+blog_margen)
    blog_cantidad = (screen.width < 520) ? 1 : 2;
    // blog_width = Math.floor(document.getElementById('contenedor').clientWidth / blog_cantidad) - blog_margen;
    // var ancho_contenedor = document.getElementById('contenedor').clientWidth;
    // document.getElementById('contenedor').style.width = ancho_contenedor+"px!important";
    blog_width = (screen.width < 520) ? ((document.getElementById('blog__contenedor').getBoundingClientRect().width / blog_cantidad) - blog_margen) : (document.getElementById('blog__contenedor').getBoundingClientRect().width / blog_cantidad);  

    console.log("blog-width / cantidad"+blog_width+" / "+blog_cantidad)

    blog_indice = 0;
    blog_desplaza = 1;

    // console.log("width item:"+blog_width+" cant items:"+blog_contenido.length+" contenedor:"+document.getElementById('contenedor').clientWidth)

    generar(blog_width,blog_dots,blog_contenido,blog_li,"li_blog",blog_indice,blog_galeria,blog_cantidad, blog_desplaza,"blog__marcador-activo");

    galeria.style.transform = "translate("+(+(blog_margen/2))+"px)";

    desplazar_blog = setInterval(function(){
        if (blog_galeria.clientWidth > document.getElementById('blog__contenedor').clientWidth) {
            blog_indice = desplazar_galeria(blog_galeria,blog_indice,blog_width,blog_margen,blog_contenido,blog_desplaza,"blog__marcador-activo",blog_cantidad,"li_blog");
        }
    },3000);

    avanzar_blog = () => {
        desplazar_blog = setInterval(function(){
            if (blog_galeria.clientWidth > document.getElementById('blog__contenedor').clientWidth) {
                blog_indice = desplazar_galeria(blog_galeria,blog_indice,blog_width,blog_margen,blog_contenido,blog_desplaza,"blog__marcador-activo",blog_cantidad,"li_blog");
            }
        },3000);
    };

    detener_blog = () => {
        console.log("detener")
        clearInterval(desplazar_blog);
    };
}

function blog_avanzar1(){
    console.log("blog_avanzar1")
    detener_blog();
    blog_indice = desplazar1(blog_galeria,blog_indice,blog_width,blog_margen,blog_contenido,blog_desplaza,"blog__marcador-activo",blog_cantidad,"li_blog");
    avanzar_blog();
}; 


function configurar_sliders() {
    }


window.onload = function () {

    configurar_slider1();
    slider1_contenedor.style.height = slider1_galeria.style.height;
    configurar_blog();
   
   
    slider1_contenedor.addEventListener("mouseover", function() {
        console.log("mouseover")
        detener_slider1();
    });
    slider1_contenedor.addEventListener("mouseout", function() {
        console.log("mouseout")
        avanzar_slider1()
    });

    $('.imagen_slider a').click(function(target){
        target.preventDefault();
        var li_slider = document.getElementsByClassName('imagen_slider');
        detener_slider1();
        for (let index = 0; index < slider1_contenido.length; index++) {
            if (slider1_contenido[0].getAttribute("id") == $(this).attr('href')) {
                li_slider[slider1_indice].classList.remove("seccion-slider1__marcador-activo");
                var id = slider1_contenido[0].getAttribute("id").match(/\d/g);
                id = id.join("");
                slider1_indice = id;
                li_slider[slider1_indice].classList.add("seccion-slider1__marcador-activo");
                index = slider1_contenido.length;
        }else{
                slider1_galeria.insertAdjacentElement("beforeEnd",slider1_contenido[0]);
            }
        }
        avanzar_slider1();
    }); 



    blog_contenedor.addEventListener("mouseover", function() {
        console.log("mouseover")
        detener_blog();
    });
    blog_contenedor.addEventListener("mouseout", function() {
        console.log("mouseout")
        avanzar_blog()
    });

    $('.li_blog a').click(function(target){
        target.preventDefault();
        var li_blog = document.getElementsByClassName('li_blog');
        detener_blog();
        for (let index = 0; index < blog_contenido.length; index++) {
            if (blog_contenido[0].getAttribute("id") == $(this).attr('href')) {
                li_blog[blog_indice].classList.remove("blog__marcador-activo");
                var id = blog_contenido[0].getAttribute("id").match(/\d/g);
                id = id.join("");
                blog_indice = id;
                li_blog[blog_indice].classList.add("blog__marcador-activo");
                index = blog_contenido.length;
        }else{
                blog_galeria.insertAdjacentElement("beforeEnd",blog_contenido[0]);
            }
        }
        avanzar_blog();
    }); 

    
    document.getElementById('flecha-slider-der').addEventListener("click", function() {
        blog_avanzar1();
    });
    document.getElementById('flecha-slider-izq').addEventListener("click", function() {
        detener_blog();
        blog_indice = blog_retroceder1(blog_galeria,blog_indice,blog_width,blog_margen,blog_contenido,blog_desplaza,"blog__marcador-activo",blog_cantidad,"li_blog");
        avanzar_blog();
    });
    
}

window.addEventListener('resize', function() {
    detener_slider1();
    configurar_slider1();

    detener_blog();
    configurar_blog();
});



