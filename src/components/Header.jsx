import { NavLink } from "react-router-dom";

export default function Header() {
  const linkClass = ({ isActive }) =>
    "nav-link text-uppercase" + (isActive ? " active fw-bold text-decoration-underline" : "");

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <NavLink className="navbar-brand text-uppercase" to="/">
          John Doe
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="mainNav">
          <ul className="navbar-nav gap-lg-2">
            <li className="nav-item">
              <NavLink to="/" className={linkClass} end>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/services" className={linkClass}>
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/portfolio" className={linkClass}>
                Portfolio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className={linkClass}>
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/mentions-legales" className={linkClass}>
                Mentions légales
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}