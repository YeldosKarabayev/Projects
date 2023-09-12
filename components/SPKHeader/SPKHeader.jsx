import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/Logo.png'
import history from '../../assets/history.png'
import settings from '../../assets/setting.png'
import logout from '../../assets/log-out.png'
import './SPKHeader.css'
import SPKMenuButton from '../UserMenuButton/SPKMenuButton'

const SPKHeader = ({pageName}) => {

  const activeLink = 'nav-list__link nav-list__link--active';
  const normalLink = 'nav-list__link ';

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
              <NavLink  to="/">
                <img src={Logo} style={{width: "190px", height:"80px"}} alt="logo" />
              </NavLink > 

                <div 
                  style={{
                          display: "flex", 
                          marginLeft: "140px",
                          fontWeight: "600",
                          fontSize: "22px", 
                          color: "#000"}}>
                <NavLink  className={({isActive}) => isActive ? activeLink: normalLink}
                  to="/stocksandshops"
                >Склады / магазины</NavLink >
                <NavLink  className={({isActive}) => isActive ? activeLink: normalLink}
                  to="/analytics"
                 style={{marginLeft: "35px"}}>Аналитика</NavLink >
              </div>

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
                <SPKMenuButton />
            </div>
    
              </div>
            </div>
          </div>
        </header>
  )
}

export default SPKHeader