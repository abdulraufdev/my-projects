const themeCta = document.querySelector('.theme-cta');

themeCta.addEventListener("click", e => {
    e.preventDefault();
    document.documentElement.classList.toggle("second");
  });
  
  let menuBtn = document.querySelector('.menu-icon');
  let navList = document.querySelectorAll('.nav__list-item');
  let navContent = document.querySelector('.nav-wrapper');
  let navListItem = document.querySelectorAll('.nav__list-item a');
  
  function menuActive(){
    menuBtn.addEventListener('click' ,function () {
      menuBtn.classList.toggle('menu_active');
      navContent.classList.toggle('menu_active');
      navList.forEach((navList) => navList.classList.toggle('menu_active'));
      themeCta.classList.toggle('menu_active');
    });
  };
  
  menuActive();
  
  function menuInactive(){
    navListItem.forEach((navListItem) => navListItem.addEventListener('click' , function() {
      menuBtn.classList.remove('menu_active');
      navContent.classList.remove('menu_active');
      navList.forEach((navList) => navList.classList.remove('menu_active'));
      themeCta.classList.remove('menu_active');
    }));
  };
  
  menuInactive();
  