import React from 'react';
import './Address.css';

function Address() {
  return (
    <section id="address" className="address-container">
<h2>Visite a Mecânica Ebenezer</h2>
<p> Nossa equipe está pronta para oferecer o melhor atendimento <br />e cuidar do seu veículo com toda a confiança que você merece.</p><br />
<p className="cta-address">
  <strong>Nosso endereço:</strong><br />
  Estrada Roberto Socoowiski, 536<br />
  Rio Grande - RS
</p>
      <div className="map">
        <iframe
          title="Localização da Mecânica Ebenezer"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.1910616161196!2d-52.2105289246219!3d-32.06770818033969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9511a6095b45b18b%3A0x4e029c571cb97cb2!2sEstr.%20Roberto%20Socoowski%2C%20536%20-%20Rio%20Grande%2C%20RS%2C%2096245-480!5e0!3m2!1spt-BR!2sbr!4v1701103893061!5m2!1spt-BR!2sbr"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}

export default Address;
