import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { detail, popular, search, trending, upcomingMovie } from "./movieServies";









// const upmovies = JSON.parse(localStorage.getItem("upcoming"))
const imgurl = "https://image.tmdb.org/t/p/original"

const movieSlice = createSlice({
    name: "MOVIE",
    initialState: {
        movie: "movie",
        isDark: false,
        genres: [],
        upcoming_movie: null,
        popular_movie: null,
        trending_movie: null,
        search_movie: null,
        detail_movie: {
            "adult": false,
            "backdrop_path": "/f1AQhx6ZfGhPZFTVKgxG91PhEYc.jpg",
            "belongs_to_collection": null,
            "budget": 165000000,
            "genres": [
                {
                    "id": 18,
                    "name": "Drama"
                },
                {
                    "id": 36,
                    "name": "History"
                },
                {
                    "id": 10752,
                    "name": "War"
                }
            ],
            "homepage": "https://www.napoleon.movie",
            "id": 753342,
            "imdb_id": "tt13287846",
            "original_language": "en",
            "original_title": "Napoleon",
            "overview": "An epic that details the checkered rise and fall of French Emperor Napoleon Bonaparte and his relentless journey to power through the prism of his addictive, volatile relationship with his wife, Josephine.",
            "popularity": 507.455,
            "poster_path": "/jE5o7y9K6pZtWNNMEw3IdpHuncR.jpg",
            "production_companies": [
                {
                    "id": 1645,
                    "logo_path": "/6Ry6uNBaa0IbbSs1XYIgX5DkA9r.png",
                    "name": "Scott Free Productions",
                    "origin_country": "GB"
                },
                {
                    "id": 19108,
                    "logo_path": "/jWhpxFZd02PbcFtUSiCraifRZTC.png",
                    "name": "Latina Pictures",
                    "origin_country": "MT"
                },
                {
                    "id": 194232,
                    "logo_path": "/oE7H93u8sy5vvW5EH3fpCp68vvB.png",
                    "name": "Apple Studios",
                    "origin_country": "US"
                }
            ],
            "production_countries": [
                {
                    "iso_3166_1": "MT",
                    "name": "Malta"
                },
                {
                    "iso_3166_1": "GB",
                    "name": "United Kingdom"
                },
                {
                    "iso_3166_1": "US",
                    "name": "United States of America"
                }
            ],
            "release_date": "2023-11-22",
            "revenue": 78800000,
            "runtime": 158,
            "spoken_languages": [
                {
                    "english_name": "French",
                    "iso_639_1": "fr",
                    "name": "Français"
                },
                {
                    "english_name": "English",
                    "iso_639_1": "en",
                    "name": "English"
                }
            ],
            "status": "Released",
            "tagline": "He came from nothing. He conquered everything.",
            "title": "Napoleon",
            "video": false,
            "vote_average": 6.458,
            "vote_count": 492
        },
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
        },
        searchReset: (state) => {
            return {
                ...state,
                search_movie: null

            }

        },
        getGenres: (state, action) => {
            state.genres = action.payload;
        },

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
            .addCase(searchMovies.pending, state => {
                state.isLoading = true
            })
            .addCase(searchMovies.fulfilled, (state, action) => {
                state.isLoading = false
                state.search_movie = state.search_movie?.results ? {
                    ...state.search_movie,
                    results: [...state.search_movie?.results, ...action.payload.results]
                } : action.payload
                state.isSuccess = true

            })
            .addCase(searchMovies.rejected, state => {
                state.isSuccess = false
                state.isError = true
            })

    }
})

export const { darkmode, searchReset, getGenres } = movieSlice.actions

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

export const searchMovies = createAsyncThunk("FETCH/SEARCH", async (textsearch) => {
    console.log(textsearch);
    try {
        const response = await search(textsearch)
        return response
    } catch (error) {
        console.log(error);
    }
})

export const detailMovies = createAsyncThunk("FETCH/DETAIL", async (id) => {
    console.log(id);
    try {
        const response = await detail(id)
        return response
    } catch (error) {
        console.log(error);
    }
})