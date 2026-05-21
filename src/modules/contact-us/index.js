import alertify from "alertifyjs";
import "alertifyjs/build/css/alertify.css";

function renderContactUsModule() {
  return `
    <section class="contact-us">
      <div class="contact-us__item contact-us__item--description">
        <article class="description__item description__item--info">
          <h1>Envianos un mensaje</h1>
          <p>Tanto si tienes alguna pregunta sobre nuestros productos básicos de alta calidad o sobre los envíos, como si simplemente quieres saludarnos, estamos aquí para ayudarte. Nuestro equipo suele responder en un plazo de 24 horas.</p>
        </article>
        <article class="description__item description__item--contacts">
          <div class="contacts__item contacts__item--email">
            <span class="material-icons">mail</span>
            <div class="email__item email__item--info">
              <p class="info__item info__item--label">EMAIL</p>
              <p class="info__item info__item--data-email">concierge@luxe.com</p>
            </div>
          </div>
          <div class="contacts__item contacts__item--address">
            <span class="material-icons">location_on</span>
            <div class="address__item address__item--info">
              <p class="info__item info__item--label">STUDIO</p>
              <p class="info__item info__item--data-address">100 Minimalist Way Design District, NY 10001</p>
            </div>
          </div>
        </article>
      </div>
      <form class="contact-us__item contact-us__item--form">
        <div class="form__item form__item--name">
          <label for="name">Nombre completo</label>
          <input id="name" placeholder="Jane Doe" required />
        </div>
        <div class="form__item form__item--email">
          <label for="email">Correo electronico</label>
          <input id="email" type="email" placeholder="jane.doe@example.com" required />
        </div>
        <div class="form__item form__item--subject">
          <label for="subject">Asunto (Optional)</label>
          <input id="subject" placeholder="Consulta sobre un pedido" />
        </div>
        <div class="form__item form__item--message">
          <label for="message">Mensaje</label>
          <textarea id="message" placeholder="Escribe tu mensaje aquí" required></textarea>
        </div>
        <p class="form__item form__item--info">Tus datos están seguros y se tratan con cuidado.</p>
        <button class="form__item form__item--submit" type="submit">Enviar mensaje <span class="material-icons">arrow_right_alt</span></button>        
      </form>
    </section>
  `;
};

function initContactUsModule() {
  const html = renderContactUsModule();
  document.querySelector('main').innerHTML = html;
  const form = document.querySelector('.contact-us__item--form');
  form.addEventListener('submit', handleContactUsFormSubmit);
};

function handleContactUsFormSubmit(event) {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const message = document.getElementById('message').value.trim();

  alertify.success('Datos diligenciados correctamente. Redirigiendo a tu cliente de correo...');

  const body = `Nombre: ${name}\nCorreo: ${email}\n\n${message}`;
  const mailtoLink = `mailto:raffriff097@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailtoLink;
}

export default initContactUsModule;