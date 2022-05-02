import { Link } from "react-router-dom";

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  const imgPath = `/assets/img/${id}.jpg`;

  return (
    <div className="col animate__animated animate__fadeInRight">
      <div className="card mb-1">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={imgPath} className="card-img img-fuild rounded-start" alt={superhero} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{superhero}</h5>
              <p className="card-text">{alter_ego}</p>
              {
                  ( alter_ego !== characters ) && 
                  <p className="text-muted">{ characters }</p>
              }

              <p className="card-text">
                  <small className="text-mute">{ first_appearance }</small>
              </p>

              <Link to={`/hero/${id}`}>
                  Más...
              </Link>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
