const txtAnim = document.querySelector('h3');

new Typewriter(txtAnim, {
        // deleteSpeed: 20
    })
    .changeDelay(50)
    .typeString('Je suis')
    .pauseFor(300)
    .typeString('<strong> Développeur Web Full-Stack</strong> !')
    .pause(1000)
    .deleteChars(16)
    .typeString('<span style="color: #2764f0">CSS</span> !')
    .pause(1000)
    .deleteChars(5)
    .pauseFor(300)
    .typeString('<span style="color: cyan">React JS</span> !')
    .pause(1000)
    .deleteChars(23)
    .pauseFor(300)
    .typeString('<strong>à la recherche d\'une alternance </strong> !')
    .pause(1000)
    .start()

const about = document.getElementById('apropos');



// APPEL

function appele() {
    var liens = document.getElementsByTagName('a');
    for (var i = 0; i < liens.length; ++i) {
        // boucle de verifier tous les elements (liens) qui ont une class compose
        // lui viser directement element class compose
        if (liens[i].className == 'compose') {
            liens[i].href = "tel:+33652109762";
            liens[i].onclick = function () {
                window.location(this.href);
                return false;
            }
        }
    }
}
window.onload = appele();

// Menu burger

const navb = () => {

    const btnresponsive = document.querySelector('.burger');

    const nav = document.querySelector('.nav-list');

    const Navlinks = document.querySelectorAll('.nav-list li');

    btnresponsive.addEventListener('click', () => {
        // lancer l'animation //

        btnresponsive.classList.toggle('active');
        nav.classList.toggle('nav-active');
    });

}

navb();

// SMOOTH SCROLLING 

const anchorTag = document.querySelectorAll('ul li a');
const navItems = [...anchorTag];

for (const navItem of navItems) {
    navItem.addEventListener('click', (e) => {
        e.preventDefault();
        // console.log(e.target.getAttribute('href'));

        scrollSection(e.target.getAttribute('href'));
    })
}

function scrollSection(id) {
    let sectionPosition, sectionOffset;

    const navigation = document.querySelector('.nav-list').offsetHeight;

    if (id !== "#") {
        sectionOffset = document.querySelector(id).offsetTop;
        sectionPosition = sectionOffset - navigation;
    } else {
        sectionPosition = 0;
    }


    window.scrollTo({
        top: sectionPosition,
        left: 0,
        behavior: "smooth"
    });
}


// ANIMATION ON SCROLL 

// AOS.init({
//     easing: 'ease',
//     duration: 1800,
//     once: true
// });