import {IoLogoWhatsapp} from 'react-icons/io5'

import Header from '../Header'
import './index.css'

const Booking = () => (
  <>
    <div className='wave'>{}</div>
    <div className='contact-bg-container'>
      <Header />
      <div className='home-container'>
        <div className='home-content'>
          <h1 className='heading'>DROP BY OR SAY HELLO!</h1>
          <p className='paragraph'>Whatsup Us Your Requirement!</p>
        </div>
        <button type='button' className='button'>
          <IoLogoWhatsapp />
          <p>900-000-0000</p>
        </button>
      </div>
    </div>
  </>
)

export default Booking
