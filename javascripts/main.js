var scene;

var init = function() {
    scene = document.querySelector('#scene');    
};

window.onload = function() {
    init();  
};

window.onmousemove = function(e) {
    var dx = e.pageX;
    var dy = e.pageY;
    var s = 'rotateY(' + dx + 'deg) rotateX(' + dy + 'deg)'; 
    scene.style['-webkit-transform'] = s;
};