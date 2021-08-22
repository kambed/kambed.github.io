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
    if(this.loopNum%5==0){
        document.getElementById("languagesLogos").src= "logoCPP.png"
    }
    if(this.loopNum%5==1){
        document.getElementById("languagesLogos").src= "logoJAVA.png"
    }
    if(this.loopNum%5==2){
        document.getElementById("languagesLogos").src= "logoJS.png"
    }
    if(this.loopNum%5==3){
        document.getElementById("languagesLogos").src= "logoHTML.png"
    }
    if(this.loopNum%5==4){
        document.getElementById("languagesLogos").src= "logoCSS.png"
    }
    document.getElementById("languagesLogos").style.opacity = "1";
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
    document.getElementById("languagesLogos").style.opacity = "0";
    delta = 500;
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