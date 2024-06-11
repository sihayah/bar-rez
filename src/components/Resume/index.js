import React, { useState } from 'react';
import clickem from '../../assets/click-icon.webp';
import silhouette from '../../assets/mixing.jpg';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowDown, faX, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Element, animateScroll as scroll, scroller } from 'react-scroll';
import { Link, useLocation } from 'react-router-dom';


const Resume = () => {

    const [visible, setVisible] = useState(false);

    function toggleVisible() {
        if (visible === false) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };

    const scrollToArticle = () => {
        scroll.scrollTo('300', {
            duration: 100,
            delay: 100,
            smooth: true,
        })
    };

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    const toggleButton = () => {
        if (visible === false) {
            return(
                <>
                   {/* <FontAwesomeIcon onClick={scrollToArticle} className='hidden-click' id='down' icon= { faArrowDown } />  */}
                    <img alt="clickem" className="clickem"  onClick={scrollToArticle} src={clickem}/>
                </>
            )
        } else {
                return( 
                    <FontAwesomeIcon onClick={scrollToTop} icon={ faX } className='x-icon' />
                )    
            }
    }

    return (
        <section className="about">
            <header>
                    sihaya harris
                </header>
            <div className="intro-menu">
                
                <a href="mailto:sihayaharris@gmail.com">
                    <button>
                        
                        e-mail me
                        <span className='intro-menu-arrow'>{'\u2192'}</span>
                    </button>
                                            
                </a>  
        
            </div> 
            <div className='hero'>
                <img alt="silhouette" className="silhouette" src={silhouette}/>
                <h2>
                    Hello, there! I am Sihaya Harris, a dynamic and seasoned<span className='highlight'> bartender </span> who's been shaking things up in the food and beverage industry for years. Renowned for innovation, adaptive collaboration, and expertise in crafting drinks inspired by sense memory and novel ingredients.
                </h2>
            </div>

            <div className="intro">
                <span className='bio-btn' onClick={toggleVisible}>
                    <h3>
                    view my resume
                    </h3> 
                    <button className="arrow-btn" onClick={toggleVisible}>
                        {toggleButton()}
                    </button>
                </span>  
                <span id='aboutContainer'>
                    <article id='about-text' name='aboutText' style={{display: visible ? 'inline-block' : 'none'}}>
                      
                
                        <p className='rez-title'>SKILLS &amp; QUALIFICATIONS </p>
                        <p>                            
                            <ul>
                                <li><span>Efficient high-volume cocktail preparation</span></li>
                                <li ><span>Knowledge of creative and classic cocktails </span></li>
                                <li ><span>spirits, wine, and beer knowledge</span></li>
                                <li ><span>NYC Food Protection Certificate</span></li>
                            </ul>
                            </p>    

                       <p className='rez-title'> EXPERIENCE</p>
                       
                       <p><span class="rez-date">March 2023 - present / &nbsp;</span><span>Littlefield</span><span>, Brooklyn, NY – </span><span>Bartender</span></p>
                       <ul>
                            <li ><span>High volume</span><span>&nbsp;cocktail/beverage preparation for a diverse array of rotating events</span></li>
                            <li ><span>Accomplished stakeholder management via reports on event sales, client feedback, and insights on-going programming improvements</span></li>
                            <li ><span>Optimized system for service saving time by up to 5 hours per week and increasing sales potential by 16.5%</span></li>
                            <li ><span>Achieved ideation of unique product development for each quarterly menu, iterating and improving upon previous menus based on participant feedback</span></li>
                            <li ><span>Documented and maintained beverage &nbsp;inventories</span></li>
                        </ul>
                       
                       <p><span class="rez-date">May 2022 - April 2023 /</span><span>&nbsp;</span><span>Canary Club</span><span>, New York, NY – </span><span>Bartender</span></p>
                       <ul>
                            <li ><span >Contributed a high level of technical skill and composure leading to a thriving team in a fast-paced and high-intensity environment with multiple venues </span></li>
                            <li ><span >Established record sales in the Winter quarter</span></li>
                            <li ><span >Established rapport and communicated adaptively with guests to provide excellent customer service and maintained a returning customer base</span></li>
                        </ul>
                        <p><span className='rez-date'>Sept 2021 - Aug 2022 / &nbsp;</span><span>Insa</span><span>, Brooklyn, NY – </span><span>Bartender</span></p>
                       <p> <span className='rez-date'>March 2020 - Aug 2021 </span>/ &nbsp;<span>Abilene</span><span>, Brooklyn, NY – </span><span>Bartender</span></p><p><span className='rez-date'>Nov 2019 - Jan 2020 / </span><span>Lyan-ess </span><span>avant-garde, cocktail residency, New York, NY – </span><span>Bartender</span></p><p class="c10 c16"><span ></span></p>
                       
                       <p className="rez-title">AWARDS</p><p><span className='rez-date'>Aug 2001 </span><span >Bombay Sapphire Canvas Project, </span><span>featured finalist</span></p><p ><span></span></p>
                       
                       <p class="rez-title">EDUCATION</p><p><span >Bachelor of Fine Arts, </span><span>Summa cum laude</span></p><p><span className='rez-date'>Aug 2008 - May 2012 </span> | Savannah College of Art &amp; Design, Savannah, Ga</p><p ><span ></span></p><p><span >&nbsp; </span></p>
                        

                    </article>   
                                     
                </span> 
            </div>              
        </section>
    )
};

export default Resume;