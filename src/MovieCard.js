

const MovieCard = (props) => {
  const { movieDetail } = props;

  
   
  return (
   
    <div className="mr-4 shrink-0 w-60">
      <div className=" m-2 bg-slate-200 rounded-xl p-2 hover:border hover:border-stone-300 hover:shadow-xl">
        
          <div className="mt-3">
            <img
              className="rounded-xl h-66 w-48 mx-auto"
              src={
                "https://image.tmdb.org/t/p/w220_and_h330_face/" +
                movieDetail?.backdrop_path
              }
              alt=""
            />
          </div>
          <div className="m-2 text-center" id="heading">
            <p className="font-bold text-wrap">{movieDetail?.original_name || movieDetail?.original_title}</p>
            <h2>{movieDetail?.release_date || movieDetail?.first_air_date}</h2>
            
          </div>
        
      </div>
    </div>
    
  );
};
export default MovieCard;


// ......Higher Order Component......

//  export const withRating =(MovieCard)=>{
//    return (props)=>{
//     return <div>
//       <p>rating</p>
//       <MovieCard {...props}/>
//     </div>
//    }
// }



