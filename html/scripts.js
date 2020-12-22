const navSlide = () => {
    const hamburguesa = document.querySelector('.hamburguesa');
    const nav = document.querySelector('.enlaces');
    const enlaces = document.querySelectorAll('.enlaces li');
    
    hamburguesa.addEventListener('click', () => {
        //Menú
        nav.classList.toggle('nav-active');

        //Animaciones enlaces
        enlaces.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = '';
            }else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.5}s`;
            }
        });

        //Hamburguesa
        hamburguesa.classList.toggle('toggle');
    });

}

navSlide();

