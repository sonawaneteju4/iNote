import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  let 
  return (
    <nav className='flex bg-black text-white'>
        <ul className='flex m-3 font-bold'>
            <li className='px-3'><Link to="/"><img alt="Logo" className='h-6' src='https://i.ibb.co/yyD6c8M/i-NOTE-3.png'></img></Link></li>
            <li className='px-3'><Link to="/">Home</Link></li>
            <li className='px-3'><Link to="/about">About</Link></li>
        </ul>
      
    </nav>
  )
}

export default Navbar
