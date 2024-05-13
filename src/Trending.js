import MovieCard from "./MovieCard";
import React from "react";
import { useState,useEffect } from "react";
import { TRENDING_API } from "./utils/apis";
const Trending =()=>{
           
  const[trendData,setTrendData]=useState([]);


useEffect(()=>{
       fetchTrendData()
},[])

const fetchTrendData= async()=>{
       const data=await fetch(TRENDING_API);
       const json=await data.json();
       setTrendData(json?.results);
}    
  
  
 
      return <div className="bg-slate-200 border">
       <div className="m-8 overflow-x-auto">
        <div className="m-5"><h1 className=" text-3xl font-bold">Trending</h1></div>
        <div className="flex">
            {
              trendData.map((movie)=>{
                return <MovieCard key={movie?.id} movieDetail={movie}/>
              })
            }
            
           
            
        </div>
       </div>
       
</div>
}

export default Trending;