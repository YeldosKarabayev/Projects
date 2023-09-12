import React, {useState} from 'react'
import Modal from 'react-modal'
Modal.setAppElement('#root');

import SPKHeader from '../../../../components/SPKHeader/SPKHeader';
import './SPKOpenApplication.css'
import SPKFooter from '../../../../components/SPKFooter/SPKFooter';

import blueCheck from '../../../../assets/check-blue-active.png'
import leftArrow from '../../../../assets/left-arrow.png'
import orangeCheck from '../../../../assets/orange-check.png'
import redCheck from '../../../../assets/check-red.png'
import close from '../../../../assets/close.png'
import addDone from '../../../../assets/shipped-application.png'

import {application} from '../../../../data/application.js'
import { productData } from '../../../../data/productData';

const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "50%",
      transform: "translate(-50%, -50%)",
      with: "600px",
      height: "280px"
    }
  };



const SPKAplicationShipped = () => {

    const [isActive, setIsActive] = useState(false);
    const [selected, setSelected] = useState("Выберите");

    const [isModalOpen, setIsModalOpen] = useState(false);

        const handleOpenModal = () => {
            setIsModalOpen(true);
        };

        const handleCloseModal = () => {
            setIsModalOpen(false);
        };


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

    
    const [currentForm, setCurrentForm] = useState('start');
    const handleOpenForm = () => {
        setCurrentForm('open');
    };

    const handleCancel = () => {
    setCurrentForm('close');
    };


  return (
    <>
    <SPKHeader />
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
            <div style={{display: "flex", justifyContent: "space-between"}}>
            < h2 style={{ marginTop: "2rem", 
                        fontSize: "24px", 
                        fontWeight: "600", 
                        marginTop: "30px",
                        padding: "0 2rem"
                      }}
              >Наименование товара</h2>
              <h2 style={{ marginTop: "2rem", 
                            fontSize: "24px", 
                            marginRight: "110px",
                            }}
                >Статус заявки</h2>
              
            </div>
            
            <div style={{display: "flex"}}>
                <div className='full-wrapper' style={{ display: "grid"}}>
                <div className='main-content'>
                    <div className='create-application'>
                        <h4 style={{ fontSize: "18px"}}>Наименование товара</h4>
                        <div className='form-group'>
                            <div className='dropdowne'>
                                <button className='dropdown__button' 
                                    style={{ marginTop: "1rem", width: "100%", height: "40px"}} 
                                    onClick={(e) => setIsActive(!isActive)} >
                                        {selected}
                                </button>
                                {isActive && (
                                <ul className='dropdown__list'>
                                    {productData.map((item) => (
                                    <li style={{fontSize: "14px", padding: "5px", height: "24px"}} onClick={(e) => {
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
                            <h4 style={{ fontSize: "18px", marginTop: "2rem"}}>Количество</h4>
                            <div style={{
                            display: "flex",
                            alignItems: "center"
                        }}>
                            <output style={{width: "70%", 
                                          marginTop: "1rem", 
                                          height: "40px",
                                          border: "1px solid #cac9c9",
                                          padding: "0 1rem"}} 
                            type='text' placeholder='0' />
                            <span style={{fontSize: "17px",
                                          fontWeight: "600",
                                          padding: "1rem", 
                                          marginTop: "10px"}}>шт(штука)</span>
                        </div>
                            <button className='enter__product'>Заявка подана</button>
                    </div>
                </div>
           <p style={{marginLeft: "2rem", marginTop: "1rem"}}>Найменование поставщиков (Складов)</p>
            <div className='left-down__container'>
            <div main class="table">
                   <section class="table__body">
                  <table>
                    <thead>
                      <tr id="selectAll">
                        <th style={{width: "10%"}}> # </th>
                        <th style={{width: "100%"}}> Склад </th>
                        <th style={{width: "100%"}}> Отправлено </th>
                        <th style={{display: 'flex', marginLeft: '250px', width: "20%"}}>Статус</th>
                      </tr>
                    </thead>

                    <tbody>
                    {application.map((item) =>(
                      <tr key={application.id === item['#']}>
                        <th>{item['#']}</th>
                        <th>{item['Склад']}</th>
                        <th>{item['Отправлено']}</th>
                        <th style={{display: 'flex', marginLeft: '250px'}}>{item['Статус']}</th>
                      </tr>
                      ))}
                    </tbody>
                  </table>
                </section>
                

                <div className='save-and-submit'>
                  <button 
                    style={{
                        width: "160px",
                        height: "42px",
                        backgroundColor: "#e1ebf2",
                        marginLeft: "2rem",
                        borderRadius: "5px",
                        color: "#fff",
                        fontSize: "16px"
                    }} 
                    >Сохранить</button>
                  <button 
                        style={{
                            width: "160px",
                            height: "42px",
                            border: "none",
                            backgroundColor: "#e1ebf2",
                            marginLeft: "2rem",
                            borderRadius: "5px",
                            color: "#fff",
                            fontSize: "16px"
                        }}
                   >Отправить</button>
                  <button style={{width: "200px", 
                                 height: "42px", 
                                 fontSize: "16.67px",
                                 border: "2px solid #cac9c9",
                                 backgroundColor: "#e1ebf2",
                                 color: "#fff",
                                 border: "none",
                                 marginLeft: "200px",
                                 borderRadius: "5px"
                                 }}>Товар отсутствует</button>
                </div>
                </div>
            </div>
                </div>
                
                <div style={{marginLeft: "2rem", display: "grid"}}>
                    <div style={{width: "320px", 
                                height: "max-content", 
                                fontSize: "12.67px", 
                                backgroundColor: "#fff",
                                padding: "2rem", 
                                marginTop: "2rem"}}>
                        <p style={{display: "flex", alignItems: "center", fontSize: "15px"}}>
                        <img src={blueCheck}
                            style={{ marginRight: '20px', 
                            width: '19px', 
                            height: '19px', }} 
                            alt='none'/> 
                        Активная заявка </p>
                            <time  
                                style={{display: "flex", 
                                           alignItems: "center", 
                                           marginLeft: '42px', 
                                           fontSize: "14px", 
                                           marginTop: "-1rem", 
                                           marginBottom: "1rem"}}
                                           >17.5.2023 18:25:27
                            </time>
                        <p style={{display: "flex", alignItems: "center", fontSize: "15px"}}>
                        <img src={orangeCheck}
                            style={{ marginRight: '20px', 
                            width: '19px', 
                            height: '19px', }} 
                            alt='none'/> 
                        На соглосовании в СПК </p>
                        <time  
                            style={{display: "flex", 
                                       alignItems: "center", 
                                       marginLeft: '42px', 
                                       fontSize: "14px", 
                                       marginTop: "-1rem"}}>
                                       17.5.2023 18:25:27
                        </time>
                    </div>
                    < h2 style={{
                        fontSize: "20px", 
                        fontWeight: "600", 
                        padding: "0 2rem",
                        marginTop: "-15rem"
                      }}
                    >О магазине</h2>
                    <div style={{width: "320px",
                                 height: "max-content", 
                                 backgroundColor: "#fff",
                                 padding: "2rem",
                                 marginTop: "-29rem"}}>
                      <p style={{marginBottom: "5px"}}>Наименование</p>
                          <h1 style={{fontSize: "13px", marginBottom: "18px"}}>ТОО "Magnum"</h1>
                      <p style={{marginBottom: "5px", }}>Владелец</p>
                          <h1 style={{fontSize: "13px", marginBottom: "18px" }}>Ибрагимова Эльмира Федоровна</h1>
                      <p style={{marginBottom: "5px"}}>БИН/ИИН</p>
                          <h1 style={{fontSize: "13px", marginBottom: "18px" }}>128392412-027</h1>
                        <div style={{width: "100%", border: "1px solid #cac9c9", marginBottom: "18px"}}></div>
                      <p style={{marginBottom: "5px"}}>Телефон</p>
                          <h1 style={{fontSize: "13px", marginBottom: "18px" }}>+7 778 193 58 59</h1>
                      <p style={{marginBottom: "5px"}}>Email</p>
                          <h1 style={{fontSize: "13px", marginBottom: "18px" }}>info@info.kz</h1>
                      <p style={{marginBottom: "5px"}}>Адрес</p>
                          <h1 style={{fontSize: "13px", marginBottom: "18px" }}>РК, улица Рылеева, 25</h1>
                    </div>
                </div>
                </div>
        </div>
        </div>
    <SPKFooter />
    </>
  )
}

export default SPKAplicationShipped