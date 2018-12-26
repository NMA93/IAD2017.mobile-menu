let open = document.getElementById("open")
let close = document.getElementById("close")

var nav_mobile = document.getElementById("myheader");
var nav_mobile_overlay = document.getElementById("myheader_overlay");
var sticky = nav_mobile.offsetTop;
var sticky_overlay = nav_mobile_overlay.offsetTop;

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

function myFunction_overlay() {
  if (window.pageYOffset > sticky_overlay) {
    nav_mobile_overlay.classList.add("sticky");
  } else {
    nav_mobile_overlay.classList.remove("sticky");
  }
}

window.addEventListener('scroll', function() {
  myFunction_overlay()
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