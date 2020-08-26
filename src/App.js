import React, {useEffect, useState} from 'react';
import Styles from './App.module.css';
import Cards from './Compnents/Cards/Card';
import Chart from './Compnents/Chart/Chart';
import CountrySelector from './Compnents/CountrySelector/CountrySelector';
import {fetchData} from './API';

function App() {
const [country, setCountry] = useState(null);
const [passdata, Setdata] = useState({});
const [isFetched,setFetched]=useState(false);


useEffect(()=>{
  
const call = async ()=> {
  const geta = await fetchData();

  Setdata(geta);
}
if(!isFetched){
  call();
  setFetched(true);
}
},[isFetched])


const Ccall = async (country)=> {
  console.log(country);
  let geta;
  if(country==="global"){
    geta = await fetchData();
   setCountry('');
  }
  else{
    geta = await fetchData(country);
  }
  Setdata(geta);
  setCountry(country);
}

console.log(country);
  return (
    <div className={Styles.container}>
    
    <br />
      <b className = {Styles.font}>COVID-19 TRACKER</b>
      <br/>
        <div style= {{textAlign: "center"}}>
          <p style={{fontSize: "12px"}}>by</p>
          <p style={{fontSize: "20px"}}>Danyal Amir</p>
        </div>
    <br />
    <br />
    <br />
    <Cards data={passdata} country = {country} />
    <CountrySelector vcounter={Ccall} />
    <Chart data={passdata} country = {country}/>
  </div>
  );
}

export default App;
