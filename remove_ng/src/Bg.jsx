import { useState } from 'react'
import './Bg.css'
import close_img from './assets/close.png';
import banner from './assets/banner.png';
import logo from './assets/logo.png';
function Bg() {


  return (
    <>
    <div className='bg_cont'>
       <img src={close_img} className='close_img'/>


       <h1 className='bg_title'>העלאת תמונה כדי להסיר את הרקע</h1>
       
       <div>
        <button className='upload_img_btn'>העלאת תמונה</button>
        <div className='upload_img_text'>פורמטים נתמכים png,jpg</div>
       </div>

        <div className='middle_div_cont'>
          <div className='left_div_cont'>

          </div>
          <div className='right_div_cont'></div>
        </div>

         <div className='footer_cont'>
          <img src={banner}></img>
            <img src={logo} className='logo'></img>
         </div>

    </div>
    </>
  )
}

export default Bg
