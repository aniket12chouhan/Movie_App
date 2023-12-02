import React, { useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import logo from '../../public/logo/logo.webp'
import { useDispatch } from 'react-redux';
import { darkmode, upcoming } from '../feature/movieSlice/movieSlice';
import { Link } from 'react-router-dom';
const Hearder = () => {
    const dispatch = useDispatch()
    const [dark, setdark] = useState(true)


    useEffect(() => {
        dispatch(darkmode(dark))
    }, [dark])

    return (
        <>
            <div className=" fixed top-0  z-10 w-full flex  justify-center  bg-[#EEEEEE]  text-[black]  dark:bg-[#331D2C] dark:text-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]" >
                <div className='wrapper-container w-full'>
                    <div className=" flex flex-row justify-between p-3 ">
                        <Link to={"/"} className=" flex flex-col items-center cursor-pointer sm:w-12 w-8">
                            <img className='object-contain' src={logo} alt="" />

                        </Link>

                        <nav className="flex flex-row items-center sm:text-lg font-medium text-[14px] sm:gap-8  gap-2 ">

                            <Link to={"/popular"}
                                className="cursor-pointer mr-2 "
                            >
                                Popular
                            </Link>
                            <Link to={"/trending"}
                                className=" cursor-pointer mr-2 "
                            >
                                Trending
                            </Link>
                            <SearchIcon />

                            {
                                dark ? <div className=' text-[black] cursor-pointer' onClick={() => setdark(false)}>
                                    <DarkModeIcon />
                                </div> : <div className=' text-[yellow] cursor-pointer' onClick={() => setdark(true)}>
                                    <LightModeIcon />
                                </div>
                            }




                            {/* <form className='md:mt-0 mt-2' >
                                <div className="">
                                    <span className='flex md:ml-0 ml-16' >
                                        <span className="mr-2 w-full">
                                            <input type="text"
                                                name="text"
                                                id="text"

                                                autoComplete="off" className="block w-full  rounded-md border-0 py-1.5 text-gray-900 outline-none px-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brightColor sm:text-sm sm:leading-6 float-left" />
                                        </span>
                                    </span>
                                </div>
                            </form> */}

                        </nav>


                    </div>
                </div>
            </div>

        </>
    )
}

export default Hearder