import React, { useEffect, useState } from 'react'
import PeopleCard from './PeopleCard'
import { PEOPLE_API } from './utils/apis';

const People = () => {
  const [people,setPeople]= useState([]);

  useEffect(()=>{
   fetchPeople() 
  },[])

  const fetchPeople= async()=>{
     const data= await fetch(PEOPLE_API);
     const json= await data.json();

     setPeople(json?.results);
  }
  return (
    <div className='flex flex-wrap '>
      {people.map((People)=>{
        return <PeopleCard key={People.id} Peopledetail={People}/>
      })}
    </div>
  )
}

export default People
