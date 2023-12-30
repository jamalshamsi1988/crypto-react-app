import React, { useEffect, useState } from "react";
import TableCoines from "../module/TableCoines";
import { getApi } from "../../services/cryptoApi";
import Pagenation from "../module/pagenation";

const HomePage = () => {
  const [coins, setCoins] = useState([]);
  const [isLoading,setIsLoading]=useState(true)
  const [page, setPage] = useState(1);

  useEffect(() => {
   const fetchApi=async()=>{
    setIsLoading(true);
        const res=await fetch(getApi(page));
        const data= await res.json();
        setCoins(data);
        setIsLoading(false)
   }
   fetchApi();
  }, [page]);

  return (
    <div>
      <TableCoines coins={coins} isLoading={isLoading} />
      <Pagenation page={page} setPage={setPage} />
    </div>
  );
};

export default HomePage;
