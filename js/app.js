/*==================================================
    MINISTÉRIO ATALAIA
    app.js
==================================================*/

"use strict";

/*==================================================
    LOADER
==================================================*/

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

    }, 800);

});

/*==================================================
    MENU MOBILE
==================================================*/

const btnMenu = document.getElementById("btnMenu");

const menu = document.getElementById("menu");

btnMenu.addEventListener("click", () => {

    menu.classList.toggle("active");

});

/*==================================================
    FECHAR MENU AO CLICAR
==================================================*/

document.querySelectorAll("#menu a").forEach(link => {

    link.addEventListener("click", () => {

        menu.classList.remove("active");

    });

});

/*==================================================
    HEADER
==================================================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        header.style.background = "rgba(0,0,0,.96)";

        header.style.boxShadow = "0 8px 25px rgba(0,0,0,.45)";

    } else {

        header.style.background = "rgba(0,0,0,.85)";

        header.style.boxShadow = "none";

    }

});

/*==================================================
    BOTÃO TOPO
==================================================*/

const btnTop = document.getElementById("btnTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        btnTop.style.display = "block";

    } else {

        btnTop.style.display = "none";

    }

});

btnTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/*==================================================
    SCROLL SUAVE
==================================================*/

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", e => {

        const id = link.getAttribute("href");

        if (id === "#") return;

        e.preventDefault();

        const destino = document.querySelector(id);

        if (!destino) return;

        window.scrollTo({

            top: destino.offsetTop - 75,

            behavior: "smooth"

        });

    });

});

/*==================================================
    ANIMAÇÃO AO ENTRAR NA TELA
==================================================*/

const elementos = document.querySelectorAll(

    ".card,\
     .faith-card,\
     .credential-card,\
     .project-card,\
     .book,\
     .agenda-card"

);

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform = "translateY(0)";

            }

        });

    },

    {

        threshold: .15

    }

);

elementos.forEach(item => {

    item.style.opacity = "0";

    item.style.transform = "translateY(50px)";

    item.style.transition = ".7s";

    observer.observe(item);

});

/*==================================================
    MODAL DAS CREDENCIAIS
==================================================*/

const imagens = document.querySelectorAll(".credential-card img");

const modal = document.createElement("div");

modal.id = "modalImagem";

modal.innerHTML = `

<div class="modal-box">

    <img id="imagemModal">

</div>

`;

document.body.appendChild(modal);

const imagemModal = document.getElementById("imagemModal");

imagens.forEach(img => {

    img.style.cursor = "zoom-in";

    img.addEventListener("click", () => {

        imagemModal.src = img.src;

        modal.classList.add("show");

    });

});

modal.addEventListener("click", () => {

    modal.classList.remove("show");

});

/*==================================================
    FORMULÁRIO DE CONTATO
==================================================*/

const formContato = document.getElementById("formContato");

if (formContato) {

    formContato.addEventListener("submit", e => {

        e.preventDefault();

        alert(

            "Mensagem enviada com sucesso!\n\nEm breve entraremos em contato."

        );

        formContato.reset();

    });

}

/*==================================================
    PEDIDO DE ORAÇÃO
==================================================*/

const formOracao = document.getElementById("formOracao");

if (formOracao) {

    formOracao.addEventListener("submit", e => {

        e.preventDefault();

        alert(

            "Seu pedido de oração foi recebido.\n\nDeus abençoe sua vida!"

        );

        formOracao.reset();

    });

}

/*==================================================
    EFEITO NOS CARDS
==================================================*/

document.querySelectorAll(

    ".card,\
     .project-card,\
     .credential-card,\
     .faith-card"

).forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.boxShadow =

            "0 20px 40px rgba(212,175,55,.25)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.boxShadow = "";

    });

});

/*==================================================
    ANO AUTOMÁTICO
==================================================*/

const copyright = document.querySelector(".copyright");

if (copyright) {

    copyright.innerHTML =

        `© ${new Date().getFullYear()} Ministério Atalaia. Todos os direitos reservados.`;

}