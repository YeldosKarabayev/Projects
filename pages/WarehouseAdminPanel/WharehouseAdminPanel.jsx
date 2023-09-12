import React, { useState } from 'react'
import {data} from '../../data/data.js'
import { Footer } from '../../components/Footer/Footer'
import './WharehouseAdminPanel.css'
import WhHeader from '../../components/WharehouseHeader/WhHeader';

const WharehouseAdminPanel = () => {

  const [isActive, setIsActive] = useState(false);


  const [click, setClick] = useState(false)
  const handleClick = () => {

   setClick(!click);
   setIsActive(current => !current); }



  const [search, setSearch] = useState('');
    console.log(search)

    let [num, setNum] = useState(1)
    let [cur, setCur] = useState(1)

    const pages = [
      { page: num },
      { page: num + 1 },
      { page: num + 2 },
      { page: num + 3 },
    ]
    function Next ()
    {
      setNum(++num)
    }
    function back ()
    {
      num > 1 && setNum(--num)
    }

  return (
    <>
    <WhHeader />
      <div className='wrapper' style={{ backgroundColor: "#F8F8F8"}}>
      <div className='title-list-application' style={{backgroundColor: "#fff"}}>
        <div className='container'style={{backgroundColor: "#fff"}}>
          <h1 style={{ alignItems: "center", 
                      justifyContent:"center", 
                      textAlign:"center", 
                      paddingTop: "22px", 
                      backgroundColor: "#fff"}}
          >Заявки на продукты</h1>
        </div>
        </div>
      <div className='container' >
        <div className='main-table'>
            <div className='title-list'>
              <h4 style={{ fontSize: "22px"}}>Список список</h4>
              <div className='left-title-list'>
                <p style={{fontSize: "14.67px", marginRight: "40px", marginTop: "14px"}}>Количество заявок: <span>576</span></p>
                <button className='applicaation-btn'>Скачать список</button>
              </div>
              </div>
              <div className='search-container'>
                <input className='search-input' 
                  onChange={(e) => setSearch(e.target.value)} type='text' 
                  placeholder='Поиск по ID заявки / наименование продукта' />
              </div>

          <div main class="table">
          <section class="table__body">
            <table>
                <thead>
                    <tr id="selectAll" >
                        <th> # </th>
                        <th> ID заявки </th>
                        <th> Дата</th>
                        <th> Продукты </th>
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
                    <tr key={item['ID заявки']} >
                      <th >{item['#']}</th>
                      <th>{item['ID заявки']}</th>
                      <th>{item['Дата создания']}</th>
                      <th>{item['Магазин']}</th>
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
    <Footer />
    </>
  )
}

export default WharehouseAdminPanel