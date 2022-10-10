import './App.scss';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./components/home/Home"
import Header from "./components/header/Header"

import MovieDetails from "./components/Moviedetails/MovieDetails"
import PageNotFound from "./components/pagenotfound/PageNotFound"

import Footer from "./components/footer/Footer"

function App() {
  return (
    <Router>
        <Header/>
        <div className="container">
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/movie/:imdbID" element={<MovieDetails/>}/>
          <Route element={<PageNotFound/>}/>
        </Routes>
        </div>
        <Footer/>
      </Router>
  );
}

export default App;
