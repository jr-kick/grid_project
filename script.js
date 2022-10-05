const nav = document.querySelectorAll('.nav-bar>a');
const image = document.createElement('img');
image.setAttribute('src', 'images/feline-track.png');
image.style.filter = 'invert()';
image.style.width = '35px';

nav.forEach(e => e.addEventListener('mouseenter', activateTrack));
nav.forEach(e => e.addEventListener('mouseleave', disableTrack));

function activateTrack(e) {
    e.target.appendChild(image);
};

function disableTrack(e) {
    e.target.removeChild(image);
}