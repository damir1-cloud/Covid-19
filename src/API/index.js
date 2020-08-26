const url = 'https://covid19.mathdro.id/api';
let variableurl = url;



 export const fetchData = async (country)=>{

    if (country) {
        variableurl = `${url}/countries/${country}`;
        
    }
    const response = await fetch (variableurl);
    console.log(variableurl);
const {confirmed, recovered, deaths, lastUpdate} = await response.json();
     
//can be used instead of If condition in cards as below
 /*const modifiedData = {
    confirmed: data && data.confirmed && data.confirmed.value,
    recovered: data && data.recovered && data.recovered.value,
    deaths: data && data.deaths && data.deaths.value,
    lastUpdate: data && data.lastUpdate,
}*/

const modifiedData = {
    confirmed: confirmed,
    recovered: recovered,
    deaths: deaths,
    lastUpdate: lastUpdate,
}
return (modifiedData);
}


export const fetchDailyData = async ()=>{

const dailyfetch  = await fetch(`${variableurl}/daily`);
const soon = await dailyfetch.json();

const mapedData = soon.map((item)=>({
    confirmed: item.confirmed.total,
      deaths: item.deaths.total,
      date: item.reportDate,
}));
    return mapedData;
}


export const countrys = async ()=> {
    const response = await fetch(`${url}/countries`);
    const {countries} = await response.json();
    return countries.map((item)=>item.name); 
}