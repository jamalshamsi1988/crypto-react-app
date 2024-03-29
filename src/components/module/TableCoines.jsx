import React from "react";
import {RotatingLines} from "react-loader-spinner";
import chartUp from "../../assets/chart-up.svg";
import chartDown from "../../assets/chart-down.svg";

import styles from "./TableCoin.module.css";
import { marketChart } from "../../services/cryptoApi";

const TableCoines = ({ coins, isLoading,curency,setCurency,setChart }) => {
  console.log(curency);
  return (
    <div className={styles.container}>
      {isLoading ? (
        <RotatingLines  strokeWidth="2"  strokeColor="aqua" />
      ) : (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Coin</th>
              <th>Name</th>
              <th>Price</th>
              <th>24h</th>
              <th>Total Volume</th>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin) => (
              <TableRow key={coin.id} coin={coin} curency={curency} setCurency={setCurency} setChart={setChart}/>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TableCoines;

const TableRow = ({
  coin,
  curency,
  setChart,
  setCurency,
}) => {
  const  {
    name,
    image,
    symbol,
    current_price,
    price_change_percentage_24h,
    total_volume,
    id,
    
  }=coin;
  const showHandler=async()=>{
    try {
      const res=await fetch(marketChart(id));
      const data = await res.json();
      setChart({...data,coin})
    } catch (error) {
      setChart(null)
    }
  }
  return (
    <tr>
      <td>
        <div className={styles.symbol} onClick={showHandler}>
          <img src={image} alt="icon" />
          <span>{symbol.toUpperCase()}</span>
        </div>
      </td>
      <td>{name}</td>
      <td>{curency === "usd" ? <span>$</span> : curency === "eur" ? <span>€</span> : curency === "jpy" ? <span>¥</span> : ""  } {current_price.toLocaleString()}</td>
      <td className={price_change_percentage_24h > 0 ? styles.success : styles.error} > {price_change_percentage_24h.toFixed(2)}%</td>
      <td>{total_volume.toLocaleString()}</td>
      <td>
        <img src={price_change_percentage_24h > 0 ? chartUp : chartDown} />
      </td>
    </tr>
  );
};
