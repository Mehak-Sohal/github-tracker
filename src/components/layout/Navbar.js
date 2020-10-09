import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
            <nav className='navbar bg-primary'>
                <h2><i className='fa fa-github'></i>Github-Tracker</h2>
                <ul>
                    <li><Link to='/'>HOME</Link></li>
                    <li><Link to='/about'>ABOUT</Link></li>
                </ul>       
            </nav>
    )
}

export default Navbar
