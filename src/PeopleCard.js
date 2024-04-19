import React from 'react'
import { HEADER_LOGO } from './utils/imageUrls'

const PeopleCard = (props) => {
  
  const{Peopledetail}=props
  
  return (
    <div className=' w-72 m-6 hover:border hover:border-slate-300 p-2 bg-slate-200 rounded-2xl'>
      <div>
        <img className='rounded-2xl w-72' src={"https://media.themoviedb.org/t/p/w235_and_h235_face/" + Peopledetail?.profile_path }alt="" />
      </div>
      <div className='mt-2'>
        <h1 className='font-bold text-center text-lg'>{Peopledetail?.original_name}</h1>
        <p className='text-md text-center'>{(Peopledetail?.known_for.map((k)=>{
          return k?.original_name || k?.original_title
        })).join(", ")}</p>
      </div>
    </div>
  )
}

export default PeopleCard
