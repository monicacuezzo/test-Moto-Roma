function generar_header() {
    var contenido = ""; 
    contenido = '<div class="header__principal"><a href="index.html" class="header__principal-logo"><img src="./img/compartidos/logo-moto-roma.webp" alt="Ir a Inicio" class="logo" width="250" height="44"></a><img id="ico-menu" src="img/compartidos/ico-menu.webp" alt="Abrir menú" width="20" height="15" class="header__principal-ico-menu"></div><nav class="header__nav"><a href="index.html#modelos" class="header__nav-link">Modelos</a><a href="patentes.html" class="header__nav-link">Patentes</a><a href="https://wa.me/+5491126903989" class="header__nav-link" target="_blank">Seguros</a><a href="servicio-tecnico.html" class="header__nav-link">Servicio Técnico</a><a href="horarios.html" class="header__nav-link">Horarios</a><a href="contacto.html" class="header__nav-link"><span class="header__nav-contacto">Contacto</span></a></nav>';
    document.getElementById('header-pagina').innerHTML = contenido;
}
