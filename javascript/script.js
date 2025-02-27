const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        const targetOffset = targetElement.getBoundingClientRect().top + window.pageYOffset;

        window.scrollTo({
            top: targetOffset - navbarHeight,
            behavior: 'smooth'
        });

        const navbarToggler = document.querySelector('.navbar-toggler');
        if (navbarToggler) {
            navbarToggler.click();
        }
    });
});

