import React from 'react'
import CardItem from '../utils/CardItem'

const MovieCard = ({ movies, title }) => {
    if (movies) {
        return (
            <>
                <h1 className=' ms-2 text-2xl'>{title} Movies :-</h1>
                <hr className='my-4 mb-6 dark:border-[#EEEEEE] border-[#331D2C]' />
                <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4">

                    {
                        movies?.results?.map((movie) => <CardItem key={movie.id} movie={movie} />)
                    }


                </div>
            </>
        )
    }
}

export default MovieCard