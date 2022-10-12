import React, {useEffect} from 'react'
import { Link, useLocation } from 'react-router-dom'
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';

const Navbar = () => {
  let location = useLocation();
  useEffect(() => {
   
  }, [location])
  
  return (
    <nav className='flex bg-black text-white sticky top-0'>
        <ul className='flex m-3'>
            <li className='px-3'><Link to="/"><img alt="Logo" className='h-6' src='https://i.ibb.co/yyD6c8M/i-NOTE-3.png'></img></Link></li>
            <li className={`px-3  ${location.pathname==='/'? "underline decoration-sky-500": ""}`}><Link to="/">Home</Link></li>
            <li className={`px-3  ${location.pathname==='/about'? "underline decoration-sky-500": ""}`}><Link to="/about">About</Link></li>
            <Button className='' variant="outlined" startIcon={<LoginIcon />}>
        Login
      </Button>
        </ul>
      
    </nav>
  )
}

export default Navbar
