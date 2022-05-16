import React from 'react'
import "./Banner.css"
import axios from "../../helpers/Axios"
import requests from "../../helpers/Request"
import { useState,useEffect } from 'react'
const Banner = () => {
    const [movie, setmovie] = useState([])

    useEffect(() => {
     fetchdata()
    }, [])
    
    const fetchdata = async () => {
       const request = await axios.get(requests.fetchNetflixOriginals)
       setmovie(request.data.results[Math.floor(Math.random() * request.data.results.length -1)])
       return request
    }

    const truncate = (string,n) => {
     return string?.length > n ? string.substr(0, n -1) + "..." : string;
    }

    console.log(movie)
  return (
   <header className='banner' 
   style={{
    // backgroundImage: `url('https://i.imgur.com/g0jXdZC.jpg')`,
    // backgroundImage: `url('https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/1200px-Black_flag.svg.png')`,
    backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
  }}
 
   >
       <div className='banner__content'>
           <h1 className='banner__title'>
               {movie?.title || movie?.name || movie?.orginalName}
           </h1>
           <div className='banner__buttons'>
               <button className='banner__button'>Play</button>
               <button className='banner__button'>My list</button>
           </div>
           <h1 className='banner__description'>
             {truncate(movie?.overview, 150)}
           </h1>
       </div>
       <div className='banner__fadebottom'></div>
   </header>
  )
}

export default Banner