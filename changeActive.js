function changeActive() {
    let id = event.target.hash;
    let navLinks = document.getElementsByClassName('nav-link');
    for (let i = 0; i < navLinks.length; i++) {
        let navLink = navLinks[i];
        if (id === navLink.hash) {
            navLink.classList.add('active');
        } else if (navLink.classList.contains('active')) {
            navLink.classList.remove('active');
        };
    };
};