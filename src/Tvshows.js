import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard';
import { TVSHOWS_API } from './utils/apis';

const Tvshows = ({data2}) => {
  
  // const[tvShow,setTvShow]=useState([]);

  // useEffect(()=>{
  //  fetchTvShow();
  // },[]);

  // const fetchTvShow= async()=>{
  //   const data=await fetch(TVSHOWS_API)
  //   const json= await data.json();

  //   setTvShow(json?.results);
  // }
  
    return (
    <div className=' bg-slate-200 border'>
      <div className='m-8'>
        <div className='m-5'>
           <h1 className='font-bold text-3xl'>TV Shows</h1>
        </div>
        <div className='flex overflow-x-auto'>
            {data2.map((movie)=>{
                return <MovieCard key={movie.id} movieDetail={movie}/>
            })}
        </div>
      </div>
    </div>
  )
}

export default Tvshows;
