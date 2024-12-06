window.addEventListener("scroll", function(){
    let header = document.querySelector('.menuPrincipal')
    header.classList.toggle('rolagem', window.scrollY > 0)
})