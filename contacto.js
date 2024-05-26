//funcion para boton de menu
const navToggle= document.querySelector(".header_nav_menu")
const navMenu= document.querySelector(".header_nav_ul")

navToggle.addEventListener("click" , () => {
    navMenu.classList.toggle("header_nav_ul_visible")
})

//funcionalidad a formulario
const $form= document.querySelector('#form')
const $buttonMailto= document.querySelector('#emailP')

form.addEventListener('submit', handleSubmit)
function handleSubmit(event){
    event.preventDefault()
    const form = new FormData(this)
    //en la const $buttonMailto agregar correo para corroborar el codigo, tiene que coinsidir con el correo que ponemos en el mailto: del html
    $buttonMailto.setAttribute('href',`mailto:?subject= Nombre:${form.get('fullname')}   Correo:${form.get('email')}  Peli:${form.get('peli')}&body=   Opinion:${form.get('reseña')}`)
    $buttonMailto.click()
}