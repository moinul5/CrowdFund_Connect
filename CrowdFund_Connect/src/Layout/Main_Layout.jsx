import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Fixed_Components/Navbar'

export default function Main_Layout() {
  return (
    <div>
        <Navbar/>
       <Outlet/>
    </div>
  )
}
