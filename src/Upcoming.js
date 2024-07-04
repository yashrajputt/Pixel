import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard';
import { UPCOMING_API } from './utils/apis';


const Upcoming = ({data1}) => {
    // const [UpComingMovies,setUpComingMovies]=useState([]);

    // useEffect(()=>{
    //     fetchUpComingMovies()
    // },[]);
  
    // const fetchUpComingMovies= async()=>{
    //     const data=await fetch(UPCOMING_API);
    //     const json= await data.json();

    //     setUpComingMovies(json?.results);
    // }
    return (
    <div className=' bg-blue-100 border'>
      <div className='m-8'>
      <div className='m-5'>
        <h1 className='font-bold text-3xl'>UpComing</h1>
      </div>
      <div className='flex overflow-x-auto'>
        {data1.map((movie)=>{
           return <MovieCard key={movie.id} movieDetail={movie}/>
        })}
      </div>
      </div>
      
    </div>
  )
}

export default Upcoming
