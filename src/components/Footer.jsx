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
          </div>

          <div className="col-md-4">
            <h6 className="text-uppercase">Liens utiles</h6>
            <ul className="list-unstyled mb-0">
              <li>Accueil</li>
              <li>Services</li>
              <li>Portfolio</li>
              <li>Me contacter</li>
              <li>Mentions légales</li>
            </ul>
          </div>

          <div className="col-md-4">
            <h6 className="text-uppercase">Mes dernières réalisations</h6>
            <ul className="list-unstyled mb-0">
              <li>Fresh Food</li>
              <li>Restaurant Akira</li>
              <li>Espace bien-être</li>
              <li>SEO</li>
              <li>Création d'une API</li>
              <li>Maquette d'un site</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}