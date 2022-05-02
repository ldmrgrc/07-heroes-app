import queryString from 'query-string';
import { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { HeroCard } from "../../hero/HeroCard";
import { useForm } from "../../hooks/useForm";
import { getHeroByName } from "../../selectors/getHeroByName";

export const SearchScreen = () => {

  const navigate = useNavigate();
  const location = useLocation()
  const { q = '' } = queryString.parse(location.search);  

  const [formValues, handleInputChange] = useForm({
    searchText: q
  });

  const {searchText} = formValues;
  
  const heroesFilter = useMemo(() => getHeroByName(q), [q]);  
  
  const handleSearch = (e) => {
    e.preventDefault()

    navigate(`?q=${searchText}`)

 };

  return (
    <>
      <h1>SearchScreen</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Buscar</h4>
          <hr />

          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Buscar un heroe"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={handleInputChange}
            
            />

            <div className="d-grid gap-2">
              <button
                className="btn btn-outline-primary mt-2"
                type="submit"
              >
                Buscar...
              </button>
            </div>
          </form>
        </div>

        <div className="col-7">
          <h4> Resultados </h4>
          <hr />
          {
            (q === '') 
            ? <div className="alert alert-info"> Buscar un héroe </div> 
            : (heroesFilter.length === 0) && <div className="alert alert-danger"> No hay resultados para: {q} </div>
          }

          {
            heroesFilter.map( hero => <HeroCard key={hero.id} {...hero} />)
          }
        </div>
      </div>
    </>
  );
};
