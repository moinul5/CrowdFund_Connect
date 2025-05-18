import React, { createContext, useContext, useEffect, useState } from 'react'
import { data } from 'react-router-dom';

const FundingContext = createContext();

export default function FundingProvider({children}) {
    const [fundingData, setFundingData] = useState([]);
    const [loading, setloading] = useState(false)

    useEffect(()=>{
        const fetchFundings = async()=>{
            try{
                setloading(true);
                const response = await fetch("/info.json")
                if(!response.ok) throw new Error("can't acess the data")
                const data = await response.json();
                setFundingData(data)
            }catch(errors){
                console.log(errors)
            }
            finally{
                setloading(false)
            }
        }

        fetchFundings();
        console.log(data);
    },[])
  return (
    <FundingContext.Provider value={{fundingData, setFundingData, loading}}>
        {children}
    </FundingContext.Provider>
  )
}

export const useFunding =()=> useContext(FundingContext)
