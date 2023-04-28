
var iniciar_destination;
var detener_slider1;

function generar(width,dots,contenido,li,li_nombre,indice,galeria,cantidad,desplaza) {
        // if (width <= 0 || isNaN(width)) {
        //     return;
        // }
        console.log("generar "+width+" * "+contenido.length+" indice:"+indice)
        
        for (let index = 0; index < contenido.length; index++) {
            contenido[index].style.width = (width) + "px";
            contenido[index].setAttribute("id", li_nombre+index );
        }
        
        dots.innerHTML = "";
        for (let index = 0; index < (contenido.length / desplaza); index++) {
            dots.innerHTML = dots.innerHTML + '<li class="'+li_nombre+'"><a href="'+li_nombre+(index * desplaza)+'"><div class="dot"></div></a></li>';
        }
        li = document.getElementsByClassName(li_nombre);
        li[indice].classList.add("seccion-slider1__marcador-activo");
        dots.style.display = (li.length < 2 || contenido.length == cantidad) ? 'none' : '';
        galeria.style.display = "";
    }


function desplazar_galeria(galeria,indice,width,margen,contenido,desplaza) {
        if (width <= 0 || isNaN(width) || !contenido) {
            return;
        }
        galeria.style.transform = "translate("+(-((width+margen)*desplaza))+"px)";
        galeria.style.transition = "transform 1s";
        setTimeout(() => {
            galeria.style.transition = "none";
            galeria.style.transform = "translate(0px)";
            for (let index = 1; index <= desplaza; index++) {
                galeria.insertAdjacentElement("beforeEnd",contenido[0]);
            }
        }, 2000);
        // console.log("indice:"+indice+" li[indice] "+li[indice] )
        var li = document.getElementsByClassName('li_slider');
        console.log("indice "+indice)
        li[indice].classList.remove("seccion-slider1__marcador-activo");
        indice++;
        indice = (indice >= li.length) ? 0 : indice;
        li[indice].classList.add("seccion-slider1__marcador-activo");
        return indice;
    }


// **************** HOME- SLIDER SUPERIOR ****************
var slider1_galeria;
var slider1_contenido;
var slider1_dots;
var slider1_li;
var slider1_width;
var slider1_indice;
var slider1_margen;
var slider1_cantidad;
var slider1_desplaza;
var desplazar_slider1;

function configurar_slider1() {
    console.log("entra en configurar_slider1")
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

    console.log("width item:"+slider1_width+" cant items:"+slider1_contenido.length+" contenedor:"+document.getElementById('contenedor').clientWidth)

    generar(slider1_width,slider1_dots,slider1_contenido,slider1_li,"li_slider",slider1_indice,slider1_galeria,slider1_cantidad, slider1_desplaza);

    // slider1_galeria.style.transform = "translate("+(-((slider1_width+20)))+"px)";
    desplazar_slider1 = setInterval(function(){
        if (slider1_galeria.clientWidth > document.getElementById('contenedor').clientWidth) {
            slider1_indice = desplazar_galeria(slider1_galeria,slider1_indice,slider1_width,slider1_margen,slider1_contenido,slider1_desplaza);
        }
    },3000);

    detener_slider1 = () => {
        console.log("detener")
        clearInterval(desplazar_slider1);
    };
}




// **************** HOME-CARDS ** PRIMER BUSCADOR ****************
    var home_cards_galeria;
    var home_cards_contenido;
    var home_cards_dots;
    var home_cards_li;
    var home_cards_width;
    var home_cards_indice;
    var home_cards_margen;
    var home_cards_cantidad;
    var home_cards_desplaza;
    var desplazar_home_cards;

    function configurar_home_cards() {
        home_cards_galeria = document.getElementById('home-cards-items_2');
        home_cards_contenido = document.getElementsByClassName('home-cards-slide');
        home_cards_dots = document.getElementById('home-cards-dots');
        home_cards_li = document.getElementsByClassName("li_home_cards");
        home_cards_margen = 20;
        home_cards_width = (Math.floor(Math.floor(document.getElementById('home-cards-container').clientWidth) / home_cards_cantidad)) - home_cards_margen;
        home_cards_indice = 0;
        home_cards_cantidad = -1;
        home_cards_desplaza = 1;

        // home_cards_galeria.style.transform = "translate("+(-((home_cards_width+20)))+"px)";
        desplazar_home_cards = setInterval(function(){
            if (home_cards_galeria.clientWidth > document.getElementById('home-cards-container').clientWidth) {
                home_cards_indice = desplazar_galeria(home_cards_galeria,home_cards_li,home_cards_indice,home_cards_width,home_cards_margen,home_cards_contenido,home_cards_desplaza);
            }
        },2000);
    }

    const avanzar_home_cards = () => {
        desplazar_home_cards = setInterval(function(){
            if (home_cards_galeria.clientWidth > document.getElementById('home-cards-container').clientWidth) {
                home_cards_indice = desplazar_galeria(home_cards_galeria,home_cards_li,home_cards_indice,home_cards_width,home_cards_margen,home_cards_contenido,home_cards_desplaza); 
            }
        },2000);
    };
    detener_home_cards = () => {
        console.log("detener")
        clearInterval(desplazar_home_cards);
    };
    // home_cards_galeria.addEventListener("mouseover", detener_home_cards);
    // home_cards_galeria.addEventListener("mouseout", avanzar_home_cards);
    // document.getElementById('home-cards-items_2').addEventListener("mouseover", detener_home_cards);
    // document.getElementById('home-cards-items_2').addEventListener("mouseout", avanzar_home_cards);
    

//  ************************************************** 


// *********************   destination-list-slider *****************
    var destination_galeria;
    var destination_contenido;
    var destination_dots;
    var destination_li;
    var destination_width;
    var destination_indice;
    var destination_margen;
    var destination_cantidad;
    var destination_desplaza;
    var desplazar_destination;

    function configurar_destination() {
        destination_contenido = document.getElementsByClassName('destination-slide');
        destination_galeria = document.getElementById('destination-list-slider_2');
        destination_dots = document.getElementById('destination-dots');
        destination_li = document.getElementsByClassName("li_destination");
        destination_margen = 20;
        destination_cantidad = (screen.width < 1280) ? (screen.width < 992) ? 2 : 1 : 2;
        destination_width = (Math.floor(Math.floor(document.getElementById('destination-list-container').clientWidth) / destination_cantidad)) - destination_margen;

        console.log("contenedor: "+Math.floor(document.getElementById('destination-list-container').clientWidth)+" -destination_width: "+destination_width)

        destination_indice = 0;
        destination_desplaza = 1;
    
        // destination_galeria.style.transform = "translate("+(-((destination_width+20)))+"px)"; no va
    }


    const avanzar_destination = () => {
        if (screen.width < 1280){
            desplazar_destination = setInterval(function(){
                destination_indice = desplazar_galeria(destination_galeria,destination_li,destination_indice,destination_width,destination_margen,destination_contenido,destination_desplaza);
            },2000);            
        }else{
            document.getElementById('destination-dots').style.display = 'none';
        }
    };
    const detener_destination = () => {
        clearInterval(desplazar_destination);
    };
    // destination_galeria.addEventListener("mouseover", detener_destination);
    // destination_galeria.addEventListener("mouseout", avanzar_destination);


//  **************************************************

// **************** HOME-CARDS ** CATEGORIAS = TAGS ****************
var home_tags_galeria;
var home_tags_contenido;
var home_tags_dots;
var home_tags_li;
var home_tags_width;
var home_tags_indice;
var home_tags_margen;
var home_tags_cantidad;
var home_tags_desplaza;
var desplazar_home_tags;

function configurar_home_tags() {
    home_tags_galeria = document.getElementById('tag-items_2');
    home_tags_contenido = document.getElementsByClassName('home-tags-slide');
    home_tags_dots = document.getElementById('home-tags-dots');
    home_tags_li = document.getElementsByClassName("li_home_tags");
    home_tags_margen = 20;
    home_tags_width = (Math.floor(Math.floor(document.getElementById('home-tags-container').clientWidth) / home_tags_cantidad)) - home_tags_margen;
    home_tags_indice = 0;
    home_tags_cantidad = -1;
    home_tags_desplaza = 1;

    // home_tags_galeria.style.transform = "translate("+(-((home_tags_width+20)))+"px)";
    // desplazar_home_tags = setInterval(function(){
    //     if (home_tags_galeria.clientWidth > document.getElementById('home-tags-container').clientWidth) {
    //         home_tags_indice = desplazar_galeria(home_tags_galeria,home_tags_li,home_tags_indice,home_tags_width,home_tags_margen,home_tags_contenido,home_tags_desplaza);
    //     }
    // },2000);
}

const avanzar_home_tags = () => {
    desplazar_home_tags = setInterval(function(){
        if (home_tags_galeria.clientWidth > document.getElementById('home-tags-container').clientWidth) {
            home_tags_indice = desplazar_galeria(home_tags_galeria,home_tags_li,home_tags_indice,home_tags_width,home_tags_margen,home_tags_contenido,home_tags_desplaza); 
        }
    },2000);
};
const detener_home_tags = () => {
    console.log("detener")
    clearInterval(desplazar_home_tags);
};
// home_tags_galeria.addEventListener("mouseover", detener_home_tags);
// home_tags_galeria.addEventListener("mouseout", avanzar_home_tags);
// document.getElementById('tag-items_2').addEventListener("mouseover", detener_home_tags);
// document.getElementById('tag-items_2').addEventListener("mouseout", avanzar_home_tags);


//  ************************************************** 



// **************** HOME-CARDS ** CATEGORIAS = TAGS ****************
var offer_galeria;
var offer_contenido;
var offer_dots;
var offer_li;
var offer_width;
var offer_indice;
var offer_margen;
var offer_cantidad;
var offer_desplaza;
var desplazar_offer;

function configurar_offer() {
    offer_galeria = document.getElementById('offer-items_2');
    offer_contenido = document.getElementsByClassName('offer-slide');
    offer_dots = document.getElementById('offer-dots');
    offer_li = document.getElementsByClassName("li_offer");
    offer_margen = 20;
    offer_width = (Math.floor(Math.floor(document.getElementById('offer-items-container').clientWidth) / offer_cantidad)) - offer_margen;
    offer_indice = 0;
    offer_cantidad = -1;
    offer_desplaza = 1;

    console.log("configurar_offer"+offer_galeria+"*"+offer_contenido+"*"+offer_dots+"*"+offer_width)

    // offer_galeria.style.transform = "translate("+(-((offer_width+20)))+"px)";
    // desplazar_offer = setInterval(function(){
    //     if (offer_galeria.clientWidth > document.getElementById('offer-items-container').clientWidth) {
    //         offer_indice = desplazar_galeria(offer_galeria,offer_li,offer_indice,offer_width,offer_margen,offer_contenido,offer_desplaza);
    //     }
    // },2000);
}

const avanzar_offer = () => {
    desplazar_offer = setInterval(function(){
        if (offer_galeria.clientWidth > document.getElementById('offer-items-container').clientWidth) {
            offer_indice = desplazar_galeria(offer_galeria,offer_li,offer_indice,offer_width,offer_margen,offer_contenido,offer_desplaza); 
        }
    },2000);
};
const detener_offer = () => {
    console.log("detener")
    clearInterval(desplazar_offer);
};
// offer_galeria.addEventListener("mouseover", detener_offer);
// offer_galeria.addEventListener("mouseout", avanzar_offer);
// document.getElementById('tag-items_2').addEventListener("mouseover", detener_offer);
// document.getElementById('tag-items_2').addEventListener("mouseout", avanzar_offer);


//  ************************************************** 



function configurar_sliders() {
     //******** slider1  *******
    //  slider1_cantidad = (screen.width < 1280) ? (screen.width < 940) ? 2 : 3 : 4;
     slider1_width = (Math.floor(Math.floor(document.getElementById('contenedor').clientWidth) / slider1_cantidad)) - slider1_margen;
     generar(slider1_width,slider1_dots,slider1_contenido,slider1_li,"li_slider1",slider1_indice,slider1_galeria,slider1_cantidad, slider1_desplaza);

        //******** home_cards  *******
            // home_cards_cantidad = (screen.width < 1280) ? (screen.width < 940) ? 2 : 3 : 4;
            // home_cards_width = (Math.floor(Math.floor(document.getElementById('home-cards-container').clientWidth) / home_cards_cantidad)) - home_cards_margen;
            // generar(home_cards_width,home_cards_dots,home_cards_contenido,home_cards_li,"li_home_cards",home_cards_indice,home_cards_galeria,home_cards_cantidad, home_cards_desplaza);

        //******** home_tags  *******
            // home_tags_cantidad = (screen.width < 1280) ? (screen.width < 992) ? (screen.width < 768) ? 2 : 3 : 4 : 5;
            // home_tags_width = (Math.floor(Math.floor(document.getElementById('home-tags-container').clientWidth) / home_tags_cantidad)) - home_tags_margen;

            // console.log("***config-slider - TAG "+home_tags_width+" cant "+home_tags_cantidad + "***"+Math.floor(Math.floor(document.getElementById('home-tags-container').clientWidth))+" contenido "+home_tags_contenido.length)

            // generar(home_tags_width,home_tags_dots,home_tags_contenido,home_tags_li,"li_home_tags",home_tags_indice,home_tags_galeria,home_tags_cantidad, home_tags_desplaza);

            // clearInterval(desplazar_home_tags);

            // desplazar_home_tags = setInterval(function(){

            //     if (home_tags_width <= 0) {
            //         configurar_home_tags();

            //         console.log("setInterval "+home_tags_width+" cant "+home_tags_cantidad + "***"+Math.floor(Math.floor(document.getElementById('home-tags-container').clientWidth)))

            //         home_tags_width = (Math.floor(Math.floor(document.getElementById('home-tags-container').clientWidth) / home_tags_cantidad)) - home_tags_margen;
                    
            //         generar(home_tags_width,home_tags_dots,home_tags_contenido,home_tags_li,"li_home_tags",home_tags_indice,home_tags_galeria,home_tags_cantidad, home_tags_desplaza);

            //     }else{
            //         console.log("width > 0")
                    
            //         home_tags_indice = desplazar_galeria(home_tags_galeria,home_tags_li,home_tags_indice,home_tags_width,home_tags_margen,home_tags_contenido,home_tags_desplaza);

            //     }
            // },2000);  



    //******** ofertas  *******
            // offer_cantidad = (screen.width < 1280) ? (screen.width < 992) ? (screen.width < 768) ? 2 : 2 : 2 : 2;
            // offer_width = (Math.floor(Math.floor(document.getElementById('offer-items-container').clientWidth) / offer_cantidad)) - offer_margen;

            // console.log("configurar_slider-OFERTA"+offer_galeria+"*"+offer_contenido+"*"+offer_dots+"*"+offer_width+" cant "+offer_cantidad)

            // clearInterval(desplazar_offer);  // por si está en resize
            
            // generar(offer_width,offer_dots,offer_contenido,offer_li,"li_offer",offer_indice,offer_galeria,offer_cantidad, offer_desplaza);

            // desplazar_offer = setInterval(function(){

            //     if (offer_width <= 0 || !offer_width || !offer_galeria || !offer_contenido || isNaN(offer_width) || offer_galeria == null || offer_contenido == null || offer_contenido == undefined || !offer_contenido || offer_contenido=="") {
            //         console.log("algo le falta")
            //         configurar_offer();

            //         console.log("Esta configurando OFFER "+offer_width+" cant "+offer_cantidad + "***"+Math.floor(Math.floor(document.getElementById('offer-items-container').clientWidth)))

            //         if (offer_contenido || offer_contenido != null || offer_contenido != undefined  || offer_contenido !=""){
            //             generar(offer_width,offer_dots,offer_contenido,offer_li,"li_offer",offer_indice,offer_galeria,offer_cantidad, offer_desplaza);
            //         }
            //     }else{
            //         console.log("width > 0")
            //         console.log("offer_contenido.length"+offer_contenido.length)
            //         if (offer_galeria.clientWidth <= document.getElementById('offer-items-container').clientWidth) {
            //             clearInterval(desplazar_offer);
            //             console.log("OFFER no desplaza")
            //         }else{
                        
            //             offer_indice = desplazar_galeria(offer_galeria,offer_li,offer_indice,offer_width,offer_margen,offer_contenido,offer_desplaza);
            //         }
            //     }
            // },2000);  


        //******** destination  *******
            // destination_cantidad = (screen.width < 1280) ? (screen.width < 992) ? 2 : 1 : 2;

            // destination_width = (Math.floor(Math.floor(document.getElementById('destination-list-container').clientWidth) / destination_cantidad)) - destination_margen;
            // destination_width = (screen.width >= 1280) ? destination_width-1 : destination_width;

            //     console.log("config-sld ** screen:"+screen.width+" container:"+Math.floor(document.getElementById('destination-list-container').clientWidth)+" * cantidad dst"+ destination_cantidad)
            //     console.log("destination_width "+destination_width)

            
            // clearInterval(desplazar_destination);

            // generar(destination_width,destination_dots,destination_contenido,destination_li,"li_destination",destination_indice,destination_galeria,destination_cantidad, destination_desplaza);

            // desplazar_destination = setInterval(function(){

            //     if (destination_width <= 0) {
            //         configurar_destination();

            //         console.log("while "+destination_width+" cant "+destination_cantidad + "***"+Math.floor(Math.floor(document.getElementById('destination-list-container').clientWidth)))

            //         destination_width = (Math.floor(Math.floor(document.getElementById('destination-list-container').clientWidth) / destination_cantidad)) - destination_margen;
                     
            //         destination_width = (screen.width >= 1280) ? destination_width-1 : destination_width;
                    
            //         generar(destination_width,destination_dots,destination_contenido,destination_li,"li_destination",destination_indice,destination_galeria,destination_cantidad, destination_desplaza);

            //     }else{
            //         console.log("width > 0")

            //         if (screen.width < 1280){
            //             if (destination_contenido.length <= destination_desplaza) {
            //                 clearInterval(desplazar_destination);
            //                 console.log("DESTINO no desplaza")
            //             }else{
            //                 destination_indice = desplazar_galeria(destination_galeria,destination_li,destination_indice,destination_width,destination_margen,destination_contenido,destination_desplaza);
            //             }
            //         }else{
            //             clearInterval(desplazar_destination);
            //             document.getElementById('destination-dots').style.display = 'none';
            //         }
            //     }
            // },2000);  

    }

window.onload = function () {

    // configurar_home_cards();
    // configurar_destination();
    // configurar_sliders();
    configurar_slider1();

    
    // $('.li_home_cards a').click(function(event){
    //     event.preventDefault();
    //     detener_home_cards();
    //     for (let index = 0; index < home_cards_contenido.length; index++) {
    //         if (home_cards_contenido[0].getAttribute("id") == $(this).attr('href')) {
    //             home_cards_li[home_cards_indice].classList.remove("slick-active");
    //             var id = home_cards_contenido[0].getAttribute("id").match(/\d/g);
    //             id = id.join("");
    //             home_cards_indice = id;
    //             home_cards_li[home_cards_indice].classList.add("slick-active");
    //             index = home_cards_contenido.length;
    //     }else{
    //             home_cards_galeria.insertAdjacentElement("beforeEnd",home_cards_contenido[0]);
    //         }
    //     }
    //     avanzar_home_cards();
    // });


    
    // $('.li_destination a').click(function(event){ 
    //     event.preventDefault();
    //     detener_destination();
    //     for (let index = 0; index < destination_contenido.length; index++) {
    //         if (destination_contenido[0].getAttribute("id") == $(this).attr('href')) {
    //             destination_li[destination_indice].classList.remove("slick-active");
    //             var id = destination_contenido[0].getAttribute("id").match(/\d/g);
    //             id = id.join("");
    //             destination_indice = id;
    //             destination_li[destination_indice].classList.add("slick-active");
    //             index = destination_contenido.length;
    //     }else{
    //             destination_galeria.insertAdjacentElement("beforeEnd",destination_contenido[0]);
    //         }
    //     }
    //     avanzar_destination();
    // });


}

window.addEventListener('resize', function() {
    console.log("resize")
    detener_slider1();
    configurar_slider1();
});
