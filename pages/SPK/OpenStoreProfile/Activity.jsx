import React, {useState} from 'react'
import SPKHeader from '../../../components/SPKHeader/SPKHeader'
import SPKFooter from '../../../components/SPKFooter/SPKFooter'
import leftArrow from '../../../assets/arrow-pointing-to-left.png'
import { NavLink } from 'react-router-dom'
import {dataActivity} from '../../../data/dataActivity.js'

const Activity = () => {

  const activeLink = 'nav-list-link nav-list-link--active';
  const normalLink = 'nav-list-link ';

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
                        <p>Список заявок</p>
                        <div 
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center"
                        }}
                        >
                        <div 
                            style={{fontSize: "13px"}}
                        >
                            Количество заявок: <span>576</span>
                        </div>
                        <button
                            style={{
                                width: "110px",
                                height: "36px",
                                fontSize: "15px",
                                border: "2px solid #cac9c9"
                            }}>Скачать</button>
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
                        placeholder='Поиск по ID заявки ' />
                    </div>
                    <div 
                       style={{
                        width: "100%",
                        overflow: "hidden",
                        height: "auto",
                        backgroundColor: "#fff5",
                        marginTop: "1rem"
                       }}>
                    <section 
                        style={{
                          width: "100%",
                          overflow: "auto",
                          overflow: "overlay",
                          }}>
                      <table 
                        style={{
                          alignItems: "center",
                          width: "96%",
                          marginLeft: "2rem"
                        }}>
                      <thead style={{width: "100%"}}>
                        <tr >
                          <th> # </th>
                          <th> ID заявки </th>
                          <th> Дата создания</th>
                          <th> Статус </th>
                          <th> Действия </th>
                        </tr>
                      </thead>
        
                <tbody>
                  {dataActivity.filter((item) =>{
                    return search.toLocaleLowerCase() === ''
                    ? item
                    :item['Магазин'].toLocaleLowerCase().includes(search);
                  }).map((item) =>(
                    <tr key={item['ID заявки']} >
                      <th >{item['#']}</th>
                      <th>{item['ID заявки']}</th>
                      <th>{item['Дата создания']}</th>
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
                <div className='count-and-pagination' style={{width: "80%", marginLeft: "150px"}}>
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

export default Activity