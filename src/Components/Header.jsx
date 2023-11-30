import React from 'react'
import { Link } from 'react-router-dom'
import "../Styles/Header.css"
export const Header = () => {
  return (
    <div>  
            <nav>
        <div>
            <h2>Roxiler</h2>
         </div>  
                <ul>
                <li><Link to="/transaction-table">Transaction Table</Link>   </li>
                <li><Link to="/stats">stats</Link>   </li>
                <li><Link to="/bar-chart">Bar chart</Link>   </li>
                </ul>
            </nav>
    </div>
  )
}
