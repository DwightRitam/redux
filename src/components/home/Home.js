import React,{useEffect} from 'react'
import MovieListing from "../movielisting/MovieListing"
import { useDispatch, useSelector } from 'react-redux'
import {  addMovies,addShows, getMoviesName, getSeriesName } from '../../features/movies/movieSlice'
import "./home.scss"
import MovieApi from "../../common/apis/MovieApi"
import { APIkey } from "../../common/apis/MovieApiKey"
export default function Home() {

  const dispatch=useDispatch();
  const seriesname=useSelector(getSeriesName);
  const moviesname=useSelector(getMoviesName);
  console.log(moviesname)

  useEffect(() => {
    
    const fetchasyncmshows=async ()=>{
      const response = await  MovieApi
    .get(`?apikey=${APIkey}&s=${seriesname}&type=series`)

    dispatch(addShows(response.data))
    };

    const fetchasyncmmovies=async ()=>{
      const response = await  MovieApi
    .get(`?apikey=${APIkey}&s=${moviesname}&type=movie`)

    dispatch(addMovies(response.data))
    }
  fetchasyncmshows();
  fetchasyncmmovies();
  },[dispatch,seriesname,moviesname])
  
  return (
    <div>
    <MovieListing/>
    </div>
  )
}
