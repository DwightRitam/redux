import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  changeMoviesName, changeSeriesName, getAllmovies,getAllshows } from "../../features/movies/movieSlice";
import { settings } from "../../common/settings";
import Moviecard from "../moviecard/Moviecard";
import "./MovieListing.scss";
import Slider from "react-slick";

const MovieListing = () => {
  const movies = useSelector(getAllmovies);
  const shows = useSelector(getAllshows);
  
const [movie,setmovie]=useState("")
const [series,setseries]=useState("")

  let renderMovies,renderShows=""
  const dispatch=useDispatch();
  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => (
        <Moviecard key={index} data={movie} />
      ))
    ) : (
      <div className="movies-error">
        <h3>{movies.Error}</h3>
      </div>
    );
  renderShows =
    shows.Response === "True" ? (
      shows.Search.map((shows, index) => (
        <Moviecard key={index} data={shows} />
      ))
    ) : (
      <div className="movies-error">
        <h3>{shows.Error}</h3>
      </div>
    );
      
     const submitMovieHandler=(e)=>{
      e.preventDefault();
      console.log(movie)
      dispatch(changeMoviesName(movie))
      setmovie("")

     }
     const submitSeriesHandler=(e)=>{
      e.preventDefault();
      console.log(series)
      dispatch(changeSeriesName(series))
      setseries()

     }
 
  return (
    <div className="movie-wrapper">
      <div className="movie-list">
      <h2>Search Your Fav Movie franchises out here</h2>
      <form className="form-inline my-2 my-lg-0" onSubmit={submitMovieHandler}>
      <input className="form-control mr-sm-2" type="text" value={movie} onChange={(e)=>{
        setmovie(e.target.value)
      }} placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>

      
      </div>
        <div className="movie-container">
          <Slider {...settings}>
            
          {renderMovies}
          </Slider>
          </div>
        
      <div className="series-list ">

      <h2>Search Your Fav seriesses out here </h2>
      <form className="form-inline my-2 my-lg-0" onSubmit={submitSeriesHandler}>
      <input className="form-control mr-sm-2" type="text" value={series} onChange={(e)=>{
        setseries(e.target.value)
       
      }} placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
     
    </div>
    <div className="series-container">
          <Slider {...settings}>
            
          {renderShows}
          </Slider>
          </div>
      </div>
      
  );
};

export default MovieListing;