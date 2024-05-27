import React from 'react'
import './NavBar.css'
import logo from '../../assets/letter-b.png'
import {Link} from 'react-scroll'
import contact from '../../assets/conversation.png'
import menu from '../../assets/menu.png'
import { useState } from 'react'


const NavBar = () => {

  const [showMenu,setShowMenu]=useState(false)
  return (
    <nav className='navbar'>
        <img src={logo} alt="logo" className='logo'/>
        <div className="desktopMenu">
          <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuList">Home</Link>
          <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuList">Clients</Link>
          <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuList">About</Link>
          <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuList">Portfolio</Link>

        </div>
        <button className="desktopMenuBtn" onClick={()=>{
          document.getElementById('contact').scrollIntoView({behavior:'smooth'})

        }}>
            <img src={contact} alt="" className="desktopMenuImg" />
            Contact Me
        </button>

        <img src={menu} alt="Menu" className="mobMenu" onClick={()=>setShowMenu(!showMenu)}/>
        <div className="navMenu" style={{display:showMenu ? 'flex': 'none'}}>
          <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="ListItem"  onClick={()=>setShowMenu(!showMenu)}>Home</Link>
          <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-100} duration={500} className="ListItem" onClick={()=>setShowMenu(!showMenu)}>Clients</Link>
          <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className="ListItem" onClick={()=>setShowMenu(!showMenu)}>About</Link>
          <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className="ListItem" onClick={()=>setShowMenu(!showMenu)}>Portfolio</Link>
          <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className="ListItem" onClick={()=>setShowMenu(!showMenu)}>Contact</Link>

        </div>


    </nav>
  )
}

export default NavBar