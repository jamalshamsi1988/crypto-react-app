import React, { useEffect, useState } from 'react'
import { RotatingLines } from 'react-loader-spinner';
import { searchCoins } from '../../services/cryptoApi';
import styles from '../module/Search.module.css'

const Search = ({curency,setCurrency}) => {
    const [text,setText]=useState("")
    const [coins,setCoins]=useState([])
    const [isLoading,setIsloading]=useState(false)

    useEffect(()=>{
        const controller = new AbortController;
        setCoins([])
        if(!text){
            setIsloading(false);
            return;
        }
        
        const search=async()=>{
            try {
                const res=await fetch(searchCoins(text),{signal:controller.signal});
            const data=await res.json()

            if(data.coins) {
                setCoins(data.coins)
                setIsloading(false)
                } else{
                alert(data.status.error_mssage)
            }
            } catch (error) {
                if(error.name !== "AbortError"){
                    alert(error.message)
                }
            }
            

        }
        setIsloading(true)
        search();
        return ()=> controller.abort();
    },[text])
  return (
    <div className={styles.searchBox}>
        <input type="text" value={text} onChange={e=> setText(e.target.value)}/>
        <select value={curency} onChange={e => setCurrency(e.target.value)} >
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
            <option value="jpy">JPY</option>

        </select>
      <div className={styles.searchResult}>
        {
            isLoading && <RotatingLines strokeWidth='2' strokeColor='aqua' />
        }
        <ul>
            {
                coins.map(coin => <li key={coin.id}><img src={coin.thumb} alt={coin.name} /><p>{coin.name}</p></li>)
            }
        </ul>
      </div>
    </div>
  )
}

export default Search
