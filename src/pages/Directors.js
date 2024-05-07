import NavBar from "../components/NavBar";
import { useEffect, useState } from "react";

function Directors() {
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    // Fetch director data
    fetch("http://localhost:3000/directors")
      .then((response) => response.json())
      .then((data) => setDirectors(data));
  }, []);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Directors Page</h1>
        {directors.map((director) => (
          <article key={director.name}>
            <h2>{director.name}</h2>
            <ul>
              {director.movies.map((movie, index) => (
                <li key={index}>{movie}</li>
              ))}
            </ul>
          </article>
        ))}
      </main>
    </>
  );
}

export default Directors;
