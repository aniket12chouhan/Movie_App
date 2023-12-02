import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getMovie, upcomingMovie } from "./movieServies";









// const upmovies = JSON.parse(localStorage.getItem("upcoming"))
const imgurl = "https://image.tmdb.org/t/p/original"

const movieSlice = createSlice({
    name: "MOVIE",
    initialState: {
        movie: "movie",
        isDark: false,
        upcoming_movie: null,
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
                state.upcoming_movie = action.payload
                state.isSuccess = true

            })
            .addCase(upcoming.rejected, state => {
                state.isSuccess = false
                state.isError = true
            })

    }
})

export const { darkmode } = movieSlice.actions

export default movieSlice.reducer
export const upcoming = createAsyncThunk("FETCH/UP", async () => {
    try {
        const response = await upcomingMovie()
        return response
    } catch (error) {
        console.log(error);
    }
})

export const getdata = createAsyncThunk("FETCH/DATA", async () => {
    getMovie()

})