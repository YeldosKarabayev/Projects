import React, { useState } from 'react'
import done from '../../../assets/done-check.png'
import SPKHeader from '../../../components/SPKHeader/SPKHeader'
import SPKFooter from '../../../components/SPKFooter/SPKFooter'
import './SPKSettings.css'

const SPKSettings = () => {

    {/*} const [show, setShow] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const handleClick = () => {setShowForm(true);};

    const handleCancel = () => {
        setShowForm(false);
      };

    const handleDone = () => {setShowForm(true);};

    */}

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
    <SPKHeader pageName={'/spksettings'} />
    <div className='full'>
    <div className='title__list-item'>
            <div style={{width: "100%", backgroundColor: "#fff", padding: "2rem 0"}}>
            <div className='container' style={{ backgroundColor: '#fff'}}>
                <div className='down' style={{ width: "100%", 
                                               alignItems: "center", 
                                               display:"flex", 
                                               justifyContent: "center", 
                                               backgroundColor: "#fff",
                                               }}>
                    <h1>Настройки кабинета</h1>
                </div>
            </div>
            </div>
            </div>
    
        <div className='container' >
                <div className='title' style={{ display: "flex", justifyContent: "space-between"}}>
                    <h2 style={{ marginTop: "2rem", fontSize: "24px", fontWeight: "600", marginLeft: "50px"}}>Анкета пользователья</h2>
                    <h2 style={{ marginTop: "2rem", fontSize: "24px", marginRight: "170px"}}>Пароль</h2>
                </div>
            <div style={{display: "flex"}}>
                <div className='main-block'>
                    <div style={{ padding: "2rem"}}>
                            <p>Имя</p>
                            <input type='text' className='input-container' placeholder='User' />
                            <p>Фамилия</p>
                            <input type='text' className='input-container' placeholder='User' />
                            <p>Отчество</p>
                            <input type='text' className='input-container' placeholder='User' />
                            <p>Телефон</p>
                            <input type='text' className='input-container' placeholder='+7 7781935853' />
                            <p>Email (логин)</p>
                            <input type='text' className='input-container' placeholder='info@info.kz' />

                        <button className='save'>Сохранить</button>
                    </div>
                </div>
                <div>
                 
                {currentForm === 'start' && (
                <div className='right__content'>
                        <div className='change-password'>
                            <button onClick={handleOpenForm} className='btn-change__password'>
                                Изменить пароль
                            </button>
                        </div>
                </div>
                )}
                
                {currentForm === 'new' && (
                <div className='new-password'>
                    <input type='text' className='old-password' placeholder='Введите старый пароль' />
                    <input type='text' className='old-password' placeholder='Hовый пароль'/>
                    <input type='text' className='old-password' placeholder='Повторите пароль'/>
                    <button className='save-password'onClick={handleSend}>Сохранить</button>
                    <button  onClick={handleCancel} style={{textAlign: "center", 
                                    fontSize: "17px",
                                    width: "100%",
                                    marginTop: "1.5rem"}}
                                    >Отменить</button>
                </div>
                )}
               
               {currentForm === 'other' && (
                <div className='done-message'>
                        <div className='message'>
                            <img src={done} style={{ width: "200px", height: "200px"}} />
                            <p style={{fontSize: "16px", color: "#83B5DA", marginTop: "1rem"}}>Новый пороль сохранен</p>
                            <button onClick={handleCancel} style={{textAlign: "center", 
                                    fontSize: "17px",
                                    width: "100%",
                                    marginTop: "1.5rem"}}
                                    >Закрыть</button>
                        </div>
                </div>
                )}

                </div>
            </div>
        </div>
        </div>
    <SPKFooter />
    </>
  )
}

export default SPKSettings