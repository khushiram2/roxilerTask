import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { globalApi } from '../GlobalApi'
import "../Styles/Stats.css"
export const Stats = () => {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const [month, setmonth] = useState(monthNames[0])
const [data, setdata] = useState({})
    useEffect(()=>{
        const getStatsforMonth =async () => { 
            const res= await axios.get(`${globalApi}/transactions/statistics?month=${month}`)
            setdata(res.data)
         }
         getStatsforMonth()
    },[month])
  return (
    <div>
        <div className='stats__container'>
            <div>
                <select onChange={(e)=>setmonth(e.target.value)} >
                    <option value="">Select Month </option>
                    {monthNames.map((e,i)=>{
                        return( 
                            <option key={i} value={e}>{e}</option>
                        )
                    })}
                </select>
            </div>
            <div>
                    <div className='stats'>
                    <div> Total Sale Amount :  {data?.totalSaleAmount} </div>
                    <div> Total Sold Items :  {data?.totalSoldItems}</div>
                    <div>Total Not Sold Items : {data?.totalNotSoldItems} </div>
                  </div>
            </div>
        </div>
    </div>
  )
}
