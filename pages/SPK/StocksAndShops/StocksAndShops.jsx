import React, { useState } from 'react'
import SPKHeader from '../../../components/SPKHeader/SPKHeader.jsx';
import SPKFooter from '../../../components/SPKFooter/SPKFooter.jsx';
import {data} from '../../../data/data.js'
import arrowDown from '../../../assets/arrow-down.png'
import arrowUp from '../../../assets/arrow-up.png'

import './StocksAndShops.css'

const StocksAndShops = () => {

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


    const [isOpen, setIsOpen] = useState(false);
    const [selectedYear, setSelectedYear] = useState(null);
    const years = ["Магазины", "Склады"]; 
  
    const handleToggle = () => {
      setIsOpen(!isOpen);
    };
  
    const handleYearSelect = (year) => {
      setSelectedYear(year);
      setIsOpen(false);
    };
    
  
  return (
    <>
    <SPKHeader pageName="StocksAndShops" />
      <div className='wrapper' style={{ backgroundColor: "#F8F8F8"}}>
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
                    >Реестр складов и магазинов</h1>
                </div>
            </div>
        </div>
      <div className='container' >
        <div className='main-table'>
            <div className='title-list'>
            <div 
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
                }}
            >

              <div onClick={handleOpenForm}>
                {currentForm === 'start' && (
                  <button onClick={handleToggle}
                      style={{
                          display: "flex",
                          justifyContent: "space-evenly",
                          alignItems: "center",
                          width: "110px",
                          height: "36px",
                          fontSize: "15px",
                          border: "2px solid #cac9c9",
                          fontWeight: "600"
                        }}>
                                {selectedYear ? selectedYear : 'Магазин'}
                                <img src={arrowDown} style={{width: "12px"}} alt='down-arrow' />
                            </button>
                        )}
                        </div>

                        <div onClick={handleCancel}>
                        {currentForm === 'new' && (
                        <button onClick={handleToggle}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-evenly",
                                width: "110px",
                                height: "36px",
                                fontSize: "15px",
                                border: "2px solid #cac9c9",
                                fontWeight: "600"
                            }}>
                                {selectedYear ? selectedYear : 'Магазины'}
                                <img src={arrowUp} style={{width: "12px"}} alt='down-arrow' />
                            </button>
                        )}
                        </div>

                        {isOpen && (
                        <div 
                            style={{
                                position: "absolute",
                                textAlign: "center",
                                width: "106px",
                                marginLeft: "2px",
                                height: "max-content",
                                backgroundColor: "#fff",
                                boxShadow: "0px 0px 1px 2px rgba(169, 169, 169, 0.5)",
                                marginTop: "115px",
                                cursor: "pointer"
                            }}>
                            {years.map((year) => (
                        <div
                            key={year}
                            onClick={() => handleYearSelect(year)}
                            className='selectDIV'
                            style={{
                                fontSize: "16.67px",
                                padding: "0 0 2px",
                                marginBottom: "5px"
                            }}
                        >
                            {year}
                        </div>
                        ))}
                        </div>
                        )}
                        </div>


              <div className='left-title-list'>
              <p style={{fontSize: "14.67px", 
                           marginRight: "20px",  
                           marginTop: "12px"}}
                >Зарегистрировано: <span>12 576</span>
                </p>
                <p style={{fontSize: "14.67px", 
                           marginRight: "20px",  
                           marginTop: "12px"}}
                >На сайте: <span>576</span>
                </p>
                <button className='addList-btn'>Добавить список</button>
              </div>
              </div>
              <div className='search-container'>
                <input className='search-input' 
                onChange={(e) => setSearch(e.target.value)} 
                type='text' placeholder='Поиск по ИИН/БИН или наименование магазина' />
              </div>

          <div main class="table">
          <section class="table__body">
            <table>
                <thead>
                    <tr id="selectAll" >
                        <th> # </th>
                        <th> ИИН/БИН </th>
                        <th> Наименование </th>
                        <th> Регистрация </th>
                        <th> Активность </th>
                        <th> Статус </th>
                        <th> Действия </th>
                    </tr>
                </thead>
        
                <tbody>
                  {data.filter((item) =>{
                    return search.toLocaleLowerCase() === ''
                    ? item
                    :item['Магазин'].toLocaleLowerCase().includes(search);
                  }).map((item) =>(
                    <tr key={item['ИИН/БИН']} >
                      <th >{item['#']}</th>
                      <th>{item['ИИН/БИН']}</th>
                      <th>{item['Наименование']}</th>
                      <th>{item['Регистрация']}</th>
                      <th>{item['Активность']}</th>
                      <th style={{display: "flex", alignItems: "center"}}>
                        {item['Статус'] === 'Активная заявка'? <div style={{width: "5px", height: "5px", borderRadius: "50%", backgroundColor: "green", marginRight: "5px"}}></div> :
                        item['Статус'] === 'На соглосовании в СПК'? <div style={{width: "5px", height: "5px", borderRadius: "50%", backgroundColor: "yellow", marginRight: "5px"}}></div> : 
                        item['Статус'] === 'Отклонен в СПК (нет в наличии)' ? <div style={{width: "5px", height: "5px", borderRadius: "50%", backgroundColor: "red", marginRight: "5px"}}></div> :
                        item['Статус'] === 'Ожидает на складе' ?  <div style={{width: "5px", height: "5px", borderRadius: "50%", backgroundColor: "gray", marginRight: "5px"}}></div> :
                        item['Статус'] === 'Доставляется курьером' ?  <div style={{width: "5px", height: "5px", borderRadius: "50%", backgroundColor: "violet", marginRight: "5px"}}></div> : 
                        item['Статус'] === 'Отклонен магазигом' ?  <div style={{width: "5px", height: "5px", borderRadius: "50%", backgroundColor: "red", marginRight: "5px"}}></div> :
                        <div style={{width: "5px", height: "5px", borderRadius: "50%", backgroundColor: "white", marginRight: "5px"}}></div>}
                        {item['Статус']}
                      </th>
                      <th><button className='actions'>{item['Действия']}</button></th>
                  </tr>
                  ))}
                </tbody>
            </table>
          </section>
        </div>
            
          </div>
        </div>
        <div className='container'>
          <div className='count-and-pagination'>
          <div class="pagination-page">
                <div class="pagin" style={{ borderColor: "#fff", display: "flex"}}>
                  <a  style={{marginRight:"15px", marginLeft: "30px", fontSize: "16px"}}>&#10094;</a>
                    <a className='page' href="#" style={{ marginLeft: "8px", color: "#000"}}> 1 </a>
                    <a className='page' href="#" style={{ marginLeft: "5px", color: "#000"}}> 2 </a>
                    <a className='page' href="#" style={{ marginLeft: "5px", color: "#000"}}> 3 </a>
                    <span class="gap"  style={{ marginLeft: "15px",  width: "20px", height: "16px", color: "#000"}}> … </span>
                  <a style={{marginLeft: "15px", fontSize: "16px"}}>&#10095;</a>
                </div>
           </div>
          <select style={{ width: "50px",
                        fontSize: "16px", 
                        height: "32px", 
                        marginTop: "20px",
                        border: "none",
                        borderRadius: "3px",
                        backgroundColor: "#fff",
                        alignItems: "center",
                        textAlign: "center",
                        boxShadow: " #000"}}>
            <option>20</option>
            <option>25</option>
            <option>30</option>
            <option>35</option>
          </select>
          </div>
        </div>
      </div>
    <SPKFooter />
    </>
  )
}

export default StocksAndShops