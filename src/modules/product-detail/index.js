import { getProductById } from "../../api/products";
import alertify from "alertifyjs";
import "alertifyjs/build/css/alertify.css";

function renderProductDetail(product) {
  let colorSelected = product.types[0].color;

  return `
    <section class="product-detail">
      <figure class="product-detail__item product-detail__item--image">
        <img src="${product.types[0].image}" alt="${product.name}" />
      </figure>
      <article class="product-detail__item product-detail__item--details">
        <h1 class="product-detail__item product-detail__item--title">${product.name}</h1>
        <h2 class="product-detail__item product-detail__item--price">$${product.price}</h2>
        <p class="product-detail__item product-detail__item--description">${product.description}</p>
        <p class="product-detail__item product-detail__item--colors-label"><b>Color:</b> ${colorSelected}</p>
        <div class="product-detail__item product-detail__item--colors">
          ${product.types.map(type => `
            <div
              class="colors__item colors__item--${type.color.toLowerCase()}"
              style="background-color: ${type['hex-value']};"
            >
            </div>
          `).join('')}          
        </div>
        <hr class="product-detail__item product-detail__item--hr" />
        <p class="product-detail__item product-detail__item--free-shipping"><span class="material-icons-outlined">local_shipping</span>Envío gratuito. Entrega en 3-5 días laborables.</p>
        <div class="product-detail__item product-detail__item--actions">
          <button class="actions__item actions__item--add-to-cart">Añadir al carrito</button>
          <button class="actions__item actions__item--favorite"><span class="material-icons-outlined">favorite</span>Agregar a favoritos</button>
        </div>
      </article>
    </section>
  `;
}

async function initProductDetailModule() {
  try {
    const productId = window.location.pathname.split('/').filter(Boolean).pop();
    const product = await getProductById(productId);
    const html = renderProductDetail(product);
    
    document.querySelector('main').innerHTML = html;
    
    handleColorSelection(product);
    handleActionButtons();
  } catch (error) {
    console.error("Error initializing product detail module:", error);
    document.querySelector('main').innerHTML = '';
  }
};

function handleColorSelection(product) {
  let colorItems = document.querySelectorAll('.colors__item');
  colorItems = Array.from(colorItems);
  const colorSelected = document.querySelector('.product-detail__item--colors-label');
  const productImage = document.querySelector('.product-detail__item--image img');
  colorItems.forEach(item => {
    item.addEventListener('click', () => {
      const selectedColor = item.className.split('--')[1];
      colorSelected.innerHTML = `<b>Color:</b> ${selectedColor}`;
      productImage.src = product.types.find(type => type.color.toLowerCase() === selectedColor)?.image;
    });
  });
}

function handleActionButtons() {
  let actionButtons = document.querySelectorAll('.actions__item');
  actionButtons = Array.from(actionButtons);
  actionButtons.forEach(button => {
    button.addEventListener('click', () => {
      if (button.classList.contains('actions__item--add-to-cart')) {
        alertify.success('Producto añadido al carrito');
      } else if (button.classList.contains('actions__item--favorite')) {
        alertify.success('Producto agregado a favoritos');
      }
    });
  });
}

export default initProductDetailModule;