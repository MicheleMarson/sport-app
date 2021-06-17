import React, { useEffect, useState } from 'react'
import "../style/NavMenu.css"
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { Link, useHistory } from 'react-router-dom';

const NavMenu = ({state, setState}) => {
  const showMenu = state.menu ? "active" : ""

  return (
    <div className="navMenu">
      <div onClick={(e) => setState({...state, menu:false})} className={"navMenu__Box " + showMenu}>
        <Link to="/">Explore</Link>
        <Link to="/sports">Sports</Link>
        <Link to="/athletes">Athletes</Link>
        <Link to="/user">Account</Link>
        <div className="nav__hideMenu" onClick={() => setState({...state, menu:false})}>
          <HighlightOffIcon/>
        </div>
      </div>
      <div className={"navLayout " + showMenu}>
      </div>
    </div>
  )
}

export default NavMenu
