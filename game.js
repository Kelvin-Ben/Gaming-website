const navToggle = document.querySelector('#nav_toggle');
const sideMenu = document.querySelector('#nav_menu-container');
// const overlay = document.querySelector('.overlay')
const heroMarketingText = document.querySelector('.hero_marketing-text');
navToggle.addEventListener('click', () => {
  sideMenu.classList.toggle('show');
  heroMarketingText.classList.toggle('marketing-text');
  navToggle.classList.toggle('close');
});
