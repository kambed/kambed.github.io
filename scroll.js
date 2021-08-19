var prevScrollpos = Infinity;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("topMenu").style.top = "0";
  } else {
    document.getElementById("topMenu").style.top = "-8%";
  }
  prevScrollpos = currentScrollPos;
}