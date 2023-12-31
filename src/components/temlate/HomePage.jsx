import React, { useEffect, useState } from "react";
import TableCoines from "../module/TableCoines";
import { getApi } from "../../services/cryptoApi";
import Pagenation from "../module/pagenation";
import Search from "../module/Search";

const HomePage = () => {
  const [coins, setCoins] = useState([]);
  const [isLoading,setIsLoading]=useState(true)
  const [page, setPage] = useState(1);
  const [curency, setCurrency]=useState("usd")

  useEffect(() => {
   const fetchApi=async()=>{
    setIsLoading(true);
        const res=await fetch(getApi(page,curency));
        const data= await res.json();
        setCoins(data);
        setIsLoading(false)
   }
   fetchApi();
  }, [page,curency]);

  return (
    <div>
      <Search curency={curency} setCurrency={setCurrency} />
      <TableCoines coins={coins} isLoading={isLoading} />
      <Pagenation page={page} setPage={setPage} />
    </div>
  );
};

export default HomePage;
