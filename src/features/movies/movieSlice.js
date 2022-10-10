import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import movieApi from "../../common/apis/MovieApi"
import { APIkey } from "../../common/apis/MovieApiKey"


// export const fetchasyncmovies = createAsyncThunk(
//     "movies/fetchasyncmovies", 
//     async () => {
    
//     const response = await MovieApi
//     .get(`?apikey=${APIkey}&s=${"batman"}&type=movie`)

//     return response.data
    
// })

// const seriesname = "friends"
// export const fetchasyncmshows = createAsyncThunk(
//     "movies/fetchasyncshows", 
//     async () => {
//     const response = await MovieApi
//     .get(`?apikey=${APIkey}&s=${seriesname}&type=series`)

//     return response.data
    
// })

export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
    "movies/fetchAsyncMovieOrShowDetail",
    async (id) => {
      const response = await movieApi.get(`?apiKey=${APIkey}&i=${id}&Plot=full`);
      return response.data;
    }
  );


const initialState = {
    movies: {},
    shows: {},
    changeSeriesName: "Office",
    changeMoviesName: "Harry Potter",
    selectMovieOrShow: {},
}

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        changeSeriesName: (state, { payload }) => {
            state.changeSeriesName = payload
        },
        changeMoviesName: (state, { payload }) => {
            state.changeMoviesName = payload
        },
        addMovies:(state, { payload }) => {
            state.movies = payload
        },
        addShows:(state, { payload }) => {
            state.shows = payload
        },
        removeSelectedMovieOrShow: (state) => {
            state.selectMovieOrShow = {};
          },

    },
    extraReducers:{
        [fetchAsyncMovieOrShowDetail.fulfilled]:(state,{payload}) => {
            console.log("Fetched Successfully!");
            return { ...state, selectMovieOrShow: payload };
          }
    }

})

export const { changeSeriesName,addMovies,addShows,changeMoviesName,removeSelectedMovieOrShow  } = movieSlice.actions
export const getAllmovies = (state) => state.films.movies
export const getAllshows = (state) => state.films.shows
export const getSeriesName = (state) => state.films.changeSeriesName
export const getMoviesName = (state) => state.films.changeMoviesName
export const getSelectedMovieOrShow = (state) => state.films.selectMovieOrShow;

export default movieSlice.reducer