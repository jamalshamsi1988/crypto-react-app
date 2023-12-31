const BASE_URL="https://api.coingecko.com/api/v3";
const API_KEY="CG-zL3C6JtwbPPAuWYEHU6r1sQL";


const getApi=(page,currency)=>{
    return (`${BASE_URL}/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=20&page=${page}&x_cg_demo_api_key=${API_KEY}`)
}

const searchCoins=query=> `${BASE_URL}/search?query=${query}&x_cg_demo_api_key=${API_KEY}`;

const marketChart=coin=> `${BASE_URL}/coins/${coin}/market_chart?vs_currency=usd&days=7`;

export {getApi,searchCoins,marketChart}