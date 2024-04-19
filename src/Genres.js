import React, { useEffect, useState } from 'react'
// import { GENRE_API } from './utils/apis';

const Genres = (props) => {
    const{moviearray, update }=props
    
  
  const [genre,setGenre]=useState([]);
  
  useEffect(()=>{
    fetchGenre()
  },[])

  const fetchGenre= async()=>{
    const data= await fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=2c19165c9be4e0fa12fadfcb991ba1e9")
    const json=await data.json();

    setGenre(json.genres);
  }
    return (
    
        <div className="border border-stone-300 w-1/6 h-1/2 m-5 mt-10 rounded-xl bg-stone-100 shadow-xl shrink-0">
                 <h1 className="font-bold m-4 text-lg">Genres</h1>
                
               
                {
                  genre.map((gen)=>{
                    return <button onClick={()=>{
                     let filtermovies= moviearray.filter((movie)=>{
                        return movie?.genre_ids.includes(gen?.id)
                      })
                      
                      update(filtermovies)
                    }} key={gen?.id} className="m-2 p-2 rounded-2xl w-31 h-9  text-sm border border-stone-300 text-black hover:bg-sky-600">{gen.name}</button>
                  })
                }
           </div>
    
  )
}

export default Genres
