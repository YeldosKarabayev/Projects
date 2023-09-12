import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import history from '../../assets/history.png'
import settings from '../../assets/setting.png'
import logout from '../../assets/log-out.png'
import './Button.css'

const SPKMenuButton = () => {

    const [currentForm, setCurrentForm] = useState('start');

    const handleOpenForm = () => {
        setCurrentForm('new');
    };

    const handleCancel = () => {
        setCurrentForm('start');
    };


    const [isActive, setIsActive] = useState(false);


  return (
    <div>
    <div className='user-menu'>
      <div>
      {currentForm === 'start' && (
        <div onClick={handleOpenForm}>
        <button className="btn" id="btn"  onClick={(e) => setIsActive(!isActive)}>
          <span style={{ marginLeft: "15px"}} >Ербол</span>
          <i className="bx bx-chevron-down" id="arrow" style={{ marginLeft: "10px", fontSize: "35px"}}></i>
        </button>
        </div>     
      )}
      {currentForm === 'new' && (
        <div onClick={handleCancel}>
        <button className="btn" id="btn"  onClick={(e) => setIsActive(!isActive)}>
          <span style={{ marginLeft: "15px"}}>Ербол</span>
          <i className="bx bx-chevron-up" id="arrow" style={{ marginLeft: "10px", fontSize: "35px"}}></i>
        </button>
        </div>
      )}
      </div>
      {isActive && (
      <div className="dropdown" style={{marginRight: "150px"}} >
          <a href="/historyapplication">
            <img src={history} style={{marginRight: "10px"}} />
            <i className="bx"></i>
            История заявок
            </a>
          <a href="/spksettings">
            <img src={settings} style={{marginRight: "10px"}} />
            <i className="bx"></i>
            Настройки
            </a>
          <a href="/main">
            <img src={logout} style={{marginRight: "10px"}} />
            <i className="bx"></i>
            Выход
            </a>
      </div>
      )}
    </div>
  </div>
  )
}

export default SPKMenuButton