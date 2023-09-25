(() => {
    const menuBtnRef = document.querySelector('[data-menu-button]');
    const mobileMenuRef = document.querySelector('[data-menu]');
    const body = document.querySelector('body');
  
    
    const menuServices = document.querySelector('[menu-services]');
    const menuPrise = document.querySelector('[menu-price]');
    const menuOrder = document.querySelector('[menu-order]');
    const menuAbout = document.querySelector('[menu-about]');
    const menuContacts = document.querySelector('[menu-contacts]');
  
    const mobileMenu = (() => {
        const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;
        menuBtnRef.classList.toggle('is-active');
        menuBtnRef.setAttribute('aria-expanded', !expanded);
        mobileMenuRef.classList.toggle('is-open');
        body.classList.toggle('no-scroll');
    })

    menuBtnRef.addEventListener('click', (mobileMenu));
    menuServices.addEventListener('click', (mobileMenu));
    menuPrise.addEventListener('click', (mobileMenu));
    menuOrder.addEventListener('click', (mobileMenu));
    menuAbout.addEventListener('click', (mobileMenu));
    menuContacts.addEventListener('click', (mobileMenu));    
})();


