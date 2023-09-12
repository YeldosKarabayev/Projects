import React, {useState} from 'react'
import { Link } from "react-router-dom"
import Logo from '../../assets/Logo.png'
import Global from '../../assets/global.png'
import DownArrow from '../../assets/down-arrow-of-angle.png'


import './SPKFooter.css'

const SPKFooter = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [selectedYear, setSelectedYear] = useState(null);
  const years = ["Қазақша", "Русский"]; 

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleYearSelect = (year) => {
    setSelectedYear(year);
    setIsOpen(false);
  }


  return (
    <footer className='footer' style={{ backgroundColor: "#fff"}}>
      <div className='footer-line' style={{ backgroundColor: "#fff"}}>
        <div className='container' style={{backgroundColor: "#fff"}}>
          <div className='footer-layout'>
            <div className='footer-logo'>
              <Link to="/">
                <img src={Logo} style={{width: "190px", height:"80px"}} alt="logo" />
              </Link>
              <p>© 2023.Реестр социально-значимых продовольственных товаров(СЗПТ)</p>
            </div>
            <div style={{display: "flex", marginLeft: "140px",
                          fontSize: "22px", 
                          fontWeight: "600",
                          color: "#000",
                          marginTop: "62px"}}>
                <Link>Склады / магазины</Link>
                <Link style={{marginLeft: "35px"}}>Аналитика</Link>
              </div>
              <div className='footer-language'>
                <img src={Global} alt='language'
                style={{width: "22px", height: "22px", marginRight: "15px"}} />
                <button onClick={handleToggle}
                      style={{
                          display: "flex",
                          justifyContent: "space-evenly",
                          alignItems: "center",
                          width: "110px",
                          height: "36px",
                          fontSize: "16.67px",
                          fontWeight: "600"
                        }}>
                                {selectedYear ? selectedYear : 'Русский'}
                                <img src={DownArrow} style={{width: "12px"}} alt='down-arrow' />
                            </button>
                {isOpen && (
                        <div className='dropHover'
                            style={{
                                position: "absolute",
                                padding: "0px",
                                borderRadius: "7px",
                                textAlign: "center",
                                width: "106px",
                                marginLeft: "35px",
                                height: "75px",
                                backgroundColor: "#fff",
                                boxShadow: "0px 0px 1px 1px rgba(169, 169, 169, 0.5)",
                                marginTop: "100px",
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
          </div>
        </div>
      </div>
    </footer>
  )
}

export default SPKFooter