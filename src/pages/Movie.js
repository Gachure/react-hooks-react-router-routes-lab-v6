import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    // Fetch movie data
    fetch(`http://localhost:3000/movies/${id}`)
      .then((response) => response.json())
      .then((data) => setMovie(data));
  }, [id]);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        {movie ? (
          <>
            <h1>{movie.title}</h1>
            <p>Time: {movie.time} minutes</p>
            {movie.genres.map((genre, index) => (
              <span key={index}>{genre}</span>
            ))}
          </>
        ) : (
          <p>Loading...</p>
        )}
      </main>
    </>
  );
}

export default Movie;
