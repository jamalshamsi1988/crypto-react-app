import React, { useEffect, useState } from "react";
import TableCoines from "../module/TableCoines";

const HomePage = () => {
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&x_cg_demo_api_key=CG-zL3C6JtwbPPAuWYEHU6r1sQL"
    )
      .then((res) => res.json())
      .then((data) => setCoins(data));
  }, []);

  return (
    <div>
      <TableCoines coins={coins} />
    </div>
  );
};

export default HomePage;
