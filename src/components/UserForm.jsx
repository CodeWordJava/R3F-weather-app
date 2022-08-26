import React from 'react';
import { useState } from 'react';


 //Step 2 set up state
     
export default function WeatherForm(){
    const [userLocation, setUserLocation]=useState("");
   
//3-Handle the changes
const handleInput=(event)=>{
  const value =event.target.value
  setUserLocation(value)
}

//4- Submit the changes
const handleSubmit= (event)=>{
  event.preventDefault();
  console.log(userLocation);
 
};

      //1-USER INPUT
      return(
        <>
        <form className="weatherform">
    <label>
      Location
      <input type="text" name="name" value={userLocation.location} onChange={handleInput} />
    </label>
    <button type="submit" value="Submit" onClick={handleSubmit} >What's the weather?</button>
  </form>
  </>)}