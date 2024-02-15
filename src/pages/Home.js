import React from "react";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";

const Home = () => {
  const movies = [
    { id: 1, title: "Movie 1" },
    { id: 2, title: "Movie 2" },
    { id: 3, title: "Movie 3" }
  ];

  return (
    <>
      <NavBar />
      <header>
        <h1>Home Page</h1>
      </header>
      <main>
        <div className="movie-list">
          {movies.map(movie => (
            <MovieCard key={movie.id} id={movie.id} title={movie.title} />
          ))}
        </div>
      </main>
    </>
  );
};

export default Home;