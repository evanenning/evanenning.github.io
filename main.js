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

//formulario//

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