import React, {useState} from 'react'
import SPKHeader from '../../../components/SPKHeader/SPKHeader'
import SPKFooter from '../../../components/SPKFooter/SPKFooter'
import leftArrow from '../../../assets/arrow-pointing-to-left.png'
import { NavLink } from 'react-router-dom'
import {whInventory} from '../../../data/WareHouseInventory.js'
import edit from '../../../assets/edit-page.png'
import arrowDown from '../../../assets/arrow-down.png'
import arrowUp from '../../../assets/arrow-up.png'

const WareHoseInventory = () => {


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



    const [isOpen, setIsOpen] = useState(false);
    const [selectedYear, setSelectedYear] = useState(null);
    const years = ["Все годы", 2022, 2023]; 
  
    const handleToggle = () => {
      setIsOpen(!isOpen);
    };
  
    const handleYearSelect = (year) => {
      setSelectedYear(year);
      setIsOpen(false);
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
                    >Анкета склада</h1>
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
                    ИИН/БИН склада: 
                    <span style={{color: "#FFB514"}}> 912399149</span>
                </button>
                <button
                    className='btn-blocked'
                    style={{
                        width: "220px",
                        height: "42px",
                        fontSize: "13px",
                        border: "2px solid #cac9c9",
                        marginLeft: "500px"
                    }}>Заблокировать пользователья</button>
                
            </div>
            </div>
            <div style={{display: "flex"}}>
                <div
                  style={{
                    display: "grid",
                    alignItems: "center",
                    width: "20%",
                    height: "200px",
                    backgroundColor: "#fff",
                    marginTop: "1rem",
                    padding: "2rem"}}>
                    <NavLink 
                        className={({isActive}) => isActive ? activeLink: normalLink}
                        to="/activity" style={{fontSize: "14.67px"}}>Анкета пользователья</NavLink>
                    <NavLink
                        className={({isActive}) => isActive ? activeLink: normalLink}
                        to="/whinventory" style={{fontSize: "14.67px"}}>Запасы склада</NavLink>
                    <NavLink
                        className={({isActive}) => isActive ? activeLink: normalLink}
                        to="/activitywh" style={{fontSize: "14.67px"}}>Активность</NavLink>
                    <NavLink
                        className={({isActive}) => isActive ? activeLink: normalLink}
                        to="/historyinputs" style={{fontSize: "14.67px"}}>История входов</NavLink>
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
                        <p>Запасы склада</p>
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
                                border: "2px solid #cac9c9"
                            }}>
                                {selectedYear ? selectedYear : 'Все год'}
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
                                border: "2px solid #cac9c9"
                            }}>
                                {selectedYear ? selectedYear : 'Все год'}
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
                                marginTop: "167px",
                                cursor: "pointer"
                            }}>
                            {years.map((year) => (
                        <div
                            key={year}
                            onClick={() => handleYearSelect(year)}
                            className='selectDIV'
                            style={{
                                fontSize: "16.67px",
                                padding: "0 0 10px",
                            }}
                        >
                            {year}
                        </div>
                        ))}
                        </div>
                        )}
                        </div>
                    </div>
                    <div 
                       style={{width: "100%", 
                              fontSize: "16.67px",
                              marginTop: "1rem"}}>
                      <input 
                         style={{
                          width: "100%", 
                          height: "42px", 
                          border: "2px solid #0095E0",
                          padding: "1rem"}} 
                        onChange={(e) => setSearch(e.target.value)} type='text' 
                        placeholder='Наименование продкута ' />
                    </div>
                    <div 
                       style={{
                        position: "initial",
                        width: "97%",
                        overflow: "hidden",
                        height: "auto",
                        backgroundColor: "#fff5",
                        marginTop: "1rem"
                       }}>
                    <section 
                        style={{
                          position: "initial",
                          overflow: "auto",
                          overflow: "overlay",
                          }}>
                      <table 
                        style={{
                          position: "initial",
                          alignItems: "center",
                          width: "96%",
                          marginLeft: "2rem"
                        }}>
                      <thead style={{width: "100%"}}>
                        <tr >
                          <th> # </th>
                          <th> Наименование продукта </th>
                          <th> Измерение </th>
                          <th style={{display: "flex", alignItems: "center"}}>
                             Количество 
                             <img src={edit} alt="edit-icon"
                             style={{width: "15px" , height: "15px", marginLeft: "5px"}} /></th>
                        </tr>
                      </thead>
        
                        <tbody>
                          {whInventory.filter((item) =>{
                          return search.toLocaleLowerCase() === ''
                            ? item
                            :item['Магазин'].toLocaleLowerCase().includes(search);
                            }).map((item) =>(
                            <tr key={item['Наименование продукта']} >
                              <th >{item['#']}</th>
                              <th>{item['Наименование продукта']}</th>
                              <th>{item['Измерение']}</th>
                              <th><input
                                  type='text'
                                  placeholder='12000000'
                                style={{
                                    width: "105px",
                                    height: "30px",
                                    border: "1px solid #cac9c9",
                                    padding: "0 1rem",
                                    backgroundColor: "#fff"
                                }}
                              >{item['Количество']}</input></th>
                            </tr>
                            ))}
                        </tbody>
                      </table>
                    </section>
                    <button 
                        style={{
                            width: "140px",
                            height: "40px",
                            border: "1px solid #cac9c9",
                            backgroundColor: "#0095E0",
                            color: "#fff",
                            marginTop: "2rem",
                            marginLeft: "2rem",
                            fontSize: "16.67px"
                        }}>
                        Сохранить
                    </button>
                    </div>
                </div>
            </div>
        </div>
    <SPKFooter />
    </>
  )
}

export default WareHoseInventory