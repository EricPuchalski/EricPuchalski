const main = document.getElementById('main')
const darkModeButton = document.getElementById('bttnDM')
const navList  = document.getElementById('ul')
const blueSvgElements = document.getElementsByClassName('svg-blue');
const WAVES_BLUE = [...blueSvgElements]
const sectionElements = document.getElementsByTagName('section');
const SECTIONS  = [...sectionElements]
const titlesElements = document.getElementsByClassName('titulo')
const TITLES = [...titlesElements]
const captionsElements = document.getElementsByClassName('subtitulo')
const CAPTIONS = [...captionsElements]
const imagenBgBlack = document.getElementById('yo_black')
const imagenBgBlue = document.getElementById('yo_blue')
const footer = document.getElementById('footer')
const svgRosa = document.getElementById('svg-rosa')


//HACER MODO OSCURO LA APP// 
darkModeButton.addEventListener('click', () => {
    footer.classList.toggle('modo-oscuro-main')
    main.classList.toggle('modo-oscuro-main')
    navList.classList.toggle('modo-oscuro-main')
    SECTIONS.forEach(element => {
        element.classList.toggle('modo-oscuro')
    });
    WAVES_BLUE.forEach(element => {
        element.classList.toggle('wave-blue')
    });
    TITLES.forEach(element => {
        element.classList.toggle('titles-darkmode')
    })
    CAPTIONS.forEach(element => {
        element.classList.toggle('captions-darkmode')
    })
    imagenBgBlack.classList.toggle('mostrar')
    imagenBgBlue.classList.toggle('ocultar')
    svgRosa.classList.toggle('wave-rosa')
})
//---------------------------------------// 

