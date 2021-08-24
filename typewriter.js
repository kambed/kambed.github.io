var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    if(this.loopNum%5==0){
        document.getElementById("logoContainer").style.backgroundImage='url("logoCPP.png")';
    }
    if(this.loopNum%5==1){
        document.getElementById("logoContainer").style.backgroundImage='url("logoJAVA.png")';
    }
    if(this.loopNum%5==2){
        document.getElementById("logoContainer").style.backgroundImage='url("logoJS.png")';
    }
    if(this.loopNum%5==3){
        document.getElementById("logoContainer").style.backgroundImage='url("logoHTML.png")';
    }
    if(this.loopNum%5==4){
        document.getElementById("logoContainer").style.backgroundImage='url("logoCSS.png")';
    }

    if(this.loopNum%2==0){
        document.getElementById("logoContainerTechno").style.backgroundImage='url("logoNode.png")';
    }
    if(this.loopNum%2==1){
        document.getElementById("logoContainerTechno").style.backgroundImage='url("logoGIT.png")';
    }
    }
    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.10em solid #fff; animation: blink-caret .75s step-end infinite; }";
    document.body.appendChild(css);
};