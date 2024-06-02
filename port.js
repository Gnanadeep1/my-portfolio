var typed = new Typed('#element', {
    strings: ['Student.', 'Web Developer.'],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
});
var noteTakingSiteBtn = document.getElementById('noteTakingSiteBtn');
noteTakingSiteBtn.addEventListener('click', function () {
    window.location.href = 'https://gnanadeep1.github.io/Note-Site/';
});