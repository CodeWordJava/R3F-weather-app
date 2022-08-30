import { useEffect } from "react";
import { useState } from "react";
//import { useSearchContext } from "./weather.context";
import "dotenv";

export default function WeatherLogic() {
  //Step 2 set up state
  const [userLocation, setUserLocation] = useState("");
  const [temperature, setTemp] =useState("")

  //3-Handle the changes
  const handleInput = (event) => {
    setUserLocation(event.target.value);
  };

  // //4- Submit the changes
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(userLocation);
  // };

  // Below this line is the context code//

  //   const {setSearchString} = useSearchContext();

  // const handleInput = (e) => {
  //   setSearchString(e.target.value);
  //   console.log(setSearchString.prop)

  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //     };

  const getWeather =async(userLocation)=>{
    const apiKey = import.meta.env.VITE_APP_API_KEY;
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${userLocation}&appid=${apiKey}&units=metric`);
      const data = await res.json()
      console.log(data.main.temp) 
      setTemp(data.main.temp)
      // push the api results into here   
  }

  useEffect(() => {
   
   getWeather(userLocation);},[userLocation]
    );

  
  return (
    <>
      <form className="weatherform">
        <label>
          Location
          <input
            type="text"
            name="name"
            value={userLocation}
            onChange={handleInput}
          />
        </label>
      
      </form>
      <h1>{userLocation}</h1>
      <h2>{temperature}°C</h2>
    </>
  );
}
