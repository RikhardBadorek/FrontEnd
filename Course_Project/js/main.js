document.addEventListener('DOMContentLoaded', () => {
    const hamburgerButton = document.querySelector('.hamburger-button');
    const mobileMenu = document.querySelector('.mobile-menu');
  
    hamburgerButton.addEventListener("click", function () {
        mobileMenu.classList.toggle("active");
        hamburgerButton.classList.toggle("menu-open");
    });
});