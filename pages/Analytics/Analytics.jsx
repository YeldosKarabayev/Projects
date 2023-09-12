import React, {useState} from 'react'
import {
  Chart as ChartJS,
  BarElement,
  LinearScale,
  CategoryScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Bar} from 'react-chartjs-2';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  BarElement,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

import { NavLink } from 'react-router-dom'
import SPKHeader from '../../components/SPKHeader/SPKHeader'
import SPKFooter from '../../components/SPKFooter/SPKFooter';
import padlock from '../../assets/padlock.png';
import rightArrow from '../../assets/down-right-arrow.png'
import arrowDown from '../../assets/arrow-down.png'
import arrowUp from '../../assets/arrow-up.png'
import {productData} from '../../data/productData.js'
import Calendar from '../../components/Calendar/Calendar.js';



const Analytics = () => {

  const data = {
    column: [],
    labels: ["01.01", "01.01", "01.01", "01.01", "01.01","01.01",
              "01.01", "01.01", "01.01", "01.01", "01.01","01.01",
              "01.01", "01.01", "01.01", "01.01", "01.01","01.01",
              "01.01", "01.01", "01.01", "01.01", "01.01","01.01"
            ],
    datasets: [
      {
        label: 'Количество заявок',
        data: [3, 4, 5, 3, 5, 4, 
               3, 4, 5, 3, 2, 1,
               3, 4, 5, 3, 5, 4, 
               3, 4, 5, 3, 2, 1],

        backgroundColor: "#F86622",
        borderColor: "#F86622",
        borderWidth: 3,
      },
      {
        label: 'Откланено магазином',
        data: [5, 3, 2, 3, 4, 4, 
               3, 4, 2, 3, 1, 3,
               5, 3, 2, 3, 4, 4, 
               3, 4, 2, 3, 1, 3],

        backgroundColor: "#672D9B",
        borderColor: "#672D9B",
        borderWidth: 3,
      },
    ]
  }

  const options = {

  }


  const activeLink = 'nav-list-link nav-list-link--active';
  const normalLink = 'nav-list-link ';

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



  const [isActive, setIsActive] = useState(false);
  const [click, setClick] = useState(false)
  const handleClick = () => {

   setClick(!click);
   setIsActive(current => !current); }

  const [search, setSearch] = useState('');
    console.log(search)


    const [currentForm, setCurrentForm] = useState('start');
    const [currentPeriodLine, setCurrentPeriodLine] = useState('start');

    const [currentPeriodBar, setCurrentPeriodBar] = useState('start');

    const handleOpenForm = () => {
        setCurrentForm('new');
    };

    const handleCancel = () => {
      setCurrentForm('start');
  };

    const handleOpenPeriodLine = () => {
      setCurrentPeriodLine('new');
  };

    const handleCancelPeriodLine = () => {
      setCurrentPeriodLine('start');
  };

  const handleOpenPeriodBar = () => {
    setCurrentPeriodBar('new');
};

  const handleCancelPeriodBar = () => {
    setCurrentPeriodBar('start');
};

    const [isOpened, setIsOpened] = useState(false);
    const handleToggles = () => {
      setIsOpened(!isOpened);
    };


    const [isOpenedLine, setIsOpenedPeriodLine] = useState(false);
    const handleTogglesLine = () => {
      setIsOpenedPeriodLine(!isOpenedLine);
    };


    const [isOpenedBar, setIsOpenedPeriodBar] = useState(false);
    const handleTogglesBar = () => {
      setIsOpenedPeriodBar(!isOpenedBar);
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
    <SPKHeader pageName={'any'} />
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
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    marginTop: "1rem",
                    }}
                >
                    <h1 style={{ 
                          alignItems: "center", 
                          justifyContent:"center", 
                          textAlign:"center", 
                          paddingTop: "22px",
                        marginLeft: "480px"}}
                    >Аналитика</h1>
                    <button className='download-btn' style={{marginTop: "24px", marginLeft: "290px"}}>Скачать</button>
                </div>
            </div>
        </div>
    <div className='container'>
            <div style={{display: "flex"}}>
                <div
                  style={{
                    display: "grid",
                    alignItems: "center",
                    width: "16%",
                    height: "max-content",
                    backgroundColor: "#fff",
                    marginTop: "1rem",
                    padding: "2rem"}}>
                    <NavLink
                        className={({isActive}) => isActive ? activeLink: normalLink}
                        to="/analytics" style={{fontSize: "16px", fontWeight: "600"}}>Отсчет онлайн
                    </NavLink>
                </div>

                <div style={{display: "grid", width: "84%"}}>
                <div 
                   style={{
                    width: "98%",
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
                        alignItems: "center",
                        }}
                    >
                        <p style={{fontSize: "25px"}}>Все данные по системе</p>
                        
                    </div>
                    <div style={{display: "flex", justifyContent: "space-between", marginTop: "2rem"}}>
                          <div style={{display: "grid"}}>
                            <p>Складов</p>
                            <span style={{marginBottom: "1rem", fontSize: "28px", fontWeight: "600"}}>15</span>
                            <div style={{display: "flex"}}>
                              <img style={{width: "16px", height: "16px", marginRight: "5px"}} src={padlock} alt="padlcok" />
                              <span style={{fontSize: "16px", fontWeight: "600"}}>0</span>
                            </div>
                          </div>
                          <div style={{width: "0", height: "100px", border: "2px solid #F7FAFC"}} />
                          <div style={{display: "grid"}}>
                            <p>Магазинов</p>
                            <span style={{marginBottom: "1rem", fontSize: "28px", fontWeight: "600"}}>517</span>
                            <div style={{display: "flex"}}>
                              <img style={{width: "16px", height: "16px", marginRight: "5px"}} src={padlock} alt="padlcok" />
                              <span style={{fontSize: "16px", fontWeight: "600"}}>17</span>
                            </div>
                          </div>
                          <div style={{width: "0", height: "100px", border: "2px solid #F7FAFC"}} />
                          <div style={{display: "grid"}}>
                            <p>Всего заявок</p>
                            <span style={{marginBottom: "1rem", fontSize: "28px", fontWeight: "600"}}>517 119</span>
                            <div style={{display: "flex"}}>
                              <img style={{width: "16px", height: "16px", marginRight: "5px"}} src={rightArrow} alt="padlcok" />
                              <span style={{fontSize: "16px", fontWeight: "600"}}>179</span>
                            </div>
                          </div>
                          <div style={{width: "0", height: "100px", border: "2px solid #F7FAFC"}} />
                          <div style={{display: "grid"}}>
                            <p>Заявок сегодня</p>
                            <span style={{marginBottom: "1rem", fontSize: "28px", fontWeight: "600"}}>17</span>
                            <div style={{display: "flex"}}>
                              <img style={{width: "16px", height: "16px", marginRight: "5px"}} src={rightArrow} alt="padlcok" />
                              <span style={{fontSize: "16px", fontWeight: "600"}}>0</span>
                            </div>
                          </div>
                      </div>
                      
                </div>
                <div 
                   style={{
                    width: "98%",
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
                        <p style={{fontSize: "25px"}}>Пульс заявок</p>
            <div 
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "1rem"
                }}
            >

              <div onClick={handleOpenPeriodLine}>
                {currentPeriodLine === 'start' && (
                  <button onClick={handleTogglesLine}
                      style={{
                          display: "flex",
                          justifyContent: "space-evenly",
                          alignItems: "center",
                          width: "110px",
                          height: "36px",
                          fontSize: "15px",
                          fontWeight: "600"
                        }}>
                                <h1 style={{ 
                                      fontSize: "15px",
                                      fontWeight: "600"}}
                                >Период</h1>
                                <img src={arrowDown} style={{width: "12px"}} alt='down-arrow' />
                            </button>
                        )}
                        </div>

                        <div onClick={handleCancelPeriodLine}>
                        {currentPeriodLine === 'new' && (
                        <button onClick={handleTogglesLine}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-evenly",
                                width: "110px",
                                height: "36px",
                                fontSize: "15px",
                                fontWeight: "600"
                            }}>
                                <h1 style={{ 
                                      fontSize: "15px",
                                      fontWeight: "600"}}
                                >Период</h1>
                                <img src={arrowUp} style={{width: "12px"}} alt='down-arrow' />
                            </button>
                        )}
                        </div>
                        </div>
                        {isOpenedLine && ( 
                          <div 
                            style={{
                              position: "absolute",
                              marginTop: "40px",
                              marginLeft: "700px"
                          }}>
                            <Calendar />
                          </div>
                        )}
                    </div>
                    
                    <div className='form-group'>
                            <div className='dropdowne'>
                                <button className='dropdown-button' 
                                    style={{ 
                                        marginTop: "1rem", 
                                        marginBottom: "2rem",
                                        width: "80%", 
                                        height: "40px"
                                      }} 
                                    onClick={(e) => setIsActive(!isActive)} >
                                        {selected}
                                </button>
                                {isActive && (
                                <ul className='dropdown__list' style={{width: "80%"}}>
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
                    <div>
                    <Line
                        style={{ height: "200px", width: "100%"}}
                        data = {data}
                        options={options}
                      ></Line>
                    </div>
                    </div>
                <div 
                   style={{
                    width: "98%",
                    height: "max-content",
                    backgroundColor: "#fff",
                    marginTop: "1rem",
                    marginLeft: "1rem",
                    padding: "2rem"
                   }}>
            <div style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
            <div 
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "1rem"
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

            <div 
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "1rem"
                }}
            >

              <div onClick={handleOpenPeriodBar}>
                {currentPeriodBar === 'start' && (
                  <button onClick={handleTogglesBar}
                      style={{
                          display: "flex",
                          justifyContent: "space-evenly",
                          alignItems: "center",
                          width: "110px",
                          height: "36px",
                          fontSize: "15px",
                          fontWeight: "600"
                        }}>
                                <h1 style={{ 
                                      fontSize: "15px",
                                      fontWeight: "600"}}
                                >Период</h1>
                                <img src={arrowDown} style={{width: "12px"}} alt='down-arrow' />
                            </button>
                        )}
                        </div>

                        <div onClick={handleCancelPeriodBar}>
                        {currentPeriodBar === 'new' && (
                        <button onClick={handleTogglesBar}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-evenly",
                                width: "110px",
                                height: "36px",
                                fontSize: "15px",
                                fontWeight: "600"
                            }}>
                                <h1 style={{ 
                                      fontSize: "15px",
                                      fontWeight: "600"}}
                                >Период</h1>
                                <img src={arrowUp} style={{width: "12px"}} alt='down-arrow' />
                            </button>
                        )}
                        </div>
                        </div>
                        {isOpenedBar && ( 
                          <div 
                            style={{
                              position: "absolute",
                              marginTop: "40px",
                              marginLeft: "700px"
                          }}>
                            <Calendar />
                          </div>
                        )}
                      </div>


                        <div className='form-group'>
                            <div className='dropdowne'>
                                <button className='dropdown-button' 
                                    style={{ 
                                        position: "relative",
                                        marginTop: "1rem", 
                                        marginBottom: "2rem",
                                        width: "80%", 
                                        height: "40px"
                                      }} 
                                      onClick={handleToggles} >
                                        {selected}
                                </button>
                                {isOpened && (
                                <ul className='dropdown__list' style={{width: "80%"}}>
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

                    <div>
                      <Bar
                        style={{ height: "200px", width: "100%"}}
                        data = {data}
                        options={options}
                      ></Bar>
                    </div>
                    </div>
                </div>
            </div>
    </div>
    <SPKFooter />
    </>

  )
}

export default Analytics