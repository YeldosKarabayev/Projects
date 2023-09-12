import React, {useState, useRef} from 'react'
import Logo from '../../assets/Logo.png'
import IMG from '../../assets/login-page-img.png'
import done from '../../assets/done-check.png'

import './login.css';
import { Link } from 'react-router-dom'; 
import { Footer } from '../Footer/Footer';

const Login = () => {

  const [currentForm, setCurrentForm] = useState('start');

  const handleOpenForm = () => {
    setCurrentForm('new');
  };

  const handleCancel = () => {
    setCurrentForm('start');
  };

  const handleSend = () => {
    setCurrentForm('other');
  };
 


  return (
    <>
    <div className='wrapper'>
        <header className='login-header'>
          <div className='container' style={{display: "flex", justifyContent: "space-between"}} >
            <Link to="/main">
              <img src={Logo} alt='logo' style={{width: "190px", height:"80px"}} />
            </Link>
            <div style={{ display: "flex" }}>
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
            </div>
          </div>
        </header>
        <main>
          <div className='container' style={{ display: "flex", 
                                              justifyContent: "space-between", 
                                              alignItems: "center", 
                                              paddingTop: "30px", 
                                              paddingBottom: "30px"}}
          >
          <div>
          {currentForm === 'start' && (
            <div className='login-auth'>
              <h2>Войти в панель</h2>
              <form style={{ width: "100%"}} >
                 <input type='text' placeholder='Логин'  name='login' />
                 <input type='password' placeholder='Пароль'name='password' />
                 <button
                  className="login-button" style={{ marginTop: "37px", marginBottom: "14px" }} 
                  type="submit">
                  Войти
                </button>
                <button style={{ background: "none", 
                                color: "#fff", 
                                fontSize: "16.67px", 
                                marginTop: "20px" , 
                                marginBottom: "-20px"
                                }}
                  onClick={handleOpenForm}>Забыли пароль ?
                </button>
              </form>
            </div>
          )}
          {currentForm === 'new' && (
            <div className='login-auth'>
              <h2>Забыли пароль</h2>
              <form style={{ width: "100%"}} >
                 <input type='text' placeholder='Укажите email'  name='email' />
                 <button
                  className="login-button" style={{ marginTop: "37px", marginBottom: "14px" }} 
                  type="submit" onClick={handleSend}>
                  Отправить
                </button>
                <button style={{ background: "none", 
                                color: "#fff", 
                                fontSize: "16.67px", 
                                marginTop: "20px" , 
                                marginBottom: "-20px"
                                }}
                  onClick={handleCancel}>Авторизоваться
                </button>
              </form>
            </div>
          )}
          {currentForm === 'other' && (
            <div className='login-auth'>
              <form style={{ width: "100%"}} >
                 <img src={done} style={{ width:"80px", marginLeft: "85px"}} />
                 <h2 style={{fontSize: "12px", fontWeight: "none", marginTop: "1rem"}}>Мы отправили на email ссылку для востановления</h2>
                <button style={{ background: "none", 
                              color: "#fff", 
                              fontSize: "16.67px", 
                              marginTop: "20px" , 
                              marginBottom: "-20px"
                              }}
                    onClick={handleCancel}>Авторизоваться
                </button>
              </form>
            </div>
           )}
          </div>
            
            <img src={IMG} alt='login-image' style={{width: "auto", height: "450px", marginLeft: "180px"}} />
          </div>
        </main>
    </div>
    <Footer />
    </>
  )
}


export default Login