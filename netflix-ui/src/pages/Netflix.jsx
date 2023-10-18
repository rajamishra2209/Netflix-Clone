import React,{useState} from 'react'
import Navbar from "../components/Navbar"
export default function Netflix() {
  const [isScrolled,setIsScrolled]= useState(false);
  
  //Registering an event listener here
  window.onscroll =() =>{
   setIsScrolled(window.pageXOffset===0?false:true);
   return ()=> (window.onscroll= null);
  }
  return (
    <Navbar isScrolled={isScrolled}/>
  )
}

