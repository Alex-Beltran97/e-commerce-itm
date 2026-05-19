const URL_PATH = window.location.href;
const urlObj = new URL(URL_PATH);
const segments = urlObj.pathname.split('/').filter(Boolean);

const basePath = String(segments[0]).toLocaleLowerCase();

const navigator = document.querySelectorAll('.navigator a');
const main = document.querySelector('main');

const paths = {
  'home': '/',
  'home': 'home',
  'about': 'about-us',
  'contact': 'contact-us'
};

import productList from './modules/products-list';

switch (basePath) {
  case 'undefined':
  case paths.home:
      handlenavigation("inicio");
      main.innerHTML = productList();
      console.log("INICIO");
    break;
    case paths.about:
      handlenavigation("¿quienes somos?");
      console.log("SOBRE NOSOTROS");
    break;
  case paths.contact:
      handlenavigation("contactanos");
      console.log("CONTACTO");
    break;
  default:
    console.log("PÁGINA NO ENCONTRADA");
    break;
};

function handlenavigation(tabName) {
  const tab = Array.from(navigator).find(element => element.innerHTML.toLocaleLowerCase().includes(tabName.toLocaleLowerCase()));
  tab.classList.add('navigator__item--active');
}