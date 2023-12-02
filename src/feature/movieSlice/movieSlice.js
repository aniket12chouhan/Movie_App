import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { popular, trending, upcomingMovie } from "./movieServies";









// const upmovies = JSON.parse(localStorage.getItem("upcoming"))
const imgurl = "https://image.tmdb.org/t/p/original"

const movieSlice = createSlice({
    name: "MOVIE",
    initialState: {
        movie: "movie",
        isDark: false,
        upcoming_movie: null,
        popular_movie: null,
        trending_movie: null,
        imgurl,
        isLoading: false,
        isError: false,
        isSuccess: false
    },
    reducers: {
        darkmode: (state, action) => {
            return {
                ...state,
                isDark: action.payload
            }
        }

    },

    extraReducers: (bulider) => {
        bulider
            .addCase(upcoming.pending, state => {
                state.isLoading = true
            })
            .addCase(upcoming.fulfilled, (state, action) => {
                state.isLoading = false
                state.upcoming_movie = state.upcoming_movie?.results ? {
                    ...state.upcoming_movie,
                    results: [...state.upcoming_movie?.results, ...action.payload.results]
                } : action.payload
                state.isSuccess = true

            })
            .addCase(upcoming.rejected, state => {
                state.isSuccess = false
                state.isError = true
            })
            .addCase(popularMovies.pending, state => {
                state.isLoading = true
            })
            .addCase(popularMovies.fulfilled, (state, action) => {
                state.isLoading = false
                state.popular_movie = state.popular_movie?.results ? {
                    ...state.popular_movie,
                    results: [...state.popular_movie?.results, ...action.payload.results]
                } : action.payload
                state.isSuccess = true

            })
            .addCase(popularMovies.rejected, state => {
                state.isSuccess = false
                state.isError = true
            })
            .addCase(trendingMovies.pending, state => {
                state.isLoading = true
            })
            .addCase(trendingMovies.fulfilled, (state, action) => {
                state.isLoading = false
                state.trending_movie = state.trending_movie?.results ? {
                    ...state.trending_movie,
                    results: [...state.trending_movie?.results, ...action.payload.results]
                } : action.payload
                state.isSuccess = true

            })
            .addCase(trendingMovies.rejected, state => {
                state.isSuccess = false
                state.isError = true
            })

    }
})

export const { darkmode } = movieSlice.actions

export default movieSlice.reducer
export const upcoming = createAsyncThunk("FETCH/UP", async (pageNum) => {
    try {
        const response = await upcomingMovie(pageNum)
        return response
    } catch (error) {
        console.log(error);
    }
})

export const popularMovies = createAsyncThunk("FETCH/POPULAR", async (pageNum) => {

    try {
        const response = await popular(pageNum)
        return response
    } catch (error) {
        console.log(error);
    }
})

export const trendingMovies = createAsyncThunk("FETCH/TRENDING", async (pageNum) => {
    try {
        const response = await trending(pageNum)
        return response
    } catch (error) {
        console.log(error);
    }
})