
 export const fetchData = async ()=>{
    const response = await fetch ('https://covid19.mathdro.id/api');

const {confirmed, recovered, deaths, lastUpdate} = await response.json();
     
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