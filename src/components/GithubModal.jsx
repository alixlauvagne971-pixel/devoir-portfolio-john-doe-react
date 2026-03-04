import { useEffect, useState } from "react";

export default function GithubModal({ show, onClose, username }) {

  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

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
          <div className="modal-content bg-dark text-light">

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
                      src={profile.avatar_url} alt="avatar" className="img-fluid rounded" style={{ maxWidth: "250px" }}/>
                  </div>

                  {/* infos */}
                  <div className="col-md-7">

                    <p>
                      <strong>👤</strong>{" "}
                      <a
                        href={profile.html_url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-info"
                      >
                        {profile.login}
                      </a>
                    </p>

                    <hr />

                    <p>
                      <strong>📍</strong> {profile.location}
                    </p>

                    <hr />

                    <p>
                      <strong>💬</strong> {profile.bio || "Aucune bio"}
                    </p>

                    <hr />

                    <p>
                      <strong>📦 Repositories :</strong> {profile.public_repos}
                    </p>

                    <p>
                      <strong>👥 Followers :</strong> {profile.followers}
                    </p>

                    <p>
                      <strong>➡️ Following :</strong> {profile.following}
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