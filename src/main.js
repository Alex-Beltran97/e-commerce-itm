const URL_PATH = window.location.href;
const urlObj = new URL(URL_PATH);
const segments = urlObj.pathname.split('/').filter(Boolean);

let basePath = String(segments[0]).toLocaleLowerCase();

if (basePath === 'e-commerce-itm') {
  basePath = segments[1] ? String(segments[1]).toLocaleLowerCase() : 'home';
}

const navigator = document.querySelectorAll('.navigator a');
const main = document.querySelector('main');

const paths = {
  'home': '/',
  'home': 'home',
  'product': 'product',
  'about': 'about-us',
  'contact': 'contact-us'
};

import productList from './modules/products-list/index.js';
import productDetail from './modules/product-detail/index.js';
import aboutUs from './modules/about-us/index.js';
import contactUs from './modules/contact-us/index.js';
import pageNotFound from './modules/page-not-found/index.js';

switch (basePath) {
  case 'undefined':
  case paths.home:
      handlenavigation("inicio");
      await productList();
    break;
    case paths.product:
      handlenavigation("producto");
      await productDetail();
    break;
    case paths.about:
      handlenavigation("¿quienes somos?");
      await aboutUs();
    break;
  case paths.contact:
      handlenavigation("contactanos");
      await contactUs();
    break;
  default:
    await pageNotFound();
    break;
};

function handlenavigation(tabName) {
  const tab = Array.from(navigator).find(element => element.innerHTML.toLocaleLowerCase().includes(tabName.toLocaleLowerCase()));
  if (tab?.classList) {
    tab.classList.add('navigator__item--active');
  };
}