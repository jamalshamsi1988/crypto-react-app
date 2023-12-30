import React, { useEffect, useState } from "react";
import TableCoines from "../module/TableCoines";
import { getApi } from "../../services/cryptoApi";
import Pagenation from "../module/pagenation";

const HomePage = () => {
  const [coins, setCoins] = useState([]);
  const [isLoading,setIsLoading]=useState(true)
  useEffect(() => {
   const fetchApi=async()=>{
        const res=await fetch(getApi());
        const data= await res.json();
        setCoins(data);
        setIsLoading(false)
   }
   fetchApi();
  }, []);

  return (
    <div>
      <Pagenation />
      <TableCoines coins={coins} isLoading={isLoading} />
    </div>
  );
};

export default HomePage;
