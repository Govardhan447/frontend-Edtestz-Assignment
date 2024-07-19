import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import SignIn from './pages/SignIn'

import SignUp from './pages/SignUp'

import Booking from './pages/Booking'

import Home from './pages/Home'

import NotFound from './pages/NotFound'

import './App.css'

const App = () => (
  <div className='bg-container'>
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/contactus' element={<Booking />} />
        <Route component={NotFound} />
      </Routes>
    </Router>
  </div>
)

export default App
