import './App.css'
import NavBar from './routes/NavBar'
import Footer from './routes/Footer'
import { Outlet, useLocation } from 'react-router-dom'

export default function App() {  
  const location = useLocation()
  
  return (
    <>
      <NavBar/>
      <div className='main-contenct'>
        <Outlet />
      </div>
      {location.pathname !== '/login' && <Footer />}
    </>
  )
}