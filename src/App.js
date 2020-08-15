import React, {useEffect, useState} from 'react';
import Styles from './App.module.css';
import Cards from './Compnents/Cards/Card';
import Chart from './Compnents/Chart/Chart';
import CountrySelector from './Compnents/CountrySelector/CountrySelector';
import {fetchData} from './API';

function App() {
const [sww, setsww] = useState({});
const [passdata, Setdata] = useState({});



useEffect(()=>{
  
const call = async ()=> {
  const geta = await fetchData();

  Setdata(geta);
}
call();

},[]);

/*useEffect((country)=>{

const call = async (country)=> {
  const geta = await fetchData(country);

  Setdata(geta, country);
}
call();
},[]);*/


console.log(sww);

  return (
    <div className={Styles.container}>
    
    <br />
    <text>
      <b className = {Styles.font}>COVID-19 TRACKER</b>
      <br/>
        <div style= {{textAlign: "center"}}>
          <p style={{fontSize: "12px"}}>by</p>
          <p style={{fontSize: "20px"}}>Danyal Amir</p>
        </div>
    </text>
    <br />
    <br />
    <br />
    <Cards data={passdata} />
    <CountrySelector vcounter={setsww} />
    <Chart data={passdata}/>
  </div>
  );
}

export default App;
