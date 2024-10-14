document.querySelectorAll('.whatsapp-contact').forEach(function (button) {
    button.addEventListener('click', function (event) {
        event.preventDefault();

        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

        const phoneNumber = '5551997421833';
        const message = 'Olá, gostaria de saber mais sobre os seus serviços.';

        const webURL = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
        const mobileURL = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

        if (isMobile) {
            window.open(mobileURL, '_blank');
        } else {
            window.open(webURL, '_blank');
        }
    });
});

document.querySelectorAll('.whatsapp-landingPage').forEach(function (button) {
    button.addEventListener('click', function (event) {
        event.preventDefault();

        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

        const phoneNumber = '5551997421833';
        const message = 'Olá, gostaria de saber mais sobre a landing Page de alta conversão.';

        const webURL = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
        const mobileURL = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

        if (isMobile) {
            window.open(mobileURL, '_blank');
        } else {
            window.open(webURL, '_blank');
        }
    });
});

document.querySelectorAll('.whatsapp-site').forEach(function (button) {
    button.addEventListener('click', function (event) {
        event.preventDefault();

        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

        const phoneNumber = '5551997421833';
        const message = 'Olá, gostaria de saber mais sobre a criação de Sites de alta conversão.';

        const webURL = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
        const mobileURL = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

        if (isMobile) {
            window.open(mobileURL, '_blank');
        } else {
            window.open(webURL, '_blank');
        }
    });
});

document.querySelectorAll('.whatsapp-ecommerce').forEach(function (button) {
    button.addEventListener('click', function (event) {
        event.preventDefault();

        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

        const phoneNumber = '5551997421833';
        const message = 'Olá, gostaria de saber mais sobre a construção de e-commerce de alta conversão.';

        const webURL = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
        const mobileURL = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

        if (isMobile) {
            window.open(mobileURL, '_blank');
        } else {
            window.open(webURL, '_blank');
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const links = {
        facebook: 'https://www.facebook.com/devpoaoficial/',
        youtube: 'https://www.youtube.com/@devpoa',
        linkedin: 'https://www.linkedin.com/in/devpoa/',
        instagram: 'https://www.instagram.com/devpoaoficial/',
        linktr: 'https://linktr.ee/devpoa'
    };

    function setSocialLinks() {
        for (const [key, url] of Object.entries(links)) {
            document.querySelectorAll(`.links-social-${key}`).forEach(element => {
                element.setAttribute('href', url);
                element.setAttribute('target', '_blank');
            });
        }
    }

    setSocialLinks();
});

document.addEventListener('DOMContentLoaded', function () {
    const links = {
        facebook: 'https://www.facebook.com/devpoaoficial/',
        youtube: 'https://www.youtube.com/@devpoa',
        linkedin: 'https://www.linkedin.com/in/devpoa/',
        instagram: 'https://www.instagram.com/devpoaoficial/',
        linktr: 'https://linktr.ee/devpoa'
    };

    document.querySelector('.fixed-facebook').setAttribute('href', links.facebook);
    document.querySelector('.fixed-facebook').setAttribute('target', '_blank');
    document.querySelector('.fixed-youtube').setAttribute('href', links.youtube);
    document.querySelector('.fixed-youtube').setAttribute('target', '_blank');
    document.querySelector('.fixed-linkedin').setAttribute('href', links.linkedin);
    document.querySelector('.fixed-linkedin').setAttribute('target', '_blank');
    document.querySelector('.fixed-instagram').setAttribute('href', links.instagram);
    document.querySelector('.fixed-instagram').setAttribute('target', '_blank');
    document.querySelector('.fixed-linktr').setAttribute('href', links.linktr);
    document.querySelector('.fixed-linktr').setAttribute('target', '_blank');
});

// link da hotmart
document.querySelectorAll('.hotmart').forEach((button, index) => {
    button.addEventListener('click', function () {
        let link;

        switch (index) {
            case 0:
                link = 'https://www.hotmart.com/';
                break;
            case 1:
                link = 'https://www.hotmart.com/';
                break;
            case 2:
                link = 'https://www.hotmart.com/';
                break;
        }

        window.open(link, '_blank');
    });
});
