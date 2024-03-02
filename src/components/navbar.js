'use client'
import React, {useState} from 'react'
import Navigation from './navigation'
import Sidebar from './sidebar';

export default function Navbar() {

    const [showSidebar, setShowSidebar] = useState(false);

  const setAside = () =>{
    setShowSidebar(!showSidebar)
  }


  return (
    <>
        <Sidebar showSidebar={showSidebar} setAside={setAside}/> 
        <Navigation setAside={setAside}/>
    </>
  )
}
