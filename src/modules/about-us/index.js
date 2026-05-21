function renderAboutUs() {
  return `
    <section class="about-us">
      <articule class="about-presentation">
        <h1 class="about-presentation__item about-presentation__item--title">¿Quiénes somos?</h1>
        <p class="about-presentation__item about-presentation__item--description">Creemos que la verdadera elegancia reside en la sencillez. Nuestro proceso de selección elimina todo lo superfluo, dejando solo productos de una calidad excepcional, con un diseño funcional y un valor duradero.</p>
      </articule>
      <figure class="about-hero">
        <img src="/src/assets/hero.svg" alt="Descripción de la imagen" />
      </figure>
      <article class="about-details">
        <div class="about-details__item about-details__item--philosophy">
          <h3>Nuestra filosofia</h3>
          <hr />
          <p>En LA TIENDITA, no consideramos el consumo como un acto pasivo, sino como una serie de decisiones conscientes. Colaboramos exclusivamente con artesanos y fabricantes que comparten nuestro compromiso con las prácticas sostenibles y el abastecimiento transparente. Cada artículo de nuestro catálogo se somete a rigurosas pruebas tanto de durabilidad estética como de resistencia funcional, lo que garantiza que merezca un lugar en tu vida cuidadosamente seleccionada.Rechazamos el ciclo de las modas pasajeras. En su lugar, nos centramos en los elementos fundamentales de la vida moderna: objetos que, discretamente, mejoran tus rutinas diarias sin exigir una atención constante.</p>
          <br />
          <p>Rechazamos el ciclo de las modas pasajeras. En su lugar, nos centramos en los elementos fundamentales de la vida moderna: objetos que, discretamente, mejoran tus rutinas diarias sin exigir una atención constante.</p>
        </div>
        <div class="about-details__item about-details__item--selection">
          <h3 class="selection__item selection__item--title">El proceso de selección</h3>
          <hr class="selection__item selection__item--hr" />
          <p class="selection__item selection__item--description">Encontrar el básico perfecto requiere paciencia. Nuestro equipo dedica meses a evaluar los materiales, examinar las costuras y conocer la cadena de suministro que hay detrás de cada posible incorporación a nuestra colección. Nosotros hacemos las preguntas difíciles para que tú no tengas que hacerlo.</p>
          <br />
          <ul class="selection__item selection__item--list">
            <li><span class="material-icons-outlined">check_circle</span>Normas de producción éticas en todos los socios.</li>
            <li><span class="material-icons-outlined">check_circle</span>Materiales de primera calidad y duraderos, diseñados para envejecer con elegancia.</li>
            <li><span class="material-icons-outlined">check_circle</span>Una estética atemporal que no se ve afectada por las modas pasajeras de cada temporada.</li>
          </ul>
        </div>
      </article>
    </section>
  `;
};

function initAboutUsModule() {
  const html = renderAboutUs();
  document.querySelector('main').innerHTML = html;
};

export default initAboutUsModule;