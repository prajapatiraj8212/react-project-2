import React from 'react'
import './Header.css'
import img1 from './images/img1.png'
import img2 from './images/img2.png'
import Nav from './Nav'


function Header() {
  return (
    <div className='header'>
    <div className='d-flex justify-content-around  mt-1'>
       <div>
       <img src={img1} alt=''/>
       </div>
       <div className='d-flex align-items-center'>
       <h2> Department of Uttar Pradesh Police</h2>
       </div>
       <div>
       <img src={img2} alt=''/>
       </div>
    </div>
    <Nav/>
    </div>
  )
}

export default Header
