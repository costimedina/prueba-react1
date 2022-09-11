import '../Style-sheets/MiApi.css';
import { useEffect, useState } from "react";

const Main = () => {
  const [ghibliMovies, setGhibliMovies] = useState([]);
  const [searchMovie, setSearchMovie] = useState("");

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://ghibliapi.herokuapp.com/films");
      const data = await response.json();
      setGhibliMovies(data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <div className="search-label">
        <input
          className="busqueda"
          type="text"
          placeholder="Busca tu película"
          value={searchMovie}
          onChange={(e) => {
            setSearchMovie(e.target.value);
          }}
        />
      </div>

      <section>
        {
          ghibliMovies.filter((film) => {
            if (searchMovie === '') {
              return true;
            }
            return film.title
              .toLowerCase()
              .includes(searchMovie.toLowerCase());
              //sort para ordenar criterio de orden numerico % de puntuación de las películas
          }).sort((a, b) => b.rt_score - a.rt_score).map((ghibli) => (
            <div className="movie-card" key={ghibli.id}>
              <img className='movie-image' src={ghibli.image} alt={ghibli.title} />
              <h2 className='movie-name'>{ghibli.title}</h2>
              <h2 className='movie-ranking'>Rotten Tomatoes: {ghibli.rt_score}%</h2>
            </div>
          )
          )
        }
      </section>
    </div>
  );
};

export default Main;

