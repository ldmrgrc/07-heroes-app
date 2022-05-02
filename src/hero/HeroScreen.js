import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../selectors/getHeroById";

export const HeroScreen = () => {
  const navigate = useNavigate();

  const { heroId } = useParams();
  const hero = useMemo(() => getHeroById(heroId), [heroId]);

  if (!hero) {
    return <Navigate to="/" />;
  }

  const { id, superhero, publisher, alter_ego, first_appearance, characters } =
    hero;

  const imgPath = `/assets/img/${id}.jpg`;

  const handleReturn = () => {
    navigate(-1);
  };

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img src={imgPath} alt={superhero} className="img-thumbnail animate__animated animate__fadeInLeft" />
      </div>
      <div className="col-8">
        <h1>{superhero}</h1>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter ego: </b>
            {alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher: </b>
            {publisher}
          </li>
          <li className="list-group-item">
            <b>First Apperiance: </b>
            {first_appearance}
          </li>

          <h5 className="mt-3">Characters</h5>
          <p>{characters}</p>

          <button className="btn btn-outline-info" onClick={handleReturn}>
            Back
          </button>
        </ul>
      </div>
    </div>
  );
};
