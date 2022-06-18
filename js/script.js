const contenidoInicio = document.querySelector('.contenido-inicio');
const contenidoProyectos = document.querySelector('.proyectos');
const contenidoCertificados = document.querySelector('.contenido-certificados');
const contenidoSobreMi = document.querySelector('.contenido-sobre-mi');
const contenidoContacto = document.querySelector('.contenido-contacto');

const mostrarInicio = document.getElementsByClassName('ir-inicio');
const mostrarProyectosEnlace = document.getElementsByClassName('ir-proyectos');
const mostrarProyectosBtn = document.getElementsByClassName('ir-proyectos')[2];
const mostrarSobreMiBtn = document.getElementsByClassName('ir-sobre-mi');
const mostrarcontactoBtn = document.getElementsByClassName('ir-contacto');
const mostrarCertificados = document.getElementsByClassName('ir-certificados');


const btnProyectosPhp = document.querySelector('.php-proyectos');
const btnProyectosJs = document.querySelector('.js-proyectos');
const btnProyectosCss = document.querySelector('.css-proyectos');
const btnProyectosJava = document.querySelector('.java-proyectos');

const contenedorProyectosPhp = document.querySelector('.php');
const contenedorProyectosJs = document.querySelector('.js');
const contenedorProyectosCss = document.querySelector('.css');
const contenedorProyectosJava = document.querySelector('.java');

const opcionesTecnologias = document.getElementsByClassName('opciones-tecnologias');

const menuCompleto = document.getElementsByClassName('menu');
const menuLateralCompleto = document.getElementsByClassName('menu-lateral-item');

const formularioContacto = document.getElementById('formulario-contacto');
const mandarCorreo = document.getElementById('mandar-correo');

const menuBurguer = document.querySelector('.menu-burguer');
const btnCerrar = document.querySelector('.btn-cerrar');
const menuLateral = document.querySelector('.menu-lateral');

const galeriaImagenesConstancias = document.querySelectorAll('.img-cerficados');
const imagenGrande = document.querySelector('.imagen-grande');
const imagenGrandeContenedor = document.querySelector('.img-grande-contenido');
const cerrarImagenGrande = document.querySelector('.cerrar-imagen-grande');

const black = document.querySelector('.black');

black.addEventListener('click', e=>{
    window.location.href = "https://fyacar.github.io/portafoliojean/";
});

cerrarImagenGrande.addEventListener('click', e=>{   
    imagenGrandeContenedor.classList.remove('imagen-grande-abierta')
})

if(galeriaImagenesConstancias){ 
    console.log("hola");
    galeriaImagenesConstancias.forEach(imagen => imagen.addEventListener('click', e=> {
        let nombreSrc = imagen.src;
        let imgSrc = "img/" + nombreSrc.split('img/')[1];
        console.log(imgSrc);
        imagenGrande.setAttribute('src', imgSrc);
        imagenGrandeContenedor.classList.add('imagen-grande-abierta');    
        console.log(imagenGrandeContenedor);
        }));
    
}

menuBurguer.addEventListener('click', e=>{
    menuLateral.classList.add('menu-abierto');
})
btnCerrar.addEventListener('click', e=>{
    menuLateral.classList.remove('menu-abierto');
})



/* ++++++++++++++++++++++++++         FORMULARIO DE CONTACTO     ++++++++++++++++++++++++++++ */
formularioContacto.addEventListener('submit', e=>{
    e.preventDefault();
    const formulario = new FormData(formularioContacto);
    const nombre=formulario.get('nombre-contacto');
    const correo=formulario.get('correo-contacto');
    const mensaje=formulario.get('mensaje-contacto');

    mandarCorreo.setAttribute("href","mailto:fyacar_14@hotmail.com?subject=" + nombre+ " " + correo +"&body="+ mensaje);
    mandarCorreo.click();
})


menuCompleto[0].addEventListener('click',e=>{
    quitarSeleccionMenu();
    seleccionarElementoMenu(menuLateralCompleto[0], menuCompleto[0]);
})
menuCompleto[1].addEventListener('click',e=>{
    quitarSeleccionMenu();
    seleccionarElementoMenu(menuLateralCompleto[1], menuCompleto[1]);
})
menuCompleto[2].addEventListener('click',e=>{
    quitarSeleccionMenu();
    seleccionarElementoMenu(menuLateralCompleto[2], menuCompleto[2]);
})
menuCompleto[3].addEventListener('click',e=>{
    quitarSeleccionMenu();
    seleccionarElementoMenu(menuLateralCompleto[3], menuCompleto[3]);
})
/* menuCompleto[4].addEventListener('click',e=>{
    quitarSeleccionMenu();
    seleccionarElementoMenu(menuLateralCompleto[4], menuCompleto[4]);
}) */
menuLateralCompleto[0].addEventListener('click',e=>{
    quitarSeleccionMenu();
    seleccionarElementoMenu(menuLateralCompleto[0], menuCompleto[0]);
})
menuLateralCompleto[1].addEventListener('click',e=>{
    quitarSeleccionMenu();
    seleccionarElementoMenu(menuLateralCompleto[1], menuCompleto[1]);
})
menuLateralCompleto[2].addEventListener('click',e=>{
    quitarSeleccionMenu();
    seleccionarElementoMenu(menuLateralCompleto[2],menuCompleto[2]);
})
menuLateralCompleto[3].addEventListener('click',e=>{
    quitarSeleccionMenu();
    seleccionarElementoMenu(menuLateralCompleto[3], menuCompleto[3]);
})
/* menuLateralCompleto[4].addEventListener('click',e=>{
    quitarSeleccionMenu();
    seleccionarElementoMenu(menuLateralCompleto[4], menuCompleto[4]);
})
 */

function seleccionarElementoMenu(elemento, elemento2){   
        elemento.classList.add('menu-lateral-seleccionado');
        elemento2.classList.add('menu-seleccionado');
}

function quitarSeleccionMenu(){
    menuCompleto[0].classList.remove('menu-seleccionado');
    menuCompleto[1].classList.remove('menu-seleccionado');
    menuCompleto[2].classList.remove('menu-seleccionado');
    menuCompleto[3].classList.remove('menu-seleccionado');
    /* menuCompleto[4].classList.remove('menu-seleccionado'); */

    menuLateralCompleto[0].classList.remove('menu-lateral-seleccionado');
    menuLateralCompleto[1].classList.remove('menu-lateral-seleccionado');
    menuLateralCompleto[2].classList.remove('menu-lateral-seleccionado');
    menuLateralCompleto[3].classList.remove('menu-lateral-seleccionado');
   /*  menuLateralCompleto[4].classList.remove('menu-lateral-seleccionado'); */
}

opcionesTecnologias[0].addEventListener('click', e=>{
    quitarSeleccionTecnologias();
    aplicarSeleccionTecnologias(opcionesTecnologias[0]);
})
opcionesTecnologias[1].addEventListener('click', e=>{
    quitarSeleccionTecnologias();
    aplicarSeleccionTecnologias(opcionesTecnologias[1]);
})
opcionesTecnologias[2].addEventListener('click', e=>{
    quitarSeleccionTecnologias();
    aplicarSeleccionTecnologias(opcionesTecnologias[2]);
})
opcionesTecnologias[3].addEventListener('click', e=>{
    quitarSeleccionTecnologias();
    aplicarSeleccionTecnologias(opcionesTecnologias[3]);
})


function aplicarSeleccionTecnologias(elemento){
    elemento.classList.add('seleccionado');
}

function quitarSeleccionTecnologias(){
    //cambiar por un for al getElementsByClassName
    opcionesTecnologias[0].classList.remove('seleccionado');
    opcionesTecnologias[1].classList.remove('seleccionado');
    opcionesTecnologias[2].classList.remove('seleccionado');
    opcionesTecnologias[3].classList.remove('seleccionado');  
}

btnProyectosPhp.addEventListener('click', e=>{
    mostrarElementoTecnologias(contenedorProyectosPhp);
})
btnProyectosJs.addEventListener('click', e=>{
    mostrarElementoTecnologias(contenedorProyectosJs);
})
btnProyectosCss.addEventListener('click', e=>{
    mostrarElementoTecnologias(contenedorProyectosCss);
})
btnProyectosJava.addEventListener('click', e=>{
    mostrarElementoTecnologias(contenedorProyectosJava);
});


function ocultarElementosTecnologias(){
    ocultarElemento(contenedorProyectosPhp);
    ocultarElemento(contenedorProyectosJs);
    ocultarElemento(contenedorProyectosCss);
    ocultarElemento(contenedorProyectosJava);
}

function mostrarElementoTecnologias(elemento){
    ocultarElementosTecnologias();
    function mostrar(){
        elemento.style.display = "block";
        function animacionAparicion(){
            elemento.style.opacity="1";           
        }
        setTimeout(animacionAparicion,10);
       
    }
    setTimeout(mostrar,1001);
}


mostrarInicio[0].addEventListener('click', e=>{
    mostrarElemento(contenidoInicio);
});
mostrarInicio[1].addEventListener('click', e=>{
    mostrarElemento(contenidoInicio);
});

mostrarProyectosEnlace[0].addEventListener('click' , e=>{
    mostrarElemento(contenidoProyectos);
});
mostrarProyectosEnlace[1].addEventListener('click' , e=>{
    mostrarElemento(contenidoProyectos);
});
mostrarCertificados[0].addEventListener('click' , e=>{
    mostrarElemento(contenidoCertificados);
});
mostrarCertificados[1].addEventListener('click' , e=>{
    mostrarElemento(contenidoCertificados);
});

mostrarcontactoBtn[0].addEventListener('click', e=>{
    mostrarElemento(contenidoContacto);
})
mostrarcontactoBtn[1].addEventListener('click', e=>{
    mostrarElemento(contenidoContacto);
})

/* mostrarSobreMiBtn[0].addEventListener('click', e=>{
    mostrarElemento(contenidoSobreMi);
})
mostrarSobreMiBtn[1].addEventListener('click', e=>{
    mostrarElemento(contenidoSobreMi);
}) */

mostrarProyectosBtn.addEventListener('click' ,e=>{    
    quitarSeleccionMenu();
    seleccionarElementoMenu(menuLateralCompleto[1], menuCompleto[1]);
    mostrarElemento(contenidoProyectos);
})   


function mostrarElemento(elemento){
    ocultarElementos();
    function mostrar(){
        elemento.style.display = "block";
        function animacionAparicion(){
            elemento.style.opacity="1";           
        }
        setTimeout(animacionAparicion,10);       
    }
    setTimeout(mostrar,1001);
}


function ocultarElementos(){
    ocultarElemento(contenidoInicio);
    ocultarElemento(contenidoProyectos);
    /* ocultarElemento(contenidoSobreMi); */
    ocultarElemento(contenidoContacto);
    ocultarElemento(contenidoCertificados);
}

function ocultarElemento(elemento){
    elemento.style.opacity="0";
    function ocultar(){
        elemento.style.display="none";
    }
    setTimeout(ocultar,1000);
}

