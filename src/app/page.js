'use client'
import { useState } from "react";
import Main from "@/components/main";
import Navigation from "@/components/navigation";
import Sidebar from "@/components/sidebar";
export default function Home() {

  const [showSidebar, setShowSidebar] = useState(false);

  const setAside = () =>{
    setShowSidebar(!showSidebar)
  }

  return (
    <>
      <Sidebar showSidebar={showSidebar} setAside={setAside}/> 
       <Navigation setAside={setAside}/>
      <Main />
    </>
  );
}
