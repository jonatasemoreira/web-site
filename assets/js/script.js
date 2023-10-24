const menu_hamburguer = document.getElementById('menu-mobile');
const header_hamburguer = document.getElementById('header-central');
const menu_icon_mobile = document.getElementById('menu-icon-mobile');

menu_hamburguer.addEventListener('click', function abrirMenuMobile(){
    if(header_hamburguer.style.display == "none") {
        header_hamburguer.style.display = "block"
        menu_icon_mobile.classList.remove("fa-bar");
        menu_icon_mobile.classList.add("fa-times");
        menu_hamburguer.classList.add('transition');
    } else {
        header_hamburguer.style.display = "none";
        menu_icon_mobile.classList.remove("fa-times")
        menu_icon_mobile.classList.add("fa-bar")
        menu_hamburguer.classList.add('transition');
    }
});

//Função voltar ao topó
function scrollToTop() {
    window.scroll({
      top: 0,
      behavior: "smooth"
    });
  }
  
  window.addEventListener("scroll", function() {
    var button = document.getElementById("back-to-top");
    if (window.pageYOffset > 0) {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  });