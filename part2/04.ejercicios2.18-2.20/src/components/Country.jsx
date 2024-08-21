import { useState } from "react"

const Country = ({ country, getWeather }) => {
  const [weather, setWeather] = useState([])

  getWeather(country.latlng[0], country.latlng[1])
  .then(weather => {
    setWeather(weather)
    })

  
  
  return (
    <div key={country.name.common}>
        <h1>{country.name.common}</h1>
        <p>Capital: {country.capital[0]}</p>
        <p>Area: {country.area}</p>
        <h3>Languajes:</h3>
        <ul>
            {Object.keys(country.languages).map((language) => (
            <li key={language}>{country.languages[language]}</li>
            ))}
        </ul>
        <img 
            src={country.flags['png']}
            alt={country.flags['alt']}
        />
        <h1>Weather in {country.capital[0]}</h1>
        {
          weather.main 
            ? (
                <>
                  <p>Temperature: {(weather.main.temp - 273.15).toFixed(2)}°C</p>
                  { weather.weather && weather.weather.length >= 0 &&
                    (
                      <>
                      <img 
                        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
                        alt={weather.weather[0].description}
                      />
                      </>
                    )
                  }
                  <p>Wind {weather.wind.speed} m/s</p>
                </>
              )
            : <p>Loading weather data...</p>
        }
        
    </div>
  )
}

export default Country