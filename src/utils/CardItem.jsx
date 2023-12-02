import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useSelector } from 'react-redux'
import img_not from '../../public/image-not.png'

const CardItem = ({ movie }) => {
    const { imgurl, isSuccess } = useSelector(state => state.movie)

    const urlimg = (movie && imgurl) ? `${imgurl}${movie.poster_path}` : img_not

    if (isSuccess) {
        return (
            <>
                <div className="max-w-sm rounded overflow-hidden shadow-l">
                    <div className=" relative">
                        <img className="w-full rounded-[12px] " src={urlimg} alt="img" />
                        <div className="absolute  sm:right-4 sm:bottom-4 right-2 bottom-2 w-12 h-12  rounded-full  shadow-lg   bg-gray-100 font-bold flex flex-col items-center">
                            <span className=" "  >
                                <CircularProgressbar value={movie.vote_average > 2 ? movie.vote_average : 1.5
                                } maxValue={10} text={movie.vote_average.toFixed(1) > 2 ? movie.vote_average.toFixed(1) : 1.5}
                                    styles={buildStyles({
                                        pathColor: movie.vote_average < 5 ? "red" : movie.vote_average < 7 ? 'orange' : 'green',
                                        textSize: '28px',
                                        textColor: "black"

                                    })}
                                />
                            </span>

                        </div>



                    </div>
                    <div className="  md:font-bold font-semibold md:text-xl text-lg mb-1 whitespace-nowrap mt-1">{movie.title}</div>
                    <div className="px-1 pb-1">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                    </div>
                </div>
            </>
        )
    }
}

export default CardItem