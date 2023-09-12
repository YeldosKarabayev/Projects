import React, { useState} from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/Logo.png'
import './Header.css'
import Login from '../Login/Login'

const Header = () => {
 


  return (
    <header className='main-header'>
      <div className="container">
        <div className="header-layout">
          <Link to="/main">
            <img src={Logo} style={{width: "190px", height:"80px"}} alt="logo" />
          </Link> 
          <div className="header-actions">
            <button
              className={localStorage.language === "kz" ? "languageActive" : "language"}
              style={{ marginRight: "30px", fontWeight: "500" }}
              onClick={() => {}}>
              ҚАЗ
            </button>

            <button
              className={localStorage.language === "ru" ? "languageActive" : "language"}
              style={{ marginRight: "40px", fontWeight: "500" }}
              onClick={() => {}}>
              РУ
            </button>

            <Link to="/login" ><button className='enter-button'>
              Войти
            </button>
           </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header