import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Detail from '../component/Detail';
import { detailMovies } from '../feature/movieSlice/movieSlice';
import { useParams } from 'react-router-dom';

const DetailPage = () => {
    const { detail_movie } = useSelector(state => state.movie)
    const { id } = useParams()
    const dipatch = useDispatch()

    useEffect(() => {
        console.log(id);
        dipatch(detailMovies(id))
    })
    return (
        <> <div className="w-full  flex flex-col items-center   bg-[#EEEEEE]  text-[black]  dark:bg-[#331D2C] dark:text-white mt-16 py-8" >
            <div className='wrapper-container w-full bg-[]'>
                <Detail detail={detail_movie} />
            </div>
        </div>
        </>
    )
}

export default DetailPage