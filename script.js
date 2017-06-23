function script() {
    var x = document.getElementsByClassName("img");
    var y = document.getElementsByClassName("test");
    var width;
    var height;
    for (i = 0; i <= 3; i++) {
        width = x[i].clientWidth;
        height = x[i].clientHeight;
        if ((i + 1) % 3 == 0) {
            y[i].style.width = '60%';
            y[i].style.padding = '5%';
            y[i].style.paddingTop = '0';
        } else if (width == height) {
            y[i].style.width = '40%';
            y[i].style.padding = '5%';
        } else {
            y[i].style.padding = '0px';
        }
    }
}

window.onscroll = function(ev) {
    var x = document.getElementById("social_id");
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        x.style.opacity='0';
    } else {
        x.style.opacity='1';
    }

};