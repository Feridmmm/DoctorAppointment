import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import MyAppointments from './pages/MyAppointments'
import MyProfile from './pages/MyProfile'
import About from './pages/About'
import Login from './pages/Login'
import Doctors from './pages/Doctors'
import Navbar from './components/Navbar'
import Appointment from './pages/Appointment'


const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar />
      

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:speciality' element={<Doctors />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/my-appointments' element={<MyAppointments />} />
        <Route path='/my-appointments/:docID' element={<Appointment />} />
        <Route path='/about' element={<About />} />
        <Route path='/my-profile' element={<MyProfile />} />

      </Routes>

    </div>
  )
}

export default App