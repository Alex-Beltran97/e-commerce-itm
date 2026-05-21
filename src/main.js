const URL_PATH = window.location.href;
const urlObj = new URL(URL_PATH);
const segments = urlObj.pathname.split('/').filter(Boolean);

const basePath = String(segments[0]).toLocaleLowerCase();

const navigator = document.querySelectorAll('.navigator a');
const main = document.querySelector('main');

const paths = {
  'home': '/',
  'home': 'home',
  'product': 'product',
  'about': 'about-us',
  'contact': 'contact-us'
};

import productList from './modules/products-list';
import productDetail from './modules/product-detail';
import aboutUs from './modules/about-us';

switch (basePath) {
  case 'undefined':
  case paths.home:
      handlenavigation("inicio");
      await productList();
      console.log("INICIO");
    break;
    case paths.product:
      handlenavigation("producto");
      await productDetail();
      console.log("PRODUCTO");
    break;
    case paths.about:
      handlenavigation("¿quienes somos?");
      await aboutUs();
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
  if (tab?.classList) {
    tab.classList.add('navigator__item--active');
  };
}