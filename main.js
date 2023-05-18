//footer//

var footer = document.querySelector('footer');
var lastScrollTop = 0;

window.addEventListener('scroll', function() {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop <= lastScrollTop) {
    footer.classList.remove('hidden');
  } else {
    footer.classList.add('hidden');
  }
  lastScrollTop = scrollTop;
});

//formulario validacion//

document.getElementById("botonEnviar").addEventListener("click", function() {
  
  var nombreInput = document.querySelector("#formulario input[name='nombre']");
  var emailInput = document.querySelector("#formulario input[name='email']");
  var mensajeInput = document.querySelector("#formulario input[name='mensaje']");
  
  
  if (nombreInput.value === "" || emailInput.value === "" || mensajeInput.value === "") {
    alert("Por favor, complete todos los campos.");
    return; 
  }
  
 
  
  
  nombreInput.value = "";
  emailInput.value = "";
  mensajeInput.value = "";
});

//enviar formulario//

document.getElementById("formulario").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita que el formulario se envíe de forma convencional
  
  var nombreInput = document.querySelector("#formulario input[name='nombre']").value;
  var emailInput = document.querySelector("#formulario input[name='email']").value;
  var mensajeInput = document.querySelector("#formulario textarea[name='mensaje']").value;

  var xhr = new XMLHttpRequest();
  xhr.open("POST", "enviar_formulario.php", true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        alert(xhr.responseText); // Muestra la respuesta del servidor
      } else {
        alert('Hubo un error al enviar el formulario.');
      }
    }
  };
  
  var data = "nombre=" + encodeURIComponent(nombreInput) + "&email=" + encodeURIComponent(emailInput) + "&mensaje=" + encodeURIComponent(mensajeInput);
  xhr.send(data);
});
