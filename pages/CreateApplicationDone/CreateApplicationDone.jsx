import React, { useState } from 'react'
import Modal from 'react-modal'
Modal.setAppElement('#root');

import './CreateApplicationDone.css'
import HeaderAdmin from '../../components/HeaderAdmin/HeaderAdmin'
import { Footer } from '../../components/Footer/Footer'
import blueCheck from '../../assets/check-blue-active.png'
import orangeCheck from '../../assets/orange-check.png'
import leftArrow from '../../assets/left-arrow.png'
import close from '../../assets/close.png'
import deleteCheck from '../../assets/delete-check.png'

import {productData} from '../../data/productData.js'


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

const CreateApplicationDone = () => {

    const [isActive, setIsActive] = useState(false);
        const [selected, setSelected] = useState("Выберите");

        const [hoveredItem, setHoveredItem] = useState(null);

        const handleItemMouseEnter = (item) => {
          setHoveredItem(item);
        };
      
        const handleItemMouseLeave = () => {
          setHoveredItem(null);
        };
      
        const handleSelect = (item) => {
          // Действия при выборе элемента списка
        };

        const [isModalOpen, setIsModalOpen] = useState(false);

        const handleOpenModal = () => {
            setIsModalOpen(true);
        };

        const handleCloseModal = () => {
            setIsModalOpen(false);
        };


        const [currentForm, setCurrentForm] = useState('start');

        const handleOpenForm = () => {
            setCurrentForm('new');
        };
    
        const handleCancel = () => {
            setCurrentForm('start');
        };



  return (
    <>
    <HeaderAdmin />
        <div className='left-container'>
        <div className='title__list-item'>
            <div style={{width: "100%", backgroundColor: "#fff", padding: "2rem 0"}}>
            <div className='container' style={{ backgroundColor: '#fff'}}>
                <div className='down' style={{ width: "100%", 
                                               alignItems: "center", 
                                               display:"flex", 
                                               justifyContent: "space-between", 
                                               backgroundColor: "#fff",
                                               }}>
                    <button style={{ alignItems: "center",
                                    textAlign: "center", 
                                    display:"flex",
                                    padding: "10px", 
                                    backgroundColor: "#FFB400",
                                    color: "#fff", 
                                    width: "140px", 
                                    height: "46px",
                                    fontSize: "24px",
                                    fontWeight: "500",
                                    borderRadius: "7px"
                                    }}> 
                        <img src={leftArrow} style={{width: "22px", marginRight: "10px"}} />
                        Назад
                    </button>
                    <h1 style={{marginRight: "410px"}}>ID заявки: <span style={{color: ' #FFB400'}}>A-20</span></h1>
                </div>
            </div>
            </div>
            </div>
            <div className='container'>
                <div className='title' style={{ display: "flex", justifyContent: "space-between"}}>
                    <h2 style={{ marginTop: "2rem", fontSize: "24px", fontWeight: "600", marginLeft: "50px"}}>Заполните форму</h2>
                    <h2 style={{ marginTop: "2rem", fontSize: "24px", marginRight: "110px"}}>Статус заявки</h2>
                </div>
                <div className='full-content' style={{ display: "flex"}}>
                <div className='main-content'>
                    <div className='create-application'>
                        <h4 style={{ fontSize: "18px"}}>Наименование товара</h4>
                        <div className='form-group'>
                            <div className='dropdowne'>
                                <button className='dropdown-button' 
                                    style={{ marginTop: "1rem", width: "100%", height: "40px"}} 
                                    onClick={(e) => setIsActive(!isActive)} >
                                        {selected}
                                </button>
                                {isActive && (
                                <ul className='dropdown__list'>
                                    {productData.map((item) => (
                                    <li onClick={(e) => {
                                        setSelected(item[''])
                                        setIsActive(false);
                                    }}
                                      className='dropdown__list-item'
                                      key={item.id}
                                      onMouseEnter={() => handleItemMouseEnter(item)}
                                      onMouseLeave={handleItemMouseLeave}
                                    >
                                        {item["num"]+item['']}
                                        {item.label}
                                        {hoveredItem === item && (
                                            <button className='select-button' onClick={() => handleSelect(item)}>
                                                Выбрать
                                            </button>
                                        )}
                                    </li>
                                    ))}
                                </ul>
                                )}
                            </div>
                        </div>
                            <h4 style={{ fontSize: "18px", marginTop: "2rem"}}>Укажите количество</h4>
                        <div style={{
                            display: "flex",
                            alignItems: "center"
                        }}>
                            <input className='count' style={{width: "70%", 
                                                            marginTop: "1rem", 
                                                            height: "40px"}} 
                            type='text' placeholder='0' />
                        </div>
                        <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "2.5rem" }}>
                            <button style={{width: "160px", 
                                            height: "42px", 
                                            backgroundColor: "#e1ebf2", 
                                            color: "#fff",
                                        fontSize: "16px"}}
                            >Заявка подана</button>
                            <button className='delete' onClick={handleOpenModal}>Удалить заявку</button>
                            <Modal
                                isOpen={isModalOpen}
                                onRequestClose={handleCloseModal}
                                style={customStyles} 
                            >
                                {currentForm === 'start' && (
                                <div style={{
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
                                    <div style={{textAlign: "center"}}>
                                        <p>Подтвердите удаление</p>
                                        <h1 style={{fontSize: "14px", alignItems: "center", textAlign: "center"}}>
                                            В случае удаления, заявку будет невозможно<br/>
                                            востоновить. Удалить данную заявку?
                                        </h1>
                                    </div>
                                    <div style={{display: "flex", marginTop: "1rem", justifyContent: "space-evenly", width: "100%"}}>
                                        <button onClick={handleOpenForm}
                                            style={{
                                                fontSize: "15px", 
                                                width: "150px", 
                                                height: "40px",
                                                border: "1px solid #cac9c9",
                                                backgroundColor: "#F83221",
                                                color: "#fff"
                                                }}>Удалить заявку
                                        </button>
                                        <button 
                                            style={{
                                                fontSize: "15px", 
                                                width: "150px", 
                                                height: "40px",
                                                border: "1px solid #cac9c9",
                                                }}>Отмена
                                        </button>
                                    </div>
                                    </div>
                                )}

                                {currentForm === 'new' && (
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
                                        <img src={deleteCheck} style={{width: "130px", marginLeft: "10px"}} alt="delete" />
                                        <p>Заявка удалена</p>
                                    </div>
                                    </div>
                                )}
                            </Modal>
                        </div>
                    </div>
                </div>
                <div className='right-down___container'>
                    <div className='status___aplication'>
                        <p className='active-apl' style={{display: "flex", alignItems: "center"}}>
                        <img src={blueCheck}
                            style={{ marginRight: '20px', 
                            width: '22px', 
                            height: '22px', }} 
                            alt='none'/> Активная заявка </p>
                            <time  style={{display: "flex", 
                                           alignItems: "center", 
                                           marginLeft: '42px', 
                                           fontSize: "14px", 
                                           marginTop: "-1rem"}}
                                           >17.5.2023 18:25:27</time>
                        <p className='active-apl' style={{display: "flex", alignItems: "center", marginTop: "1rem"}}>
                        <img src={orangeCheck}
                            style={{ marginRight: '20px', 
                            width: '22px', 
                            height: '22px', }} 
                            alt='none'/> На соглосовании в СПК </p>
                        <time  style={{display: "flex", 
                                       alignItems: "center", 
                                       marginLeft: '42px', 
                                       fontSize: "14px", 
                                       marginTop: "-1rem"}}
                        >17.5.2023 18:25:27</time>
                    </div>
                </div>
            </div>
        </div>
        </div>
    <Footer />
    </>
  )
}

export default CreateApplicationDone