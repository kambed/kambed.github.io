window.onload = function() {
    this.loop=0;
    this.tick();
};

tick=function() {
    if(this.loop%5==0){
        document.getElementById("logoContainer").style.backgroundImage='url("logoCPP.png")';
    }
    if(this.loop%5==1){
        document.getElementById("logoContainer").style.backgroundImage='url("logoJAVA.png")';
    }
    if(this.loop%5==2){
        document.getElementById("logoContainer").style.backgroundImage='url("logoJS.png")';
    }
    if(this.loop%5==3){
        document.getElementById("logoContainer").style.backgroundImage='url("logoHTML.png")';
    }
    if(this.loop%5==4){
        document.getElementById("logoContainer").style.backgroundImage='url("logoCSS.png")';
    }
    this.loop++;
    setTimeout(function() {
        this.tick();
    }, 3000);
}