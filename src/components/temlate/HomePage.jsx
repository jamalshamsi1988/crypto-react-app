import React, { useEffect, useState } from "react";
import TableCoines from "../module/TableCoines";
import { getApi } from "../../services/cryptoApi";
import Pagenation from "../module/pagenation";
import Search from "../module/Search";
import Chart from "../module/Chart";

const HomePage = () => {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [curency, setCurency] = useState("usd");
  const [chart, setChart] = useState(null);

  useEffect(() => {
    const fetchApi = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(getApi(page, curency));
        const data = await res.json();
        setCoins(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchApi();
  }, [page, curency]);

  return (
    <div>
      <Search curency={curency} setCurency={setCurency} />
      <TableCoines coins={coins} isLoading={isLoading} curency={curency} setChart={setChart} />
      <Pagenation page={page} setPage={setPage} />
      {!!chart && <Chart chart={chart} setChart={setChart} />}
    </div>
  );
};

export default HomePage;
