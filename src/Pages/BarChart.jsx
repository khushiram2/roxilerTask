import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2'
import Chart from 'chart.js/auto';
import {CategoryScale} from 'chart.js'; 

import { globalApi } from '../GlobalApi'
import axios from 'axios'
export const BarChart = () => {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const [month, setmonth] = useState(monthNames[0])
    Chart.register(CategoryScale);
    const [data, setdata] = useState({})
    useEffect(()=>{
        const getBarChartdata = async () => { 
            try {
                const res=await axios.get(`${globalApi}/transactions/bar-chart?month=${month}`)
                setdata(res.data.data)
            } catch (error) {
                console.log(error)
            }
         }
         getBarChartdata()
    },[month])
    const chartData = {
        labels: Object.keys(data),
        datasets: [
          {
            label: 'Number of Items',
            data: Object.values(data),
            backgroundColor: 'rgba(75,192,192,0.6)',
            borderColor: 'rgba(75,192,192,1)',
            borderWidth: 1,
          },
        ],
      };
    
      const options = {
        scales: {
          x: {
            beginAtZero: true,
          },
          y: {
            beginAtZero: true,
            stepSize: 0.01,
          },
        },
      };
  return (
    <div>
        <Bar data={chartData} options={options}  />
        <select onChange={(e) => setmonth(e.target.value)}>
                    <option value="">Select Month  </option>
                    {monthNames.map((e,i) => {
                        return (
                            <option  key={i} value={e}  >{e}</option>
                        )
                    })}
                </select>
    </div>
  )
}
