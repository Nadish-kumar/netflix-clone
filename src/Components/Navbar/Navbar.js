import React from 'react'
import "../Navbar/Navbar.css"
import { useState,useEffect } from 'react'
import {Link} from "react-router-dom"

const Navbar = () => {
    const [show, setshow] = useState(false)

    const transtionnavbar = () => {
         if(window.scrollY > 100){
             setshow(true)
         }else{
             setshow(false)
         }
    }

    useEffect(() => {
        window.addEventListener('scroll',transtionnavbar);
        return () => window.removeEventListener("scroll",transtionnavbar)
    },[])

  return (
   <nav className={`nav ${show && "nav__black"}`}>
       <div className='navbar__content'>
           <Link to="/">
           <img src='http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
            alt='logo' className='logo__img' />
            </Link>
            <Link to="/profile">
           <img src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt='avatar' className='avatar__img' />
           </Link>
       </div>
   </nav>
  )
}

export default Navbar