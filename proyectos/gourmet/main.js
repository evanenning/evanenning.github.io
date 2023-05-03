$(document).ready(function () {

    var cambio = false;
    $("#reclamo").click(function () {
        if (cambio) {
            $("#reclamo").text("Contactanos");
            $(".titulo h1").text("Haz un reclamo");
            $(".mesa").text("Numero de mesa");
            $(".input-mesa").attr("placeholder", "Ej: 8");
            $(".reclamo").text("Cuentanos sobre el reclamo");
            cambio = false;
        } else {
            $("#reclamo").text("Haz un reclamo");
            $(".titulo h1").text("Contactanos");
            $(".mesa").text("Numero de celular");
            $(".input-mesa").attr("placeholder", "+54 9 11218394822");
            $(".reclamo").text("Motivo de contacto");
            cambio = true;
        }
    });


});



    const form = document.querySelector('form');
    const nombre = document.querySelector('#exampleFormControlInput1');
    const email = document.querySelector('#exampleFormControlInput1[type="email"]');
    const numero = document.querySelector(".input-mesa");
    const motivo = document.querySelector('#exampleFormControlTextarea1');

    form.addEventListener('submit', function(event) {
        if (nombre.value === '') {
            event.preventDefault();
            alert('Por favor completa tu nombre');
        } else if (email.value === '') {
            event.preventDefault();
            alert('Por favor ingrese su email');
        } else if (motivo.value === '') {
            event.preventDefault();
            alert('Por favor escriba el motivo');
        } else if (numero.value === '') {
            event.preventDefault();
            alert('Por favor ingrese su numero');
        } else {
            alert("Formulario enviado")
        }
    });
