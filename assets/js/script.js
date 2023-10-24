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

//Fu…
const menuHamburguer = document.getElementById('menu-mobile');
const headerHamburguer = document.getElementById('header-central');
const menuIconMobile = document.getElementById('menu-icon-mobile');
const buttonBackToTop = document.getElementById('back-to-top');

const HEADER_HEIGHT = '120px';
const FIXED_HEADER_HEIGHT = '60px';
const SCROLL_THRESHOLD = 120;

// Função para abrir/fechar o menu mobile
const toggleMenuMobile = () => {
  headerHamburguer.style.display = headerHamburguer.style.display === 'none' ? 'block' : 'none';
  menuIconMobile.classList.toggle('fa-bar');
  menuIconMobile.classList.toggle('fa-times');
  menuHamburguer.classList.add('transition');
};

// Função para voltar ao topo
const scrollToTop = () => {
  window.scroll({
    top: 0,
    behavior: 'smooth',
  });
};

// Função para atualizar a exibição do botão de voltar ao topo
const updateBackToTopButton = () => {
  buttonBackToTop.style.display = window.pageYOffset > 0 ? 'block' : 'none';
};

// Função para atualizar o tamanho do header conforme o scroll
const updateHeaderSize = () => {
  const headerHeight = window.scrollY > SCROLL_THRESHOLD && window.innerWidth > 768 ? FIXED_HEADER_HEIGHT : HEADER_HEIGHT;
  headerHamburguer.style.height = headerHeight;
  headerHamburguer.style.lineHeight = headerHeight;
};

// Função para fechar o menu mobile após o clique em um item
const closeMenuMobile = () => {
  if (window.innerWidth <= 768) {
    headerHamburguer.style.display = 'none';
    menuIconMobile.classList.remove('fa-times');
    menuIconMobile.classList.add('fa-bar');
    menuHamburguer.classList.add('transition');
  }
};

// Adicionar event listener para o clique no menu mobile
menuHamburguer.addEventListener('click', toggleMenuMobile);

// Adicionar event listener para o clique no botão de voltar ao topo
buttonBackToTop.addEventListener('click', scrollToTop);

// Adicionar event listener para o scroll
window.addEventListener('scroll', () => {
  updateBackToTopButton();
  updateHeaderSize();
});

// Adicionar event listener para o clique em um item do menu
const menuItems = document.querySelectorAll('.navbar ul li a');
for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener('click', closeMenuMobile);
}

//scroll reveal
ScrollReveal().reveal('.one-efect');

const teste = document.getElementById('title-teste');
teste.classList.add('texto-effect')

teste.textContent = "";

const escreverLetras = () => {
  const texto = "Desenvolvedor Web FullStack";

  let index = 0;
  const interval = setInterval(() => {
    teste.textContent += texto.charAt(index);
    index++;
    if (index === texto.length) {
      clearInterval(interval);
    }
  }, 100);
};

escreverLetras();

//funcao relogio
function atualizarRelogio() {
  const clock = document.getElementById('clock');
  const dataAtual = new Date();

  const horas = String(dataAtual.getHours()).padStart(2, '0');
  const minutos = String(dataAtual.getMinutes()).padStart(2, '0');
  const segundos = String(dataAtual.getSeconds()).padStart(2, '0');

  const horaFormatada = `${horas}:${minutos}:${segundos}`;

  clock.textContent = horaFormatada;
}

setInterval(atualizarRelogio, 1000);