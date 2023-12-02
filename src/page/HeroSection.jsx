import React, { useEffect } from 'react'
import Carousel from '../component/Carousel'
import { useDispatch, useSelector } from 'react-redux'
import { upcoming } from '../feature/movieSlice/movieSlice'
import MovieCard from '../component/MovieCard'

const HeroSection = () => {
    const dispatch = useDispatch()
    const { upcoming_movie, imgurl } = useSelector(state => state.movie)


    useEffect(() => {
        dispatch(upcoming())

    }, [])

    return (
        <>
            <div className="w-full  flex flex-col items-center mt-12  bg-[#EEEEEE]  text-[black]  dark:bg-[#331D2C] dark:text-white " >
                <div className='wrapper-container w-full'>
                    <Carousel />
                    <hr className='my-4 dark:border-[#EEEEEE] border-[#331D2C]' />
                    <section className=''>
                        <MovieCard upcoming_movie={upcoming_movie} title={"Upcoming"} />
                    </section>

                </div>
            </div>
        </>
    )

}

export default HeroSection