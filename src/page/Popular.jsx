import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { popularMovies } from '../feature/movieSlice/movieSlice'
import { useEffect } from 'react'
import MovieCard from '../component/MovieCard'

const Popular = () => {
    const dispatch = useDispatch()
    const { popular_movie } = useSelector(state => state.movie)
    useEffect(() => {
        dispatch(popularMovies())

    }, [])

    return (
        <div className="w-full  flex flex-col items-center   bg-[#EEEEEE]  text-[black]  dark:bg-[#331D2C] dark:text-white " >
            <div className='wrapper-container w-full'>

                <section className='mt-12'>

                    <MovieCard movies={popular_movie} title={"Popular"} />
                </section>

            </div>
        </div>
    )
}

export default Popular