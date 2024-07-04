import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Genres from './Genres';
import MovieCard from './MovieCard';

const SearchResult = () => {
  
  const location=useLocation();
  const data=location.state;

  console.log(data);
     
    const[searchdata,setSearchData]=useState(data);
    const[tempsearch,setTempsearch]=useState(data);

    
    return (
    <div className='lg:flex'>

      
      <Genres moviearray={searchdata} update={(filterarray)=>{
        setTempsearch(filterarray);
      }}/>

      
      <div className=' m-5 flex flex-wrap'>

        {tempsearch.length==0?<p className='text-lg font-bold m-10'>No Movies!!</p>:
        tempsearch.map((movie)=>{
            return <MovieCard key={movie?.id} movieDetail={movie} />
        })}
      </div>
    </div>
  )
}

export default SearchResult
