import React, {useState} from 'react'
import Modal from 'react-modal'
Modal.setAppElement('#root');

import SPKHeader from '../../../../components/SPKHeader/SPKHeader'
import SPKFooter from '../../../../components/SPKFooter/SPKFooter'
import leftArrow from '../../../../assets/arrow-pointing-to-left.png'
import { NavLink } from 'react-router-dom'
import information from '../../../../assets/information.png'
import close from '../../../../assets/close.png'
import addDone from '../../../../assets/add-shop-done.png'



const AddWareHouseStep1 = () => {

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
                    >Новый склад</h1>
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
                      to="/addwhstep1" style={{fontSize: "14.67px", marginBottom: "1rem"}}>Шаг 1</NavLink>
                    <NavLink 
                      className={({isActive}) => isActive ? activeLink: normalLink} 
                      to="/addwhstep2" style={{fontSize: "14.67px"}}>Шаг 2</NavLink>
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
                        <p style={{fontSize: "19px"}}>Заполните данные склада</p>
                    </div>
                    <div style={{width: "100%", border: "1px solid #cac9c9"}} />
                    <div style={{marginTop: "2rem"}}>
                            <p>Тип организации</p>
                            <select className='organization-type'>
                                <option>Выберите тип</option>
                                <option>Индивидуальный предприниматель (ИП)</option>
                                <option>Товарищество с ограниченной ответственностью (ТОО)</option>
                            </select>
                            <p>Наименование склада</p>
                            <input  type='text' className='input-container' placeholder='Введите наименование'/>
                            <p>БИН/ИНН склада</p>
                            <input type='text' className='input-container' placeholder='Введите значение' />
                            <p>Адрес склада</p>
                            <input type='text' className='input-container' placeholder='РК, Шымкент' />
                            <p>Телефон</p>
                            <input type='text' className='input-container' placeholder='+7 7' />
                            <p>Email (логин)</p>
                            <input type='text' className='input-container' placeholder='Укажите электронный адрес' />
                            <p>Имя владельца склада</p>
                            <input type='text' className='input-container' placeholder='Введите текст' />
                            <p>Фамилия</p>
                            <input type='text' className='input-container' placeholder='Введите текст' />
                            <p>Отчество</p>
                            <input type='text' className='input-container' placeholder='Введите текст' />


                    </div>
                </div>
            </div>
    </div>
    <SPKFooter />
    </>
  )
}

export default AddWareHouseStep1