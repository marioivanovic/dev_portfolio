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

// const navb = () => {

//     const btnresponsive = document.querySelector('.burger');

//     const nav = document.querySelector('.nav-list');

//     const Navlinks = document.querySelectorAll('.nav-list li');

//     btnresponsive.addEventListener('click', () => {
//         // lancer l'animation //

//         btnresponsive.classList.toggle('active');
//         nav.classList.toggle('nav-active');
//     });

// }

// navb();

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }


// BACK TO TOP BUTTON  

var buttonTop = document.getElementById('topbtn');

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500) {
        buttonTop.style.display = "block";
    } else {
        buttonTop.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

        
