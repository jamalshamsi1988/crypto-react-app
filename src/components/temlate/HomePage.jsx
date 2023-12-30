import React, { useEffect, useState } from "react";
import TableCoines from "../module/TableCoines";
import { getApi } from "../../services/cryptoApi";

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
      <TableCoines coins={coins} isLoading={isLoading} />
    </div>
  );
};

export default HomePage;
