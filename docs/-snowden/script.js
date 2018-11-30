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