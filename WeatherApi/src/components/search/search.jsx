import React from 'react'
import { useState } from 'react';
import "./search.scss"
import { Search2Icon} from '@chakra-ui/icons'

export default function Search({ onSearchChange} ) {
  const [searchCity,setsearchCity]=useState("")

  const handleInputChange = (e) => {
    const word = e.target.value;
    setsearchCity(word.trim());
  };
  
  const handleSearchClick = () => {
    if (searchCity == "") return;
    onSearchChange(searchCity);
    setsearchCity("") 
  };
  
  return (
    <>
      <div className='search'>
        <input type="text" placeholder='Enter Location!' onChange={handleInputChange} value={searchCity}/>
        <button className='search-button' onClick={handleSearchClick }><Search2Icon fontSize={18} color={"white"}/></button>
    </div>
    </>
  )
}
