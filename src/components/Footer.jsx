import { Link } from "react-router-dom";
import iconesGithub from "../assets/img/icones/social/github.svg";
import iconesLinkedin from "../assets/img/icones/social/linkedin.svg";
import iconesTwitter from "../assets/img/icones/social/twitter.svg";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="bg-dark text-light mt-auto">
      <div className="container py-4">
        <div className="row g-4">
          <div className="col-md-4">
            <h6 className="text-uppercase">John Doe</h6>
            <p className="mb-1">40 rue Laure Diebold</p>
            <p className="mb-1">69009 Lyon, France</p>
            <p className="mb-1">10 20 30 40 50</p>
            <p className="mb-0">john.doe@gmail.com</p>
            <span className="d-flex mt-3">
              <a href="https://github.com/github-john-doe"><img src={iconesGithub} className="me-2 icon-white social-icon" width="25" height="25"/></a>
              <a href="https://twitter.com/twitter-john-doe"><img src={iconesTwitter} className="me-2 icon-white social-icon" width="25" height="25"/></a>
              <a href="https://linkedin.com/in/linkedin-john-doe"><img src={iconesLinkedin} className="me-2 icon-white social-icon" width="25" height="25"/></a>
            </span>
          </div>

          <div className="col-md-4">
            <h6 className="text-uppercase">Liens utiles</h6>
            <ul className="list-unstyled mb-0">

              <li>
                <Link to="/" className="text-light text-decoration-none">
                  Accueil
                </Link>
              </li>

              <li>
                <Link to="/services" className="text-light text-decoration-none">
                  Services
                </Link>
              </li>

              <li>
                <Link to="/portfolio" className="text-light text-decoration-none">
                  Portfolio
                </Link>
              </li>

              <li>
                <Link to="/contact" className="text-light text-decoration-none">
                  Me contacter
                </Link>
              </li>

              <li>
                <Link to="/mentions-legales" className="text-light text-decoration-none">
                  Mentions légales
                </Link>
              </li>

            </ul>
          </div>

          <div className="col-md-4">
            <h6 className="text-uppercase">Mes dernières réalisations</h6>
            <ul className="list-unstyled mb-0">
            <li>
                <Link to="/portfolio" className="text-light text-decoration-none">
                  Fresh Food
                </Link>
              </li>

              <li>
                <Link to="/portfolio" className="text-light text-decoration-none">
                  Restaurant Akira
                </Link>
              </li>

            <li>
                <Link to="/portfolio" className="text-light text-decoration-none">
                  Espace bien-être
                </Link>
              </li>

            <li>
                <Link to="/portfolio" className="text-light text-decoration-none">
                  SEO
                </Link>
              </li>

              <li>
                <Link to="/portfolio" className="text-light text-decoration-none">
                  Création d'une API
                </Link>
              </li>

            <li>
                <Link to="/portfolio" className="text-light text-decoration-none">
                  Maquette d'un site
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}