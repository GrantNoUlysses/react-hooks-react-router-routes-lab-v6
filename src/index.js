import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter } from 'found';
import RouterProvider from 'found/lib/RouterProvider';
import { Route } from 'found';
import NavBar from './components/NavBar';
import MovieCard from './components/MovieCard';
import './index.css';
import routes from './routes';

const movies = [
  { id: 1, title: "Movie 1" },
  { id: 2, title: "Movie 2" },
  { id: 3, title: "Movie 3" }
];

ReactDOM.render(
  <RouterProvider router={createBrowserRouter()}>
    <div>
      <NavBar />
      <h1>Home Page</h1>
      <div className="movie-list">
        {movies.map(movie => (
          <MovieCard key={movie.id} id={movie.id} title={movie.title} />
        ))}
      </div>
    </div>
    {routes}
  </RouterProvider>,
  document.getElementById('root')
);
