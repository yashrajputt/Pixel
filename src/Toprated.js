import React, { useEffect, useState } from 'react'
import Genres from './Genres'
import { TOPRATED_API } from './utils/apis';
import MovieCard from './MovieCard';


const Toprated = () => {
  
  const[topRated,setTopRated]=useState([]);
  const[temptopRated,settempTopRated]=useState([]);

  useEffect(()=>{
    fetchTopRated();
  },[])

  const fetchTopRated= async()=>{
    const data= await fetch(TOPRATED_API);
    const json= await data.json();

    setTopRated(json?.results);
    settempTopRated(json?.results);
  }
  
    return (
    <div className="flex">
        <Genres moviearray={temptopRated} update={(filterarray)=>{
            setTopRated(filterarray)
        }}/>
        <div className='flex flex-wrap m-5 mt-10'>
        {
            topRated.length==0?<p>No Movies Found!!</p>:
            
            topRated.map((movie)=>{
              return <MovieCard key={movie.id} movieDetail={movie}/>
            })
        }
        </div>
        
    </div>
  )
}

export default Toprated
