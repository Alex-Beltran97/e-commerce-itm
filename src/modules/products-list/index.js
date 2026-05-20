import { getProducts } from "../../api/products";

function renderHome(productsList) {
  return `
    <section class="presentation">
      <h1 class="presentation__item presentation__item--title">Tenemos mucha variedad de productos</h1>
      <p class="presentation__item presentation__item--description">Descubre diferentes tipos de productos que ayudaran a hacer tu vida mucho mas sencilla. Encontraras elementos para el hogar, la oficina, cocina, aseo transporte... ¡Y muchos más!</p>
    </section>
    <section class="products-list">
      <h2 class="products-list__item products-list__item--title">Nuestros Productos</h2>
      <div class="products-list__item products-list__item--container">
        ${productsList.map(product => cardTpl(product)).join('')}
      </div>
    </section>
  `
};

function cardTpl({name, price, description, images}) {
  return `
    <div class="container__item container__item--${name.toLowerCase()}">
      <figure class="card__item card__item--image">
        <img src="${images['main-imagen']}" alt="${name}">
      </figure>
      <div class="card__item card__item--details">
        <h4 class="details__item details__item--name">${name}</h4>
        <b class="details__item details__item--price">$${price}</b>
        <p class="details__item details__item--description">${description}</p>
      </div>
    </div>
  `;
}

async function initProductsModule() {
  try {
    const products = await getProducts();
    return renderHome(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    return '';
  }
}

export default initProductsModule;
