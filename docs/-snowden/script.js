let open = document.getElementById("open")
let close = document.getElementById("close")

var nav_mobile = document.getElementById("myheader");
var sticky = nav_mobile.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    nav_mobile.classList.add("sticky");
  } else {
    nav_mobile.classList.remove("sticky");
  }
}

window.addEventListener('scroll', function() {
  myFunction()
});


function menu_open() {
  var open = document.getElementById("open");
  overlay.classList.remove("hidden");
}

function menu_close() {
  var close = document.getElementById("close");
  overlay.classList.add("hidden");
}


open.addEventListener("click", menu_open);
close.addEventListener("click", menu_close);