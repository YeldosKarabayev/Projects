import React, { useState } from 'react'
import {data} from '../../../../data/data.js'
import './SPKAdminPanel.css'
import SPKHeader from '../../../../components/SPKHeader/SPKHeader.jsx';
import { Footer } from '../../../../components/Footer/Footer.jsx';
import SPKFooter from '../../../../components/SPKFooter/SPKFooter.jsx';
import Pagination from '../../../../components/Pagination/Pagination.jsx';
import Table from '../../../../components/Table/Table.jsx';

const SPKAdminPanel = () => {

  const [isActive, setIsActive] = useState(false);


  const [click, setClick] = useState(false)
  const handleClick = () => {

   setClick(!click);
   setIsActive(current => !current); }

  const [search, setSearch] = useState('');
    console.log(search)

    // Tблица

    const [currentPage, setCurrentPage] = useState(1);

  // Ваши данные таблицы
  const tableData = [data]; // Замените на ваши данные

  // Количество записей, которые вы хотите отображать на одной странице
  const pageSize = 10;

  // Вычислите общее количество страниц на основе данных и размера страницы
  const totalPages = Math.ceil(tableData.length / pageSize);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Получите подмножество данных для отображения на текущей странице
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentPageData = tableData.slice(startIndex, endIndex);


  return (
    <>
    <SPKHeader/>
      <div className='wrapper' style={{ backgroundColor: "#F8F8F8"}}>
      <div className='title-list-application' style={{backgroundColor: "#fff"}}>
        <div className='container'style={{backgroundColor: "#fff"}}>
          <h1 style={{ alignItems: "center", 
                      justifyContent:"center", 
                      textAlign:"center", 
                      paddingTop: "22px", 
                      backgroundColor: "#fff"}}
          >Реестр заявок на продукты</h1>
        </div>
        </div>
      <div className='container' >
        {/*}
        <div className='main-table'>
            <div className='title-list'>
              <h4 style={{ fontSize: "22px"}}>Список заявок</h4>
              <div className='left-title-list'>
                <p style={{fontSize: "14.67px", marginRight: "20px",  marginTop: "12px"}}>Количество заявок: <span>576</span></p>
                <button className='download-btn'>Скачать</button>
              </div>
              </div>
              <div className='search-container'>
                <input className='search-input' onChange={(e) => setSearch(e.target.value)} type='text' placeholder='Поиск по ID заявки / наименование продукта' />
              </div>

          <div main class="table">
          <section class="table__body">
            <table>
                <thead>
                    <tr id="selectAll" >
                        <th> # </th>
                        <th> ID заявки </th>
                        <th> Дата создания </th>
                        <th> Магазин </th>
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
            */}
            <Table data={currentPageData} />

        </div>
        <div className='container'>
          
          <div className='count-and-pagination'>
            {/*
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
          */}
          <Pagination 
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}/>
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

export default SPKAdminPanel