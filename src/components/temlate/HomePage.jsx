import React, { useEffect, useState } from "react";
import TableCoines from "../module/TableCoines";
import { getApi } from "../../services/cryptoApi";

const HomePage = () => {
  const [coins, setCoins] = useState([]);
  
  useEffect(() => {
   const fetchApi=async()=>{
        const res=await fetch(getApi());
        const data= await res.json();
        setCoins(data)
   }
   fetchApi();
  }, []);

  return (
    <div>
      <TableCoines coins={coins} />
    </div>
  );
};

export default HomePage;
