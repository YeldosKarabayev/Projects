import React, { useState } from 'react'
import './CreateApplication.css'
import HeaderAdmin from '../../components/HeaderAdmin/HeaderAdmin'
import { Footer } from '../../components/Footer/Footer'
import blueCheck from '../../assets/check-blue-active.png'
import leftArrow from '../../assets/left-arrow.png'

import {productData} from '../../data/productData.js'


const CreateApplication = () => {

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
                    <h1 style={{marginRight: "435px"}}>Новая заявка</h1>
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
                                    <li
                                    style={{height: "32px"}}
                                        onClick={(e) => {
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
                            <input className='count' style={{width: "70%", marginTop: "1rem", height: "40px"}} type='text' placeholder='0' />
                        </div>
                        <button className='push'>Подать заявку</button>
                    </div>
                </div>
                <div className='right-down__container'>
                    <div className='status'>
                        <p className='active-apl' style={{display: "flex", alignItems: "center"}}>
                        <img src={blueCheck}
                            style={{ marginRight: '20px', 
                            width: '22px', 
                            height: '22px', }} 
                            alt='none'/> Создание новой заявки </p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    <Footer />
    </>
  )
}

export default CreateApplication