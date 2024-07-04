import { useEffect, useState } from "react";
import Genres from "./Genres";
import MovieCard from "./MovieCard.js";

const Popular =()=>{
    
    const[popular,setPopular]=useState([]);
    const[tempPopular,setTempPopular]=useState([]);
    

    useEffect(()=>{
      fetchPopular();
    },[])
    
    const fetchPopular= async()=>{
         const data= await fetch("https://api.themoviedb.org/3/movie/popular?api_key=2c19165c9be4e0fa12fadfcb991ba1e9")
         const json= await data.json();

         setPopular(json?.results);
         setTempPopular(json?.results);

    }

    return <div className="lg:flex">
           
      {/* ..........This is how you can change the parent state from children.......*/}
           
           <Genres moviearray={tempPopular} update={(filterarray)=>{
            setPopular(filterarray)
           }}/>
           
           <div className="flex flex-wrap lg:m-5 mt-10 m-16">
              
              {popular.length==0? <p>No Movies Found!!</p>:
              popular.map((movie)=>{
                 return (
                  
                    <MovieCard key={movie.id} movieDetail={movie} />
                  
                );
              })}
           </div>
           
    </div>
}
export default Popular;