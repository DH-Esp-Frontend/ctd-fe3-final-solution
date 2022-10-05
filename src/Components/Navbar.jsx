import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ContextGlobal } from './utils/global.context'

const Navbar = () => {
  const { theme, setDarkTheme, setLightTheme } = useContext(ContextGlobal)
  const isDarkMode = theme === "dark" || false

  const changeTheme = ()=>{
    if(isDarkMode) setLightTheme()
    else setDarkTheme()
  }

  return (
    <nav>
      <Link to="/home">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/favs">Favs</Link>

        <button onClick={changeTheme} >{isDarkMode ? "☀" : "🌙"} </button>
    </nav>
  )
}

export default Navbar