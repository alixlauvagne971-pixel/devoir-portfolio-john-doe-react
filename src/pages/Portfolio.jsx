import "./Portfolio.css";

import banner from "../assets/img/banner.jpg";

import freshFood from "../assets/img/portfolio/fresh-food.jpg";
import restaurantAkira from "../assets/img/portfolio/restaurant-japonais.jpg";
import espaceBienEtre from "../assets/img/portfolio/espace-bien-etre.jpg";
import seo from "../assets/img/portfolio/seo.jpg";
import api from "../assets/img/portfolio/coder.jpg";
import maquette from "../assets/img/portfolio/screens.jpg";


const projects = [
  {
    id: 1,
    title: "Fresh Food",
    subtitle: "Site de vente de produits frais en ligne",
    img: freshFood,
    footer: "Site réalisé avec PHP & MySQL",
    tech: ["React", "Bootstrap", "PHP", "MySQL"]
  },
  {
    id: 2,
    title: "Restaurant Akira",
    subtitle: "Site vitrine pour restaurant japonais",
    img: restaurantAkira,
    footer: "Site réalisé avec WordPress",
    tech: ["WordPress", "PHP", "CSS3"]
  },
  {
    id: 3,
    title: "Espace bien-être",
    subtitle: "Landing page pour centre de spa",
    img: espaceBienEtre,
    footer: "Site réalisé avec Laravel",
    tech: ["Laravel", "Blade", "Bootstrap"]
  },
  {
    id: 4,
    title: "SEO",
    subtitle: "Optimisation du référencement naturel",
    img: seo,
    footer: "Utilisation des outils SEO",
    tech: ["Google Analytics", "SEO", "Search Console"]
  },
  {
    id: 5,
    title: "Création d'une API",
    subtitle: "API REST développée en Node.js",
    img: api,
    footer: "Backend PHP - Symfony",
    tech: ["Node.js", "Express", "REST API"]
  },
  {
    id: 6,
    title: "Maquette d'un site web",
    subtitle: "Prototype UI/UX réalisé sur Figma",
    img: maquette,
    footer: "Réalisé avec Figma",
    tech: ["Figma", "UI Design", "UX Research"]
  }
];

export default function Portfolio() {
  return (
    <>
    <header
        className="portfolio-banner d-flex align-items-end text-white"
        style={{ backgroundImage: `url(${banner})` }}>
    </header>

    <section className="py-5">
        <div className="container text-center banner-content">
            <h1 className="fw-bold mb-2">Portfolio</h1>
            <p className="mb-3">Voici quelques-unes de mes réalisations</p>
            <div className="portfolio-line mx-auto"></div>
        </div>

        <div className="container ">
            <div className="row g-4">
                {projects.map((project) => (
                    <div key={project.id} className="col-12 col-md-6 col-lg-4">
                        <div className="card portfolio-card h-100">
                            <img src={project.img} className="card-img-top" alt={project.title}/>

                            <div className="card-body text-center">
                                <h2 className="h5 fw-bold">{project.title}</h2>
                                <p className="text-muted mb-3">
                                    {project.subtitle}
                                </p>

                                <a href="#" className="btn btn-primary portfolio-btn">
                                Voir le site
                                </a>
                            </div>

                            <div className="tech-container">
                            {project.tech.map((techItem, index) => (
                                <span key={index} className="tech-badge">
                                {techItem}
                                </span>
                            ))}
                            </div>

                            <div className="card-footer text-center small text-muted bg-white">
                                {project.footer}
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