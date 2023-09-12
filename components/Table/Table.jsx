import React, {useState} from 'react'
import {data} from '../../data/data.js'

const Table = () => {

    const [search, setSearch] = useState('');
    console.log(search)

  return (
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
  )
}

export default Table