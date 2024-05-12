import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import Hero from '../../components/hero/Hero'
import Info from '../../components/info/Info'
import Doctors from '../../components/doctors/Doctors'
import './Home.css'
import About from '../aboutus/About'

export const Home = () => {
  return ( 
    <div className='container'>

        <div className='navbar'>
        <Navbar/>
        </div>

        <div className='content'>
        <Hero/>
        <Info/> 
        <Doctors/>
        <About/>
        </div>

        <div className='footer'>
        <Footer/>     
        </div>

    </div>
  )
}
