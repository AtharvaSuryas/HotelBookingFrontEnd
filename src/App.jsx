import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Hotel from './components/Hotel'
import Login from './components/Login'
import Experience from './components/Experience'
import About from './components/About'
import Register from './components/Register'
import ForgotPassword from './components/ResetPass'
import ResetPassword from './components/ForgotPassword'
import { Routes, Route, Router } from 'react-router-dom'

function App() {


  return (
    <>
      <Navbar/>
        <Routes>
          <Route path='/' element={<> <Hero /> </>} />
          <Route path='/hotel' element={<><Hotel /> </>} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/experience' element={<Experience/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/forgotpassword' element={<ForgotPassword/>}/>
          {/* <Route path='/resetpassword' element={<ResetPassword/>}/> */}
          
        </Routes>
      <Footer/>

    </>
  )
}

export default App
