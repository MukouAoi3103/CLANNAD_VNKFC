var num = 0;
var temp = 0;
var speed = 1250;
var preloads = [];
preload('./media/kuranado_background_00.jpg',
    './media/kuranado_background_01.jpg', './media/kuranado_background_02.jpg', './media/kuranado_background_03.jpg',
    './media/kuranado_background_04.jpg'
    , './media/kuranado_background_05.jpg', './media/kuranado_background_06.jpg', './media/kuranado_background_07.jpg'
    , './media/kuranado_background_08.jpg', './media/kuranado_background_09.jpg', './media/kuranado_background_10.jpg'
    , './media/kuranado_background_11.jpg',
);
function preload() {
    for (var c = 0; c < arguments.length; c++) {
        preloads[preloads.length] = new Image();
        preloads[preloads.length - 1].src = arguments[c];
    }
}
function rotateImages() {
    if (num == preloads.length) {
        num -= num;
    }
    document.body.style.backgroundImage = 'url(' + preloads[num].src + ')';
    setTimeout(function () { rotateImages() }, speed);
    num++;

}

if (window.addEventListener) {
    window.addEventListener('load', function () { setTimeout(function () { rotateImages() }, speed) }, { passive: true });
}
