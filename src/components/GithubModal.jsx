import { useEffect, useState } from "react";
import iconeBox from "../assets/img/icones/modal/box-seam.svg";
import iconeCard from "../assets/img/icones/modal/card-text.svg";
import geo from "../assets/img/icones/contact/geo-alt.svg";
import iconePeople from "../assets/img/icones/modal/people.svg";
import iconePerson from "../assets/img/icones/modal/person.svg";
import "./GithubModal.css";


export default function GithubModal({ show, onClose, username }) {

  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  if (show) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return () => {
    document.body.style.overflow = "auto";
  };
}, [show]);

  useEffect(() => {

    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((data) => {
        setProfile(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });

  }, [username]);

  if (!show) return null;

  return (
    <>
      {/* backdrop */}
      <div className="modal-backdrop fade show"></div>

      {/* modal */}
      <div className="modal fade show d-block">
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content bg-dark text-light custom-card">

            {/* header */}
            <div className="modal-header border-secondary">
              <h5 className="modal-title">Mon profil GitHub</h5>
              <button className="btn-close btn-close-white" onClick={onClose}></button>
            </div>

            {/* body */}
            <div className="modal-body">

              {loading && <p>Chargement...</p>}

              {!loading && profile && (
                <div className="row align-items-center">

                  {/* avatar */}
                  <div className="col-md-5 text-center">
                    <img
                      src={profile.avatar_url} alt="avatar" className="img-fluid rounded github-avatar" style={{ maxWidth: "250px" }}/>
                  </div>

                  {/* infos */}
                  <div className="col-md-7">

                    <p>
                        <img src={iconePerson} className="me-2 icon-white" width="20" height="20"/>
                        <a href={profile.html_url} target="_blank" rel="noreferrer"className="text-info">
                        John Doe
                        </a>
                    </p>

                    <hr />

                    <p>
                        <img src={geo} className="me-2 icon-white" width="20" height="20"/> {profile.location}
                    </p>

                    <hr />

                    <p>
                        <img src={iconeCard} className="me-2 icon-white" width="20" height="20"/> {profile.bio || "Aucune bio"}
                    </p>

                    <hr />

                    <p>
                        <img src={iconeBox} className="me-2 icon-white" width="20" height="20"/> Reposetories : {profile.public_repos}
                    </p>

                    <p>
                      <img src={iconePeople} className="me-2 icon-white" width="20" height="20"/> Followers : {profile.followers}
                    </p>

                    <p>
                      <img src={iconePeople} className="me-2 icon-white" width="20" height="20"/> Following : {profile.following}
                    </p>

                  </div>
                </div>
              )}

            </div>

            {/* footer */}
            <div className="modal-footer border-secondary">
              <button className="btn btn-secondary" onClick={onClose}>
                Fermer
              </button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}