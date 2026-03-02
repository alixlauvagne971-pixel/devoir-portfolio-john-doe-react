import heroImage from "../assets/img/hero-bg.jpg";
import aboutImage from "../assets/img/john-doe-about.jpg";
import "./Home.css";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section
        className="hero hero--overlay text-white"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="container text-center hero__content">
          <h1 className="display-4 fw-bold">Bonjour, je suis John Doe</h1>
          <h2 className="mb-4">Développeur web full stack</h2>
          <button className="btn btn-danger">En savoir plus</button>
        </div>
      </section>

      {/* A PROPOS + COMPETENCES */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="card shadow-sm border-0">
            <div className="card-body p-4 p-md-5">
              <div className="row g-4">
                {/* Col gauche */}
                <div className="col-12 col-lg-6">
                  <h3 className="section-title">A propos</h3>

                  <img
                    src={aboutImage}
                    alt="John Doe au travail"
                    className="img-fluid rounded mb-3"
                  />

                  <p className="text-muted">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Optio, necessitatibus consectetur tempore perferendis
                    nostrum, ex delectus reiciendis impedit aut iure enim
                    placeat? Natus, neque at?
                  </p>
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Optio, necessitatibus consectetur tempore perferendis
                    nostrum, ex delectus reiciendis impedit aut iure enim
                    placeat? Natus, neque at?
                  </p>
                  <p className="text-muted mb-0">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Optio, necessitatibus consectetur tempore perferendis
                    nostrum, ex delectus reiciendis impedit aut iure enim
                    placeat? Natus, neque at?
                  </p>
                </div>

                {/* Col droite */}
                <div className="col-12 col-lg-6">
                  <h3 className="section-title">Mes compétences</h3>

                  <Skill label="HTML5" value={90} barClass="bg-danger" />
                  <Skill label="CSS3" value={80} barClass="bg-info" />
                  <Skill label="JAVASCRIPT" value={70} barClass="bg-warning" />
                  <Skill label="PHP" value={60} barClass="bg-success" />
                  <Skill label="REACT" value={50} barClass="bg-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Skill({ label, value, barClass }) {
  return (
    <div className="mb-3">
      <div className="d-flex justify-content-between">
        <small className="fw-semibold">{label}</small>
        <small className="text-muted">{value}%</small>
      </div>
      <div className="progress" role="progressbar" aria-valuenow={value} aria-valuemin="0" aria-valuemax="100">
        <div className={`progress-bar ${barClass}`} style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}