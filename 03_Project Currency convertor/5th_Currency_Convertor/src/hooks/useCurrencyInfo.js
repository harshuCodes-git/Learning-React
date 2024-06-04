import { useEffect, useState,useRef } from "react";

function useCurrencyInfo(currency){
    [data,setdata]=useState({})
    useEffect(()=>{
        fetch(
          `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
        )
        .then((res)=>res.json())
        .then((res)=>setdata(res[currency]))
        console.log(data)
    },[currency])

    console.log(data)
    return data

}

export default useCurrencyInfo;