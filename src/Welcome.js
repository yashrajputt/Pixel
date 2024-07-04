
import { useNavigate } from "react-router-dom";

const Welcome=({alldata})=>{
    console.log(alldata)
   
    const history=useNavigate();

    const handleClick=()=>{
        let x=document.getElementById("searchtext").value.toLowerCase();
        const filterarray= alldata.filter((movie)=>{
           return movie?.name?.toLowerCase().includes(x)||movie?.title?.toLowerCase().includes(x);
        })
        console.log(filterarray);
        // setFilterData(filterarray);
        history("/searchresult",{state:filterarray});
       }
    
    return  <div>
        <div className="bg-[url('https://wallpapers.com/images/featured/money-heist-segtwbhffwy01w82.jpg')] bg-no-repeat bg-cover border border-black">
            <div className="p-4 m-4 mt-10 opacity-100">
                <h1 className="text-white font-bold text-4xl ">Welcome.</h1>
                <p className="text-white font-bold text-2xl mt-2">Millions of movies, TV shows and people to discover. Explore now.</p>
            </div>
            <div className="p-4 flex m-4 mb-10">
                <input className="w-full rounded-3xl h-10 p-4 block" type="search" name="Search.." id="searchtext" placeholder="Search for movies,tv shows,and more..." />
                 <button  className="ml-2 bg-black text-white p-2 rounded-3xl w-32 hover:bg-blue-400 hover:font-bold hover:text-blue-800" onClick={handleClick}>Search</button>
            </div>
        </div>
    </div>
    
}
export default Welcome;

// bg-[url('https://wallpapers.com/images/featured/money-heist-segtwbhffwy01w82.jpg')] bg-no-repeat bg-cover