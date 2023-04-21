function generar_footer() {
    var contenido = ""; 
    contenido = '<section class="footer__contenido"><div class="footer__contenido-logo"><a href="index.html"><img src="./img/compartidos/logo-moto-roma.webp" alt="Logo Moto Roma" class="logo" width="250" height="44"></a></div><div class="footer__contenido-info"><p class="footer__titulo-columna">Info Moto Roma</p><p>(011) 5263-7662</p><p>Av. Rivadavia 10.742 Liniers CABA</p><p>Lun a Vie de 10hs a 14hs y 15hs a 19hs</p><p>Sabados de 9hs a 13hs</p></div><div class="footer__contenido-conoce"><p class="footer__titulo-columna">Conoce Moto Roma</p><a href="modelos.html">Modelos</a><a href="marcas.html">Marcas</a><a href="accesorios.html">Accesorios</a><a href="blog.html">Blog</a></div></section><hr><section class="footer__footer"><p>Diseñada por Benteveo</p></section>';
    document.getElementById('footer-pagina').innerHTML = contenido;
}
