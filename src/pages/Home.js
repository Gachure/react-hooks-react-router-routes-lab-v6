import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";
import { useEffect, useState } from "react";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Fetch movie data
    fetch("http://localhost:3000/movies")
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Home Page</h1>
        {movies.map((movie) => (
          <MovieCard key={movie.id} id={movie.id} title={movie.title} />
        ))}
      </main>
    </>
  );
}

export default Home;
