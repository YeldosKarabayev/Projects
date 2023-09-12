import React, {useState} from 'react'
import Modal from 'react-modal'
import SPKHeader from '../../../components/SPKHeader/SPKHeader'
import SPKFooter from '../../../components/SPKFooter/SPKFooter'
import leftArrow from '../../../assets/arrow-pointing-to-left.png'
import { NavLink } from 'react-router-dom'
import {dataActivity} from '../../../data/dataActivity.js'
import calendar from '../../../assets/calendar.png'
import clock from '../../../assets/clock-circular.png'
import edit from '../../../assets/edit-page.png'
import downArrow from '../../../assets/down-arrow.png'
import upArrow from '../../../assets/arrow-up.png'
import close from '../../../assets/close.png'

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "50%",
    transform: "translate(-50%, -50%)",
    with: "500px",
    height: "320px"
  }
};

Modal.setAppElement('#root');

const OpenedStore = () => {

  const activeLink = 'nav-list-link nav-list-link--active';
  const normalLink = 'nav-list-link ';

  const [isActive, setIsActive] = useState(false);
  const [click, setClick] = useState(false)
  const handleClick = () => {

   setClick(!click);
   setIsActive(current => !current); }

  const [search, setSearch] = useState('');
    console.log(search)


    const [currentForm, setCurrentForm] = useState('start');

    const handleOpenForm = () => {
        setCurrentForm('new');
    };

    const handleCancel = () => {
        setCurrentForm('start');
    };

    const [isModalOpen, setIsModalOpen] = useState(false);

        const handleOpenModal = () => {
            setIsModalOpen(true);
        };

        const handleCloseModal = () => {
            setIsModalOpen(false);
        };



  return (
    <>
    <SPKHeader />
        <div 
          style={{
            maxWidth: "100%",
            minWidth: "100%",
            height: "110px",
            backgroundColor: "#fff",
            }}
        >
            <div className='container'>
                <div 
                  style={{
                    display: "flex",
                    alignItems: "center",
                    textAlign: "center",
                    justifyContent: "center",
                    marginTop: "1rem"
                    }}
                >
                    <h1 style={{ 
                          alignItems: "center", 
                          justifyContent:"center", 
                          textAlign:"center", 
                          paddingTop: "22px"}}
                    >Анкета магазина</h1>
                </div>
            </div>
        </div>
    <div className='container'>
        <div 
           style={{
           width: "100%", 
           height: "110px",
           marginTop: "1rem", 
           display: "flex", 
           alignItems: "center",
           backgroundColor: "#fff",
           }}
        >
           <div 
             style={{
             display: "flex",
             alignItems: "center",
             justifyContent: "space-between",
             padding: "0 3rem",
             fontSize: "18px",
             fontWeight: "600"
            }}
            >
                <img src={leftArrow} 
                    style={{
                        marginRight: "1rem",
                        width: "20px"}} alt="leftArrow" />
                <button>
                    ИИН/БИН магазина: 
                    <span style={{color: "#FFB514"}}> 912399149</span>
                </button>
                <button
                    onClick={handleOpenModal}
                    className='btn-blocked'
                    style={{
                        width: "220px",
                        height: "42px",
                        fontSize: "13px",
                        border: "2px solid #cac9c9",
                        marginLeft: "500px"
                    }}>Заблокировать пользователья</button>
                    <Modal
                        isOpen={isModalOpen}
                        onRequestClose={handleCloseModal}
                        style={customStyles} 
                      >
                        <div 
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                minWidth: "326px",
                                position: "relative",
                                paddingTop: "40px",
                                paddingBottom: "40px"
                            }}
                          >
                          <div className="grayCircle" onClick={handleCloseModal}>
                            <img src={close} alt="close" style={{ width: "9px", height: "9px" }} />
                          </div>
                            <div style={{marginTop: "-2rem"}}>
                              <p>Укажите причину блокировки</p>
                            </div>
                            <input type='text' placeholder='Введите текст'
                              style={{
                                width: "480px",
                                height: "150px",
                                border: "1px solid #cac9c9",
                                fontSize: "13px",
                                padding: "0 8px 120px"
                              }} />
                            <div style={{display: "flex", marginTop: "1rem", justifyContent: "start", width: "100%"}}>
                                <button onClick={handleCloseModal}
                                  style={{
                                    fontSize: "15px", 
                                    width: "150px", 
                                    height: "40px",
                                    border: "1px solid #cac9c9",
                                    backgroundColor: "#0095E0",
                                    color: "#fff",
                                    marginBottom: "-2rem"
                                  }}
                                  >Заблокировать
                                </button>
                            </div>
                          </div>
                    </Modal>
                
            </div>
            </div>
            <div style={{display: "flex"}}>
                <div
                  style={{
                    display: "grid",
                    alignItems: "center",
                    width: "20%",
                    height: "170px",
                    backgroundColor: "#fff",
                    marginTop: "1rem",
                    padding: "2rem"}}>
                    <NavLink
                      className={({isActive}) => isActive ? activeLink: normalLink}
                       to="/openedstore" style={{fontSize: "14.67px"}}>Анкета пользователья</NavLink>
                    <NavLink
                      className={({isActive}) => isActive ? activeLink: normalLink}
                       to="/activity" style={{fontSize: "14.67px"}}>Активность</NavLink>
                    <NavLink 
                      className={({isActive}) => isActive ? activeLink: normalLink}
                      to="/historyinputs" style={{fontSize: "14.67px"}}>История входов</NavLink>
                </div>

                <div style={{display: "grid", width: "78.5%"}}>
                <div 
                   style={{
                    width: "100%",
                    height: "170px",
                    backgroundColor: "#fff",
                    marginTop: "1rem",
                    marginLeft: "1rem",
                    padding: "2rem"
                   }}>
                    <div 
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center"
                        }}
                    >
                        <p>Дата и время</p>
                    </div>
                    <div 
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between"
                            }}
                    >
                      <p style={{fontSize: "14px"}}>Последняя активность</p>
                      <p style={{fontSize: "14px", marginRight: "50px"}}>Пользователь зарегистрировался на портале</p>
                    </div>
                    <div 
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between"
                            }}>
                      <div 
                        style={{
                            display: "flex",
                            alignItems: "center",
                            }}>
                        <img src={calendar} style={{width: "20px", height: "20px", marginRight: "10px"}} alt='calendar' />
                        <span 
                           style={{
                            fontSize: "16.67px", 
                            fontWeight: "600"}}
                        > 21.01.2023</span>
                        <img src={clock} style={{width: "20px", height: "20px", marginRight: "10px"}} alt='calendar' />
                        <span 
                           style={{
                            fontSize: "16.67px", 
                            fontWeight: "600"}}
                        > 00:00:00</span>
                      </div>
                      <div 
                        style={{
                            display: "flex",
                            alignItems: "center",
                            marginRight: "110px"
                            }}>
                        <img src={calendar} style={{width: "20px", height: "20px", marginRight: "10px"}} alt='calendar' />
                        <span 
                           style={{
                            fontSize: "16.67px", 
                            fontWeight: "600"}}
                        > 21.01.2023</span>
                        <img src={clock} style={{width: "20px", height: "20px", marginRight: "10px"}} alt='calendar' />
                        <span 
                           style={{
                            fontSize: "16.67px", 
                            fontWeight: "600"}}
                        > 15:00:00</span>
                      </div>
                      </div>
                </div>
                <div 
                   style={{
                    width: "100%",
                    height: "max-content",
                    backgroundColor: "#fff",
                    marginTop: "1rem",
                    marginLeft: "1rem",
                    padding: "2rem",
                   }}>
                    <div 
                      style={{
                        display: "flex",
                        alignItems: "center",
                        
                    }}
                    >
                        <h1 style={{fontSize: "19px"}}>Данные пользователья</h1>
                        <img src={edit} style={{width: "18px", height: "18px", marginLeft: "10px"}} alt='edit-icon' />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        textAlign: "center",
                        marginTop: "1rem"
                      }}>
                    <h1 style={{fontSize: "15px", marginTop: "1rem"}}>Тип организации</h1>
                    <div>
                    {currentForm === 'start' && (
                        <div onClick={handleOpenForm}>
                        <button  onClick={(e) => setIsActive(!isActive)}
                            style={{
                            fontSize: "14px",
                            width: "430px",
                            height: "32px",
                            border: "2px solid #cac9c9",
                            marginLeft: "50px",
                            marginTop: "15px",
                            display: "flex",
                            alignItems: "center",
                            padding: "0 1rem"
                            }}>
                            Товарищество с ограниченной ответственностью (ТОО)
                            <img src={downArrow} style={{width: "13px", height: "9px", marginLeft: "10px"}} alt="downArrow" />
                        </button>
                        </div>
                    )}
                    {currentForm === 'new' && (
                        <div onClick={handleCancel}>
                        <button  onClick={(e) => setIsActive(!isActive)}
                            style={{
                            fontSize: "14px",
                            width: "430px",
                            height: "32px",
                            border: "2px solid #cac9c9",
                            marginLeft: "50px",
                            marginTop: "15px",
                            display: "flex",
                            alignItems: "center",
                            padding: "0 1rem"
                            }}>
                            Товарищество с ограниченной ответственностью (ТОО)
                            <img src={upArrow} style={{width: "13px", height: "9px", marginLeft: "10px"}} alt="downArrow" />
                        </button>
                        </div>
                    )}
                    </div>
                    {isActive && (
                    <div 
                      style={{
                        position: "absolute",
                        left: "0",
                        margin: "0",
                        width: "480px",
                        height: "68px",
                        listStyleType: "none",
                        marginTop: "5px",
                        backgroundColor: "#fff",
                        boxShadow: "0px 8px 12px 9px rgba(160, 199, 239, 0.8)",
                        borderRadius: "7px",
                        padding: "0 1rem",
                        marginTop: "115px",
                        marginLeft: "648px"
                      }}>
                        <a
                            style={{
                                display: "flex",
                                alignItems: "center",
                                textAlign: "center",
                                fontSize: "14px",
                                marginBottom: "8px",
                                marginTop: "8px",
                                width: "100%",
                                height: "22px",
                                cursor: "pointer"
                            }}
                        >Товарищество с ограниченной ответственностью (ТОО)</a>
                        <a
                            style={{
                                display: "flex",
                                alignItems: "center",
                                textAlign: "center",
                                fontSize: "14px",
                                width: "100%",
                                height: "22px",
                                cursor: "pointer"
                            }}>Индиведуальный предпрениматель (ИП)</a>
                    </div>
                    )}
                    </div>
                    <table 
                        style={{
                          width: "100%",
                          borderCollapse: "collapse",
                          marginTop: "2rem",
                          position: "initial",
                          marginLeft: "-0.05rem"
                        }}>
                      <tr>
                        <th className='thStyleTitle'>Наименование</th>
                        <th className='thStyleTitle'>ТОО "Magnum"</th>
                      </tr>
                      <tr>
                        <td className='thStyle'>ИИН/БИН магазина</td>
                        <td className='thStyle'>9871235612</td>
                      </tr>
                      <tr>
                        <td className='thStyle'>Имя владельца</td>
                        <td className='thStyle'>Азиз</td>
                      </tr>
                      <tr>
                        <td className='thStyle'>Фамилия</td>
                        <td className='thStyle'>Есжанов</td>
                      </tr>
                      <tr>
                        <td className='thStyle'>Отчество</td>
                        <td className='thStyle'>Джаркынович</td>
                      </tr>
                      <tr>
                        <td className='thStyle'>Адрес магазина</td>
                        <td className='thStyle'>РК, улица Рылеева, 25</td>
                      </tr>
                    </table>

                    <div 
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginTop: "1.8rem",
                        padding: "0 1rem",
                        justifyContent: "space-between"
                      }}
                    >
                      <div style={{display: "grid", fontSize: "16.67px"}}> 
                        <p style={{fontSize: "16.67px"}}>Email</p>
                        <input type='text' 
                           style={{
                             width: "250px", 
                             height: "40px",
                             border: "1px solid #E3E3E3",
                             padding: "0 1rem"
                           }}
                          placeholder='info@info.kz' />
                      </div>
                      <div style={{display: "grid", fontSize: "16.67px"}}> 
                        <p style={{fontSize: "16.67px"}}>Телефон</p>
                          <input type='text'
                              style={{
                                width: "250px", 
                                height: "40px",
                                border: "1px solid #E3E3E3",
                                padding: "0 1rem",
                              }}
                            placeholder='+7 (778) 193 58 53' />
                      </div>
                      <button
                          style={{
                            width: "140px",
                            height: "40px",
                            alignItems: "center",
                            textAlign: "center",
                            backgroundColor: "#0095E0",
                            border: "1px solid #F5F5F5",
                            color: "#fff",
                            fontSize: "16.67px",
                            marginTop: "2rem"
                          }}
                        >Сохранить
                        </button>
                    </div>
                   </div>
                   <div 
                      style={{
                        width: "100%",
                        height: "170px",
                        backgroundColor: "#fff",
                        marginTop: "1rem",
                        marginLeft: "1rem",
                        padding: "2rem"
                      }}
                      >
                      <div 
                        style={{
                            display: "grid",
                            justifyContent: "space-between",
                            alignItems: "center"
                            }}
                        >
                        <p>Восстоновление пароля</p>
                        <p style={{fontSize: "13.67px"}}
                        >Отправить ссылку на восстоновление пароля</p>
                      </div>
                      <button className='enterLinkBtn'>Отправить ссылку</button>
                    </div>

                    <div 
                      style={{
                        width: "100%",
                        height: "max-content",
                        backgroundColor: "#fff",
                        marginTop: "1rem",
                        marginLeft: "1rem",
                        padding: "2rem",
                      }}
                    >
                      <div 
                        style={{
                          display: "flex",
                          alignItems: "center"
                      }}
                      >
                        <p>История блокировок</p>
                      </div>
                      <table 
                           style={{
                            width: "100%",
                            borderCollapse: "collapse",
                            marginTop: "1rem",
                            position: "initial",
                            marginLeft: "-0.05rem",
                            marginBottom: "3rem",
                          }}
                        >
                       <tr>
                        <th className='th-style-title-history'>№</th>
                        <th className='th-style-title-history' style={{color: "#000"}}>Дата и время</th>
                        <th className='th-style-title-history'>Премичание</th>
                        <th className='th-style-title-history'>Статус</th>
                        </tr>
                       <tr>
                        <td className='th-Style'>59</td>
                        <td className='th-Style'>15.09.2022<br/>15:14:12</td>
                        <td className='th-Style'></td>
                        <td className='th-Style'>Заблокирован</td>
                       </tr>
                       <tr>
                        <td className='th-Style'>58</td>
                        <td className='th-Style'>14.09.2022<br/>12:12:12</td>
                        <td className='th-Style'>Пользователь пытается взломать сайт</td>
                        <td className='th-Style'>Заблокирован</td>
                       </tr>
                       <tr>
                        <td className='th-Style'>57</td>
                        <td className='th-Style'>15.09.2022<br/>15:14:12</td>
                        <td className='th-Style'></td>
                        <td className='th-Style'>Разблокирован</td>
                       </tr>
                       <tr>
                        <td className='th-Style'>56</td>
                        <td className='th-Style'>14.09.2022<br/>12:12:12</td>
                        <td className='th-Style'>Пользователь пытается взломать сайт</td>
                        <td className='th-Style'>Разблокирован</td>
                       </tr>
                       <tr>
                        <td className='th-Style'>55</td>
                        <td className='th-Style'>15.09.2022<br/>15:14:12</td>
                        <td className='th-Style'></td>
                        <td className='th-Style'>Разблокирован</td>
                       </tr>
                       <tr>
                        <td className='th-Style'>54</td>
                        <td className='th-Style'>15.09.2022<br/>15:14:12</td>
                        <td className='th-Style'></td>
                        <td className='th-Style'>Заблокирован</td>
                       </tr>
                      </table>
                    </div>
                </div>
            </div>
    </div>
    <SPKFooter />
    </>
  )
}

export default OpenedStore