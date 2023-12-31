import React, { useEffect, useState } from 'react'
import { searchCoins } from '../../services/cryptoApi';

const Search = ({curency,setCurrency}) => {
    const [text,setText]=useState("")
    const [coins,setCoins]=useState([])

    useEffect(()=>{
        if(!text) return;

        const search=async()=>{
            const res=await fetch(searchCoins(text));
            const data=await res.json()
            if(data.coins) setCoins(data.coins)

        }
        search();
    },[text])
  return (
    <div>
        <input type="text" value={text} onChange={e=> setText(e.target.value)}/>
        <select value={curency} onChange={e => setCurrency(e.target.value)} >
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
            <option value="jpy">JPY</option>

        </select>
      
    </div>
  )
}

export default Search
