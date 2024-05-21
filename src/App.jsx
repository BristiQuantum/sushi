

import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './page/common/Navbar/Navbar'

function App() {(0)

  return (
    <div className="">
      <Navbar></Navbar>

      <Outlet></Outlet>
    </div>
  )
}

export default App
