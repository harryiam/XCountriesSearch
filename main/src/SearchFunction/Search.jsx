import React, { useEffect, useState } from "react";
import styles from "./Search.module.css";
import axios from "axios";

export default function Search() {
  const [value, setValue] = useState("");
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all")
      .then((res) => {
        setCountries(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("Error fetching data from the server.");
        setIsLoading(false);
      });
  }, []);

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(value.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <input
        className={styles.search}
        type="text"
        value={value}
        placeholder="Search any country flag"
        onChange={handleInputChange}
      />
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : filteredCountries.length > 0 ? (
        <div className={styles.cardsContainer}>
          {filteredCountries.map((country, index) => (
            <div key={index} className={`countryCard ${styles.card}`}>
              <img className={styles.flag} src={country.flags.png} alt={country.name.common} />
              <div className={styles.countryName}>{country.name.common}</div>
            </div>
          ))}
        </div>
      ) : (
        <p>No matching countries found.</p>
      )}
    </div>
  );
}
