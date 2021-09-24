const menuLinks = document.querySelectorAll('.menu-list__link');

menuLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();

    const target = event.target;
    const ID = target.getAttribute('href').slice(1);
    
    document.getElementById(ID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});