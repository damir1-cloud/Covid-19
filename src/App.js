import React, {useEffect, useState} from 'react';
import Styles from './App.module.css';
import Cards from './Compnents/Cards/Card';
import Chart from './Compnents/Chart/Chart';
import CountrySelector from './Compnents/CountrySelector/CountrySelector';
import {fetchData} from './API';

function App() {


const [passdata, Setdata] = useState([]);

useEffect(()=>{

  
const call = async ()=> {
  const geta = await fetchData();

  Setdata(geta);

}
call();

},[]);


  return (
      <div className = {Styles.container}>
          <Cards data = {passdata}/>
          <Chart/>
          <CountrySelector/>
      </div>
  );
}

export default App;
