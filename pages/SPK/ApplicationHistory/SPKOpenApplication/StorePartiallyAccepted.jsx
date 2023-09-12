
import React, { useState } from 'react'
import blueCheck from '../../../../assets/check-blue-active.png'
import orangeCheck from '../../../../assets/check-green.png'
import leftArrow from '../../../../assets/left-arrow.png'
import {dataAccepted} from '../../../../data/dataAccepted.js'

import {productData} from '../../../../data/productData.js'
import SPKHeader from '../../../../components/SPKHeader/SPKHeader'
import SPKFooter from '../../../../components/SPKFooter/SPKFooter'


const StorePartiallyAccepted = () => {

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

        // Принять или откланить заявку

        const [applications, setApplications] = useState([]);
        const [selectedApplication, setSelectedApplication] = useState(null);
        const [showPopup, setShowPopup] = useState(false);
      
        // Функция для обработки клика по кнопке действия
        const handleActionClick = (application) => {
          setSelectedApplication(application);
        };
      
        // Функция для обработки выбора действия в выпадающем списке
        const handleDropdownSelect = (action) => {
          if (action === 'accept') {
            // Логика для принятия заявки
          } else if (action === 'reject') {
            setShowPopup(true);
          }
        };

        // Функция для обработки отправки формы во всплывающем окне
        const handleFormSubmit = (formData) => {
        // Логика для обработки заполненной формы при отклонении заявки
        setShowPopup(false);
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
                                <button className='dropdown__button' 
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
                        <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "2.5rem" }}>
                            <button style={{width: "160px", 
                                            height: "42px", 
                                            backgroundColor: "#e1ebf2", 
                                            color: "#fff",
                                        fontSize: "16px"}}
                            >Заявка подана</button>
                        </div>
                    </div>
                </div>
                <div className='right-down___container'>
                    <div className='status-application'>
                        <p style={{display: "flex", alignItems: "center", fontSize: "15px"}}>
                        <img src={blueCheck}
                            style={{ marginRight: '20px', 
                            width: '19px', 
                            height: '19px', }} 
                            alt='none'/> Активная заявка </p>
                            <time  style={{display: "flex", 
                                           alignItems: "center", 
                                           marginLeft: '42px', 
                                           fontSize: "13px", 
                                           marginTop: "-1rem"}}
                                           >17.5.2023 18:25:27</time>
                        <p style={{display: "flex", alignItems: "center", marginTop: "1rem", fontSize: "15px"}}>
                        <img src={blueCheck}
                            style={{ marginRight: '20px', 
                            width: '19px', 
                            height: '19px', }} 
                            alt='none'/> На соглосовании в СПК </p>
                        <time  style={{display: "flex", 
                                       alignItems: "center", 
                                       marginLeft: '42px', 
                                       fontSize: "13px", 
                                       marginTop: "-1rem"}}
                        >17.5.2023 18:25:27</time>
                        <p style={{display: "flex", alignItems: "center", marginTop: "1rem", fontSize: "15px"}}>
                        <img src={blueCheck}
                            style={{ marginRight: '20px', 
                            width: '19px', 
                            height: '19px', }} 
                            alt='none'/> Ожидает на складе </p>
                        <time  style={{display: "flex", 
                                       alignItems: "center", 
                                       marginLeft: '42px', 
                                       fontSize: "13px", 
                                       marginTop: "-1rem"}}
                        >17.5.2023 18:25:27</time>
                        <p style={{display: "flex", alignItems: "center", marginTop: "1rem", fontSize: "15px"}}>
                        <img src={blueCheck}
                            style={{ marginRight: '20px', 
                            width: '19px', 
                            height: '19px', }} 
                            alt='none'/> Доставляется курьером </p>
                        <time  style={{display: "flex", 
                                       alignItems: "center", 
                                       marginLeft: '42px', 
                                       fontSize: "13px", 
                                       marginTop: "-1rem"}}
                        >17.5.2023 18:25:27</time>
                        <p style={{display: "flex", alignItems: "center", marginTop: "1rem", fontSize: "15px"}}>
                        <img src={orangeCheck}
                            style={{ marginRight: '20px', 
                            width: '19px', 
                            height: '19px', }} 
                            alt='none'/> Частично принят магазином </p>
                        <time  style={{display: "flex", 
                                       alignItems: "center", 
                                       marginLeft: '42px', 
                                       fontSize: "13px", 
                                       marginTop: "-1rem"}}
                        >17.5.2023 18:25:27</time>
                    </div>
                </div>
            </div>
            <p style={{marginLeft: "2rem", marginTop: "1rem"}}>Найменование поставщиков (Складов)</p>
            <div className='left-down__container'
                style={{width: "70%"}}>
            <div main class="table">
                   <section class="table__body"
                        style={{marginTop: "1rem", width: "95%"}}>
                  <table>
                    <thead>
                      <tr id="selectAll">
                        <th style={{width: "10%"}}> # </th>
                        <th style={{width: "100%"}}> Склад </th>
                        <th style={{width: "100%"}}> Отправлено </th>
                        <th style={{
                                    display: 'flex', 
                                    alignItems: "center",
                                    marginLeft: '150px', 
                                    width: "20%"}}
                        >Статус</th>
                      </tr>
                    </thead>

                    <tbody>
                    {dataAccepted.map((item) =>(
                      <tr key={dataAccepted.id === item['#']}>
                        <th>{item['#']}</th>
                        <th>{item['Склад']}</th>
                        <th>{item['Отправлено']}</th>
                        <th style={{display: 'flex', 
                                    marginLeft: '150px',
                                    alignItems: "center"
                        }}>
                        {item['Статус'] === 'Принят'? <div style={{width: '5px', height: '5px', borderRadius: '50%', backgroundColor: "green", marginRight: "5px"}}></div> : <div style={{width: '5px', height: '5px', borderRadius: '50%', backgroundColor: "red", marginRight: "5px"}}></div>}
                        {item['Статус']}</th>
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
            <p style={{marginLeft: "2rem", 
                            marginTop: "1rem", 
                            color: "red", 
                            marginTop: "1.5rem",
                            marginBottom: "1rem",
                            width: "70%"}}
                >Причина откланения</p>
                    <div style={{width: "70%",
                            backgroundColor: "#fff",
                            height: "250px",
                            padding: "2rem",
                            height: "max-content",}}>
                              
                      <p style={{color: "red"}}>Склад: ИП "Каримов"</p>
                      <h1 style={{fontSize: "13.67px"}}>
                        Привезенные курьером товар (масло сливочное в количестве 500 штук) оказалось просроченными.<br/>
                        В связи с этим наш магазин отклонил данную заявку.<br/><br/>
                        Прошу администрации сайта проверить склад откуда нам был привезен  товар.<br/><br/>
                        ТОО "Magnum"<br/>
                        Есжанов Азиз Джаркынович
                      </h1>
                    </div>
                    <br/>
                    <div style={{width: "70%",
                            height: "max-content",
                            backgroundColor: "#fff",
                            height: "250px",
                            padding: "2rem",
                            marginBottom: "1rem"}}>
                              
                      <p style={{color: "red"}}>Склад: ИП "Product"</p>
                      <h1 style={{fontSize: "13.67px"}}>
                        Привезенные курьером товар (масло сливочное в количестве 500 штук) оказалось просроченными.<br/>
                        В связи с этим наш магазин отклонил данную заявку.<br/><br/>
                        Прошу администрации сайта проверить склад откуда нам был привезен  товар.<br/><br/>
                        ТОО "Magnum"<br/>
                        Есжанов Азиз Джаркынович
                      </h1>
                    </div>
        </div>
        </div>
    <SPKFooter />
    </>
  )
}

export default StorePartiallyAccepted