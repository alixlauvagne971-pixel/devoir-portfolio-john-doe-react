import "./Services.css";
import banner from "../assets/img/banner.jpg";
import brushIcon from "../assets/img/icones/services/brush.svg";
import codeIcon from "../assets/img/icones/services/code-slash.svg";
import searchIcon from "../assets/img/icones/services/search.svg";

const services = [
  {
    id: 1,
    title: "UX Design",
    desc: "L’UX Design est une discipline qui consiste à concevoir des produits (sites web, applications mobiles, logiciels, objets connectés, etc.) en plaçant l'utilisateur au centre des préocupations. L'objectif est de rendre l'expérience utilisateur la plus fluide et agréable possible.",
    icon: brushIcon,
  },
  {
    id: 2,
    title: "Développement web",
    desc: "Le développement de sites web consiste à créer des sites internet en utilisant des langages de programmation (HTML, CSS, JavaScript, PHP, etc.) et des frameworks (Bootstrap, React, Angular, etc.).",
    icon: codeIcon,
  },
  {
    id: 3,
    title: "Référencement",
    desc: "Le référencement naturel (SEO) est une technique qui consite à optimiser un site web pour le faire remonter dans les résultats des moteurs de recherche (Google, Bing, Yahoo, etc.). L'objectif est d'attirer un maximum de visiteurs qualifiés sue le site.",
    icon: searchIcon,
  },
];

export default function Services() {
  return (
    <>
      <header
        className="portfolio-banner d-flex align-items-end text-white"
        style={{ backgroundImage: `url(${banner})` }}>
      </header>

      {/* Cards */}
      <section className="py-5">
        <div className="container text-center banner-content">
          <h1 className="fw-bold mb-2">Mon offre de services</h1>
            <p className="mb-3">Voici les prestations sur lesquelles je peux intervenir.</p>
              <div className="portfolio-line mx-auto"></div>
        </div>

        <div className="container">
          <div className="row g-4">
            {services.map((s) => (
              <div key={s.id} className="col-12 col-md-4">
                <div className="card service-card h-100 border-0 text-center">
                  <div className="card-body p-4">
                    <div className="service-icon mb-3" aria-hidden="true">
                      <img src={s.icon} alt={`${s.title} icon`} width="40" height="40" />
                    </div>
                    <h2 className="h5 fw-bold">{s.title}</h2>
                    <p className="text-muted mb-0">{s.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}