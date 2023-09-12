import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import Product from '../../assets/product.png'
import ArrowLeft from '../../assets/carousel-arrow-left.png'
import ArrowRight from '../../assets/carousel-arrow-right.png'
import { Footer } from '../../components/Footer/Footer'
import './MainPage.css'

const Mainpage = () => {

  const [information, setInformation] = useState(0);





  return (
    
    <>
      <Header pageName = "Home" />
      <main className='home-main'>
        <div className='container'>
          <div className='main-page__intro'>
            <div className='product-info'>
              <h1 className='product-info__h1'>Социально значемые продавольственные товары</h1>
              <p className='product-info__p'>
                Постоновление Правительства Республики Казахстан от 1 марта 2010 года № 145 
                "Об утверждении перечня социально значимых продовольственных товаров"
              </p>
              <button className='product-list'>
                Перечень товаров
              </button>
            </div>
            <img src={Product} alt='intro' style={{width: "350px", height: "516px", marginRight: "60px"}} />
          </div>
          <div className='information-carusel'>
            <img src={ArrowLeft} alt='arrow-left' style={{ marginRight: "28px", cursor: "pointer"}} 
              onClick={() => {
              if (information > 0) {
                setInformation(information - 1);
              }
            }}/>
            
            <div className='information-tabs'>
              <div className={ information === 0 ? "information-tab information-tab__active" : "information-tab"}>
                Уголовная ответственность
                </div>
            
                <div className={ information === 1 ? "information-tab information-tab__active" : "information-tab"}>
                Пользовательское соглашение
              </div>

              <div className={ information === 2 ? "information-tab information-tab__active" : "information-tab"}>
                Инструкция по использованию
              </div>
            </div>
            <img src={ArrowRight} alt='arrow-right' style={{ marginLeft: "28px", cursor: "pointer" }} 
              onClick={() => {
                if (information < 2) {
                  setInformation(information + 1);
                }
              }}/>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Mainpage