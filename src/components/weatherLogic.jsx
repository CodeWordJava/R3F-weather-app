import { useEffect } from "react";

import WeatherForm from "./UserForm";
import "dotenv";

export default function WeatherLogic() {
  const city = WeatherForm.userLocation;// this is not right
  

  useEffect(() => {
    const apiKey = import.meta.env.VITE_APP_API_KEY;
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`,
      {
        headers: { Accept: "application/json" },
      }
    );
  });
  return(
    <h2>{city}</h2>
  )
}
