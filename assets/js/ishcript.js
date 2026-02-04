window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  var header = document.getElementById("header");
  if (header) { // Add this null check
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
      header.style.fontSize = "30px";
    } else {
      header.style.fontSize = "80px";
    }
  }
}


