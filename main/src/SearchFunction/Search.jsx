import React, { useEffect, useState } from "react"
import styles from "./Search.module.css"
import Card from "../Card/Card"
import axios from "axios"

export default function Search(){


    const [value,setValue]=useState('')
    const [data,setData]=useState([])

    useEffect(()=>{
        axios.get('https://restcountries.com/v3.1/all').then((res)=>{
            setData(res.data)
        }).catch((e)=>{
            console.error(e)
        })
    },[])

    useEffect(() => {
        if (value.trim() === "") {
          setData(data);
        } else {
          const filteredCountries = data.filter((country) =>
            country.name.common.toLowerCase().includes(value.toLowerCase())
          );
          setData(filteredCountries);
        }
      }, [value, data]);
    return(
        <>
        <input className={styles.search} type="text" value={value}
         placeholder="Search any country flag"
          onChange={(e)=>{setValue(e.target.value)}}>
          </input>
          <div className={styles.page}>
          {data.length>0 ? (data.map((country) => (
          <Card Src={country.flags.png} Countryname={country.name.common} />
          ))):(<></>)}
        <Card/>
        </div>
        </>
    )
}