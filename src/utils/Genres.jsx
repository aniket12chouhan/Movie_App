import React from 'react'
import { useSelector } from 'react-redux';

const Genres = ({ data }) => {
    const { genres } = useSelector(state => state.movie)
    console.log(data);
    console.log(genres);
    return (
        <div className="genres">

            {
                genres.filter((g) =>
                    data.every((id) => {
                        if (genres.includes(id)) {
                            return (
                                <span key={g.id} className="inline-block dark:bg-[#ffffff] bg-[#000000] rounded-full px-3 py-1 text-sm font-normal text-white dark:text-gray-700 mr-2 mb-2">{g?.name}</span>
                            )
                        }
                    })
                )
            }
            {/* {data?.forEach((g) => {
                // if (!genres[g]?.name) return;
                genres.map(ele => {
                    if (ele.id == g) {
                        return (
                            <span key={ele} className="inline-block dark:bg-[#ffffff] bg-[#000000] rounded-full px-3 py-1 text-sm font-normal text-white dark:text-gray-700 mr-2 mb-2">{ele?.name}</span>
                        );
                    } else return
                });

            })} */}
        </div>
    )
}

export default Genres