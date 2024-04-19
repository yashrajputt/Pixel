import MovieCard from "./MovieCard";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { withRating } from "./MovieCard";
import { TRENDING_API } from "./utils/apis";
const Trending =()=>{
    const[trendData , setTrendData]= useState([]);
    // const UpdateCard= withRating(MovieCard);

    useEffect(()=>{
        fetchdata()
    },[])

    const fetchdata= async()=>{
        const data= await fetch(TRENDING_API)
        const json= await data.json();

        setTrendData(json?.results);
    }
return <div className="bg-slate-200 border">
       <div className="m-8 overflow-x-auto">
        <div className="m-5"><h1 className=" text-3xl font-bold">Trending</h1></div>
        <div className="flex">
            {
              trendData.map((movie)=>{
                return <MovieCard key={movie.id} movieDetail={movie}/>
              })
            }
            
            {/* <MovieCard/> */}
            
        </div>
       </div>
</div>
}

export default Trending;