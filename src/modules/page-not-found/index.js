function renderPageNotFoundModule() {
  return `
    <section class="page-not-found">
      <h1 class="page-not-found__title">Error 404 - Página no encontrada</h1>
    </section>
  `;
};

function initPageNotFoundModule() {
  const html = renderPageNotFoundModule();
  document.querySelector('main').innerHTML = html;
};

export default initPageNotFoundModule;