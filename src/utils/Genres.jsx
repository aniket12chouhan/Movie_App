import React from 'react'
import { useSelector } from 'react-redux';

const Genres = ({ data }) => {
    const { genres } = useSelector(state => state.movie)
    console.log(data);
    console.log(genres);

    data.map((id) => {
        const genre = genres.find((g) => g.id == id)
        console.log(genre);
    })
    return (
        <div className="genres">
            {
                data.map((id) => {
                    const genre = genres.find((g) => g.id == id)
                    return (
                        <span key={id} className="inline-block dark:bg-[#ffffff] bg-[#000000] rounded-full px-3 py-1 text-sm font-normal text-white dark:text-gray-700 mr-2 mb-2">{genre?.name}</span>

                    )
                })
            }

        </div>
    )
}

export default Genres