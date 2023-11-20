const main = document.getElementById('main')
const bttnDM = document.getElementById('bttnDM')
const ulNav = document.getElementById('ul')
const WAVES_BLUE = document.getElementsByClassName('svg-blue');
const ARRAY_WAVES_BLUE = [...WAVES_BLUE];
const SECTIONS = document.getElementsByTagName('section');
const arrayDeSections = [...SECTIONS];
const yoBlack = document.getElementById('yo_black')
const yoBlue = document.getElementById('yo_blue')
const footer = document.getElementById('footer')
const svgRosa = document.getElementById('svg-rosa')


//HACER MODO OSCURO LA APP// 
bttnDM.addEventListener('click', () => {
    footer.classList.toggle('modo-oscuro-main')
    main.classList.toggle('modo-oscuro-main')
    ulNav.classList.toggle('modo-oscuro-main')
    arrayDeSections.forEach(element => {
        element.classList.toggle('modo-oscuro')
    });
    ARRAY_WAVES_BLUE.forEach(element => {
        element.classList.toggle('wave-blue')
    });
    yoBlack.classList.toggle('mostrar')
    yoBlue.classList.toggle('ocultar')
    svgRosa.classList.toggle('wave-rosa')
})
//---------------------------------------// 

