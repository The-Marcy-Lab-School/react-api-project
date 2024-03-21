import { handleFetch } from "../utils";
import NourishContext from "./NourishContext";
import React from 'react'
import { useState, useEffect } from "react";

const NourishProvider = ({children}) => {

    const [data, setData] = useState([]);

useEffect(() => {
    const fetchData = async () => {
      const [data, error] = await handleFetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
      if (data) setData(data)
      if (error) setError(error.message)
    }
  fetchData();
  }, []);



  return (
    <div>
       <NourishContext > 
            { children }
        </NourishContext > 
    </div>
  )
}

export default NourishProvider
