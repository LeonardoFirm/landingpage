AOS.init();

document.addEventListener("DOMContentLoaded", function () {
    const texts = [
        "OLÁ, CLIENTE",
        "SEJA BEM-VINDO(A)",
        "TEMOS OS MELHORES",
        "PRODUTOS PARA SUA DISCIPLINA ALIMENTAR",
        "CLIQUE NO BOTÃO ABAIXO",
        "E VEJA NOSSOS PREÇOS ATRATIVOS",
    ];

    const highlightWords = [
        "CLIENTE", "DEVPOA", "PRODUTOS", "MELHORES",
        "DISCIPLINA ALIMENTAR", "BOTÃO ABAIXO", "ATRATIVOS"
    ];

    let index = 0;
    let charIndex = 0;
    let currentText = "";
    const speed = 100;
    const displayDelay = 2000;
    const deleteDelay = 500;

    const h1Element = document.querySelector('.hero h1');

    function type() {
        if (charIndex < texts[index].length) {
            currentText += texts[index].charAt(charIndex);
            let highlightedText = applyHighlight(currentText);
            h1Element.innerHTML = highlightedText;

            charIndex++;
            setTimeout(type, speed);
        } else {
            setTimeout(() => {
                h1Element.classList.add('fade-out');
                setTimeout(() => {
                    h1Element.classList.remove('fade-out');
                    currentText = '';
                    charIndex = 0;
                    index++;
                    if (index >= texts.length) {
                        index = 0;
                    }
                    h1Element.innerHTML = '';
                    type();
                }, deleteDelay);
            }, displayDelay);
        }
    }

    function applyHighlight(text) {
        let highlightedText = text;
        highlightWords.forEach(word => {
            const escapedWord = word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            const regex = new RegExp(`\\b${escapedWord}\\b`, 'gi');
            highlightedText = highlightedText.replace(regex, `<span class="highlight">${word}</span>`);
        });
        return highlightedText;
    }

    setTimeout(type, speed);
});



// rolagem #compra
function scrollToSection() {
    const section = document.querySelector('.services');
    const targetPosition = section.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 800;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const easing = progress * (2 - progress);
        window.scrollTo(0, startPosition + distance * easing);

        if (timeElapsed < duration) {
            requestAnimationFrame(animation);
        }
    }

    requestAnimationFrame(animation);
}

document.getElementById('comprar').onclick = scrollToSection;



// backdrop
function smoothScroll(target, duration) {
    const targetPosition = target.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

document.addEventListener('DOMContentLoaded', () => {
    const backToTopButton = document.getElementById('backtotop');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });

    backToTopButton.addEventListener('click', () => {
        smoothScroll(document.body, 1000);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('social-container').classList.add('active');
});

document.addEventListener('DOMContentLoaded', () => {
    const comprarButton = document.querySelector('.header-button');

    comprarButton.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = comprarButton.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            smoothScroll(targetSection, 1000);
        }
    });

    function smoothScroll(target, duration) {
        const targetPosition = target.getBoundingClientRect().top + window.scrollY;
        const startPosition = window.scrollY;
        const distance = targetPosition - startPosition;
        let startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }

        function ease(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }

        requestAnimationFrame(animation);
    }
});