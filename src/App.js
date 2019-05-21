import React from "react";
import "./App.css";
import MovieList from "./Components/Movies/MovieList";
import Nav from "./Components/Nav/Nav";
import AddMovie from './Components/Movies/AddMovie';
import {MovieProvider} from "./MovieContext";

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Nav />
        <AddMovie />
        <MovieList />
      </div>
    </MovieProvider>
  );
}

export default App;
