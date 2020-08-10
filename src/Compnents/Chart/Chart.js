import React, {useEffect, useState} from 'react';
import {fetchDailyData} from '../../API';
import { Line, Bar } from "react-chartjs-2";
import styles from "./chart.module.css";

 const Chart = ({data:{confirmed, deaths, recovered}})=> {

const [state, setstate] = useState([]);

useEffect(()=>{

    const fetchdaily = async ()=> {
        
        const fetching = await fetchDailyData();

        setstate(fetching);
    

    }
fetchdaily();

},[]);


const lineChart = state.length ? (
  <Line
    data={{
      labels: state.slice(0,15).map(({ date }) => date),
      datasets: [
        {
          data: state.slice(0,15).map(({ confirmed }) => confirmed),
          label: "Infected",
          borderColor: "#3333ff",
          fill: true,
        },
        {
          data: state.slice(0,15).map(({ deaths }) => deaths),
          label: "Deaths",
          borderColor: "red",
          backgroundColor: "rgba(255,0,0,0.5)",
          fill: true,
        },
      ],
    }}
  />
) : null;

const barChart = confirmed ? (
  <Bar
    data={{
      labels: ["Infected", "Recovered", "Deaths", "Active"],
      datasets: [
        {
          label: "People",
          backgroundColor: [
            "rgba(0, 0, 255, 0.5)",
            "rgba(0, 255, 0, 0.5)",
            "rgba(255, 0, 0, 0.5)",
            "rgba(242, 234, 0, 0.5)",
          ],
          hoverBackgroundColor: [
            "rgba(0, 77, 153)",
            "rgba(30, 102, 49)",
            "rgba(255, 51, 51)",
            "rgba(204, 153, 0)",
          ],
          data: [
            confirmed.value,
            recovered.value,
            deaths.value,
            confirmed.value - (recovered.value + deaths.value),
          ],
        },
      ],
    }}
    options={{
      legend: { display: false },
      title: { display: true, text: 'Current state in country' },
    }}
  />
) : null;

    return (
        <div className={styles.container}>
            {lineChart}
        </div>
    );
}


export default Chart;