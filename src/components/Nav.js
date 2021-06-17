import { Link } from 'react-router-dom'
import React, { useEffect, useState, useRef } from 'react'
import "../style/Nav.css"

const Nav = ({state, setState}) => {
  const [nav, setNav] = useState(false)

  // hover
  const navMenu = () => { setNav(!nav) }

  const showMenu = () => {
    setState({...state, menu:!state.menu})
  }

  
  return (
    <>
      <div className="nav">
        <div onMouseEnter={navMenu} onMouseLeave={navMenu} onClick={showMenu}
        className={`nav__menu ${nav ? "nav__menu--hover" : ""}`}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="nav__register">
          <Link to="/user">
            <img className="nav__userImg" src={state.userData ? state.userData.avatar.replace(/open/, "uc") : "./img/user.png"} alt="" />
          </Link>
          <div className="nav__registerBg">
            <img src="./img/register_bg.svg"  alt=""/>
          </div>
        </div> 
      </div>
    </>
  )
}

export default Nav
