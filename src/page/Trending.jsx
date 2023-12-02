import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { trendingMovies } from '../feature/movieSlice/movieSlice'
import { useEffect } from 'react'
import MovieCard from '../component/MovieCard'

const Trending = () => {
    const dispatch = useDispatch()
    const { trending_movie } = useSelector(state => state.movie)
    useEffect(() => {
        dispatch(trendingMovies())

    }, [])

    return (
        <div className="w-full  flex flex-col items-center   bg-[#EEEEEE]  text-[black]  dark:bg-[#331D2C] dark:text-white " >
            <div className='wrapper-container w-full'>

                <section className='mt-12'>

                    <MovieCard movies={trending_movie} title={"Trending"} />
                </section>

            </div>
        </div>
    )
}

export default Trending