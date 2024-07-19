import {Link} from 'react-router-dom'
import {FaCaretDown} from 'react-icons/fa'
import Popup from 'reactjs-popup'
import DatePicker from 'react-calendar'
import {IoClose} from 'react-icons/io5'
import {useState} from 'react'

import 'react-calendar/dist/Calendar.css'

import './index.css'

const Header = () => {
  const [date, setDate] = useState([
    new Date(2024, 6, 26),
    new Date(2024, 6, 28),
  ])
  return (
    <nav className='nav-header'>
      <img
        className='logo'
        src='https://res.cloudinary.com/ds1piowcn/image/upload/t_bug/v1719815927/logo_new_mlwsry.jpg'
        alt='logo'
      />

      <ul className='nav-menu'>
        <li>
          <Link to='/' className='nav-link'>
            Home
          </Link>
        </li>
        <li>
          <Link to='/about' className='nav-link'>
            about
          </Link>
        </li>
        <li>
          <Popup
            trigger={
              <button className='trigger-button' type='button'>
                Service <FaCaretDown className='down-btn' />
              </button>
            }
          >
            <div className='draw-box'>
              <p>Thought Quality</p>
              <p>Thought Design</p>
              <p>Thought Code</p>
              <p>Thought Ops</p>
              <p>Thought Digital</p>
            </div>
          </Popup>
        </li>
        <li>
          <Link to='/getonboard' className='nav-link'>
            Get onboard
          </Link>
        </li>
        <li>
          <Link to='/insights' className='nav-link'>
            insights
          </Link>
        </li>

        <li>
          <Popup
            modal
            trigger={
              <Link to='/contactus'>
                <button type='button' className='trigger-button'>
                  Contact Us
                </button>
              </Link>
            }
          >
            {close => (
              <div className='date-picker-container'>
                <div className='title-container'>
                  <p className='heading-client'>Hello Client!</p>
                  <button
                    type='button'
                    className='trigger-button'
                    onClick={() => close()}
                  >
                    <IoClose className='close-icon' />
                  </button>
                </div>
                <div className='logo-datepicker-container'>
                  <div className='bug-container'>
                    <h1>Hi Iam Gabbug!</h1>
                    <p>
                      Ready for a Quality software? <br /> Lets dig into deep
                      your thoughts
                    </p>
                    <img
                      className='bug-image'
                      src='https://res.cloudinary.com/ds1piowcn/image/upload/t_bug/v1721352654/bug-5232227_1280_qc4hxd.png'
                      alt='bug'
                    />
                  </div>
                  <div className='date-container'>
                    <DatePicker
                      className='date-picker-item'
                      onChange={setDate}
                      selectRange={true}
                      defaultValue={date}
                    />
                  </div>
                </div>
              </div>
            )}
          </Popup>
        </li>
      </ul>
    </nav>
  )
}

export default Header
