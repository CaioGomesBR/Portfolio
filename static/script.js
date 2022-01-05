/*abre e fecha menu em modo mobile*/

const menuMobile= document.querySelector('.menu-mobile')
const body= document.querySelector('body')

menuMobile.addEventListener('click', () => {
    menuMobile.classList.contains('bi-list')
    ? menuMobile.classList.replace('bi-list', 'bi-x' )
    : menuMobile.classList.replace('bi-x', 'bi-list')
    body.classList.toggle('menu-nav-active')
})

/*fecha o menu quando clicar em algum iteme muda o icone para list*/

const navItem= document.querySelectorAll('.nav-item')

navItem.forEach (item => {
    item.addEventListener("click", () => {
        if (body.classList.contains("menu-nav-active")) {
            body.classList.remove ("menu-nav-active")
            menuMobile.classList.replace("bi-x", "bi-list")
        }
    })
})

//animar todos os intens na tela que tiver atributo data-anime

const item = document.querySelectorAll("[data-anime]")

const animeScroll = () => {

    const windowTop= window.pageYOffset + window.innerHeight * 0.85

    item.forEach(elemnt => {
        if (windowTop > elemnt.offsetTop) {
            elemnt.classList.add("animate")
        } else {
            elemnt.classList.remove("animate")
        }
    })
}

window.addEventListener("scroll", ()=> {
    animeScroll()
})

//ativar o carregamento do botao de enviar formulario

const btnEnviar= document.querySelector('#btn-enviar')
const btnEnviarLoader= document.querySelector('#btn-enviar-loader')

btnEnviar.addEventListener("click", () => {
    btnEnviarLoader.style.display = "block"
    btnEnviar.style.display = "none"
} )

//tira a mensagem de sucesso depois de 5s

setTimeout(() => {
    document.querySelector('#alerta').style.display = 'none'
}, 3000)