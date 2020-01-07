let loader = document.getElementById("loader-bg");

window.addEventListener('DOMContentLoaded', setTimeout(function() {
    loader.style.opacity = 0;
    loader.style.zIndex = -1000;
    setTimeout(function() {
        loader.style.display = "none";
    }, 1000)
}, 250));