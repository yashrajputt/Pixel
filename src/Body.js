import React, { useEffect } from "react";
import Trending from "./Trending";
import Welcome from "./Welcome";
import Upcoming from "./Upcoming";
import Tvshows from "./Tvshows";
import { useState } from "react";
import { TRENDING_API, UPCOMING_API,TVSHOWS_API} from "./utils/apis";


const Body =()=>{
       const[trendData,setTrendData]=useState([]);
       const [UpComingMovies,setUpComingMovies]=useState([]);
       const[tvShow,setTvShow]=useState([]);

       useEffect(()=>{
              fetchTrendData()
       },[])
       
       const fetchTrendData= async()=>{
              const data=await fetch(TRENDING_API);
              const data1=await fetch(UPCOMING_API);
              const data2=await fetch(TVSHOWS_API)
              const json=await data.json();
              const json1=await data1.json();
              const json2=await data2.json();
              setTrendData(json?.results);
              setUpComingMovies(json1?.results);
              setTvShow(json2?.results);
              console.log(trendData)
       }  
       

return <div>
       <Welcome alldata={trendData.concat(UpComingMovies).concat(tvShow)}/>
       <Trending data={trendData}/>
       <Upcoming data1={UpComingMovies}/>
       <Tvshows data2={tvShow}/>
       
</div>
}
export default Body;