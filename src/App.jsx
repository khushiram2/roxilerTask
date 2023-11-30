import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import { Header } from './Components/Header'
import { TransactionTable } from './Pages/TransactionTable'
import { Stats } from './Pages/Stats'
import { BarChart } from './Pages/BarChart'

function App() {


  return (
    <>
    <Header/>
<Routes>
  <Route path='/' element={<Navigate replace to="/transaction-table" />}   />
  <Route path="/transaction-table" element={<TransactionTable/>}/>
  <Route path="/stats" element={<Stats/>}/>
  <Route path="/bar-chart" element={<BarChart/>}/>
</Routes>
</>


  )
}

export default App
