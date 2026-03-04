import "./Contact.css";

import map from "../assets/img/icones/contact/map.svg";
import geo from "../assets/img/icones/contact/geo-alt.svg";
import phone from "../assets/img/icones/contact/phone.svg";
import envelope from "../assets/img/icones/contact/envelope-at.svg";

export default function Contact() {
  return (
    <>
      {/* Titre de page */}
      <header className="page-title py-5 bg-light">
        <div className="container text-center">
          <h1 className="fw-bold mb-2">Contact</h1>
          <p className="text-muted mb-3">
            Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.
          </p>
          <div className="title-line mx-auto"></div>
        </div>
      </header>

      {/* Card */}
      <section className="py-5 bg-light">
        <div className="container contact-form">
          <div className="card contact-card shadow-sm border-0 contact-card">
            <div className="card-body p-4 p-md-5">
              <div className="row g-5">
                {/* Col gauche */}
                <div className="col-12 col-lg-6">
                  <h2 className="contact-section-title">Formulaire de contact</h2>
                  <div className="section-line"></div>

                  <form className="mt-4">
                    <input className="form-control mb-3 contact-input" type="text" placeholder="Votre nom" />
                    <input className="form-control mb-3 contact-input" type="email" placeholder="Votre adresse email" />
                    <input className="form-control mb-3 contact-input" type="tel" placeholder="Votre numéro de téléphone" />
                    <input className="form-control mb-3 contact-input" type="text" placeholder="Sujet" />
                    <textarea className="form-control mb-4 contact-textarea" rows="10" placeholder="Votre message"></textarea>
                    <div className="text-center">
                      <button className="btn btn-primary px-4 contact-btn" type="submit">Envoyer</button>
                    </div>
                  </form>
                </div>

                {/* Col droite */}
                <div className="col-12 col-lg-6 contact-info">
                  <h2 className="contact-section-title">Mes coordonnées</h2>
                  <div className="section-line"></div>

                  <div className="mt-4">
                    <p className="fw-bold mb-2">John Doe</p>
                    <ul className="list-unstyled contact-list mb-4">
                      <li><img src={map} alt="map" width="15" height="15" className="me-2" /> 40 rue Laure Diebold</li>
                      <li><img src={geo} alt="geo" width="15" height="15" className="me-2" /> 69009 Lyon, France</li>
                      <li><img src={phone} alt="phone" width="15" height="15" className="me-2" /> 10 20 30 40 50</li>
                      <li><img src={envelope} alt="envelope" width="15" height="15" className="me-2" /> john.doe@gmail.com</li>
                    </ul>

                    <div className="map-wrap">
                      <iframe
                        title="map"
                        src="https://www.google.com/maps?q=40%20rue%20Laure%20Diebold%2069009%20Lyon&output=embed"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}