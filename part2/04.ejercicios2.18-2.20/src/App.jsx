import { useState, useEffect } from "react";
import Form from "./components/Form";
import SelectedCountry from "./components/SelectedCountry";
import Country from "./components/Country";
import countriesServices from "./services/countries";
import getWeather from "./services/weather";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchCountry, setSearchCountry] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [country, setCountry] = useState(null);

  useEffect(() => {
    countriesServices
      .getAll()
        .then(countries => {
          setCountries(countries)
        })
  }, []);

  useEffect(() => {
    if (searchCountry) {
      let findCountries = countries.filter((country) =>
        country.name.common.toLowerCase().includes(searchCountry.toLowerCase())
      );
      setFilteredCountries(findCountries);
    } else {
      setFilteredCountries([]);
    }
  }, [searchCountry, countries]);

  const handleSearchCountry = (e) => {
    setSearchCountry(e.target.value);
    setCountry(null);
  };

  const handleSelectCountry = (country) => {
    setCountry(country);
  };

  return (
    <>
      <Form
        searchCountry={searchCountry}
        handleSearchCountry={handleSearchCountry}
      />
      <div>
        {country ? (
          <Country 
            key={country.name.common}
            country={country}
            getWeather={getWeather}
          />
        ) : searchCountry === "" ? null : filteredCountries.length > 10 ? (
          <p>Too many matches, specify another filter</p>
        ) : filteredCountries.length <= 10 && filteredCountries.length > 1 ? (
          filteredCountries.map((country) => (
            <SelectedCountry
              key={country.name.common}
              country={country}
              handleSelectCountry={handleSelectCountry}
            />
          ))
        ) : filteredCountries.length === 1 ? (
          <Country
            key={filteredCountries[0].name.common}
            country={filteredCountries[0]}
            getWeather={getWeather}
          />
        ) : (
          <p>No countries match your search</p>
        )}
      </div>
    </>
  );
};

export default App;
