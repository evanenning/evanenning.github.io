var footer = document.querySelector('footer');
var lastScrollTop = 0;

window.addEventListener('scroll', function() {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop < lastScrollTop) {
    footer.classList.remove('hidden');
  } else {
    footer.classList.add('hidden');
  }
  lastScrollTop = scrollTop;
});
