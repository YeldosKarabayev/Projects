import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/Logo.png'
import history from '../../assets/history.png'
import settings from '../../assets/setting.png'
import logout from '../../assets/log-out.png'


import './HeaderAdmin.css'
import Button from '../UserMenuButton/Button'

const HeaderAdmin = () => {

  
  const [currentForm, setCurrentForm] = useState('start');

  const handleOpenForm = () => {
    setCurrentForm('new');
  };

  const handleCancel = () => {
    setCurrentForm('start');
  };


  const [isActive, setIsActive] = useState(false);


  return (
    <header className='main-header' style={{ backgroundColor: "#fff"}}>
      <div className="container" style={{backgroundColor: "#fff"}}>
        <div className="header-layout">
          <Link to="/">
            <img src={Logo} style={{width: "190px", height:"80px"}} alt="logo" />
          </Link> 
          <div className="header-actions">
            <button
              className={localStorage.language === "kz" ? "languageActive" : "language"}
              style={{ marginRight: "30px" }}
              onClick={() => {}}>
              ҚАЗ
            </button>

            <button
              className={localStorage.language === "ru" ? "languageActive" : "language"}
              style={{ marginRight: "40px" }}
              onClick={() => {}}>
              РУ
            </button>
    
        <div>
          <Button />
        </div>

          </div>
        </div>
      </div>
    </header>
  )
}

export default HeaderAdmin