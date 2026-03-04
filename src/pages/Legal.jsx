import "./Legal.css";

import { Helmet } from "react-helmet-async";

import mapIcon from "../assets/img/icones/contact/map.svg";
import geoIcon from "../assets/img/icones/contact/geo-alt.svg";
import phoneIcon from "../assets/img/icones/contact/phone.svg";
import mailIcon from "../assets/img/icones/contact/envelope-at.svg";
import globeIcon from "../assets/img/icones/contact/globe.svg";

export default function Legal() {
  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
        <title>Mentions légales</title>
      </Helmet>

    <header className="page-title py-5 bg-light">
        <div className="container text-center">
          <h1 className="fw-bold mb-3">Mentions légales</h1>
          <div className="title-line mx-auto"></div>
        </div>
      </header>

      <section className="py-5 bg-light">
        <div className="container">

          <div className="accordion legal-accordion" id="legalAccordion">

            {/* ÉDITEUR */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#editor"
                >
                  Editeur du site
                </button>
              </h2>

              <div id="editor" className="accordion-collapse collapse show">
                <div className="accordion-body">
                  <h5>John Doe</h5>
                  <ul className="list-unstyled">
                    <li><img src={mapIcon} alt="Adresse"/> 40 rue Laure Diebold</li>
                    <li><img src={geoIcon} alt="Ville"/> 69009 Lyon, France</li>
                    <li><img src={phoneIcon} alt="Téléphone"/> 10 20 30 40 50</li>
                    <li><img src={mailIcon} alt="Email"/> john.doe@gmail.com</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* HÉBERGEUR */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#host"
                >
                  Hébergeur
                </button>
              </h2>

              <div id="host" className="accordion-collapse collapse">
                <div className="accordion-body">
                  <h5>alwaysdata</h5>
                  <p>
                    91 Rue du Faubourg Saint-Honoré, 75008 Paris<br />
                    <a href="https://www.alwaysdata.com" className="lien" target="_blank">
                      <img src={globeIcon} alt="Site alwaysdata"/> www.alwaysdata.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* CRÉDITS */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#credits"
                >
                  Crédits
                </button>
              </h2>

              <div id="credits" className="accordion-collapse collapse">
                <div className="accordion-body fst-italic">
                  <p>
                    Ce site a été réalisé par John Doe, étudiant au
                    <a href="https://www.centre-europeen-formation.fr/" className="lien" target="_blank"> Centre Européen de formation</a>.
                  </p>

                  <p>
                    Les images utilisées sur ce site sont libres de droits
                    et ont été obtenues sur le site
                    <a href="https://pixabay.com/fr/" className="lien" target="_blank"> Pixabay</a>.
                  </p>

                  <p>
                    La favicon de ce site a été fournie par
                    <a href="https://www.flaticon.com/free-icons/website" className="lien" target="_blank"> Freepik - Flaticon</a>.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}
