document.addEventListener("DOMContentLoaded", () => {
    // MENU DINÂMICO
    const menuToggle = document.querySelector(".menu-toggle");
    const menuLinks = document.querySelector(".menu-links");
    
    menuToggle.addEventListener("click", () => {
        menuLinks.classList.toggle("active");
    });

    document.querySelectorAll('.menu-link').forEach(link => {
        link.addEventListener('click', () => {
            menuLinks.classList.remove('active');
        });
    });

    // LIGHTBOX
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.querySelector(".lightbox .close");
    
    // Abrir Lightbox ao clicar na imagem
    document.querySelectorAll(".lightbox-trigger").forEach(trigger => {
        trigger.addEventListener("click", (e) => {
            e.preventDefault(); // Impede que a página recarregue
            const imgSrc = trigger.getAttribute("href");
            lightbox.style.display = "block";
            lightboxImg.src = imgSrc;
        });
    });
    
    closeBtn.addEventListener("click", () => {
        lightbox.style.display = "none";
    });

    lightbox.addEventListener("click", (e) => {
        if (e.target !== lightboxImg) {
            lightbox.style.display = "none";
        }
    });

    // GLOSSÁRIO
    const termos = {
        "incógnita": "É o valor desconhecido que se deseja determinar em uma equação.",
        "coeficiente": "São os números que multiplicam as incógnitas em uma equação."
    };
    
    const glossarioBox = document.getElementById("glossario-box");
    
    document.querySelectorAll(".glossario").forEach(el => {
        el.addEventListener("click", (e) => {
            const termo = el.dataset.term;
            glossarioBox.innerHTML = `<strong>${termo}:</strong> ${termos[termo]}`;
            glossarioBox.style.display = "block";
            glossarioBox.style.top = `${e.pageY + 10}px`;
            glossarioBox.style.left = `${e.pageX}px`;
            e.stopPropagation(); // Impede que o clique feche a caixa imediatamente
        });
    });

    // Nova função para fechar glossário clicando fora
    document.addEventListener("click", (e) => {
        if (!e.target.classList.contains("glossario") && !glossarioBox.contains(e.target)) {
            glossarioBox.style.display = "none";
        }
    });

    // Funcionalidade da Nota Lateral
    const notaLateral = document.querySelector('.nota-lateral');
    if (notaLateral) {
        notaLateral.addEventListener('click', (e) => {
            const termo = notaLateral.textContent.trim();
            glossarioBox.innerHTML = termo;
            glossarioBox.style.display = "block";
            glossarioBox.style.top = `${e.pageY + 10}px`;
            glossarioBox.style.left = `${e.pageX}px`;
            e.stopPropagation(); // Impede que o clique feche a caixa imediatamente
        });
    }
});