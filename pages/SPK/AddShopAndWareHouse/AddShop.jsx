import React, {useState} from 'react'
import Modal from 'react-modal'
Modal.setAppElement('#root');

import SPKHeader from '../../../components/SPKHeader/SPKHeader'
import SPKFooter from '../../../components/SPKFooter/SPKFooter'
import leftArrow from '../../../assets/arrow-pointing-to-left.png'
import { NavLink } from 'react-router-dom'
import information from '../../../assets/information.png'
import close from '../../../assets/close.png'
import addDone from '../../../assets/add-shop-done.png'


const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "50%",
      transform: "translate(-50%, -50%)",
      with: "500px",
      height: "260px"
    }
  };


const AddShop = () => {

    const activeLink = 'nav-list-link nav-list-link--active';
    const normalLink = 'nav-list-link ';

    const [isModalOpen, setIsModalOpen] = useState(false);

        const handleOpenModal = () => {
            setIsModalOpen(true);
        };

        const handleCloseModal = () => {
            setIsModalOpen(false);
        };


  const [isActive, setIsActive] = useState(false);
  const [click, setClick] = useState(false)
  const handleClick = () => {

   setClick(!click);
   setIsActive(current => !current); }

  const [search, setSearch] = useState('');
    console.log(search)


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
                    >Новый магазин</h1>
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
           justifyContent: "space-between"
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
                <button>к списку</button>
                <button
                    className='btn-blocked'
                    style={{
                        width: "100px",
                        height: "42px",
                        fontSize: "13px",
                        marginLeft: "825px",
                        border: "2px solid #cac9c9",
                        
                    }}>Сброс</button>
                
            </div>
            </div>
            <div style={{display: "flex"}}>
                <div
                  style={{
                    display: "grid",
                    alignItems: "center",
                    width: "20%",
                    height: "max-content",
                    backgroundColor: "#fff",
                    marginTop: "1rem",
                    padding: "2rem"}}>
                    <NavLink
                        className={({isActive}) => isActive ? activeLink: normalLink}
                        to="/addshops" style={{fontSize: "14.67px"}}>Анкета магазина</NavLink>
                </div>

                <div 
                   style={{
                    width: "80%",
                    height: "max-content",
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
                        <p style={{fontSize: "19px"}}>Заполните данные магазина</p>
                    </div>
                    <div style={{width: "100%", border: "1px solid #cac9c9"}} />
                    <div style={{marginTop: "2rem"}}>
                            <p>Тип организации</p>
                            <select className='organization-type'>
                                <option>Выберите тип</option>
                                <option>Индивидуальный предприниматель (ИП)</option>
                                <option>Товарищество с ограниченной ответственностью (ТОО)</option>
                            </select>
                            <p>Наименование магазина</p>
                            <input  type='text' className='input-container' placeholder='Введите наименование'/>
                            <p>БИН/ИНН магазина</p>
                            <input type='text' className='input-container' placeholder='Введите значение' />
                            <p>Адрес магазина</p>
                            <input type='text' className='input-container' placeholder='РК, Шымкент' />
                            <p>Телефон</p>
                            <input type='text' className='input-container' placeholder='+7 7' />
                            <p>Email (логин)</p>
                            <input type='text' className='input-container' placeholder='Укажите электронный адрес' />
                            <p>Имя владельца магазина</p>
                            <input type='text' className='input-container' placeholder='Введите текст' />
                            <p>Фамилия</p>
                            <input type='text' className='input-container' placeholder='Введите текст' />
                            <p>Отчество</p>
                            <input type='text' className='input-container' placeholder='Введите текст' />

                        <div style={{display: "flex",alignItems: "center", marginTop: "2rem"}}>
                            <img src={information} alt='info-icon' />
                            <h1 style={{fontSize: "11px", marginLeft: "12px"}}>После того как Вы нажмете "Сохранить и отправить" на указанную в данной анкете электронный адрес нового пользователья (магазина)<br />
                            будет отправлен временный пароль для входа в систему.
                            </h1>
                        </div>

                        <button onClick={handleOpenModal}
                            style={{
                                width: "230px",
                                height: "42px",
                                backgroundColor: "#0095E0",
                                border: "1px solid #cac9c9",
                                color: "#fff",
                                fontSize: "16.67px",
                                marginTop: "3rem"
                            }}
                        >Сохранить и отправить</button>

                        <Modal
                            isOpen={isModalOpen}
                            onRequestClose={handleCloseModal}
                            style={customStyles} 
                        >
                            <div style={{
                                     display: "flex",
                                     flexDirection: "column",
                                     alignItems: "center",
                                     minWidth: "326px",
                                     position: "relative",
                                     paddingTop: "20px",
                                     
                                }}
                                >
                                <div className="grayCircle" onClick={handleCloseModal}>
                                    <img src={close} alt="close" style={{ width: "9px", height: "9px" }} />
                                </div>
                                <div style={{textAlign: "center", alignItems: "center", justifyContent: "center"}}>
                                    <img src={addDone} style={{width: "235px", marginLeft: "50px", marginBottom: "1rem", marginTop: "-1rem"}} alt="delete" />
                                        <p>Новый магазин успешно добавлен!</p>
                                </div>
                                </div>
                        </Modal>
                    </div>
                </div>
            </div>
    </div>
    <SPKFooter />
    </>
  )
}

export default AddShop