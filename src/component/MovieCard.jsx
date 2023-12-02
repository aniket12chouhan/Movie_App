import React from 'react'
import CardItem from '../utils/CardItem'

const MovieCard = ({ upcoming_movie, title }) => {
    console.log(title);
    return (
        <>
            <h1 className='pb-5 ms-2 text-2xl'>{title} Movies :-</h1>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4">

                {
                    upcoming_movie?.results?.map((movie) => <CardItem key={movie.id} movie={movie} />)
                }


            </div>
        </>
    )
}

export default MovieCard