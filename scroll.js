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

if(window.innerWidth<=499){
  document.getElementById("email").innerHTML = "kamil.bednarek.2001 @gmail.com";
}
window.onresize = function() {
  if(window.innerWidth<=499){
    document.getElementById("email").innerHTML = "kamil.bednarek.2001 @gmail.com";
  }else{
    document.getElementById("email").innerHTML = "kamil.bednarek.2001@gmail.com";
  }
}