function printHome() {
  return `
    <section class="presentation">
      <h1 class="presentation__item presentation__item--title">Tenemos mucha variedad de productos</h1>
      <p class="presentation__item presentation__item--description">Descubre diferentes tipos de productos que ayudaran a hacer tu vida mucho mas sencilla. Encontraras elementos para el hogar, la oficina, cocina, aseo transporte... ¡Y muchos más!</p>
    </section>
    <section class="products-list">
      <h2 class="products-list__item products-list__item--title">Nuestros Productos</h2>
      <div class="products-list__item products-list__item--container">
        <div class="container__item container__item--card">
          <figure class="card__item card__item--image">
            <img src="/src/assets/product1.jpg" alt="Producto 1">
          </figure>
          <div class="card__item card__item--details">
            <h4>Ceramic Vessel</h4>
            <b>$29.99</b>
            <p>Beautifully crafted ceramic</p>
          </div>
        </div>
        <div class="container__item container__item--card">
          <figure class="card__item card__item--image">
            <img src="/src/assets/product1.jpg" alt="Producto 1">
          </figure>
          <div class="card__item card__item--details">
            <h4>Ceramic Vessel</h4>
            <b>$29.99</b>
            <p>Beautifully crafted ceramic</p>
          </div>
        </div>
        <div class="container__item container__item--card">
          <figure class="card__item card__item--image">
            <img class="card__item card__item--image" src="/src/assets/product1.jpg" alt="Producto 1">
          </figure>
          <div class="card__item card__item--details">
            <h4>Ceramic Vessel</h4>
            <b>$29.99</b>
            <p>Beautifully crafted ceramic</p>
          </div>
        </div>
        <div class="container__item container__item--card">
          <figure class="card__item card__item--image">
            <img src="/src/assets/product1.jpg" alt="Producto 1">
          </figure>
          <div class="card__item card__item--details">
            <h4>Ceramic Vessel</h4>
            <b>$29.99</b>
            <p>Beautifully crafted ceramic</p>
          </div>
        </div>
        <div class="container__item container__item--card">
          <figure class="card__item card__item--image">
            <img src="/src/assets/product1.jpg" alt="Producto 1">
          </figure>
          <div class="card__item card__item--details">
            <h4>Ceramic Vessel</h4>
            <b>$29.99</b>
            <p>Beautifully crafted ceramic</p>
          </div>
        </div>
        <div class="container__item container__item--card">
          <figure class="card__item card__item--image">
            <img src="/src/assets/product1.jpg" alt="Producto 1">
          </figure>
          <div class="card__item card__item--details">
            <h4>Ceramic Vessel</h4>
            <b>$29.99</b>
            <p>Beautifully crafted ceramic</p>
          </div>
        </div>
      </div>
    </section>
  `
};

export default printHome;
