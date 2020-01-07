let loader = document.getElementById("loader-bg");

window.addEventListener('load', setTimeout(function() {
    loader.style.opacity = 0;
    loader.style.zIndex = -1000;
}, 750));