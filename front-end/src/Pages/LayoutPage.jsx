import React from 'react'
import { Outlet } from 'react-router-dom'
import TopNav from '../Components/TopNav'
import Navbar from '../Components/Navbar'
function LayoutPage() {
  return (
    <div>
        <TopNav/>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default LayoutPage