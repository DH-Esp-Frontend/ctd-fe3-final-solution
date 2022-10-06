import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ContextGlobal } from './utils/global.context'

const Navbar = () => {
  const { theme, setDarkTheme, setLightTheme } = useContext(ContextGlobal)
  const isDarkMode = theme === "dark" || false

  const changeTheme = () => {
    if (isDarkMode) setLightTheme()
    else setDarkTheme()
  }

  return (
    <header className="sticky-top">
      <nav className="navbar navbar-expand-sm" aria-label="Third navbar example">
        <div className="container">
          <Link to="/">DH Odonto</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="navbarsExample03">
            <ul className="navbar-nav mb-2 mb-sm-0">
              <li className="nav-item">
                <Link to="/home">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact">Contact</Link>
              </li>
              <li className="nav-item">
                <Link to="/favs">Favs</Link>
              </li>
              <li className="nav-item">
                <button className="btn btn-primary" onClick={changeTheme} >{isDarkMode ? "☀" : "🌙"} </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar