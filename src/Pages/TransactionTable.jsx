import React, { useEffect, useState } from 'react'
import "../Styles/TransactionTable.css"
import { Table } from '../Components/Table'
import { globalApi } from '../GlobalApi'
import axios from 'axios'
export const TransactionTable = () => {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const [data,setData]=useState([])
    const [selectedMonth, setSelectedMonth] = useState("")
    const [price,setPrice]=useState("")
    const [title,setTitle]=useState("")
     const [description,setDescription]=useState("")
    const [pageNumber, setPageNumber] = useState(1)
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
        try {
          const res = await axios.get(`${globalApi}/transactions/all?month=${selectedMonth}&price=${price}&description=${description}&title=${title}&page=${pageNumber}`);
          setData(res.data.data);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, [selectedMonth, price,title,description, pageNumber]);


    return (
        <div className='table__container'>
            <div className='transaction__board'>
                TransactionTable
            </div>
            <div className='table__actions' >
            <input placeholder='search by title' type='text' onChange={(e)=>setTitle(e.target.value)} />
            <input placeholder='search by price' onChange={(e)=>setPrice(e.target.value)} />
            <input placeholder='search by description' type='text' onChange={(e)=>setDescription(e.target.value)} />
                <select onChange={(e) => setSelectedMonth(e.target.value)}>
                    <option value="">Select Month  </option>
                    {monthNames.map((e,i) => {
                        return (
                            <option  key={i} value={e}  >{e}</option>
                        )
                    })}
                </select>
            </div>

            <Table data={data} />

<div className='pagination' >
<div>Page no.: {pageNumber}</div>
<div> 
<button onClick={()=>{setPageNumber(pageNumber-1)}}>prev </button>
<button onClick={()=>{setPageNumber(pageNumber+1)}}>next</button>
</div>
<div>per Page: {data.length} </div>
</div>
        </div>
    )
}
