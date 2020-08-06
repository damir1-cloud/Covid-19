
 export const fetchData = async ()=>{
    const response = await fetch ('https://covid19.mathdro.id/api');

const data = await response.json();
     
 const modifiedData = {
    confirmed: data && data.confirmed && data.confirmed.value,
    recovered: data && data.recovered && data.recovered.value,
    deaths: data && data.deaths && data.deaths.value,
    lastUpdate: data && data.lastUpdate,
}
return (modifiedData);
}