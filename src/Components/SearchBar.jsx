import React, { useState } from 'react'
import './SearchBar.css'


function SearchBar({getId}) {
    const [id, setId] = useState("")

    const handleChange =  (e)=>{
        
        setId(e.target.value)
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        const intVal = parseInt(id.trim(), 10)
        if(!isNaN(intVal) && intVal>=1 && intVal<=24 ){
        getId(intVal)
        }
        else{
          alert("Please enter a valid Id")
        }
        
    }
  return (
    <div className='search-bar'>
        <input type="text" value={id} onChange={handleChange}  />
        <button onClick={handleSubmit}>Search</button>
    </div>
  )
}

export default SearchBar

//const intVal = parseInt(e.target.value.trim(), 10)