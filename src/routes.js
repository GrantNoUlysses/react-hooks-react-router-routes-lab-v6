import React from 'react';
import { Route } from 'found';
import Home from './pages/Home';
import Movie from './pages/Movie';
import Actors from './pages/Actors';
import Directors from './pages/Directors';

const routes = (
  <>
    <Route path="/" Component={Home} />
    <Route path="/movie/:id" Component={Movie} />
    <Route path="/actors" Component={Actors} />
    <Route path="/directors" Component={Directors} />
  </>
);

export default routes;
