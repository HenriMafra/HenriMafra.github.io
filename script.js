// Ativação/Desativação de Dark Mode (Modo Claro/Escuro)
const darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
    // Alterna o ícone (sol para lua e vice-versa)
    darkModeIcon.classList.toggle('bx-sun');
    darkModeIcon.classList.toggle('bx-moon'); 
    
    // Adiciona ou remove a classe 'dark-mode' do body
    document.body.classList.toggle('dark-mode');
};

// Menu Navbar Ativo ao Rolar
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    // Animação do cabeçalho fixo (shadow on scroll)
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Fechar menu mobile (se for o caso)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


// -------------------------------------
// Lógica de Animação com ScrollReveal
// -------------------------------------

// Configuração padrão da biblioteca
ScrollReveal({ 
    distance: '80px',
    duration: 2000,
    delay: 200 
});

// Aplicação das animações nas seções

// Home
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });

// Home-content, Sobre Mim (texto) e Portfólio (caixas)
ScrollReveal().reveal('.home-content h1, .about-content', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .home-content h3', { origin: 'right' });


// -------------------------------------
// Lógica do botão "Leia Mais"
// -------------------------------------

function leiaMais() {
    var pontos = document.getElementById("pontos");
    var maisTexto = document.getElementById("mais");
    var btnLeiaMais = document.getElementById("btnLeiaMais");

    if (pontos.style.display === "none") {
        pontos.style.display = "inline";
        maisTexto.style.display = "none";
        btnLeiaMais.innerHTML = "Leia Mais";
    } else {
        pontos.style.display = "none";
        maisTexto.style.display = "inline";
        btnLeiaMais.innerHTML = "Mostrar Menos";
    }
}
